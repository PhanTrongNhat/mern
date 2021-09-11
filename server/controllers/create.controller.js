import { userModel } from "../models/user.model.js";
//import { orders } from "../models/order.model.js";
import md5 from "md5";
import dotenv from "dotenv";
dotenv.config();

export const postCreate = async (req, res) => {
  try {
    let data = req.body;
    const checkExist = await userModel.find({"username":data.username});
    if (checkExist.length) {
      res.status(300).send("user exist!");
    } else if (data.username && data.password) {
      data.password = md5(data.password);
      const post = new userModel(data);
      await post.save();
      res.status(200).send(data);
    } else {
      res.status(500).send("no data");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("err");
  }
};
