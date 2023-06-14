"use client";
import "../index.css";
import React, { useState } from "react";

function TextField({ children, required = true }) {
  const [inputValue, setInputValue] = useState("");
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleInput = (e) => {
    setInputValue(e.target.value);
    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };

  return (
    <div className="relative w-[350px] h-[400px] font-sans mt-[30.5px]">
      <input
        type="text"
        placeholder={children}
        value={inputValue}
        onChange={handleInput}
        className={`absolute w-[350px] h-[40px] rounded-[4px] bg-white dark:bg-dark-grey dark:text-white border-[1.5px] ${
          hasInteracted && !inputValue && required
            ? "border-red"
            : "border-medium-grey"
        } px-[16px] py-[8px] text-black text-left focus:outline-none`}
        style={{ fontSize: "13px", lineHeight: "24px" }}
      />
      {hasInteracted && !inputValue && (
        <p
          className={`absolute right-[16px] top-[8px] text-red ${
            required ? "" : "hidden"
          } dark:text-red-dark $}`}
          style={{ fontSize: "14px", lineHeight: "24px" }}
        >
          Can't be empty
        </p>
      )}
    </div>
  );
}

export default TextField;
