"use client";
import { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


const CheckboxList = ({text}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isOpen, setIsOpen] = useState(true); // State to toggle visibility

  const items = [
    'ADREXpharma',
    'Aurora',
    'Avaay',
    'Bedrocan',
    'Cannamedical',
  ];

  const handleCheckboxChange = (item) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(item)
        ? prevSelectedItems.filter((i) => i !== item)
        : [...prevSelectedItems, item]
    );
  };

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-w-xs mx-auto p-4">
      <div className="flex  items-center mb-4">
        <h2 className="text-lg  font-semibold text-text mx-auto">{text}</h2>
        <button onClick={toggleList} className="text-primary text-xl focus:outline-none">
          {isOpen ? <IoIosArrowUp />
: <IoIosArrowDown />
}
        </button>
      </div>
      {isOpen && (
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-center">
              <input
                type="checkbox"
                id={item}
                checked={selectedItems.includes(item)}
                onChange={() => handleCheckboxChange(item)}
                className="form-checkbox text-white bg-primary border-primary rounded focus:ring-primary focus:ring-offset-0 focus:ring-2"
              />
              <label
                htmlFor={item}
                className="ml-2 text-text"
              >
                {item}
              </label>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
};

export default CheckboxList;
