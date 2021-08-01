import { userModel } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import md5 from "md5";
import dotenv from "dotenv";
dotenv.config();
const   refreshTokens = [];
export const postInform = async (req, res) => {
  try {
    const data = req.body;
    if (data) {
      // tim kiem du lieu de xac minh tai khoan
      const auth = await userModel.findOne({ username: data.username }).exec();
      if (auth.password === md5(data.password)) {
       
        console.log("login success");
  
   
   
        const accessToken = jwt.sign(data, process.env.ACCESS_SECRET_KEY, {
          expiresIn: "100s",
        });
        const refreshToken = jwt.sign(data, process.env.REFRESH_SECRET_KEY);
        refreshTokens.push(refreshToken);
        res.status(200).json({ accessToken, refreshTokens });
    }
    } else {
      res.status(500);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
export const postCreate = async (req, res) => {
  try {
    let data = req.body;
    if (data.username && data.password) {
      data.password = md5(data.password);
      data.cart = {
        total: 0,
        count: 0,
        products: [],
      };
      const post = new userModel(data);
      await post.save();
      res.status(200).send(data);
    }
    res.status(500).send("no data");
  } catch (err) {
    console.log(err);
    res.status(500).send("err");
  }
};
