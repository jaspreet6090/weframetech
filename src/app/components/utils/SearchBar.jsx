import React from 'react'
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="text-primary bg-accent w-[366px] text-[16px] rounded-[30px] flex justify-between items-center px-4 py-1 ">
        Suchen
        <FiSearch className=' text-2xl font-extrabold'/>

        </div>
  )
}

export default SearchBar
