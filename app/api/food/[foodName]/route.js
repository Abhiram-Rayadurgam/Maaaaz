import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  // Await the params before using them
  const { foodName } = await params; // Await params

  await connectMongoDB();

  try {
    const userWithSale = await User.findOne({ "sales.foodName": foodName });

    if (!userWithSale) {
      return NextResponse.json({ message: "Food item not found" }, { status: 404 });
    }

    const foodItem = userWithSale.sales.find((sale) => sale.foodName === foodName);

    if (!foodItem) {
      return NextResponse.json({ message: "Food item not found" }, { status: 404 });
    }

    return NextResponse.json(foodItem, { status: 200 });
  } catch (error) {
    console.error("Error fetching food item:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
