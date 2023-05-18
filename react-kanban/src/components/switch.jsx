import React, { useState, useEffect } from "react";

const Toggle = ({ onClick, checked }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (onClick) {
      onClick();
    }
  };

  // Update isChecked state when checked prop changes
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <label className="relative flex items-center w-[40px] h-[20px] justify-center mx-2 switch cursor-pointer">
      <input
        type="checkbox"
        className="opacity-0 w-0 h-0"
        checked={isChecked}
        onChange={handleToggle}
      />
      <span
        className={`absolute top-0 left-0 right-0 bottom-0 rounded-[12px] block slider bg-main-purple focus:outline-none focus:ring-2 focus:ring-main-purple`}
      >
        <span
          className={`absolute left-[3px] bottom-[3px] h-[14px] w-[14px] bg-white rounded-full transition-transform duration-400 ease-in-out slider-dot ${
            isChecked ? "translate-x-[20px]" : ""
          }`}
        ></span>
      </span>
    </label>
  );
};

export default Toggle;
