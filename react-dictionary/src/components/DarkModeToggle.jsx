import Toggle from "./Toggle.jsx";
import React, { useEffect, useState } from "react";
import iconLightTheme from "../images/icon-moon-grey.svg";
import iconDarkTheme from "../images/icon-moon-purple.svg";
import PropTypes from "prop-types";

function LightDarkToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") === "true");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const updatedTheme = !prevTheme;
      localStorage.setItem("theme", updatedTheme.toString());
      return updatedTheme;
    });

    // Remove duration-0 and add temporary-class to all elements
    const allElements = document.querySelectorAll("*");
    allElements.forEach((el) => {
      el.classList.remove("duration-0");
      el.classList.add("duration-300");
    });

    // Remove the temporary-class and re-add duration-0 after 350ms
    setTimeout(() => {
      allElements.forEach((el) => {
        el.classList.remove("duration-300");
        el.classList.add("duration-0");
      });
    }, 1);
  };

  return (
    <div className="flex justify-center items-center w-64 h-12 bg-light-grey dark:bg-very-dark-grey rounded-lg">
      <img src={iconLightTheme} alt="Light Theme" className="w-5 h-5 mr-4" />
      <Toggle onClick={toggleTheme} checked={theme} />
      <img src={iconDarkTheme} alt="Dark Theme" className="w-5 h-5 ml-4" />
    </div>
  );
}

LightDarkToggle.propTypes = {
  theme: PropTypes.bool,
};

export default LightDarkToggle;
