import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Toggle = React.memo(({ onClick, checked, className = "", ...props }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = (event) => {
    setIsChecked(event.target.checked);
    if (onClick) {
      onClick(event.target.checked);
    }
  };

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <label
      className={`relative flex items-center w-[40px] h-[20px] justify-center mx-2 switch cursor-pointer`}
      aria-checked={isChecked ? "true" : "false"}
      role="switch"
    >
      <input
        type="checkbox"
        className="opacity-0 w-0 h-0"
        checked={isChecked}
        onChange={handleToggle}
        {...props}
      />
      <span
        className={`absolute top-0 left-0 right-0 bottom-0 rounded-[12px] block slider focus:outline-none focus:ring-2 ${
          isChecked
            ? "bg-purple focus:ring-purple"
            : "bg-light-grey focus:ring-light-grey"
        }`}
      >
        <span
          className={`absolute left-[3px] bottom-[3px] h-[14px] w-[14px] bg-white rounded-full transition-transform duration-400 ease-in-out slider-dot ${
            isChecked ? "translate-x-[20px]" : ""
          }`}
        ></span>
      </span>
    </label>
  );
});

Toggle.propTypes = {
  onClick: PropTypes.func,
  checked: PropTypes.bool,
  className: PropTypes.string,
};

Toggle.defaultProps = {
  onClick: null,
  checked: false,
  className: "",
};

export default Toggle;
