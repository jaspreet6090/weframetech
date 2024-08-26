"use client";
import React, { useState } from 'react';
import { BsCart2 } from "react-icons/bs";
import { SearchBar } from './utils';
import { HiMenu, HiX } from "react-icons/hi"; // Import hamburger and close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='mt-[70px] relative'>
      <div className="flex items-center justify-between h-auto sm:h-[34px] px-4 sm:px-0">
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <SearchBar />
        </div>
        <div className="sm:hidden ml-8">
          {/* Hamburger Icon */}
          <button onClick={toggleMenu} className="text-3xl text-primary ">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
        <div className="hidden sm:flex gap-3 items-center">
          <ul className='flex flex-row gap-3'>
            <li className='flex justify-center items-center'>
              <div className="w-[10px] h-4 bg-primary rounded-tl-[16px] rounded-br-[16px]"></div>
              <div className="font-bold text-text ml-1">
                Rezept einlösen
              </div>
            </li>
            <li className='flex justify-center items-center'>
              <div className="w-[10px] h-4 bg-[#62C3C6] bg-opacity-30 rounded-tl-[16px] rounded-br-[16px]"></div>
              <div className="text-text ml-1">
                Live Bestand
              </div>
            </li>
            <li className='flex justify-center items-center'>
              <div className="w-[10px] h-4 bg-[#62C3C6] bg-opacity-30 rounded-tl-[16px] rounded-br-[16px]"></div>
              <div className="text-text ml-1">
                Videosprechstunde
              </div>
            </li>
            <li className='flex justify-center items-center'>
              <div className="w-[10px] h-4 bg-[#62C3C6] bg-opacity-30 rounded-tl-[16px] rounded-br-[16px]"></div>
              <div className="text-text ml-1">
                FAQs
              </div>
            </li>
            <li className='flex justify-center items-center'>
              <div className="w-[10px] h-4 bg-[#62C3C6] bg-opacity-30 rounded-tl-[16px] rounded-br-[16px]"></div>
              <div className="text-text ml-1">
                Kontakt
              </div>
            </li>
          </ul>
          <div className="flex items-baseline text-secondary">
            <BsCart2 className='text-2xl' />
            <div className="rounded-full bg-[#62C3C6] bg-opacity-30 relative right-1 w-4 h-4 text-sm flex justify-center items-center">1</div>
          </div>
          <button className='rounded-tl-[24px] rounded-br-[24px] px-[18px] py-[7px] bg-yellow text-text'>
            Anmelden
          </button>
        </div>
      </div>
      
      {/* Floating Menu */}
      {isOpen && (
        <div className="absolute top-[100%] left-20 w-full bg-white shadow-lg sm:hidden z-50">
          <ul className='flex flex-col gap-3 p-4'>
            <li className='flex justify-start items-center'>
              <div className="w-[10px] h-4 bg-primary rounded-tl-[16px] rounded-br-[16px]"></div>
              <div className="font-bold text-text ml-1">
                Rezept einlösen
              </div>
            </li>
            <li className='flex justify-start items-center'>
              <div className="w-[10px] h-4 bg-[#62C3C6] bg-opacity-30 rounded-tl-[16px] rounded-br-[16px]"></div>
              <div className="text-text ml-1">
                Live Bestand
              </div>
            </li>
            <li className='flex justify-start items-center'>
              <div className="w-[10px] h-4 bg-[#62C3C6] bg-opacity-30 rounded-tl-[16px] rounded-br-[16px]"></div>
              <div className="text-text ml-1">
                Videosprechstunde
              </div>
            </li>
            <li className='flex justify-start items-center'>
              <div className="w-[10px] h-4 bg-[#62C3C6] bg-opacity-30 rounded-tl-[16px] rounded-br-[16px]"></div>
              <div className="text-text ml-1">
                FAQs
              </div>
            </li>
            <li className='flex justify-start items-center'>
              <div className="w-[10px] h-4 bg-[#62C3C6] bg-opacity-30 rounded-tl-[16px] rounded-br-[16px]"></div>
              <div className="text-text ml-1">
                Kontakt
              </div>
            </li>
            <div className="flex justify-start items-baseline text-secondary">
              <BsCart2 className='text-2xl' />
              <div className="rounded-full bg-[#62C3C6] bg-opacity-30 relative right-1 w-4 h-4 text-sm flex justify-center items-center">1</div>
            </div>
            <button className='rounded-tl-[24px] rounded-br-[24px] px-[18px] py-[7px] bg-yellow text-text mt-4'>
              Anmelden
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
