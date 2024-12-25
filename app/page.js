

"use client";

import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Greet = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/Home");
    }
  }, [status, router]);


  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>

      <div
        style={{
          backgroundImage: 'url("/landingfood.png")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="w-[80vw] mt-10 p-16 mx-auto h-[80vh] border-white"
      >
        <div className="max-w-md">
          <p className="text-white font-extrabold text-5xl mb-6">
            Want to sell your homemade food? Login to begin your delicious journey!
          </p>

          <button
            onClick={() => signIn("google")}
            className="text-black text-3xl font-bold hover:bg-gray-200 bg-white rounded-md p-6 w-full mt-10"
          >
            Login Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Greet;
