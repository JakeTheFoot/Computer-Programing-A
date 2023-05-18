import Toggle from "../switch.jsx";
import iconLightTheme from "../../images/icon-light-theme.svg";
import iconDarkTheme from "../../images/icon-dark-theme.svg";

function LightDarkToggle() {
  // Get the user's theme preference from local storage
  let darkTheme = false;

  return (
    <div className="flex justify-center items-center w-[251px] h-[48px] bg-light-grey dark:bg-very-dark-grey rounded-[6px] ">
      <img
        src={iconLightTheme}
        alt="Light Theme"
        className="w-[18.33px] h-[18.33px] mr-[15.67px]"
      ></img>
      <Toggle
        onClick={() => {
          document.documentElement.classList.toggle("dark");
          darkTheme = !darkTheme;
        }}
        checked={darkTheme}
        className="m-0"
      ></Toggle>
      <img
        src={iconDarkTheme}
        alt="Dark Theme"
        className="w-[18.33px] h-[18.33px] ml-[15.67px]"
      ></img>
    </div>
  );
}

export default LightDarkToggle;
