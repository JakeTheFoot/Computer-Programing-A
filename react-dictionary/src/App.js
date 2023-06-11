import { useState } from "react";
import helloData from "./Data.json";
import FontSwapDropdown from "./components/FontSwapDropdown.jsx";
import LightDarkToggle from "./components/LightDarkToggle.jsx";
import logo from "./images/logo.svg";
import React from "react";
import TextField from "./components/TextField.jsx";
import PlayAudio from "./images/icon-play.svg";

function App() {
  const [wordData, setWordData] = useState(helloData);

  const playAudio = (audioUrls) => {
    if (audioUrls && audioUrls.length > 0) {
      audioUrls.forEach((audioUrl, index) => {
        setTimeout(() => new Audio(audioUrl).play(), 1000 * index);
      });
    }
  };

  function getValuesByKey(obj, key, backupKey, index) {
    let values = [];

    console.log(
      `Searching for key: "${key}" and backup key: "${backupKey}" in the object`
    );

    // Inner function to recursively search the object for keys
    function searchObject(obj, key) {
      console.log(`Searching for key: "${key}" in:`, obj);
      for (let k in obj) {
        if (typeof obj[k] === "object" && obj[k] !== null) {
          // Recursively search nested objects
          searchObject(obj[k], key);
        } else if (k === key) {
          // If the current key matches, store the value
          values.push(obj[k]);
          console.log(`Found value "${obj[k]}" for key "${key}"`);
        }
      }
    }

    // Search the object for the main key
    searchObject(obj, key);

    console.log(`Values found for key "${key}":`, values);

    // If no values are found for the main key, search for the backup key
    if (values.length === 0) {
      console.log(
        `No values found for key "${key}". Searching for backup key "${backupKey}".`
      );
      searchObject(obj, backupKey);
    }

    console.log(`Final values found:`, values);

    // If no values were found for main or backup key, return false
    if (values.length === 0) {
      console.log("No values found for main or backup key. Returning false.");
      return false;
    }

    // Handle the index parameter to return the desired output
    if (index === -2) {
      console.log("Index is -2. Returning the whole array:", values);
      return values;
    } else if (index === -1) {
      console.log(
        "Index is -1. Returning the last value:",
        values[values.length - 1]
      );
      return values[values.length - 1];
    } else {
      console.log(
        `Returning value at index ${index}:`,
        values[index] !== undefined ? values[index] : false
      );
      return values[index] !== undefined ? values[index] : false;
    }
  }

  return (
    <div className="w-[100vw] h-[100vh] min-h-screen mt-0 bg-white dark:bg-black pt-10 flex justify-start items-center flex-col px-[24px]">
      <div className="w-[100%] dskt:max-w-[737px] tbltL:max-w-[675px] tblt:max-w-[625px] max-w-[450px] h-auto flex justify-between mx-[24px]">
        <img src={logo} alt="logo" />
        <div className="flex justfiy-end items-center">
          <FontSwapDropdown options={["Sans Serif", "Serif", "Mono"]} />
          <div className="w-[1px] h-[32px] bg-very-light-grey mr-[10px] ml-[2px]" />
          <LightDarkToggle />
        </div>
      </div>
      <div className="w-[100%] dskt:max-w-[737px] tbltL:max-w-[675px] tblt:max-w-[625px] max-w-[450px] mx-[24px]">
        <TextField className="block mt-[24px] ml-0" setWordData={setWordData}>
          Search any word...
        </TextField>
      </div>
      {wordData ? (
        <div
          className={`flex ${
            wordData[0].phonetics?.find(({ audio }) => audio)
              ? "justify-between"
              : "justify-start"
          } items-center mt-[24px] tblt:mt-50px w-[100%] dskt:max-w-[737px] tbltL:max-w-[675px] max-w-[450px] tblt:max-w-[625px px-[10px]`}
        >
          <div>
            <h1 className="font-bold text-[32px] tblt:heading-l dark:text-white font-lora">
              {wordData[0].word}
            </h1>
            <h2 className="text-purple heading-m mt-[10px] excludes-font-swap">
              {getValuesByKey(wordData, "text", "phonetic", -1)
                ? getValuesByKey(wordData, "text", "phonetic", -1)
                : "N/A"}
            </h2>
          </div>
          {wordData[0].phonetics?.find(({ audio }) => audio) && (
            <button>
              <img
                src={PlayAudio}
                alt="audio"
                className="w-[48px] h-[48px] tblt:w-[75px] tblt:h-[75px]"
                onClick={() => {
                  const audioUrls = wordData[0].phonetics
                    .filter(({ audio }) => audio)
                    .map(({ audio }) => audio);
                  playAudio(audioUrls);
                }}
              />
            </button>
          )}
        </div>
      ) : (
        <div className="w-[100%] dskt:max-w-[737px] tbltL:max-w-[675px] tblt:max-w-[625px] max-w-[450px] flex flex-col mt-[220px]">
          <div className="flex justify-between items-center flex-col w-[100%] h-auto">
            <h1 className="text-[64px]">😕</h1>
            <h2
              className={`heading-s font-inter font-bold text-[20px] mt-[15px] dark:text-white`}
            ></h2>
            <p
              className={`body-m max-w-[736px] text-center mt-[24px] mb-[150px] text-light-grey font-inter`}
            >
              Sorry pal, we couldn't find definitions for the word you were
              looking for. You can try the search again at later time or head to
              the web instead.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
