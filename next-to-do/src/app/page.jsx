import React from "react";
import "./index.css";
import TextField from "./components/TextField.jsx";
import Dropdown from "./components/Dropdown";
import LightDarkToggle from "./components/specific/LightDarkToggle";

const Todo = () => {
  return (
    <div className="flex items-center justify-center w-[100vh] h-[100vh]">
      <div className="w-[auto] h-[auto] p-[10px] pt-0 bg-lines-light max-w-[946px] rounded-[20px]">
        <div className="flex items-center bg-white dark:bg-black w-[100%] justify-center h-auto rounded-ee-[30px] rounded-es-[30px] px-[20px]">
          <h1 className="font-bold text-[70px] mb-[13px] dark:text-white">
            Todo App
          </h1>
          <LightDarkToggle className="mt-[7px] ml-[50px]" />
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
