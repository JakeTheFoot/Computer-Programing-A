import { useState } from "react";
import helloData from "./Data.json";
import FontSwapDropdown from "./components/FontSwapDropdown.jsx";
import LightDarkToggle from "./components/LightDarkToggle.jsx";
import logo from "./images/logo.svg";
import React from "react";
import TextField from "./components/TextField.jsx";
import PlayAudio from "./images/icon-play.svg";
import link from "./images/icon-new-window.svg";

function App() {
  const [wordData, setWordData] = useState(helloData);

  const playAudio = (audioUrls) => {
    if (audioUrls && audioUrls.length > 0) {
      new Audio(audioUrls[0]).play();
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
        <button onClick={() => window.location.reload()}>
          <img src={logo} alt="logo" />
        </button>
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
        <div className="w-[100%] h-auto flex flex-col justify-start items-center">
          <div
            className={`flex ${
              wordData[0].phonetics?.find(({ audio }) => audio)
                ? "justify-between"
                : "justify-start"
            } items-center mt-[24px] tblt:mt-[50px] w-[100%] dskt:max-w-[737px] tbltL:max-w-[675px] max-w-[450px] tblt:max-w-[625px] px-[10px]`}
          >
            <div>
              <h1 className="font-bold text-[32px] tblt:text-[77px] font-inter dark:text-white">
                {wordData[0].word}
              </h1>
              <h2 className="text-purple heading-m mt-[10px] excludes-font-swap text-body-m tblt:text-heading-m">
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
          {wordData[0].meanings.map((meaning, index) => {
            return (
              <div className="flex flex-col justify-start items-center w-[100%] dskt:max-w-[737px] tbltL:max-w-[675px] max-w-[450px] tblt:max-w-[625px] px-[10px]">
                <div className="flex justify-start items-center mt-[43px] tblt:mt-[40px] w-[100%] dskt:max-w-[737px] tbltL:max-w-[675px] max-w-[450px] tblt:max-w-[625px]">
                  <h3
                    className={`font-bold text-[20px] tblt:text-[24px] font-inter dark:text-white`}
                  >
                    {meaning.partOfSpeech}
                  </h3>
                  <div className="w-[100%] h-[1px] bg-very-light-grey dark:bg-grey mt-[4px] ml-[32px]" />
                </div>
                <div className="flex flex-col w-[100%] h-auto justify-start items-start mt-[25px] ml-[5px]">
                  <h4 className="text-light-grey text-[16px] tblt:text-[20px] font-inter mb-[16px] tblt:mb-[27px]">
                    Meaning
                  </h4>
                  <ul className="list-disc w-[100%] h-auto ml-[24px] tblt:ml-[22px] pl-[5px]">
                    {wordData[0].meanings[index].definitions.map(
                      (definition) => {
                        return (
                          <li className="text-[15px] leading-[24px] tblt:text-[18px] mb-[13px] dark:text-white pl-[15px]">
                            {definition.definition}
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
                {wordData[0].meanings[index].synonyms.length > 0 ? (
                  <div className="w-[100%] flex overflow-x-scroll mt-[24px] no-scrollbar">
                    <h4 className="text-light-grey text-[16px] tblt:text-[20px] font-inter">
                      Synonyms
                    </h4>
                    {wordData[0].meanings[index].synonyms.map((synonym) => {
                      return (
                        <p className="text-purple text-[16px] tblt:text-[20px] font-inter ml-[24px] max-h-[16px]">
                          {synonym}
                        </p>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
                {wordData[0].meanings[index].antonyms.length > 0 ? (
                  <div className="w-[100%] flex overflow-x-scroll mt-[24px] no-scrollbar">
                    <h4 className="text-light-grey text-[16px] tblt:text-[20px] font-inter">
                      Antonyms
                    </h4>
                    {wordData[0].meanings[index].antonyms.map((antonym) => {
                      return (
                        <p className="text-purple text-[16px] tblt:text-[20px] font-inter ml-[24px]">
                          {antonym}
                        </p>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
          <div className="w-[100%] dskt:max-w-[737px] tbltL:max-w-[675px] tblt:max-w-[625px] max-w-[450px] h-[2px] bg-very-light-grey dark:bg-grey mt-[32px]" />
          <div className="w-[100%] dskt:max-w-[737px] tbltL:max-w-[675px] tblt:max-w-[625px] max-w-[450px] h-auto mt-[26px] flex flex-col tblt:flex-row mb-[85px]">
            <h5 className="text-light-grey underline">Source</h5>
            <div className="flex items-center mt-[5px] tblt:ml-[25px] tblt:mt-0">
              <a
                href={wordData[0].sourceUrls[0]}
                className="dark:text-white underline"
              >
                {wordData[0].sourceUrls[0]}
              </a>
              <a href={wordData[0].sourceUrls[0]} className="ml-[8px]">
                <img src={link} alt="Open Source URL" />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[100%] dskt:max-w-[737px] tbltL:max-w-[675px] tblt:max-w-[625px] max-w-[450px] flex flex-col mt-[220px]">
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
