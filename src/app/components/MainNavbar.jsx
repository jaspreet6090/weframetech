"use client";
import React, { useState } from 'react';
import { SearchBar } from './utils';
import { TfiMenuAlt } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";

const MainNavbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="mt-10 px-4 sm:px-8  ">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left Section */}
        <div className="flex items-center gap-2">
          <div className="bg-secondary rounded-tl-[20px] rounded-br-[20px] h-6 w-5"></div>
          <div className="text-text font-semibold text-2xl sm:text-3xl">Blüten</div>
        </div>

        {/* Right Section */}
        <div className="flex flex-row justify-center  flex-wrap items-center gap-4  w-auto">
          <SearchBar />
          <div className="text-text flex items-center gap-2 bg-primary bg-opacity-30 px-3 py-2 rounded-[4px] w-full sm:w-auto">
            Sortieren nach
            <IoIosArrowDown className='text-2xl text-primary' />
          </div>
          <div className="text-text bg-primary rounded-[4px] bg-opacity-30 px-3 py-2 flex items-center w-full sm:w-auto">
            Verfügbarkeit
            <button
              className={`relative inline-flex items-center h-2 rounded-full w-8 transition-colors focus:outline-none ml-3 ${
                isToggled ? 'bg-[#62C3C6] bg-opacity-30' : 'bg-[#62C3C6] bg-opacity-30'
              }`}
              onClick={handleToggle}
            >
              <span
                className={`transform transition-transform ${
                  isToggled ? 'translate-x-4' : 'translate-x-0'
                } inline-block w-4 h-4 bg-[#62C3C6] rounded-full`}
              />
            </button>
          </div>
          <div className="text-text text-xl bg-primary rounded-[4px] bg-opacity-30 px-3 py-2 flex items-center w-full sm:w-auto">
            <TfiMenuAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
