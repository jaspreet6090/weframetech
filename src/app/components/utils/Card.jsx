import React from 'react'
import { LuDot } from "react-icons/lu";
import Image from 'next/image'

const Card = ({color }) => {
  return (
    <div className='border-secondary border-2 rounded-tl-[30px] rounded-br-[30px] w-[320px]  '>
    {color == "red"?  <div className="flex items-center justify-start ml-4 pt-4 ">
        <div className="rounded-[30px] bg-[#A10C0C] bg-opacity-5  relative w-[119px]  flex ">
        <LuDot />
        <span className='text-[#A10C0C] bg-opacity-5 text-[12px]'>nicht lieferbar</span>
        </div>
    </div> : 
    <div className="flex items-center justify-between px-4 pt-4 ">
        <div className="rounded-[30px] bg-[#0D7052] bg-opacity-5  relative   flex ">
        <LuDot />
        <span className='text-[#0D7052] bg-opacity-5 text-[12px]'>sofort lieferbar</span>
        </div>
        <div className="rounded-[30px] bg-[#0D7052] bg-opacity-5  relative   flex ">
       
        <span className='text-[#0D7052] bg-opacity-5 text-[12px]'>Neu</span>
        </div>
    </div>
    
     }
   
      <div className="w-full h-[150px] my-3 " >
        <Image src="/Img.png" alt="image" width={310} height={100}  />
      </div>
      <div className=" bg-primary bg-opacity-30 border-t-2 border-secondary  p-6 flex flex-col gap-3 ">
        <div className="text-text bg-primary bg-opacity-30 w-20 rounded-sm  px-4 py-1 font-semibold">Canify</div>
        <div className="flex justify-between">
          <div className="text-text bg-accent rounded-sm px-4 py-1">THC {color == "red " ? "18%" : "25%" } </div>
          <div className="text-accent bg-primary rounded-sm px-4 py-1">CBD &lt; 1% </div>
          <img src="/Bestrahlt.png" alt="bestrahlt"  height={24} width={24} cover={true} />
        </div>
        <span className='text-text font-bold text-[18px]'>
        {color == "red" ? "Cannabis Flos 18/1 PT " : "Cannabis Flos 22/1 PT " } <div className=""></div>
        {color == "red" ? "Mango" : "Ku.Pink Kush DAB Canify"}
        </span>
        <div className="mt-4">
          <div className="flex justify-between text-text">
            <span>Kultivar</span>
            <span>{color == "red" ? "Mango" : "Pink Kush"}</span>
          </div>
          <div className=" mt-2 flex justify-between text-text">
            <span>Genetik</span>
            <span>Hybrid</span>
          </div>
        </div>
        <div className="flex justify-between items-baseline">
        <div className="">
         <div className="text-[24px] font-bold"> 
         <span className='text-primary'>€</span>
         <span className='text-text font-extrabold'>11,66 <sup className='text-sm'>1</sup> </span>
         </div>
         <span className='text-[12px] font-light'>pro Gramm</span>
        </div>
        <button className='rounded-tl-[24px] rounded-br-[24px] px-[18px] py-[7px] bg-yellow text-text hover:border-yellow border-2 hover:bg-white transition ease-in-out'>
        in den Warenkorb
        </button>
        </div>
      </div>
      
    </div>
  )
}

export default Card
