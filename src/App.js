import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");

  const newButtonColor = color === "red" ? "blue" : "red";

  return (
    <div>
      <button
        onClick={() => setColor(newButtonColor)}
        style={{ background: color }}
      >
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;
