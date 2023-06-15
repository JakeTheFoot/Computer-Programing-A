"use client";
import React from "react";
import TextField from "@/components/TextField.jsx";
import Dropdown from "@/components/Dropdown.jsx";
import LightDarkToggle from "@/components/specific/LightDarkToggle.jsx";
import { useState } from "react";
import data from "@/app/data.json";

const Todo = () => {
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
      <div className="absolute top-[500px] w-[600px]">
        <h1 className="text-[40px] font-medium">Tasks</h1>
        <div
          className={`grid grid-cols-3 grid-rows-${data.tasks.length} w-[600px]`}
        ></div>
      </div>
    </div>
  );
};

export default Todo;
