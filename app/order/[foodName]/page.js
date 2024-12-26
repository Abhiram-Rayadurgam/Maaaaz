"use client";

import { use, useState, useEffect } from "react";

const FoodDetails = ({ params }) => {
  const foodName = use(params).foodName;
  const [foodDetails, setFoodDetails] = useState(null);

  // Function to return a default image based on food name match
  const getFoodImage = (foodName) => {
    const foodImages = {
      dosa: "/dosa.jpg",
      idli: "/idli.jpg",
      vada: "/vada.jpg",
      noodles: "/noodles.jpg",
      pizza: "/pizza.jpg",
      burger: "/burger.jpg",
      biryani: "/biryani.jpg",
      kabab: "/kabab.jpg",
    };

    const foodMatch = Object.keys(foodImages).find(food =>
      new RegExp(food, 'i').test(foodName)
    );

    return foodMatch ? foodImages[foodMatch] : ''; // Return image path or empty if no match
  };

  useEffect(() => {
    const fetchFoodDetails = async () => {
      try {
        const response = await fetch(`/api/food/${encodeURIComponent(foodName)}`);
        const data = await response.json();
        setFoodDetails(data);
      } catch (error) {
        console.error("Failed to fetch food details:", error);
      }
    };

    fetchFoodDetails();
  }, [foodName]);

  const handleConfirmOrder = async () => {
    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          foodName: foodDetails.foodName,
          foodPrice: foodDetails.price,
          userEmail: foodDetails.user.email, // Assuming this is part of foodDetails
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Order placed successfully and email sent!");
      } else {
        alert(data.message || "Failed to place order");
      }
    } catch (error) {
      console.error("Error confirming order:", error);
      alert("An error occurred while placing the order");
    }
  };

  if (!foodDetails) {
    return <p>Loading...</p>;
  }

  const foodImage = getFoodImage(foodDetails.foodName); // Get the food image based on the name

  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="flex flex-col md:flex-row items-center bg-white p-8 w-fit rounded-md border-8 border-emerald-950">

        {foodImage && (
          <img
            src={foodImage}
            alt={foodDetails.foodName}
            className="w-1/3 max-w-md rounded-md mb-4 md:mr-8"
          />
        )}

        <div className="flex flex-col items-start text-black">
          <h1 className="text-3xl font-bold mb-4">{foodDetails.foodName}</h1>

          <hr className="w-full border-t-2 border-black mb-4" />

          <p className="text-lg">{foodDetails.description}</p>
          <p className="text-xl font-semibold mt-4">Price: ₹{foodDetails.price.toFixed(2)}</p>
          <p>Available: {foodDetails.maxQuantity}</p>

          <div className="mt-6">
            <h3 className="font-bold">Seller Information:</h3>
            <p>Name: {foodDetails.user.name}</p>
            <p>Phone: {foodDetails.user.phone}</p>
            <p>Address: {foodDetails.user.address}</p>
          </div>

          <button
            className="bg-black text-white py-2 px-4 rounded-md mt-6 hover:bg-gray-900"
            onClick={handleConfirmOrder}
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
