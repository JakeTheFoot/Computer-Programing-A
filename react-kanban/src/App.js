import LightDarkToggle from "./components/specific/Dark-light-toggle";
import Btn from "./components/Button";
import Checkbox from "./components/Checkbox";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] p-[25px] bg-white dark:bg-dark-grey">
      <h1 className="mb-4 text-xl font-bold dark:text-white">
        Component Showcase
      </h1>
      <div className="my-1">
        <LightDarkToggle></LightDarkToggle>
      </div>
      <div className="my-4">
        <Btn btnSize="large" btnColor="primary">
          Button Large
        </Btn>
        <Btn btnColor="primary" onClick={() => console.log("Clicked!")}>
          Button Primary (Click me!)
        </Btn>
        <Btn btnColor="secondary">Button Secondary</Btn>
        <Btn btnColor="destructive">Button Destructive</Btn>
      </div>
      <div className="my-1">
        <Checkbox isChecked="false" onClick={(event) => console.log("Toggled")}>
          Toggle Me!
        </Checkbox>
      </div>
      <div className="my-4">
        <Dropdown
          title="Custom Title"
          options={["To-Do", "Doing", "Done"]}
          initialState={0}
        ></Dropdown>
      </div>
    </div>
  );
}

export default App;
