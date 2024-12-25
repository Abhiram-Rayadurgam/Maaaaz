

"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";


const Home = () => {

  const [inputValue, setInputValue] = useState("");



  const { data: session } = useSession();

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toLowerCase());  // Convert to lowercase for case-insensitive comparison
  };

  // Define meal names for matching
  const mealNames = {
    chicken: "Grilled Chicken",
    paneer: "Paneer Tikka",
    salad: "Greek Salad",
  };

  // Function to filter meals based on input
  const filteredMeals = () => {
    if (inputValue === "") {
      return Object.keys(mealNames); // Show all meals if input is empty
    }

    // Filter meals based on the input value (case-insensitive)
    return Object.keys(mealNames).filter((meal) =>
      meal.toLowerCase().includes(inputValue) || mealNames[meal].toLowerCase().includes(inputValue)
    );
  };

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
      <h1 className="mx-auto my-10 text-3xl font-bold">Meals Near You</h1>

    </div>
  );
};

export default Home;
