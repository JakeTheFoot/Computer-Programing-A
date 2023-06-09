import React from "react";
import { interSwap, loraSwap, inconsolataSwap } from "./utils/fontSwap.js";
import TextField from "./components/TextField.jsx";
import LightDarkToggle from "./components/DarkModeToggle.jsx";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] min-h-screen mt-0 bg-white dark:bg-black pt-10">
      <TextField className="max-w-[327px]">Search for any word...</TextField>
      <LightDarkToggle />
    </div>
  );
}

export default App;
