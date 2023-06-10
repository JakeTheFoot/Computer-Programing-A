import React from "react";
import TextField from "./components/TextField.jsx";
import LightDarkToggle from "./components/LightDarkToggle.jsx";
import LanguageSwapDropdown from "./components/LanguageSwapDropdown.jsx";
import logo from "./images/logo.svg";
import helloData from "./Data.json";

function App() {
  const wordData = helloData;
  const [wordFound, setWordFound] = useState(true);

  return (
    <div className="w-[100vw] h-[100vh] min-h-screen mt-0 bg-white dark:bg-black pt-10 flex justify-start items-center flex-col px-[24px]">
      <div className="w-[100%] max-w-[737px] h-auto flex justify-between mx-[24px]">
        <img src={logo} alt="logo" />
        <div className="flex justfiy-end items-center">
          <LanguageSwapDropdown options={["Sans Serif", "Serif", "Mono"]} />
          <div className="w-[1px] h-[32px] bg-very-light-grey mr-[10px] ml-[2px]" />
          <LightDarkToggle />
        </div>
      </div>
      <div className="w-[100%] max-w-[737px] mx-[24px]">
        <TextField className="block mt-[24px] ml-0" />
      </div>
    </div>
  );
}

export default App;
