import React, { useState } from "react";

const Dropdown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const chevronStyle = isOpen
    ? "transform rotate-180 text-main-purple"
    : "transform rotate-0 text-gray-400";

  const buttonStyle = isOpen
    ? "border border-main-purple dark:border-main-purple"
    : "border border-gray-300 dark:border-medium-grey"; // Applied dark:border-medium-grey here

  const dropdownStyle = isOpen
    ? "translate-y-0 opacity-100 scale-100 pointer-events-auto z-50"
    : "translate-y-1 opacity-0 scale-95 pointer-events-none z-50";

  return (
    <div className="relative inline-block text-left">
      <h4 className="font-sans text-[15px] text-medium-grey dark:text-white font-[550] m-0 mb-[8px]">
        {title ? title : "Title Here"}
      </h4>
      <div>
        <button
          type="button"
          className={`inline-flex items-center justify-start w-[350px] h-[40px] rounded-md shadow-sm px-4 bg-white dark:bg-dark-grey dark:text-white text-sm font-sans font-medium text-black ${buttonStyle} transition-all duration-200`}
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ml-auto transition-transform duration-200 ease-in-out transition-text-color ${chevronStyle}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>

      <div
        className={`origin-top-left absolute left-0 w-[350px] transform transition ease-out duration-100 overflow-hidden ${dropdownStyle}`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div
          className="mt-[7px] bg-white dark:bg-very-dark-grey rounded-[8px]"
          role="none"
        >
          {options.map((option) => (
            <button
              key={option}
              type="button"
              className="block w-full h-[40px] text-left px-4 py-2 text-sm font-sans text-medium-grey hover:text-lines-dark dark:hover:text-lines-light"
              role="menuitem"
              onClick={() => {
                setSelectedOption(option);
                setIsOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
