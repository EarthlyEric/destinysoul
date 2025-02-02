"use client"

import { HiMenuAlt3, HiX } from "react-icons/hi";
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./button/languageSwitcher";

export default function Navbar() {
  const t = useTranslations('Navbar');

  const navItem = [
    { label: t('contact-us'), url: '#contact-us' }
  ];

  return (
    <div className="navbar bg-gray-900 sticky top-0 z-50">
      <div className="drawer drawer-end">
        <input id="side-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex items-center justify-between w-full px-5">
          {/* Logo */}
          <div className="navbar-start">
            <Link href="/" className="btn btn-ghost" style={{ width: '192px', height: '64px' }}>
              <Image src="/assets/transparent/ds-banner-dark.png" alt="destinysoul logo banner" width={192} height={64} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal rounded-box px-5">
              {navItem.map(item => (
                <li key={item.url}>
                  <a className="text-lg font-medium" href={item.url}>{item.label}</a>
                </li>
              ))}
              <LanguageSwitcher />
            </ul>
          </div>
          {/* Mobile Toggle Button */}
          <div className="lg:hidden right-0">
            <label htmlFor="side-drawer" className="btn btn-ghost drawer-button">
              <HiMenuAlt3 className="w-6 h-6 text-white" />
            </label>
          </div>
          <input id="side-drawer" type="checkbox" className="drawer-toggle" />
        </div>

        {/* Drawer Side - Mobile Menu */}
        <div className="drawer-side">
          <label htmlFor="side-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-64 min-h-full bg-gray-900 text-white">
            <li className="flex justify-end">
              <label htmlFor="side-drawer" className="btn btn-sm btn-ghost">
                <HiX className="w-6 h-6 text-white" />
              </label>
            </li>
            {navItem.map(item => (
              <li key={item.url}>
                <a href={item.url} className="text-lg font-medium">{item.label}</a>
              </li>
            ))}
            <LanguageSwitcher />
          </ul>
        </div>
      </div>
    </div>
  );
}
