"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

const Greet = () => {
  return (
    <div>
      {/* Background Image */}
      <div
        style={{
          backgroundImage: 'url("/foodd.jpg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="w-[100vw] p-16 inset-0 mx-auto h-[80vh] border-white"
      >
        <div className="max-w-md my-auto ml-32 mt-[15rem]">
          <p className="text-white font-extrabold text-4xl">
            Want to sell your homemade food? Login to begin your delicious journey!
          </p>

          <button
            onClick={() => signIn("google")}
            className="text-black block text-2xl font-bold hover:bg-gray-200 bg-white rounded-md bottom-5 mt-[20%] p-4"
          >
            Login Now!
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="mx-auto w-fit flex flex-col gap-20 text-black py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold border-b border-emerald-950 w-fit mx-auto pb-10 text-emerald-950 my-4">Our Services</h1>
        </div>
        <div className="w-fit flex flex-col gap-10">
          {/* Service 1 - Monetize Home Food */}
          <div className="flex justify-center gap-4 mb-12">
            <div className="flex flex-row gap-20"> {/* Changed items-center to items-start */}
              <div className="max-w-full">
                <Image
                  src="/cook.svg"
                  alt="Monetize Home Food"
                  className="w-full h-auto rounded-lg"
                  style={{ maxWidth: '200px' }}
                  width={100}
                  height={100}
                />
              </div>
              <div className="max-w-[30vw]">
                <h2 className="text-2xl font-semibold border-b border-emerald-500 pb-1 mb-2"> {/* Reduced padding and margin */}
                  Monetize Home Food
                </h2>
                <p className="text-gray-700 mb-0"> {/* Removed margin-bottom */}
                  Turn your passion for cooking into income. Sell homemade dishes to local customers craving fresh, home-cooked meals.
                </p>
              </div>
            </div>
          </div>

          {/* Service 2 - On-Site Delivery */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex flex-row gap-20"> {/* Changed items-center to items-start */}
              <div className="">
                <Image
                  src="/delivery.svg"
                  alt="On-Site Delivery"
                  className="w-full h-auto rounded-lg"
                  style={{ maxWidth: '200px' }}
                  width={100}
                  height={100}
                />
              </div>
              <div className="max-w-[30vw]">
                <h2 className="text-2xl font-semibold border-b border-emerald-500 pb-1 mb-2"> {/* Reduced padding and margin */}
                  On-Site Delivery
                </h2>
                <p className="text-gray-700 mb-0"> {/* Removed margin-bottom */}
                  Fast, reliable delivery! Enjoy fresh food made within the homes of your neighbours and aspiring chefs who love to cook!
                </p>
              </div>
            </div>
          </div>

          {/* Service 3 - Use at Your Own Risk */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex flex-row gap-20"> {/* Changed items-center to items-start */}
              <div className="">
                <Image
                  src="/trust.svg"
                  alt="Use at Your Own Risk"
                  className="w-full h-auto rounded-lg shadow-lg"
                  style={{ maxWidth: '200px' }}
                  width={100}
                  height={100}
                />
              </div>
              <div className="max-w-[30vw]">
                <h2 className="text-2xl font-semibold border-b border-emerald-500 pb-1 mb-2"> {/* Reduced padding and margin */}
                  Use at Your Own Risk
                </h2>
                <p className="text-gray-700 mb-0"> {/* Removed margin-bottom */}
                  While we connect buyers and sellers, transactions are at your own discretion. Mutual trust ensures quality and safety.
                </p>
              </div>
            </div>
          </div>

          {/* Service 4 - Buy or Sell Food */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex flex-row gap-20"> {/* Changed items-center to items-start */}
              <div className="">
                <Image
                  src="/sale.svg"
                  alt="Buy or Sell Food"
                  className="w-full h-auto rounded-lg shadow-lg"
                  style={{ maxWidth: '200px' }}
                  width={100}
                  height={100}
                />
              </div>
              <div className="max-w-[30vw]">
                <h2 className="text-2xl font-semibold border-b border-emerald-500 pb-1 mb-2"> {/* Reduced padding and margin */}
                  Buy or Sell Food
                </h2>
                <p className="text-gray-700 mb-0"> {/* Removed margin-bottom */}
                  Home chefs can share their culinary skills, while food lovers effortlessly find delicious homemade meals nearby.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greet;
