import React from "react";
import TextField from "@/components/TextField.jsx";
import Dropdown from "@/components/Dropdown.jsx";
import LightDarkToggle from "@/components/specific/LightDarkToggle.jsx";

const Todo = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center w-[100%] justify-center h-auto px-[20px]">
        <div className="flex justify-between items-center w-[100%] max-w-[600px] mt-[50px]">
          <h1 className="font-bold text-[70px] mb-[13px] dark:text-white">
            Todo App
          </h1>
          <LightDarkToggle className="mt-[5px] ml-[50px]" />
        </div>
        <div className="mt-[100px] flex flex-col">
          <TextField>Enter your task</TextField>
          <Dropdown options={["Stuff", "Other Stuff"]} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
