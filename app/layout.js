import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Maaaaz",
  description: "A homemade food monetisation app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex bg-white flex-col min-h-screen`}>
        <NextAuthProvider>
          <Navbar />
          <main className="flex-grow bg-white w-[100vw] mx-auto">{children}</main>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
