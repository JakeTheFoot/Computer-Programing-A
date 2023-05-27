import React from "react";
import Photo from "../images/profile-image.png";

const Portrait = () => {
  return (
    <div className="w-[174px] h-[384px] md:w-[233px] md:h-[377px] lg:w-[445px] lg:h-[720px] bg-dark-grey flex flex-col justify-end">
      <img src={Photo} alt="Me" />
      <div className="hidden lg:flex w-[129px] h-[129px] bg-none border-solid border-2 border-white absolute -[-129px] rounded-[100%]"></div>
    </div>
  );
};

export default Portrait;
