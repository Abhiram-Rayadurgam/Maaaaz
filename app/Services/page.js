


import React from "react";

const Services = () => {
  return (
    <div className="bg-white text-black py-12 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-emerald-950 mb-4">
          Our Services
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto">

        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">

        <div className="bg-black text-white p-6 rounded-lg shadow-lg w-72 hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold border-b border-yellow-500 pb-2 mb-4">
            Monetize Home Food
          </h2>
          <p className="text-gray-300">
            Turn your passion for cooking into income. Sell homemade dishes to
            local customers craving fresh, home-cooked meals.
          </p>
        </div>

        <div className="bg-black text-white p-6 rounded-lg shadow-lg w-72 hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold border-b border-yellow-500 pb-2 mb-4">
            On-Site Delivery
          </h2>
          <p className="text-gray-300">
            Fast, reliable delivery! Enjoy fresh food made within the homes of your neighbours and aspiring chefs who love to cook!
          </p>
        </div>

        <div className="bg-black text-white p-6 rounded-lg shadow-lg w-72 hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold border-b border-yellow-500 pb-2 mb-4">
            Use at Your Own Risk
          </h2>
          <p className="text-gray-300">
            While we connect buyers and sellers, transactions are at your own
            discretion. Mutual trust ensures quality and safety.
          </p>
        </div>

        <div className="bg-black text-white p-6 rounded-lg shadow-lg w-72 hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold border-b border-yellow-500 pb-2 mb-4">
            Buy or Sell Food
          </h2>
          <p className="text-gray-300">
            Home chefs can share their culinary skills, while food lovers
            effortlessly find delicious homemade meals nearby.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
