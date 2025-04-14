import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./components/square.jsx";
import Square from "./components/square.jsx";
import Grille from "./components/Grille.jsx";

function App() {
  return (
    <>
      {/* <div className="">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Square value="O" onClick={() => console.log("clicked")} />
            <Square value="" onClick={() => console.log("clicked")} />
            <Square value="" onClick={() => console.log("clicked")} />
          </div>{" "}
          <div className="flex gap-2">
            <Square value="X" onClick={() => console.log("clicked")} />
            <Square value="" onClick={() => console.log("clicked")} />
            <Square value="" onClick={() => console.log("clicked")} />
          </div>{" "}
          <div className="flex gap-2">
            <Square value="" onClick={() => console.log("clicked")} />
            <Square value="" onClick={() => console.log("clicked")} />
            <Square value="" onClick={() => console.log("clicked")} />
          </div>{" "}
        </div>
      </div> */}

      <div className="flex flex-row w-full gap-2">
        <Grille />
      </div>
    </>
  );
}

export default App;
