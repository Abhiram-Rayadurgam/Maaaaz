
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function SalesPage() {
  const [sales, setSales] = useState([]);
  const [activeSales, setActiveSales] = useState([]);
  const [oldSales, setOldSales] = useState([]);

  useEffect(() => {
    async function fetchSales() {
      const res = await fetch("/api/sales");
      const data = await res.json();

      const active = data.filter(
        (sale) => new Date(sale.validTill) > new Date() && sale.active
      );
      const old = data.filter(
        (sale) => new Date(sale.validTill) <= new Date() || !sale.active
      );

      setSales(data);
      setActiveSales(active);
      setOldSales(old);
    }

    fetchSales();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Sales
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Active Sales
          </h2>
          {activeSales.length > 0 ? (
            <ul className="space-y-6">
              {activeSales.map((sale) => (
                <li
                  key={sale._id}
                  className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-bold text-blue-600 mb-2">
                    {sale.foodName}
                  </h3>
                  <p className="text-gray-700 mb-2">{sale.description}</p>
                  <p className="text-gray-600">
                    <strong>Price:</strong> ${sale.price}
                  </p>
                  <p className="text-gray-600">
                    <strong>Valid Till:</strong>{" "}
                    {new Date(sale.validTill).toLocaleDateString()}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No active sales.</p>
          )}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Old Sales</h2>
          {oldSales.length > 0 ? (
            <ul className="space-y-6">
              {oldSales.map((sale) => (
                <li
                  key={sale._id}
                  className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-bold text-gray-600 mb-2">
                    {sale.foodName}
                  </h3>
                  <p className="text-gray-700 mb-2">{sale.description}</p>
                  <p className="text-gray-600">
                    <strong>Price:</strong> ${sale.price}
                  </p>
                  <p className="text-gray-600">
                    <strong>Valid Till:</strong>{" "}
                    {new Date(sale.validTill).toLocaleDateString()}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No old sales.</p>
          )}
        </section>

        <div className="flex justify-center">
          <Link href="/Newsale">
            <button className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Add New Sale
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
