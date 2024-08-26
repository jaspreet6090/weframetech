import React from 'react'
import { CheckboxList, PriceSlider } from './utils'
import { RxCross2 } from "react-icons/rx";


const Filter = () => {
  return (
    <div className='flex flex-col gap-6 ' >
        <div className="text-text text-center bg-primary bg-opacity-30 px-0.5 py-2 text-[24px] font-semibold rounded-md" >Filters</div>
        <PriceSlider text = "Preis" sign="€"/>
        <div className=" border-t-2 border-primary border-opacity-30 "></div> 
        <CheckboxList text="Hersteller"/>
        <button className='rounded-tl-[24px] rounded-br-[24px] px-[18px] py-[7px] hover:bg-yellow border-yellow text-text  border-2 bg-white transition ease-in-out'>
        mehr anzeigen
        </button>
        <div className=" border-t-2 border-primary border-opacity-30 "></div> 
        <PriceSlider text = "THC Gehalt" sign="%"/>
        <div className=" border-t-2 border-primary border-opacity-30 "></div>
        <PriceSlider text = "CBD Gehalt" sign="%"/>
        <div className=" border-t-2 border-primary border-opacity-30 "></div>
        <div className="flex flex-col justify-center text-center gap-4">
          <span >Genetik</span>
          <div className="flex justify-evenly">
            <div className='text-white bg-primary  rounded px-[10px] py-1'>Indica</div>
            <div className='text-text bg-primary bg-opacity-30 rounded px-[10px] py-1 '>Sativa</div>
            <div className='text-text bg-primary bg-opacity-30 rounded px-[10px] py-1'>Hybrid</div>
          </div>
        </div>
        <div className=" border-t-2 border-primary border-opacity-30 "></div>
        <div className="flex flex-col justify-center text-center gap-4">
          <span >Bestrahltung</span>
          <div className="flex justify-evenly">
            <div className='text-white bg-primary  rounded px-[10px] py-1'>bestrahlt</div>
            <div className='text-text bg-primary bg-opacity-30 rounded px-[10px] py-1 '>nicht bestrahlt</div>
           
          </div>
        </div>
        <div className=" border-t-2 border-primary border-opacity-30 "></div>
        <CheckboxList text="Terpene"/>
        <div className=" border-t-2 border-secondary border-opacity-30 "></div>
        <span className='flex justify-center items-center gap-2'><RxCross2  className='text-primary text-xl'/>
        alle Filter zurücksetzen</span>
      </div>
  )
}

export default Filter