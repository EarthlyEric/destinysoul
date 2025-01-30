"use client"

import { Bars3Icon, LanguageIcon, XMarkIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navItem = [
    { label: 'Contact us', url: '#contact-us' }
  ]
  const langList = [
    { label: '繁體中文', url: '#', langCode: 'zh-Hant' },
    { label: 'English', url: '#', langCode: 'en-US' },
    
  ]
  return (
    <div className="navbar bg-gray-800 sticky top-0">
      <div className="navbar-start px-5">
        <Link href="/" className="btn btn-ghost p-0" style={{ width: '192px', height: '64px' }}>
          <Image src="/assets/transparent/ds-banner-dark.png" alt="destinysoul logo banner" width={192} height={64} />
        </Link>
      </div>
      {/*Desktop*/}
      <div className="navbar-end sm:hidden lg:flex">
        <ul className="menu menu-horizontal rounded-box px-5">
          {navItem.map(item => (
            <li key={item.url}>
              <a className="text-lg font-medium" href={item.url}>{item.label}</a>
            </li>
          ))}

          <li className="relative">
            <details className="dropdown dropdown-end">
              <summary className="flex items-center cursor-pointer">
                <LanguageIcon className="w-7 h-7 mr-2 text-white" />
             </summary>
              <ul className="dropdown-content menu menu-compact p-2 shadow bg-base-100 rounded-box w-40 mt-2">
                {langList.map(lang => (
                  <li key={lang.langCode}>
                    <button className="btn btn-sm btn-ghost flex items-center w-full gap-2">
                      <div className="badge badge-outline text-xs px-1">{lang.langCode}</div>
                      {lang.label}
                    </button>
                  </li>
                ))}
            </ul>
              </details>
          </li>
        </ul>
      </div>
      {/*Mobile Toggle Button*/}
      <div className="navbar-end lg:hidden">
        <button className="btn btn-ghost btn-square" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>
      {/*Mobile*/}
      {isOpen && (
        <div></div>
      )}
    </div>
  )
}