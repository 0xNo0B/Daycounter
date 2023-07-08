import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(1);
  const [steps, setSteps] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + steps);

  return (
    <div className="app">
      <div className="count">
        <button className="btn" onClick={() => setCount((s) => s + 1)}>
          +
        </button>
        <p className="write">Count: {count}</p>
        <button className="btn" onClick={() => setCount((s) => s - 1)}>
          -
        </button>
      </div>
      <div className="steps">
        <button className="btn" onClick={() => setSteps((s) => s + count)}>
          +
        </button>
        <p className="write">Steps: {Math.abs(steps)} </p>
        <button className="btn" onClick={() => setSteps((s) => s - count)}>
          -
        </button>
      </div>
      <div className="p">
        <span className="data">
          {steps === 0
            ? `Today is `
            : steps > 0
            ? ` ${steps} days from today is  `
            : `${Math.abs(steps)} days ago was `}
        </span>
        <span className="data">
          &nbsp;{steps > 0 ? date.toDateString() : date.toDateString()}
        </span>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
