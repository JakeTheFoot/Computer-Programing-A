import React, { useState } from "react";
import { render } from "react-dom";

const Dropdown = ({ options, selectedCategory, setSelectedCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  const chevronStyle = isOpen
    ? "transform rotate-180 text-main-purple"
    : "transform rotate-0 text-gray-400";

  const buttonStyle = isOpen
    ? "border border-main-purple dark:border-main-purple"
    : "border border-medium-grey border-[1.5px]";

  const dropdownStyle = isOpen
    ? "translate-y-0 opacity-100 scale-100 pointer-events-auto z-50"
    : "translate-y-1 opacity-0 scale-95 pointer-events-none z-50";

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className={`inline-flex items-center justify-start w-[295px] h-[50px] rounded-md shadow-sm px-4 bg-white dark:bg-dark-grey dark:text-white text-sm font-sans font-medium text-black ${buttonStyle} transition-all duration-200`}
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedCategory}
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
        className={`origin-top-left absolute left-0 w-[295px] transform transition ease-out duration-100 overflow-hidden ${dropdownStyle}`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div
          className="mt-[7px] bg-very-light-grey dark:bg-very-dark-grey rounded-[8px]"
          role="none"
        >
          <button
            key={"All Categories"}
            type="button"
            className="block w-[295px] h-[40px] text-left px-4 py-2 text-sm font-sans text-medium-grey hover:text-lines-dark dark:hover:text-lines-light bg-grey dark:bg-super-dark-grey rounded-t-[8px]"
            role="menuitem"
            onClick={() => {
              setSelectedCategory("All Categories");
              setIsOpen(false);
            }}
          >
            All Categories
          </button>
          <button
            key={"Uncategorized"}
            type="button"
            className="block w-[295px] h-[40px] text-left px-4 py-2 text-sm font-sans text-medium-grey hover:text-lines-dark dark:hover:text-lines-light bg-grey dark:bg-super-dark-grey rounded-t-[8px]"
            role="menuitem"
            onClick={() => {
              setSelectedCategory("Uncategorized");
              setIsOpen(false);
            }}
          >
            Uncategorized
          </button>
          {options.map((option) => (
            <button
              key={option}
              type="button"
              className="block w-[295px] h-[40px] text-left px-4 py-2 text-sm font-sans text-medium-grey hover:text-lines-dark dark:hover:text-lines-light"
              role="menuitem"
              onClick={() => {
                setSelectedCategory(option);
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
