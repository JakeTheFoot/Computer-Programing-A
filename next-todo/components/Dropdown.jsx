"use client";
import React, { useState, useEffect } from "react";

function Dropdown({
  title,
  options,
  className,
  setFormValues,
  selectedOption,
  setSelectedOption,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [optionsSaved, setOptionsSaved] = useState(options);
  const [isEditing, setIsEditing] = useState(-1);
  const [render, forceRender] = useState(false);
  const [value, setValue] = useState("");
  const [prevValue, setPrevValue] = useState("");

  const onBlur = (e, target, option, index) => {
    if (e.target.value !== "" && e.target.value !== option) {
      if (!optionsSaved.includes(e.target.value)) {
        optionsSaved[index] = e.target.value;
        setSelectedOption(e.target.value);
        setPrevValue(e.target.value);
      } else if (prevValue === e.target.value) {
        alert("This option already exists");
      }
    }
    setIsEditing(-1);
    setIsOpen(false);
    setValue(e.target.value);
  };

  // on enter click
  // if text field is active / focused and enter is clicked
  // then unfocus the text field and save the value

  useEffect(() => {
    setOptionsSaved(options);
  }, [options]);

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
    <div className={`relative inline-block text-left ${className} mt-[30.5px]`}>
      <h4 className="font-sans text-[15px] text-medium-grey dark:text-white font-[550] m-0 mb-[8px]">
        {title ? title : "Title Here"}
      </h4>
      <div>
        <button
          type="button"
          className={`inline-flex items-center justify-start w-[295px] h-[50px] rounded-[4px] shadow-sm px-4 bg-white dark:bg-dark-grey dark:text-white text-sm font-sans font-medium text-black ${buttonStyle} transition-all duration-200`}
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
        className={`origin-top-left absolute left-0 w-[295px] transform transition ease-out duration-100 overflow-hidden ${dropdownStyle}`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div
          className="mt-[7px] bg-very-light-grey dark:bg-very-dark-grey rounded-[8px]"
          role="none"
        >
          {optionsSaved.map((option, index) => (
            <button
              key={option}
              type="button"
              className={`w-[295px] h-[40px] text-left px-4 py-2 text-sm font-sans text-medium-grey hover:text-lines-dark dark:hover:text-lines-light flex justify-between ${
                index === 0 ? "pt-[12px] pb-[30px]" : ""
              }`}
              role="menuitem"
              onClick={() => {
                setSelectedOption(option);
                setIsOpen(false);
                setFormValues((prevFormValues) => ({
                  ...prevFormValues,
                  category: selectedOption,
                }));
              }}
            >
              {isEditing === -1 ? (
                option
              ) : isEditing === index ? (
                <input
                  className="w-[200px] focus:outline-0 bg-very-light-grey dark:bg-very-dark-grey dark:text-medium-grey dark:hover:text-white"
                  value={value}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  onKeyDown={(e) => {
                    if (e.key === " ") {
                      e.preventDefault();
                      setValue(value + " ");
                    }
                    if (e.key === "Enter") {
                      onBlur(e, e.target, option, index);
                    }
                  }}
                  autoFocus
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  onBlur={(e) => {
                    onBlur(e, e.target, option, index);
                  }}
                ></input>
              ) : (
                option
              )}
              <div>
                <button
                  className="z-1 w-[15px] h-[15px]"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsEditing(index);
                    forceRender(!render);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#1276c7"
                      d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"
                    />
                  </svg>
                </button>
                <button
                  className="z-1 w-[15px] h-[15px ml-[10px]"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOptionsSaved((prev) => {
                      let updatedOptions = [...prev];
                      if (
                        confirm(
                          "Are you sure you want to delete this catagory? All tasks in this catagory will be uncategorized."
                        )
                      )
                        updatedOptions.splice(index, 1);
                      return updatedOptions;
                    });
                    forceRender(!render);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="#eb4034"
                      d="M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z"
                    />
                  </svg>
                </button>
              </div>
            </button>
          ))}
          <button
            key={"Uncategorized"}
            type="button"
            className={`w-[295px] h-[40px] text-left px-4 py-2 text-sm font-sans text-medium-grey hover:text-lines-dark dark:hover:text-lines-light flex justify-between pb-[35px]`}
            role="menuitem"
            onClick={() => {
              setSelectedOption("Uncategorized");
              setIsOpen(false);
              setFormValues((prevFormValues) => ({
                ...prevFormValues,
                category: selectedOption,
              }));
            }}
          >
            Uncategorized
          </button>
          <button
            key={"add-new"}
            type="button"
            className={`block w-[295px] h-[45px] text-left px-4 text-sm font-sans text-medium-grey hover:text-lines-dark dark:hover:text-lines-light bg-grey dark:bg-super-dark-grey rounded-ee-[8px] rounded-es-[8px] ${
              optionsSaved.length === 0
                ? "rounded-be-[8px] rounded-bs-[8px]"
                : ""
            } flex justify-between items-center`}
            role="menuitem"
            onClick={() => {
              if (optionsSaved.includes("New Category") === false) {
                setOptionsSaved((prev) => [...prev, "New Category"]);
                forceRender(!render);
              } else {
                alert("New Task already exists!");
              }
            }}
          >
            Add New Category
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
