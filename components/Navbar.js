'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";



export default function Navbar() {


  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const languageRef = useRef(null);
  const language = [
   {
     name: "English",
     code: "en"
   },
   {
     name: "French",
     code: "fr"
   },
   {
     name: "Spanish",
     code: "es"
   }
  ]
  const [selectedLanguage, setSelectedLanguage] = useState(language[0]);

  return (
    <div className='fixed top-0 left-0 w-full z-50'>
    <nav className=" px-4 md:px-6 lg:px-8 2xl:px-40 bg-primary text-white h-[64px] content-center flex items-center justify-between relative">
      {/* Left: Logo and Language */}
      <div className="flex items-center gap-5 w-full sm:w-auto justify-between">
        <span className="font-semibold text-2xl">Logo</span>
             <div className="relative" ref={languageRef}>
              <div onClick={() => {
                setIsLanguageOpen((open) => !open);
              }}>
                <div className="hidden sm:flex bg-white/20 rounded-full px-4 py-1.5 border items-center gap-1.5 text-base cursor-pointer">
                <Image src="/images/globe.png" alt="globe" width={20} height={20} />
                <p className='uppercase text-sm'>{selectedLanguage.code}</p>
                <MdOutlineKeyboardArrowDown className="ml-1" />
                </div>
                <div className='sm:hidden px-5'>
                    <Image src="/images/globe.png" alt="globe" width={20} height={20} />
                </div>
                </div>
              {isLanguageOpen && (
                <div className="absolute right-0 sm:left-0 mt-2 w-56 bg-white rounded-lg shadow-lg z-50 p-1">
                  <div className="px-4 py-3 mb-1 border-b font-semibold text-gray-900 flex items-center justify-between">
                    <p className='text-sm'>Language</p>
                    <AiOutlineClose className='cursor-pointer ml-1' onClick={() => setIsLanguageOpen(false)} />
                  </div>
                  {language.map((item, index) => (
                    <p 
                      key={index}
                      onClick={() => setIsLanguageOpen(false)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 text-sm rounded-md inline-block"
                    >
                      {item.name}
                    </p>
                  ))}
                </div>
                  
              )}
            </div>
      </div>
      


      {/* Center: Nav Links (hidden on mobile) */}
      <div className="hidden md:flex gap-8 text-lg font-medium flex-1 justify-center items-center">
        <Link href="/" className={`text-white ${pathname === '/' ? 'border-b border-white' : 'border-transparent'} hover:border-b hover:border-white transition-all duration-500`}>Home</Link>
        <Link href="/about" className={`text-white ${pathname === '/about' ? 'border-b border-white' : 'border-transparent'} hover:border-b hover:border-white transition-all duration-500`}>About</Link>
        <Link href="/services" className={`text-white ${pathname === '/services' ? 'border-b border-white' : 'border-transparent'} hover:border-b hover:border-white transition-all duration-500`}>Services</Link>
      </div>

      {/* Right: Button and Hamburger */}
      <div className="flex items-center gap-4">
        <button
          className="bg-white hover:bg-primary hover:text-white text-black rounded-md px-7 py-2 text-sm font-medium border hover:border-blue-100 transition hidden md:block"
        >
          About
        </button>
        {/* Hamburger for mobile */}
        <button>
            <AiOutlineMenu onClick={() => setMenuOpen(!menuOpen)} className={`sm:hidden text-white text-2xl font-bold`} />
        </button>
      </div>


      {/* Mobile Menu */}
      
        <div className={`fixed top-0 left-0 w-full h-full bg-primary z-50 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-all duration-500`}>
          <button>
              <AiOutlineClose onClick={() => setMenuOpen(!menuOpen)} className={` absolute top-4 right-4 text-white text-2xl font-bold`} />
          </button>
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex flex-col items-center justify-center gap-4">
              <Link href="/" className={`${pathname==='/' ? 'text-white' : 'text-white/40'} text-2xl font-bold`}>Home</Link>
              <Link href="/about" className={`${pathname==='/about' ? 'text-white' : 'text-white/40'} text-2xl font-bold`}>About</Link>
              <Link href="/services" className={`${pathname==='/services' ? 'text-white' : 'text-white/40'} text-2xl font-bold`}>Services</Link>
            </div>
          </div>
          
        </div>
      
    </nav>
    </div>
  );
}
