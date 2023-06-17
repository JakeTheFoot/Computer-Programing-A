"use client";
import React, { useEffect } from "react";
import TextField from "@/components/TextField.jsx";
import Dropdown from "@/components/DropdownNewCatagory.jsx";
import LightDarkToggle from "@/components/specific/LightDarkToggle.jsx";
import { useState } from "react";
import tempData from "@/app/data.json";
import Checkbox from "@/components/Checkbox";
import DropdownSelectCatagory from "@/components/DropdownSelectCatagory.jsx";
import { useSpring, animated } from "react-spring";

const Todo = () => {
  // Form States
  const [data, setData] = useState(tempData);
  const [selectedOption, setSelectedOption] = useState(
    data.categories[data.categories.length - 1]
  );
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
  const [buttonY, setButtonY] = useState(-75);
  const [buttonY2, setButtonY2] = useState(-75);
  const [targetedTask, setTargetedTask] = useState(0);

  // Edit Button States
  const [isEditing, setIsEditing] = useState([-1, -1]);
  const [value0, setValue0] = useState("");
  const [value1, setValue1] = useState("");
  const [prevValue, setPrevValue] = useState("");

  const onBlur = (e, target, option, index, index2) => {
    if (e.target.value !== "" && e.target.value !== option) {
      if (!data.categories.includes(e.target.value)) {
        if (index2 === 0) {
          data.tasks[index].name = e.target.value;
          setIsEditing([isEditing[0], 1]);
          setValue0(e.target.value);
        } else {
          data.tasks[index].category = e.target.value;
          data.categories.push(e.target.value);
          setIsEditing([-1, -1]);
          setValue1(e.target.value);
        }
        setPrevValue(e.target.value);
      } else if (prevValue === e.target.value) {
        alert("This option already exists");
      }
    }
  };

  const { y } = useSpring({
    y: buttonY,
    config: { tension: 300, friction: 12 },
  });
  const { y2 } = useSpring({
    y2: buttonY2,
    config: { tension: 300, friction: 12 },
  });

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
                  data={data}
                  setData={setData}
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
                    data.tasks.push({
                      name: formValues.taskName,
                      category: formValues.category,
                      description: formValues.description,
                    });
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
          <DropdownSelectCatagory
            options={data.categories}
            title="Sort By Catagory"
          />
        </div>
        <div
          className={`grid grid-cols-custom grid-rows-${data.tasks.length} w-grid h-auto my-[25px]`}
          id="table"
        >
          <React.Fragment key={0}>
            <div
              className={`p-4 border-[0.75px] max-w-[calc(316px+4rem)] dark:text-white border-t-[1.5px] rounded-ss-[10px] ${
                data.tasks.length === 0
                  ? "border-b-[1.5px] rounded-es-[10px]"
                  : ""
              } border-l-[1.5px] border-medium-grey  h-[75px] flex justify-start items-center font-bold text-[25px]`}
            >
              Task
            </div>
            <div
              className={`p-4 border-[0.75px] dark:text-white border-t-[1.5px]
                  ${
                    data.tasks.length === 0 ? "border-b-[1.5px]" : ""
                  } border-medium-grey h-[75px] flex justify-start items-center font-bold text-[25px]`}
            >
              Category
            </div>
            <div
              className={`group p-4 border-[0.75px] border-t-[1.5px] rounded-se-[10px] ${
                data.tasks.length === 0
                  ? "border-b-[1.5px] rounded-ee-[10px]"
                  : ""
              } border-r-[1.5px] border-medium-grey h-[75px] flex justify-center items-center relative font-bold text-[25px] dark:text-white`}
              id={0}
            >
              ?
            </div>
          </React.Fragment>
          {data.tasks.map((task, i) =>
            isEditing[0] !== i ? (
              <React.Fragment key={i + 1}>
                <div
                  className={`p-4 py-3 border-[0.75px] max-w-[calc(316px+4rem)] dark:text-white relative ${
                    i === data.tasks.length - 1
                      ? "border-b-[1.5px] rounded-es-[10px]"
                      : ""
                  } border-l-[1.5px] border-medium-grey  h-[75px] flex justify-start items-center`}
                >
                  <div
                    className="hide-scrollbar overflow-y-scroll w-full h-full flex items-center"
                    id={"taskName-" + i}
                  >
                    {task.name}
                  </div>
                  <button
                    className="w-[10px] h-[40px] rounded-full rounded-ee-none rounded-se-none bg-main-purple absolute top-[17.5px] left-[-11.5px]"
                    onClick={() => {
                      setButtonY2((i + 1) * 75 - 75);
                      setTargetedTask(i + 1);
                    }}
                  />
                </div>
                <div
                  className={`p-4 border-[0.75px] dark:text-white ${
                    i === data.tasks.length - 1 ? "border-b-[1.5px]" : ""
                  } border-medium-grey h-[75px] flex justify-start items-center`}
                >
                  <div className="hide-scrollbar overflow-y-scroll w-full h-full max-w-[143px] flex items-center">
                    {task.category}
                  </div>
                </div>
                <div
                  className={`group p-4 border-[0.75px] ${
                    i === data.tasks.length - 1
                      ? "border-b-[1.5px] rounded-ee-[10px]"
                      : ""
                  } border-r-[1.5px] border-medium-grey h-[75px] flex justify-center items-center relative`}
                  id={i + 1}
                >
                  <Checkbox
                    isChecked={task.completed}
                    onClick={() => {
                      data.tasks[i + 1].completed = !task.completed;
                    }}
                  />
                  <button
                    className="w-[10px] h-[40px] rounded-full rounded-ss-none rounded-es-none bg-red absolute top-[17.5px] right-[-11.5px]"
                    onClick={() => {
                      setButtonY((i + 1) * 75 - 75);
                      setTargetedTask(i + 1);
                    }}
                  />
                </div>
              </React.Fragment>
            ) : isEditing[1] === 0 ? (
              <React.Fragment key={i + 1}>
                <div
                  className={`p-4 border-[0.75px] max-w-[calc(316px+4rem)] dark:text-white relative ${
                    i === data.tasks.length - 1
                      ? "border-b-[1.5px] rounded-es-[10px]"
                      : ""
                  } border-l-[1.5px] border-medium-grey  h-[75px] flex justify-start items-center`}
                >
                  <div className="hide-scrollbar overflow-y-scroll w-full h-full flex items-center">
                    <input
                      className="w-[316px] focus:outline-0 bg-white bg-opacity-0 dark:text-white overflow-y-scroll text-left flex items-center"
                      value={value0}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      onFocus={(e) => {
                        setValue0(task.name);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === " ") {
                          e.preventDefault();
                          setValue0(value0 + " ");
                        }
                        if (e.key === "Enter") {
                          onBlur(e, e.target, data.tasks[i].name, i, 0);
                        }
                      }}
                      autoFocus
                      onChange={(e) => {
                        setValue0(e.target.value);
                      }}
                      onBlur={(e) => {
                        onBlur(e, e.target, data.tasks[i].name, i, 0);
                      }}
                    />
                  </div>
                  <button
                    className="w-[10px] h-[40px] rounded-full rounded-ee-none rounded-se-none bg-main-purple absolute top-[17.5px] left-[-11.5px]"
                    onClick={() => {
                      setButtonY2((i + 1) * 75 - 75);
                      setTargetedTask(i + 1);
                    }}
                  />
                </div>
                <div
                  className={`p-4 border-[0.75px] dark:text-white ${
                    i === data.tasks.length - 1 ? "border-b-[1.5px]" : ""
                  } border-medium-grey h-[75px] flex justify-start items-center`}
                >
                  <div className="hide-scrollbar overflow-y-scroll w-full h-[75px] max-w-[143px] flex items-center">
                    {task.category}
                  </div>
                </div>
                <div
                  className={`group p-4 border-[0.75px] ${
                    i === data.tasks.length - 1
                      ? "border-b-[1.5px] rounded-ee-[10px]"
                      : ""
                  } border-r-[1.5px] border-medium-grey h-[75px] flex justify-center items-center relative`}
                  id={i + 1}
                >
                  <Checkbox
                    isChecked={task.completed}
                    onClick={() => {
                      data.tasks[i + 1].completed = !task.completed;
                    }}
                  />
                  <button
                    className="w-[10px] h-[40px] rounded-full rounded-ss-none rounded-es-none bg-red absolute top-[17.5px] right-[-11.5px]"
                    onClick={() => {
                      setButtonY((i + 1) * 75 - 75);
                      setTargetedTask(i + 1);
                    }}
                  />
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment key={i + 1}>
                <div
                  className={`p-4 border-[0.75px] dark:text-white relative ${
                    i === data.tasks.length - 1
                      ? "border-b-[1.5px] rounded-es-[10px]"
                      : ""
                  } border-l-[1.5px] border-medium-grey overflow-y-scroll h-[75px] flex justify-start items-center`}
                >
                  {task.name}
                  <button
                    className="w-[10px] h-[40px] rounded-full rounded-ee-none rounded-se-none bg-main-purple absolute top-[17.5px] left-[-11.5px]"
                    onClick={() => {
                      setButtonY2((i + 1) * 75 - 75);
                      setTargetedTask(i + 1);
                    }}
                  />
                </div>
                <div
                  className={`p-4 border-[0.75px] dark:text-white ${
                    i === data.tasks.length - 1 ? "border-b-[1.5px]" : ""
                  } border-medium-grey h-[75px] flex justify-start items-center`}
                >
                  <div className="hide-scrollbar overflow-y-scroll w-[143px] h-full">
                    <input
                      className="w-[143px] h-full focus:outline-0 bg-white bg-opacity-0 dark:text-white"
                      value={value1}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      onFocus={(e) => {
                        setValue1(task.category);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === " ") {
                          e.preventDefault();
                          setValue1(value1 + " ");
                        }
                        if (e.key === "Enter") {
                          onBlur(e, e.target, data.tasks[i].category, i, 1);
                        }
                      }}
                      autoFocus
                      onChange={(e) => {
                        setValue1(e.target.value);
                      }}
                      onBlur={(e) => {
                        onBlur(e, e.target, data.tasks[i].category, i, 1);
                      }}
                    />
                  </div>
                </div>
                <div
                  className={`group p-4 border-[0.75px] ${
                    i === data.tasks.length - 1
                      ? "border-b-[1.5px] rounded-ee-[10px]"
                      : ""
                  } border-r-[1.5px] border-medium-grey h-[75px] flex justify-center items-center relative`}
                  id={i + 1}
                >
                  <Checkbox
                    isChecked={task.completed}
                    onClick={() => {
                      data.tasks[i + 1].completed = !task.completed;
                    }}
                  />
                  <button
                    className="w-[10px] h-[40px] rounded-full rounded-ss-none rounded-es-none bg-red absolute top-[17.5px] right-[-11.5px]"
                    onClick={() => {
                      setButtonY((i + 1) * 75 - 75);
                      setTargetedTask(i + 1);
                    }}
                  />
                </div>
              </React.Fragment>
            )
          )}
        </div>
        <animated.button
          className="transition-all duration-300 ease-in-out absolute right-[-85px] flex"
          style={{
            top: y.to((y) => 160 + y),
          }}
          onClick={() => {
            if (targetedTask !== 0) {
              data.tasks.splice(targetedTask - 1, 1);
              setButtonY(-75);
              setButtonY2(-75);
              setTargetedTask(0);
            }
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
        <animated.button
          className="transition-all duration-300 ease-in-out absolute left-[-85px] flex"
          style={{
            top: y2.to((y2) => 155 + y2),
          }}
          onClick={() => {
            if (targetedTask !== 0) {
              setIsEditing([targetedTask - 1, 0]);
            }
          }}
        >
          <svg
            width="160"
            height="114"
            viewBox="0 0 160 114"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[70px] h-[70px]"
          >
            <path
              d="M147.382 49.4161C152.92 52.9553 152.92 61.0447 147.382 64.5839L95.8462 97.5156C89.8554 101.344 82 97.0412 82 89.9318V24.0682C82 16.9588 89.8554 12.6562 95.8462 16.4844L147.382 49.4161Z"
              fill="#124ec7"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15 13.0536C6.71573 13.0536 0 19.7693 0 28.0536V86.0536C0 94.3379 6.71573 101.054 15 101.054H86C94.2843 101.054 101 94.3379 101 86.0536V28.0536C101 19.7693 94.2843 13.0536 86 13.0536H15ZM66.3859 30.3423C68.6957 28.0325 72.4293 28.0325 74.7391 30.3423L76.7113 32.304C79.0211 34.6137 79.0211 38.3473 76.7113 40.6571L73.5367 43.8317L63.2113 33.5063L66.3859 30.3423ZM41.759 55.8552C42.0438 54.9798 42.5395 54.1887 43.1828 53.5454L60.8277 35.8899L71.1637 46.2259L53.5187 63.8813C52.8648 64.5247 52.0738 65.0204 51.209 65.3052L41.8434 68.427C40.9258 68.7329 39.9238 68.5009 39.2488 67.8153C38.5738 67.1298 38.3312 66.1278 38.6371 65.2208L41.759 55.8552ZM25 44.9286C25 39.3387 29.5352 34.8036 35.125 34.8036H45.25C47.1168 34.8036 48.625 36.3118 48.625 38.1786C48.625 40.0454 47.1168 41.5536 45.25 41.5536H35.125C33.2582 41.5536 31.75 43.0618 31.75 44.9286V71.9286C31.75 73.7954 33.2582 75.3036 35.125 75.3036H62.125C63.9918 75.3036 65.5 73.7954 65.5 71.9286V61.8036C65.5 59.9368 67.0082 58.4286 68.875 58.4286C70.7418 58.4286 72.25 59.9368 72.25 61.8036V71.9286C72.25 77.5184 67.7148 82.0536 62.125 82.0536H35.125C29.5352 82.0536 25 77.5184 25 71.9286V44.9286Z"
              fill="#124ec7"
            />
          </svg>
        </animated.button>
      </div>
    </div>
  );
};

export default Todo;
