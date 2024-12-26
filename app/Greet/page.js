"use client";
import { signIn } from "next-auth/react";

const Landing = () => {
  return (
    <div>
      <div style={{ backgroundImage: 'url("/landingfood.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="w-[70vw] mt-10 p-16 inset-0 mx-auto h-[70vh] border-white">
        <div className="max-w-md">
          <p className="text-white font-extrabold text-4xl">Want to sell your homemade food? Login to begin your delicious journey!</p>

          <button
            onClick={() => signIn("google")}
            className="text-black block text-2xl font-bold hover:bg-gray-200 bg-white rounded-md bottom-5 mt-[20%] p-4"
          >
            Login Now!
          </button>
        </div>
      </div>
    </div>
  )
}

export default Landing;
