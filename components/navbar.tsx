"use client"

import { HiMenuAlt3 } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./button/languageSwitcher";

export default function Navbar() {
  const t = useTranslations("Navbar");

  const navItem = [{ label: t("contact-us"), url: "#contact-us" }];

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-900 bg-opacity-90 shadow-lg rounded-full z-50 px-6 py-3 w-[90%] max-w-4xl">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="btn btn-ghost flex-shrink-0"
          style={{ width: "192px", height: "64px" }}
        >
          <Image
            src="/assets/transparent/ds-banner-dark.png"
            alt="destinysoul logo banner"
            width={192}
            height={64}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          <ul className="menu menu-horizontal rounded-box px-5">
            {navItem.map((item) => (
              <li key={item.url}>
                <a className="text-lg font-medium" href={item.url}>
                  {item.label}
                </a>
              </li>
            ))}
            <LanguageSwitcher />
          </ul>
        </div>

        {/* Mobile dropdown menu */}
        <div className="lg:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <HiMenuAlt3 className="w-6 h-6 text-white" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-4 mt-3 shadow bg-gray-900 text-white rounded-box w-52"
          >
            {navItem.map((item) => (
              <li key={item.url}>
                <a className="text-lg font-medium" href={item.url}>
                  {item.label}
                </a>
              </li>
            ))}
            <LanguageSwitcher />
          </ul>
        </div>
      </div>
    </div>
  );
}
