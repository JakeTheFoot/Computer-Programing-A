"use client";
import Toggle from "@/components/Toggle.jsx";
import React, { useEffect, useState } from "react";

function LightDarkToggle({ className }) {
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
  };

  // Remove duration-0 and add temporary-class to all elements
  const allElements = document.querySelectorAll("*");
  allElements.forEach((element) => {
    if (!element.id.startsWith("Table-Checkbox-")) {
      element.classList.remove("duration-0");
      element.classList.add("duration-300");
    }
  });

  // Remove the temporary-class and re-add duration-0 after 1
  setTimeout(() => {
    allElements.forEach((element) => {
      if (!element.id.startsWith("Table-Checkbox-")) {
        element.classList.remove("duration-300");
        element.classList.add("duration-0");
      }
    });
  }, 1);

  return (
    <div
      className={`flex justify-center items-center w-[200px] h-12 bg-light-grey dark:bg-very-dark-grey rounded-lg ${className}`}
    >
      <p className="font-medium mr-[15px] dark:text-white">Dark Mode</p>
      <Toggle onClick={toggleTheme} checked={theme} />
    </div>
  );
}

export default LightDarkToggle;
