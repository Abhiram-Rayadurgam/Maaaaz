import { connectMongoDB } from "@/lib/mongodb";
import User from '@/models/user';
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from 'next/server';

export async function GET(req) {
  await connectMongoDB();

  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const users = await User.find({ 'sales.active': true }, { sales: 1, email: 1 });

    const activeSales = users
      .filter(user => user.email !== session.user.email)
      .flatMap(user =>
        user.sales.filter(sale => sale.active) // Filter only active sales here
      );

    return NextResponse.json(activeSales);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch sales' }, { status: 500 });
  }
}
