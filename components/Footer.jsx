

import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-emerald-950 mt-10 text-white py-6">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-6 sm:space-y-0">

          <div className="flex flex-col sm:items-start items-center">
            <h1 className="text-3xl font-semibold">Maaaaz!</h1>

          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/" className="hover:text-gray-400">Home</Link>
            <Link href="/about" className="hover:text-gray-400">About</Link>
            <Link href="/services" className="hover:text-gray-400">Services</Link>
            <Link href="/contact" className="hover:text-gray-400">Contact</Link>
          </div>

          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Maaaaz. All rights reserved. <br />

          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
