"use client";

import Image from "next/image";
import Link from "next/link";
import { useDarkMode } from "@/context/themeContext";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode(); 

  const navLinks = [
    { href: "/about-us", label: "關於我們" },
    { href: "/contact-us", label: "聯繫我們" },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-800 pt-4 pr-8 pb-4 pl-8">
      <nav className="w-full">
        <div className="w-full justify-between md:flex-row mt-auto mr-auto mb-auto ml-auto flex max-w-screen-2xl">
          <div className="bg-gray-100 dark:bg-gray-800 items-center justify-center md:order-none flex-row flex">
            <Link href="/">
              <Image
                alt="DestinySoul Logo Banner"
                src={
                  isDarkMode
                    ? "/assets/transparent/ds-banner-dark.png"
                    : "/assets/transparent/ds-banner-light.png"
                }
                width={192}
                height={48}
              />
            </Link>
          </div>

          <div className="justify-between items-center mt-2 mb-2 md:m-0 md:flex flex flex-row hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-900 dark:text-gray-50 text-center mr-6 font-medium text-base border-2 border-transparent hover:border-gray-500 rounded flex items-center justify-center px-4 py-2 transition-all"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="text-gray-900 dark:text-gray-50 border-2 border-transparent hover:border-gray-800 dark:hover:border-white rounded px-4 py-2 transition-all"
            >
              {isDarkMode ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
            }
            </button>
          </div>

          <div className="md:hidden items-center flex ml-4">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12 text-gray-900 dark:text-gray-50 border border-transparent hover:border-gray-500 rounded flex items-center justify-center px-2 py-2 transition-all"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden mobile-menu">
            <div
              className={`flex flex-col transform transition-transform duration-300 ${
                menuOpen ? "translate-y-0" : "-translate-y-full"
              }`}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-900 dark:text-gray-50 text-center mb-2 font-medium text-base border border-transparent hover:border-gray-500 rounded flex items-center justify-center px-4 py-2 transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
