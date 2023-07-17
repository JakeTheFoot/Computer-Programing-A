import React, { useState, useEffect } from "react";

const CheckIcon = () => (
  <svg className="w-[15px] h-[15px]" viewBox="2 2 20 20">
    <polyline
      points="18 5 10 15 6 11"
      fill="none"
      stroke="white"
      strokeWidth="4"
    />
  </svg>
);

const Checkbox = ({ isChecked = false, onClick }) => {
  const [checked, setChecked] = useState(isChecked === true);

  const checkboxClasses = checked
    ? "w-[40px] h-[40px] rounded-[2px] border flex justify-center items-center pt-[1.5px] pl-[0.2px] bg-main-purple border-main-purple"
    : "w-[40px] h-[40px] rounded-[2px] border flex justify-center items-center pt-[1.5px] pl-[0.2px] bg-white border-lines-light dark:bg-dark-grey dark:border-lines-dark";

  const textClasses = checked
    ? "py-[12.5px] font-[550] font-sans text-[12.5px] line-through text-gray-400"
    : "py-[12.5px] font-[550] font-sans text-[12.5px] text-black dark:text-white";

  const handleOnPress = () => {
    setChecked(!checked);
    onClick();
  };

  return (
    <label className="flex items-center cursor-pointer dark:text-white">
      <div className="relative">
        <input
          type="checkbox"
          className="hidden"
          checked={checked}
          onChange={handleOnPress}
        />
        <div className={checkboxClasses}>{checked && <CheckIcon />}</div>
      </div>
    </label>
  );
};

export default Checkbox;
