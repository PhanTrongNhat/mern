import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    cart: {
      total: Number,
      count: Number,
      products: Array,
    },
  },
  { timestamps: true }
);

export const userModel = mongoose.model("user", schema);
