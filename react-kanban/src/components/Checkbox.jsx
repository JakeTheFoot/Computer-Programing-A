import React, { useState, useEffect } from "react";

const CheckIcon = () => (
  <svg className="w-3 h-3" viewBox="2 2 20 20">
    <polyline
      points="18 5 10 15 6 11"
      fill="none"
      stroke="white"
      strokeWidth="4"
    />
  </svg>
);

const Checkbox = ({ onToggle = () => {}, isChecked = "false", children }) => {
  const [checked, setChecked] = useState(isChecked === "true");

  useEffect(() => {
    onToggle(checked ? "true" : "false");
  }, [checked, onToggle]);

  const checkboxClasses = checked
    ? "w-4 h-4 rounded-[2px] border flex justify-center items-center pt-[1.5px] pl-[0.2px] bg-main-purple border-main-purple"
    : "w-4 h-4 rounded-[2px] border flex justify-center items-center pt-[1.5px] pl-[0.2px] bg-white border-lines-light dark:bg-dark-grey dark:border-lines-dark";

  const textClasses = checked
    ? "py-[12.5px] font-[550] font-sans text-[12.5px] line-through text-gray-400"
    : "py-[12.5px] font-[550] font-sans text-[12.5px] text-black dark:text-white";

  const handleOnPress = () => setChecked(!checked);

  return (
    <div className="h-auto min-h-[40px] w-[350px] rounded-[4px] bg-light-grey dark:bg-very-dark-grey hover:bg-main-purple hover:bg-opacity-25 dark:hover:bg-main-purple dark:hover:bg-opacity-25 flex items-center justify-start">
      <label className="flex items-center cursor-pointer dark:text-white pl-[12px] pr-[16px]">
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
      <p className={textClasses}>{children}</p>
    </div>
  );
};

export default Checkbox;
