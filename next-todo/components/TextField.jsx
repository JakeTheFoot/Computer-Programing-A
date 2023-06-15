"use client";
import React, { useState } from "react";

function TextField({
  children,
  required = true,
  className,
  title,
  description = false,
}) {
  const [inputValue, setInputValue] = useState("");
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleInput = (e) => {
    setInputValue(e.target.value);
    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };

  return (
    <div
      className={`relative w-[350px] h-[40px] font-sans mt-[30.5px] ${className}`}
    >
      <h4 className="font-sans text-[15px] text-medium-grey dark:text-white font-[550] m-0 mb-[8px]">
        {title ? title : "Title Here"}
      </h4>
      <input
        type="text"
        placeholder={children}
        value={inputValue}
        onChange={handleInput}
        className={`absolute w-[100%] h-[50px] rounded-[4px] bg-white dark:bg-dark-grey dark:text-white border-[1.5px] ${
          hasInteracted && !inputValue && required
            ? "border-red"
            : "border-medium-grey"
        } px-[16px] py-[8px] text-black text-left focus:outline-none ${
          description ? "h-[100px] w-[480px]" : ""
        } text-[15px]`}
        style={{ fontSize: "15px", lineHeight: "24px" }}
      />
      {hasInteracted && !inputValue && (
        <p
          className={`absolute right-[20px] ${
            description ? "right-[-140px]" : ""
          } top-[43px] text-red ${
            required ? "" : "hidden"
          } dark:text-red-dark $}`}
          style={{ fontSize: "15px", lineHeight: "24px" }}
        >
          Required
        </p>
      )}
    </div>
  );
}

export default TextField;
