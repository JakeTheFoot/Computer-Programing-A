"use client";
import React, { useState } from "react";

function TextField({
  children,
  required = true,
  className,
  title,
  description = false,
  formValues,
  setFormValues,
  inputValue,
  setInputValue,
  hasInteracted,
  setHasInteracted,
}) {
  const handleInput = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (!description) {
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        taskName: value.trim(),
      }));
    } else {
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        description: value.trim(),
      }));
    }
    console.log(formValues);
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
        onBlur={handleInput}
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
          className={`absolute ${
            description ? "right-[-115px]" : "right-[13px]"
          } top-[43px] text-red ${required ? "" : "hidden"} dark:text-red-dark`}
          style={{ fontSize: "15px", lineHeight: "24px" }}
        >
          Required
        </p>
      )}
    </div>
  );
}

export default TextField;
