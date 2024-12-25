
import User from "@/models/user";
import { authOptions } from "../auth/[...nextauth]/route";
import { connectMongoDB } from "@/lib/mongodb";
import { getServerSession } from "next-auth";

export async function GET(req) {
  await connectMongoDB();

  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const user = await User.findOne({ email: session.user.email });
  if (!user) {
    return new Response(JSON.stringify({ error: "User not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(user.sales), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req) {
  await connectMongoDB();

  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { foodItem, foodName, description, price, maxQuantity, foodImg, validTill } =
    await req.json();

  const user = await User.findOne({ email: session.user.email });
  if (!user) {
    return new Response(JSON.stringify({ error: "User not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  user.sales.push({
    foodItem,
    foodName,
    description,
    price,
    maxQuantity,
    foodImg,
    validTill,
    active: true,
  });

  await user.save();

  return new Response(JSON.stringify({ message: "Sale added successfully" }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
