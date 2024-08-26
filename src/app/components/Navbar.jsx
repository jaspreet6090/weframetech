import React from 'react'

import { BsCart2 } from "react-icons/bs";
import { SearchBar } from './utils';


const Navbar = () => {
  return (
    <nav className='mt-[70px]'>
      <div className="h-[34px] flex items-center  justify-around">
        <SearchBar />
        <div className="">
          <ul className='flex w-full gap-3'>
            <li className='flex justify-center items-center'>
              <div className="w-[10px] h-4 bg-primary rounded-tl-[16px] rounded-br-[16px]"></div>
              <div className="font-bold text-text ml-1">
                Rezept einlösen
              </div>
            </li>
            <li className='flex justify-center items-center'> 
            <div className="w-[10px] h-4 bg-[#62C3C6] bg-opacity-30  rounded-tl-[16px] rounded-br-[16px]"></div>
              <div className=" text-text ml-1">
              Live Bestand
              </div>
              </li>
              <li className='flex justify-center items-center'> 
            <div className="w-[10px] h-4 bg-[#62C3C6] bg-opacity-30  rounded-tl-[16px] rounded-br-[16px]"></div>
              <div className=" text-text ml-1">
              Videosprechstunde              </div>
              </li>
              <li className='flex justify-center items-center'> 
            <div className="w-[10px] h-4 bg-[#62C3C6] bg-opacity-30  rounded-tl-[16px] rounded-br-[16px]"></div>
              <div className=" text-text ml-1">
              FAQs
              </div>
              </li>
              <li className='flex justify-center items-center'> 
            <div className="w-[10px] h-4 bg-[#62C3C6] bg-opacity-30  rounded-tl-[16px] rounded-br-[16px]"></div>
              <div className=" text-text ml-1">
              Kontakt
              </div>
              </li>
           
          </ul>
        </div>
        <div className="flex gap-3 items-center">

        <div className="flex items-baseline text-secondary ">
        <BsCart2 className='text-2xl'
          
        />
        <div className="rounded-full  bg-[#62C3C6] bg-opacity-30  relative right-1 w-4 h-4 text-sm flex justify-center items-center">1</div>
        </div>
        <button className='rounded-tl-[24px] rounded-br-[24px] px-[18px] py-[7px] bg-yellow text-text'>
        Anmelden
        </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
