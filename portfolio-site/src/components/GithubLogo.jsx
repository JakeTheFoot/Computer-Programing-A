import React from "react";
import Github from "../images/icon-github.svg";

const GithubLogo = ({ className }) => {
  return (
    <div
      className={`w-[30px] h-[29.26px] dskt:w-[45.11px] dskt:h-[44px] ${className}`}
    >
      <img src={Github} alt="My github" />
    </div>
  );
};

export default GithubLogo;
