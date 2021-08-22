import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [input, setInput] = useState("");
  var [paraSize, setParaSize] = useState(0);
  var [paraColor, setParaColor] = useState("");
  function changes(flag) {
    if (flag === 1) {
      setParaSize(paraSize + 2);
      setParaColor("orange");
    } else if (flag === 2) {
      setParaSize(paraSize - 2);
      setParaColor("cyan");
    }
  }
  return (
    <div className="App">
      <button
        onClick={() => {
          changes(1);
        }}
      >
        red " + "
      </button>
      <button
        onClick={() => {
          changes(2);
        }}
      >
        green " - "
      </button>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <p style={{ fontSize: `${paraSize}` + "px", color: `${paraColor}` }}>
        {input}
      </p>
    </div>
  );
}
