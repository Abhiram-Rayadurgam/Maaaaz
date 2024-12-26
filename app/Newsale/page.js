"use client";

import { useState } from "react";

export default function NewSalePage() {
  const [formData, setFormData] = useState({
    foodItem: "",
    foodName: "",
    description: "",
    price: "",
    maxQuantity: "",
    validTill: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/sales", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Sale added successfully!");
      window.location.href = "/sales";
    } else {
      alert("Failed to add sale.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-fit p-20 bg-emerald-950 rounded-lg shadow-md">

        <div className="w-full max-w-md space-y-4">
          <h1 className="text-2xl font-bold text-white mb-4 text-center">
            Add New Sale
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="foodItem"
              placeholder="Food Item type (meal/snack/beverage)"
              value={formData.foodItem}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="foodName"
              placeholder="Food Name"
              value={formData.foodName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="number"
              name="maxQuantity"
              placeholder="Max Quantity"
              value={formData.maxQuantity}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <h1>Valid Till: (atleast a day later) </h1>
            <input
              type="date"
              name="validTill"
              value={formData.validTill}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Add Sale
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="ml-8 flex-shrink-0">
          <img
            src="/food3.jpg"
            alt="Food Item"
            className="w-96 h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
