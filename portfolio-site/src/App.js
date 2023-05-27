import React from "react";
import Portrait from "./components/Portrait.jsx";
import NameLogo from "./components/NameLogo.jsx";

function App() {
  return (
    <div>
      <div className="w-[100vw] h-auto flex justify-center">
        <Portrait />
        <NameLogo className="absolute top-[11px] self-center" />
      </div>
      <div className="hidden sm:flex w-[113px] h-[113px] bg-none border-solid border-2 border-white absolute right-[-56.5px] lg:top-[521px] md:hidden sm:top-[284px] rounded-[100%]"></div>
    </div>
  );
}

export default App;
