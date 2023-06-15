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
        <div className="w-[100%] max-w-[600px] h-[1px] bg-medium-grey opacity-50 mt-[15px]" />
        <div className="mt-[15px] flex flex-col w-[100%] max-w-[600px] h-auto justify-start px-[5px]">
          <div className="flex flex-col h-[60px] w-[100%]">
            <div className="flex items-center h-[100px] justify-between">
              <TextField
                className="w-[295px] h-[80.5px] mr-[10px]"
                title="Task Name"
                description={false}
              >
                e.g. Laundry
              </TextField>
              <Dropdown
                options={["Stuff", "Other Stuff", "More Stuff"]}
                title="Catagory"
              />
            </div>
            <div className="flex items-center justify-left relative">
              <TextField description={true} title="Description">
                e.g. Fold and put away clothes.
              </TextField>
              <button className="w-[100px] h-[50px] bg-main-purple text-white rounded-[4px] border-[1.5px] border-medium-grey font-medium text-[18px] absolute top-[60.5px] right-0">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
