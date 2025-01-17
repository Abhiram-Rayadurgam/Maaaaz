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

  const filterSales = () => {
    if (!inputValue) {
      return activeSales;
    }
    const regex = new RegExp(inputValue, 'i');
    return activeSales.filter(sale => regex.test(sale.foodName) || regex.test(sale.description));
  };


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

    return foodMatch ? foodImages[foodMatch] : '';
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
    <div className="flex flex-col max-w-[100vw] mx-auto">
      <div
        style={{
          backgroundImage: 'url("/mfood.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: '50% 75%',
        }}
        className="w-[100vw] p-16 inset-0 mx-auto h-[75vh] border-white"
      >
        <p className="text-white block mx-auto w-fit mt-[20vh] font-extrabold text-5xl">
          Welcome, {session?.user?.name}!
        </p>
        <form>
          <input
            value={inputValue}
            onChange={handleInputChange}
            placeholder="What would you like to eat today?"
            className="block placeholder-shown:min-w-[30ch] placeholder-gray-600 focus:outline-none text-gray-800 p-3 text-2xl rounded-md mt-32 m-auto"
            type="text"
          />
        </form>
      </div>
      <h1 className="mx-auto my-10 text-black text-3xl font-bold">Meals available near you</h1>
      <div className="flex flex-wrap mx-auto space-x-4 py-4 justify-center">
        {filterSales().length > 0 ? (
          filterSales().map((sale, index) => {
            const foodImage = getFoodImage(sale.foodName);
            return (
              <div
                key={index}
                className="bg-white text-black group p-6 rounded-md w-fit mb-4 flex-shrink-0 border border-gray-300 shadow-lg"
              >
                <div className="overflow-hidden rounded-md">
                  {foodImage && (
                    <img
                      src={foodImage}
                      alt={sale.foodName}
                      className="w-full h-auto mb-4 transition-transform duration-300  group-hover:scale-110 min-w-[400px] max-h-[200px] rounded-md mt-2 object-cover"
                    />
                  )}
                </div>

                <h2 className="text-xl font-bold">{sale.foodName}</h2>
                <p>{sale.description}</p>
                <p className="text-lg font-semibold">₹{sale.price.toFixed(2)}</p>
                <p>Available: {sale.maxQuantity}</p>


                <button
                  onClick={() => handleOrderNow(sale.foodName)}
                  className="bg-black text-white py-2 px-4 rounded-md mt-4 hover:bg-gray-900"
                >
                  Order Now
                </button>
              </div>
            );
          })
        ) : (
          <p>No active sales near you :(</p>
        )}
      </div>
    </div>
  );
};

export default Home;
