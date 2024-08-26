"use client"
import { useState } from 'react';

const RangeSlider = ({text,sign}) => {
  // Set the initial range from 5 to 10
  const [minValue, setMinValue] = useState(5);
  const [maxValue, setMaxValue] = useState(10);

  // Handle minValue change
  const handleMinChange = (e) => {
    const value = Number(e.target.value);
    if (value <= maxValue) {
      setMinValue(value);
    }
  };

  // Handle maxValue change
  const handleMaxChange = (e) => {
    const value = Number(e.target.value);
    if (value >= minValue) {
      setMaxValue(value);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-4">
        <h2 className="text-lg font-semibold text-text">{text}</h2>
      </div>
      <div className="relative h-6">
        {/* Slider Track */}
        <div className="absolute top-2 left-0 right-0 h-2 bg-primary bg-opacity-30 rounded-full" />
        
        {/* Selected Range */}
        <div
          className="absolute top-2 h-2 bg-primary rounded-full"
          style={{
            left: `${(minValue / 30) * 100}%`,
            right: `${100 - (maxValue / 30) * 100}%`,
          }}
        />

        {/* Left Thumb */}
        <div
          className="absolute top-0 w-[10px] h-4 bg-primary rounded-tl-[16px] rounded-br-[16px] transform -translate-x-1/2"
          style={{ left: `${(minValue / 30) * 100}%` }}
        />
       
        {/* Right Thumb */}
        <div
          className="absolute top-0 w-[10px] h-4 bg-primary rounded-tl-[16px] rounded-br-[16px] transform -translate-x-1/2"
          style={{ left: `${(maxValue / 30) * 100}%` }}
        />

        {/* Invisible Range Inputs for Interaction */}
        <input
          type="range"
          min="0"
          max="30"
          value={minValue}
          onChange={handleMinChange}
          className="absolute top-0 left-0 w-full h-6 opacity-0 cursor-pointer"
        />
        <input
          type="range"
          min="0"
          max="30"
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute top-0 bottom-3 left-0 w-full h-6 opacity-0 cursor-pointer"
        />
      </div>

      {/* Display Selected Values */}
      <div className="flex justify-between  items-center  gap-1 mt-4 text-text">
        <div className="px-4 py-2 bg-gray-100 rounded-md w-full">
          {minValue} {sign}
        </div>
        <div className="text-xl">-</div>
        <div className="px-4 py-2 bg-gray-100 rounded-md w-full">
          {maxValue} {sign}
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
