"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Navbar() {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/Home");
    } else if (status === "unauthenticated") {
      router.push("/Greet");
    }
  }, [status, router]);

  return (
    <div className="bg-black backdrop-blur-lg bg-opacity-60 fixed top-0 left-0 w-full z-10">
      <div className="p-5 shadow-none max-w-[80%] mx-auto flex justify-between items-center">

        <Link
          className="font-extrabold text-6xl text-white"
          style={{
            fontFamily: 'cursive, fantasy',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            letterSpacing: '2px',
            transform: 'scale(1.1)',
          }}
          href={"/Home"}
        >
          Maaaaz!
        </Link>
        {status === "authenticated" ? (
          <div className="gap-4 divide-x divide-gray-400 flex">
            <button
              onClick={() => router.push("/Home")}
              className="text-white px-3 py-2"
            >
              Home
            </button>
            <button
              onClick={() => router.push("/Orders")}
              className="text-white px-3 py-2"
            >
              Orders
            </button>
            <button
              onClick={() => router.push("/Profile")}
              className="text-white px-3 py-2"
            >
              Profile
            </button>
            <button
              onClick={() => router.push("/Sales")}
              className="text-white px-3 py-2"
            >
              Sales
            </button>
            <button
              onClick={() => signOut()}
              className="text-white px-3 py-2"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="divide-x divide-gray-400">
            <button
              onClick={() => router.push("/Greet")}
              className="text-white px-3 py-2"
            >
              Home
            </button>
            <button
              onClick={() => router.push("/About")}
              className="text-white px-3 py-2"
            >
              About
            </button>
            <button
              onClick={() => signIn("google")}
              className="text-white px-3 py-2 "
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
