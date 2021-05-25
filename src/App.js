/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
const App = () => {
  const [value, setValue] = useState("");
  const [arr, setArray] = useState(["val"]);

  const addtodo = () => {
    const dummy = [...arr];
    dummy.push(value);
    setArray(dummy);
  };
  return (
    <>
      <div
        style={{
          marginTop: "10%",
          marginLeft: "10%",
          width: "100%",
          display: "flex",
        }}
      >
        <input
          style={{ width: "20%" }}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            addtodo();
          }}
        >
          click
        </button>
        <button
          onClick={() => {
            setArray([]);
          }}
        >
          clear
        </button>
      </div>
      <div style={{ marginLeft: "20%" }}>
        {arr.map((e) => {
          console.log(e);
          return (
            <>
              <h1>{e}</h1>
            </>
          );
        })}
      </div>
    </>
  );
};

export default App;
