import { connectMongoDB } from "@/lib/mongodb";
import User from '@/models/user';
import { NextResponse } from 'next/server';

export async function GET(req) {
  await connectMongoDB();

  try {
    const users = await User.find({ 'sales.active': true }, { sales: 1 });
    const activeSales = users.flatMap(user =>
      user.sales.filter(sale => sale.active)
    );
    return NextResponse.json(activeSales);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch sales' }, { status: 500 });
  }
}
