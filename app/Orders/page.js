"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const Orders = () => {
  const { data: session } = useSession();
  const [orders, setOrders] = useState([]);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (!session) return;

    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/orders");
        const data = await response.json();
        console.log(data);


        setOrders(data.orders);
        setAddress(data.address);
        setPhone(data.phone);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [session]);

  if (!session) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-lg text-gray-700">Please log in to view your orders.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-md mt-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Your Orders</h1>

      {orders.length === 0 ? (
        <p className="text-lg text-center text-white">You have no orders yet.</p>
      ) : (
        <ul className="space-y-6">
          {orders.map((order, index) => (
            <li key={index} className="p-4 bg-white border border-emerald-950 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-black">{order.foodName}</h2>
              <p className="text-lg text-black mt-2">Price: <span className="font-bold text-black">₹{order.price}</span></p>

              <p className="text-md text-black">Address: {address}</p>
              <p className="text-md text-black">Phone: {phone}</p>
              <p className="text-sm text-black mt-1">
                Ordered at: {new Date(order.createdAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;
