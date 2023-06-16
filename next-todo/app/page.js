"use client";
import React, { useEffect } from "react";
import TextField from "@/components/TextField.jsx";
import Dropdown from "@/components/DropdownNewCatagory.jsx";
import LightDarkToggle from "@/components/specific/LightDarkToggle.jsx";
import { useState } from "react";
import data from "@/app/data.json";
import Checkbox from "@/components/Checkbox";
import DropdownSelectCatagory from "@/components/DropdownSelectCatagory.jsx";
import { useSpring, animated } from "react-spring";

const Todo = () => {
  // Form States
  const options = data.categories;
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [titleInputValue, setTitleInputValue] = useState("");
  const [descriptionInputValue, setDescriptionInputValue] = useState("");
  const [descriptionHasInteracted, setDescriptionHasInteracted] =
    useState(false);
  const [titleHasInteracted, setTitleHasInteracted] = useState(false);
  const [formValues, setFormValues] = useState({
    taskName: "",
    category: selectedOption,
    description: "",
  });

  // Delete Button States
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [buttonY, setButtonY] = useState(0);
  const [remainingScrollHeight, setRemainingScrollHeight] = useState(0);
  const [tension, setTension] = useState(150);
  let height = 0;

  const { y } = useSpring({
    y: buttonY,
    config: { tension: tension, friction: 15 },
  });

  // Adding handlers for delete button
  const handleMouseEnter = (event) => {
    const boxRect = event.currentTarget.getBoundingClientRect();
    if (event.clientY < boxRect.top + boxRect.height / 2) {
      console.log("Mouse entered from top");
    } else {
      console.log("Mouse entered from bottom");
    }
    setDeleteVisible(true);
  };

  const handleMouseLeave = (event) => {
    const boxRect = event.currentTarget.getBoundingClientRect();
    if (event.clientY < boxRect.top + boxRect.height / 2) {
      console.log("Mouse left towards the top");
    } else {
      console.log("Mouse left towards the bottom");
    }
    setTension(400);
    setTimeout(() => {
      setDeleteVisible(false);
      setTension(150);
    }, 200);
  };

  useEffect(() => {
    const element = document.getElementById("table");
    height = element.clientHeight;
    setRemainingScrollHeight(
      element.scrollHeight - element.clientHeight - element.scrollTop
    );
  }, []);

  if (deleteVisible) {
    window.onmousemove = (event) => {
      setButtonY(event.clientY - 575 - remainingScrollHeight);
    };
  }

  return (
    <div className="flex flex-col items-center justify-start relative">
      <div className="flex flex-col items-center justify-start h-[100vh] absolute top-0">
        <div className="flex flex-col items-center w-[100%] justify-center h-[250px] px-[20px]">
          <div className="flex justify-between items-center w-[100%] max-w-[600px] mt-[50px]">
            <h1 className="font-bold text-[70px] mb-[13px] dark:text-white">
              Todo App
            </h1>
            <LightDarkToggle className="mt-[5px] ml-[50px]" />
          </div>
          <div className="w-[100%] max-w-[600px] h-[1px] bg-medium-grey opacity-50 mt-[15px]" />
          <div className="mt-[15px] flex flex-col w-[100%] max-w-[600px] h-auto justify-start px-[5px]">
            <div className="flex flex-col h-[60px] w-[100%]">
              <div className="flex items-center h-[100px] justify-between">
                <TextField
                  className="w-[295px] h-[80.5px] mr-[10px]"
                  title="Task Name"
                  description={false}
                  formValues={formValues}
                  setFormValues={setFormValues}
                  inputValue={titleInputValue}
                  setInputValue={setTitleInputValue}
                  hasInteracted={titleHasInteracted}
                  setHasInteracted={setTitleHasInteracted}
                >
                  e.g. Laundry
                </TextField>
                <Dropdown
                  options={options}
                  title="Category"
                  formValues={formValues}
                  setFormValues={setFormValues}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                />
              </div>
              <div className="flex items-center justify-left relative">
                <TextField
                  description={true}
                  title="Description"
                  setFormValues={setFormValues}
                  formValues={formValues}
                  inputValue={descriptionInputValue}
                  setInputValue={setDescriptionInputValue}
                  hasInteracted={descriptionHasInteracted}
                  setHasInteracted={setDescriptionHasInteracted}
                >
                  e.g. Fold and put away clothes.
                </TextField>
                <button
                  className="w-[100px] h-[50px] bg-main-purple text-white rounded-[4px] border-[1.5px] border-medium-grey font-medium text-[18px] absolute top-[60.5px] right-0"
                  onClick={() => {
                    formValues.category = selectedOption;
                    console.log(formValues);
                    setSelectedOption("Uncategorized");
                    setTitleInputValue("");
                    setTitleHasInteracted(false);
                    setDescriptionInputValue("");
                    setDescriptionHasInteracted(false);
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative top-[500px] w-[600px] mb-[500px]">
        <div className="flex justify-between items-center h-[50px]">
          <h1 className="text-[40px] font-bold dark:text-white">Tasks</h1>
          <DropdownSelectCatagory options={options} title="Sort By Catagory" />
        </div>
        <div
          className={`grid grid-cols-custom grid-rows-${data.tasks.length} w-grid h-auto my-[25px]`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          id="table"
        >
          {data.tasks.map((task, i) => (
            <React.Fragment key={i}>
              <div
                className={`p-4 border-[0.75px] dark:text-white ${
                  i === 0
                    ? "border-t-[1.5px] rounded-ss-[10px]"
                    : i === data.tasks.length - 1
                    ? "border-b-[1.5px] rounded-es-[10px]"
                    : ""
                } border-l-[1.5px] border-medium-grey  h-[75px] flex justify-start items-center`}
              >
                {task.name}
              </div>
              <div
                className={`p-4 border-[0.75px] dark:text-white ${
                  i === 0
                    ? "border-t-[1.5px]"
                    : i === data.tasks.length - 1
                    ? "border-b-[1.5px]"
                    : ""
                } border-medium-grey h-[75px] flex justify-start items-center`}
              >
                {task.category}
              </div>
              <div
                className={`group p-4 border-[0.75px] ${
                  i === 0
                    ? "border-t-[1.5px] rounded-se-[10px]"
                    : i === data.tasks.length - 1
                    ? "border-b-[1.5px] rounded-ee-[10px]"
                    : ""
                } border-r-[1.5px] border-medium-grey h-[75px] flex justify-center items-center relative`}
                id={i}
              >
                <Checkbox
                  isChecked={task.completed}
                  onClick={() => {
                    data.tasks[i].completed = !task.completed;
                  }}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
        <animated.button
          className={`transition-all duration-300 ease-in-out absolute right-[-85px] ${
            deleteVisible ? "flex" : "hidden"
          }`}
          style={{
            top: y.to((y) => Math.min(Math.max(160 + y, 70), height + 325)),
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 576 512"
            className="w-[60px] h-[60px]"
          >
            <path
              fill="#eb4034"
              d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
            />
          </svg>
        </animated.button>
      </div>
    </div>
  );
};
export default Todo;
