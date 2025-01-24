"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDark);

    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);
  
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

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
                className="text-gray-900 dark:text-gray-50 text-center mr-6 font-medium text-base border border-transparent hover:border-gray-500 rounded flex items-center justify-center px-4 py-2 transition-all"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="text-gray-900 dark:text-gray-50 border border-transparent hover:border-gray-500 rounded px-4 py-2 transition-all"
            >
              {isDarkMode ? "亮色模式" : "深色模式"}
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
