import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }

  function subtract() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={subtract}>
          -
        </button>
        <button type="button" onClick={add}>
          +
        </button>
      </div>
    </div>
  );
}
