'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar(){
    const [open, close] = useState(false);

    return (
        <header className="py-2 z-10 fixed top-0 left-0 right-0 border-b bg-ds-gary border-white">
            <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full">
                <a href="/" className="text-white text-2xl font-bold">
                    <Image src="/images/logo_banner.png" width={192} height={64} alt={"Destiny Soul Logo"} />
                </a>   
                <button className="text-white lg:hidden block h-6 w-6 cursor-pointer" onClick={()=>close(!open)}>
                    {open ? (
                        <svg  xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    )}
                </button>
                <nav className={`${open ? "block":"hidden"} w-full lg:flex lg:item-center lg:w-auto`}>
                    <ul className="font-sans text-base text-center lg:flex lg:justify-between">
                        <li>
                            <a className="lg:px-5 py-2 block text-white hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline rounded-xl" href="./about">
                                <span className="animation-underline">關於我們</span>
                            </a>
                        </li>
                        <li>
                            <a className="lg:px-5 py-2 block text-white hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline rounded-xl" href="./projects">
                                <span className="animation-underline">專案</span>
                            </a>
                        </li>
                    </ul>
                </nav>      
            </div>
        </header>
    )
}