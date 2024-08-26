import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


const NavigationBar = () => {
  return (
    <div className='mx-9 mt-[90px] '>
      <div className="flex items-baseline justify-between w-full">

        <div className="mt-5  flex   items-center gap-3  cursor-pointer">
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
        <div className="flex flex-col justify-center gap-2
        items-center">
          <div className="text-text">
            GKV mit Kostenübernahme?
          </div>
          <button className="border-secondary border-2 rounded-tl-[24px] rounded-br-[24px] text-text px-[20px] py-1  w-full  hover:bg-secondary transition ease-in-out">
            Preisoptionen
          </button>
        </div>

      </div>

    </div>
  )
}

export default NavigationBar
