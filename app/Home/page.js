"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [activeSales, setActiveSales] = useState([]);
  const { data: session } = useSession();
  const router = useRouter();

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const handleOrderNow = (foodName) => {
    router.push(`/order/${encodeURIComponent(foodName)}`);
  };

  useEffect(() => {
    const fetchActiveSales = async () => {
      try {
        const response = await fetch('/api/acsales');
        const data = await response.json();
        setActiveSales(data);
      } catch (error) {
        console.error('Failed to fetch active sales:', error);
      }
    };

    fetchActiveSales();
  }, []);

  return (
    <div className="flex flex-col max-w-[80vw] mx-auto">
      <div
        style={{
          backgroundImage: 'url("/food2.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="w-[80vw] mt-10 p-16 inset-0 mx-auto h-[60vh] border-white"
      >
        <p className="text-white font-extrabold text-4xl">
          Welcome, {session?.user?.name}!
        </p>
        <form>
          <input
            value={inputValue}
            onChange={handleInputChange}
            placeholder="What would you like to eat today?"
            className="block placeholder-shown:min-w-[30ch] p-3 text-2xl rounded-md mt-32 m-auto"
            type="text"
          />
        </form>
      </div>
      <h1 className="mx-auto my-10 text-black text-3xl font-bold">Meals Near You</h1>
      <div className="flex mx-auto overflow-x-auto space-x-4 py-4">
        {activeSales.length > 0 ? (
          activeSales.map((sale, index) => (
            <div
              key={index}
              className="bg-black text-white p-6 rounded-md w-60 shadow-md flex-shrink-0"
            >
              <h2 className="text-xl font-bold">{sale.foodName}</h2>
              <p>{sale.description}</p>
              <p className="text-lg font-semibold">${sale.price.toFixed(2)}</p>
              <p>Available: {sale.maxQuantity}</p>
              <img
                src={sale.foodImg}
                alt={sale.foodName}
                className="w-full h-auto rounded-md mt-2"
              />
              <button
                onClick={() => handleOrderNow(sale.foodName)}
                className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600"
              >
                Order Now
              </button>
            </div>
          ))
        ) : (
          <p>No active sales available.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
