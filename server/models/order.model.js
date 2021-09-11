import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    cartItems: [
      {
        _id:{  type: mongoose.ObjectId, required: true},
        name: { type: String, required: true },
        count: { type: Number, required: true },
        image: { type: String, required: true },
        cost: { type: Number, required: true },
      },
    ],
    shippingAddress: {
      fullname: {
        type: String,

        default: "",
      },
      address: {
        type: String,

        default: "",
      },
      city: {
        type: String,

        default: "",
      },
      country: {
        type: String,
        default: "",
      },
      postalCode: {
        type: Number,

        default: 0,
      },
    },
    paymentMethod: {
      require: true,
      type: String,
      default: "PayPal",
    },
    isPaid: { type: Boolean, default: false },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
  },
  { timestamps: true }
);

export const orders = mongoose.model("orders", schema);
