import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const NavigationBar = () => {
  return (
    <div className='mx-4 sm:mx-9 sm:mt-[90px]'>
      <div className="flex flex-col sm:flex-row items-baseline justify-between w-full">

        {/* Breadcrumb Navigation */}
        <div className="mt-5 flex items-center gap-2 sm:gap-3 flex-wrap sm:flex-nowrap cursor-pointer">
          <div className="text-primary">
            Home
          </div>
          <FaArrowRightLong className='text-primary' />
          <div className="text-primary">
            Livebestand
          </div>
          <FaArrowRightLong className='text-primary' />
          <div className="text-text font-bold">
            Cannabis Blüten
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mt-4 sm:mt-0">
          <div className="text-text text-center sm:text-left">
            GKV mit Kostenübernahme?
          </div>
          <button className="border-secondary border-2 rounded-tl-[24px] rounded-br-[24px] text-text px-[20px] py-1 w-full sm:w-auto hover:bg-secondary transition ease-in-out">
            Preisoptionen
          </button>
        </div>

      </div>
    </div>
  );
}

export default NavigationBar;
