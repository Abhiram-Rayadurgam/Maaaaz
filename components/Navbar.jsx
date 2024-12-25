

"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Navbar() {
  const router = useRouter();
  const { status } = useSession();

  // Redirect authenticated users to /Home automatically, and unauthenticated users to /Greet
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/Home");
    } else if (status === "unauthenticated") {
      router.push("/Greet");
    }
  }, [status, router]);

  return (
    <div className="bg-black">
      <div className="p-5 shadow-none max-w-[80%] mx-auto flex bg-black justify-between items-center">
        <Link className="font-extrabold text-6xl text-white" href={"/"}>
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
              onClick={() => signOut()}
              className="text-white px-3 py-2 "
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
              onClick={() => signOut()}
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
              onClick={() => router.push("/Services")}
              className="text-white px-3 py-2 "
            >
              Services
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
