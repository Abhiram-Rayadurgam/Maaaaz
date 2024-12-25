
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function PATCH(req) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { phone, address } = await req.json();
  if (!phone && !address) {
    return NextResponse.json({ message: "No data provided to update" }, { status: 400 });
  }

  try {
    await connectMongoDB();
    const updatedUser = await User.findOneAndUpdate(
      { email: session.user.email },
      { phone: phone || undefined, address: address || undefined },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to update user data" }, { status: 500 });
  }
}
