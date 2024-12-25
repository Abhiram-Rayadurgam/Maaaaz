"use client";

import { use, useState, useEffect } from "react";

const FoodDetails = ({ params }) => {
  const foodName = use(params).foodName;
  const [foodDetails, setFoodDetails] = useState(null);

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

  if (!foodDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="flex flex-col items-center bg-emerald-950 p-8 max-w-md w-full rounded-md">
        <h1 className="text-3xl font-bold mb-4 text-white">{foodDetails.foodName}</h1>

        <hr className="w-full border-t-2 border-white mb-4" />

        <img
          src={foodDetails.foodImg}
          alt={foodDetails.foodName}
          className="w-full max-w-md rounded-md mb-4"
        />
        <p className="text-lg text-white">{foodDetails.description}</p>
        <p className="text-xl font-semibold mt-4 text-white">Price: ${foodDetails.price.toFixed(2)}</p>
        <p className="text-white">Available: {foodDetails.maxQuantity}</p>
        <button className="bg-yellow-500 text-black py-2 px-4 rounded-md mt-6 hover:bg-yellow-600">
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default FoodDetails;
