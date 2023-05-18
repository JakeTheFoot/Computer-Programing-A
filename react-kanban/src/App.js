import LightDarkToggle from "./components/specific/dark-light-toggle";
import Btn from "./components/button";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] p-[25px] bg-white dark:bg-black">
      <h1 className="mb-4 text-xl font-bold dark:text-white">
        Component Showcase
      </h1>
      <LightDarkToggle></LightDarkToggle>
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
    </div>
  );
}

export default App;
