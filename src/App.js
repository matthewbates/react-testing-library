import React, { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  const updateCheckbox = (e) => {
    setDisabled(e.target.checked);
  };

  return (
    <div className="container">
      <div className="items">
        <button
          onClick={() => setButtonColor(newButtonColor)}
          style={{
            backgroundColor: disabled ? "gray" : buttonColor,
            fontWeight: "bold",
            padding: "10px",
          }}
          disabled={disabled}
        >
          Change to {newButtonColor}
        </button>
        <br />
        <input
          onChange={updateCheckbox}
          type="checkbox"
          defaultChecked={disabled}
        />
        <label htmlFor="disable-button-checkbox">Disable button</label>
      </div>
    </div>
  );
}

export default App;
