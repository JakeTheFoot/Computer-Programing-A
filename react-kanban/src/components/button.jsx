import React from "react";

// Remember to remove margin class at the end of button classes

const Btn = ({ children, btnSize, btnColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`duration-0 ${
        btnColor === "primary"
          ? "bg-main-purple hover:bg-main-purple-hover"
          : btnColor === "secondary"
          ? "bg-main-purple bg-opacity-[0.1] hover:bg-opacity-[0.25] dark:bg-white dark:hover:bg-white duration-300 hover:duration-0"
          : btnColor === "destructive"
          ? "bg-red hover:bg-red-hover"
          : ""
      } w-[255px] font-bold ${
        btnSize === "large"
          ? "h-[48px] rounded-[24px] text-[16px]"
          : "h-[40px] rounded-[20px] text-[14px]"
      } ${
        btnColor === "secondary" ? "text-main-purple dark" : "text-white"
      } mr-[20px] my-[10px] font-sans`}
    >
      {children}
    </button>
  );
};

export default Btn;
