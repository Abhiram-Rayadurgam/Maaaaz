

import mongoose, { Schema } from "mongoose";

const saleSchema = new Schema(
  {
    foodItem: {
      type: String,
      required: true,
    },
    foodName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    maxQuantity: {
      type: Number,
      required: true,
    },
    foodImg: {
      type: String,
    },
    active: {
      type: Boolean,
      default: true,
    },
    validTill: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    sales: [saleSchema],
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
