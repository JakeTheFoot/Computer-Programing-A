import React, { useState } from "react";
import searchIcon from "../images/icon-search.svg";

function TextField({ children, required = true, className = "" }) {
  const [inputValue, setInputValue] = useState("");
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleInput = (e) => {
    setInputValue(e.target.value);
    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };

  const borderStyle = () => {
    if (hasInteracted && !inputValue && required) {
      return "border-red";
    } else if (!hasInteracted || inputValue) {
      return "border-super-light-grey dark:border-very-dark-grey dark:focus-within:border-purple focus-within:border-purple";
    }
  };

  return (
    <div
      className={`w-[100%] w-min-[327px] h-[48px] bg-super-light-grey dark:bg-very-dark-grey relative border-solid border-[1.5px] rounded-[12px] px-[24px] mx-[39px] ${borderStyle()} ${className}`}
    >
      <input
        type="text"
        placeholder={children}
        value={inputValue}
        onChange={handleInput}
        maxLength={45}
        className={`w-[calc(100%-15px)] h-[100%] bg-transparent dark:text-white focus:outline-none font-inter font-bold text-[16px] px-0`}
      />
      {hasInteracted && !inputValue && required && (
        <p className="absolute left-[0px] bottom-[-32px] text-red leading-[28px]">
          Whoops, can't be empty...
        </p>
      )}
      <button className="w-auto h-auto absolute right-[15px] top-[50%] transform -translate-y-[50%]">
        <img
          src={searchIcon}
          alt="search"
          className="w-[15.55px] h-[15.55px]"
        />
      </button>
    </div>
  );
}

export default TextField;
