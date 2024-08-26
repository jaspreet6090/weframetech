import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-[#1A8D91] rounded-t-[30px] flex flex-col sm:flex-row px-6 sm:px-10 py-10 gap-6 sm:gap-0 items-center sm:items-baseline justify-evenly w-full ' >
      <div className="w-full sm:w-auto text-center sm:text-left">
        <ul className='flex flex-col gap-2'>
          <li className='font-light text-white text-opacity-50 text-sm'>AGB</li>
          <li className='font-light text-white text-opacity-50 text-sm'>Impressum</li>
          <li className='font-light text-white text-opacity-50 text-sm'>Datenschutz</li>
        </ul>
      </div>
      <div className="w-full sm:w-auto text-center sm:text-left">
        <ul className='flex flex-col sm:flex-row gap-4 sm:gap-6'>
          <li className='flex gap-1 items-center'>
            <div className="bg-secondary rounded-tl-[16px] rounded-br-[16px] w-[10px] h-[16px]"></div>
            <span className='text-white'>Rezept einlösen</span>
          </li>
          <li className='flex gap-1 items-center'>
            <div className="bg-secondary rounded-tl-[16px] rounded-br-[16px] w-[10px] h-[16px]"></div>
            <span className='text-white'>Live Bestand</span>
          </li>
        </ul>
        <ul className='flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-0'>
          <li className='flex gap-1 items-center'>
            <div className="bg-secondary rounded-tl-[16px] rounded-br-[16px] w-[10px] h-[16px]"></div>
            <span className='text-white'>Videosprechstunde</span>
          </li>
          <li className='flex gap-1 items-center'>
            <div className="bg-secondary rounded-tl-[16px] rounded-br-[16px] w-[10px] h-[16px]"></div>
            <span className='text-white'>FAQs</span>
          </li>
          <li className='flex gap-1 items-center'>
            <div className="bg-secondary rounded-tl-[16px] rounded-br-[16px] w-[10px] h-[16px]"></div>
            <span className='text-white'>Kontakt</span>
          </li>
        </ul>
      </div>
      <div className="w-full sm:w-auto text-center sm:text-left flex flex-col gap-2 mt-6 sm:mt-0">
        <span className='font-light text-white text-opacity-50 text-sm'>Standort</span>
        <span className='font-extrabold text-white break-words'>Bergstraße 49 - 57 69469 Weinheim (3 Glocken Quartier)</span>
      </div>
      <div className="w-full sm:w-auto text-center sm:text-left flex flex-col gap-2 mt-6 sm:mt-0">
        <span className='font-light text-white text-opacity-50 text-sm'>Telefon</span>
        <span className='font-extrabold text-white'>0223 545 5250</span>
      </div>
      <div className="w-full sm:w-auto text-center sm:text-left flex flex-col gap-2 mt-6 sm:mt-0">
        <span className='font-light text-white text-opacity-50 text-sm'>Öffnungszeiten</span>
        <div className="flex flex-col gap-2">
          <span className='font-light text-white text-opacity-50 text-sm'>Mo-Fr</span>
          <span className='font-extrabold text-white'>09:00 – 18:00 Uhr</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className='font-light text-white text-opacity-50 text-sm'>Sa</span>
          <span className='font-extrabold text-white'>09:00 – 14:00 Uhr</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;