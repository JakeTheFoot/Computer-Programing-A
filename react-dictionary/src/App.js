import { useState } from "react";
import helloData from "./Data.json";
import FontSwapDropdown from "./components/FontSwapDropdown.jsx";
import LightDarkToggle from "./components/LightDarkToggle.jsx";
import logo from "./images/logo.svg";
import React from "react";
import TextField from "./components/TextField.jsx";
import Result from "./components/Result.jsx";
import NoResult from "./components/NoResult";
import { ThreeCircles } from "react-loader-spinner";

function App() {
  const [wordData, setWordData] = useState(helloData);
  const [isFetching, setIsFetching] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="w-[100vw] h-[100vh] min-h-screen mt-0 bg-white dark:bg-black pt-10 flex justify-start items-center flex-col px-[24px]">
      <div className="w-[100%] dskt:max-w-[737px] tbltL:max-w-[675px] tblt:max-w-[625px] max-w-[450px] h-auto flex justify-between mx-[24px]">
        <button onClick={() => window.location.reload()}>
          <img src={logo} alt="logo" />
        </button>
        <div className="flex justfiy-end items-center">
          <FontSwapDropdown options={["Sans Serif", "Serif", "Mono"]} />
          <div className="w-[1px] h-[32px] bg-very-light-grey mr-[10px] ml-[2px]" />
          <LightDarkToggle setIsDarkMode={setIsDarkMode} />
        </div>
      </div>
      <div className="w-[100%] dskt:max-w-[737px] tbltL:max-w-[675px] tblt:max-w-[625px] max-w-[450px] mx-[24px]">
        <TextField
          className="block mt-[24px] ml-0"
          setWordData={setWordData}
          isFetching={isFetching}
          setIsFetching={setIsFetching}
        >
          Search any word...
        </TextField>
      </div>
      {wordData && !isFetching ? (
        <Result wordData={wordData} />
      ) : isFetching ? (
        <div className="h-[100%] flex justify-center items-center">
          <ThreeCircles
            height="100"
            width="100"
            color={!isDarkMode ? "#000000" : "#ffffff"}
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor={!isDarkMode ? "#4a4949" : "#949494"}
            innerCircleColor={!isDarkMode ? "#6e6e6e" : "#c2c2c2"}
            middleCircleColor=""
          />
        </div>
      ) : (
        <NoResult />
      )}
    </div>
  );
}

export default App;
