import { connectMongoDB } from "@/lib/mongodb";
import nodemailer from "nodemailer";
import User from "@/models/user";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = (to, subject, text) => {
  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  });
};

export const POST = async (req) => {
  const session = await getServerSession(authOptions);
  const { foodName, foodPrice } = await req.json();

  try {
    await connectMongoDB();

    const user = await User.findOne({ "sales.foodName": foodName });
    const foodItemIndex = user.sales.findIndex((item) => item.foodName === foodName);
    const foodItem = user.sales[foodItemIndex];
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const curruser = await User.findOne({ "email": session?.user?.email });

    if (!curruser) {
      return NextResponse.json({ message: "Current user not found" }, { status: 404 });
    }

    curruser.orders.push({ foodName, price: foodPrice });

    await curruser.save();

    user.sales[foodItemIndex].maxQuantity -= 1;
    await user.save();

    const subject = `New Order for ${foodName}`;
    const text = `You have received a new order for ${foodName} costing ₹${foodPrice.toFixed(2)} from ${session?.user?.email}.`;

    await sendEmail(user.email, subject, text);

    return NextResponse.json({ message: "Order placed successfully and email sent" });
  } catch (error) {
    console.error("Error placing order:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
};
