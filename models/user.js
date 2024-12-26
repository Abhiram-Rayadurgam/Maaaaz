import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    foodName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const saleSchema = new Schema(
  {
    foodItem: {
      type: String
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
    orders: [orderSchema], // Add orders field here
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
