import { userModel } from "../models/user.model.js";
//import { carts } from "../models/order.model.js";
import jwt from "jsonwebtoken";
import md5 from "md5";
import dotenv from "dotenv";
dotenv.config();
const refreshTokens = [];
export const postInform = async (req, res) => {
  try {
    const data = req.body;
    if (data) {
      // tim kiem du lieu de xac minh tai khoan
      const user = await userModel.findOne({ username: data.username }).exec();

      if (user.password === md5(data.password)) {
        console.log("login success");

        const accessToken = jwt.sign(data, process.env.ACCESS_SECRET_KEY, {
          expiresIn: "100s",
        });
        const refreshToken = jwt.sign(data, process.env.REFRESH_SECRET_KEY);
        refreshTokens.push(refreshToken);
        res.status(200).send({
          _id: user._id,
          username: user.username,

          token: accessToken,
        });
      }
    } else {
      res.status(500).send("login error!");
    }
  } catch (error) {
    res.status(500).send(error, "login error!");
  }
};
