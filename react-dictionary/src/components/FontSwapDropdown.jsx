import React, { useState } from "react";

const FontSwapDropdown = ({ options, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const chevronStyle = isOpen
    ? "transform rotate-180 text-purple"
    : "transform rotate-0 text-grey-400";

  const dropdownStyle = isOpen
    ? "translate-y-0 opacity-100 scale-100 pointer-events-auto z-50"
    : "translate-y-1 opacity-0 scale-95 pointer-events-none z-50";

  // Function to swap to Inter
  const interSwap = () => {
    const elements = [...document.querySelectorAll("*")].filter(
      (element) => !element.classList.contains("excludes-font-swap")
    );
    elements.forEach((element) => {
      element.classList.remove("font-lora", "font-inconsolata");
      element.classList.add("font-inter");
    });
  };

  // Function to swap to Lora
  const loraSwap = () => {
    const elements = [...document.querySelectorAll("*")].filter(
      (element) => !element.classList.contains("excludes-font-swap")
    );
    elements.forEach((element) => {
      element.classList.remove("font-inter", "font-inconsolata");
      element.classList.add("font-lora");
    });
  };

  // Function to swap to Inconsolata
  const inconsolataSwap = () => {
    const elements = [...document.querySelectorAll("*")].filter(
      (element) => !element.classList.contains("excludes-font-swap")
    );
    elements.forEach((element) => {
      element.classList.remove("font-inter", "font-lora");
      element.classList.add("font-inconsolata");
    });
  };

  return (
    <div className={`relative inline-block text-left ${className}`}>
      <div>
        <button
          type="button"
          className={`inline-flex items-center justify-end w-[151px] h-[40px] rounded-md px-4 bg-none dark:text-white text-sm ${
            selectedOption === "Sans Serif"
              ? "font-inter"
              : selectedOption === "Serif"
              ? "font-lora text-[15px] font-bold"
              : "font-inconsolata text-[18px] font-bold"
          } font-medium text-black transition-all duration-200`}
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ml-auto transition-transform duration-200 ease-in-out transition-text-color ${chevronStyle} ml-[6.5px] mt-[3px] `}
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
        className={`origin-top-left m-[10.5px] absolute right-[10px] w-auto transform transition ease-out duration-100 overflow-hidden first-letter rounded-xl shadow-TextSwitch dark:shadow-purple ${dropdownStyle}`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div
          className="bg-white dark:bg-very-dark-grey rounded-[8px] py-[5px]"
          role="none"
        >
          <button
            key="Sans Serif"
            type="button"
            className="block w-full h-[40px] text-left px-4 py-2 text-[14px] font-inter text-black dark:text-white excludes-font-swap font-bold mr-[80px] hover:text-purple dark:hover:text-purple tracking-[0.5px]"
            role="menuitem"
            onClick={() => {
              setSelectedOption("Sans Serif");
              setIsOpen(false);
              interSwap();
            }}
          >
            Sans Serif
          </button>
          <button
            key="Serif"
            type="button"
            className="block w-full h-[40px] text-left px-4 py-2 text-[14.5px] font-lora text-black dark:text-white excludes-font-swap font-bold mr-[80px] hover:text-purple dark:hover:text-purple"
            role="menuitem"
            onClick={() => {
              setSelectedOption("Serif");
              setIsOpen(false);
              loraSwap();
            }}
          >
            Serif
          </button>
          <button
            key="Mono"
            type="button"
            className="block w-full h-[40px] text-left px-4 py-2 text-[16px] font-inconsolata text-black dark:text-white excludes-font-swap font-bold mr-[80px] hover:text-purple dark:hover:text-purple"
            role="menuitem"
            onClick={() => {
              setSelectedOption("Mono");
              setIsOpen(false);
              inconsolataSwap();
            }}
          >
            Mono
          </button>
        </div>
      </div>
    </div>
  );
};

export default FontSwapDropdown;
