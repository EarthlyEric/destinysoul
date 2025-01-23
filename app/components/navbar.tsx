"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-800 pt-4 pr-8 pb-4 pl-8">
      <nav className="w-full">
        <div className="w-full justify-between md:flex-row mt-auto mr-auto mb-auto ml-auto flex max-w-screen-2xl">
          <div className="bg-gray-800 items-center justify-center md:order-none flex-row flex">
            <Image
              alt="Destiny Soul Banner"
              src="https://raw.githubusercontent.com/EarthlyEric/destinysoul-assets/refs/heads/master/transparent/ds-banner-dark.png"
              width={192}
              height={48}
            />
          </div>
          <div className="justify-between items-center mt-2 mb-2 md:m-0 md:flex flex flex-row hidden">
            <a 
                href="/about-us" 
                className="text-gray-50 text-center mr-6 font-medium text-base border border-transparent hover:border-white hover:py-2 hover:px-2 rounded transition-all">
                關於我們
            </a>
            <a 
                href="/Vo9YjWQiI19G6s9HiVMa#" 
                className="text-gray-50 text-center mr-6 font-medium text-base">
              Contact Us
            </a>
          </div>
          <div className="md:hidden items-center flex">
            <button className="outline-none mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)}>
              <svg
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-50 hover:text-gray-900"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden mobile-menu">
            <div className="flex flex-col">
              <a href="/Vo9YjWQiI19G6s9HiVMa#" className="text-gray-50 text-center mt-2 font-medium text-base">
                Product
              </a>
              <a href="/Vo9YjWQiI19G6s9HiVMa#" className="text-center mt-2 font-medium text-base">
                Features
              </a>
              <a href="/Vo9YjWQiI19G6s9HiVMa#" className="text-white text-center mt-2 font-medium text-base">
              Pricing
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
