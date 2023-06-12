import React from "react";

const NoResult = () => {
  return (
    <div className="w-[100%] dskt:max-w-[737px] tbltL:max-w-[675px] tblt:max-w-[625px] max-w-[450px] flex flex-col mt-[100px]">
      <div className="flex justify-between items-center flex-col w-[100%] h-auto">
        <h1 className="text-[64px]">😕</h1>
        <h2
          className={`heading-s font-inter font-bold text-[20px] mt-[15px] dark:text-white`}
        >
          No Definition Found
        </h2>
        <p
          className={`body-m max-w-[736px] text-center mt-[24px] mb-[150px] text-light-grey font-inter`}
        >
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </p>
      </div>
    </div>
  );
};

export default NoResult;
