import React from "react";
import { useReducer } from "react";

export const UseReducer = () => {
  let initialValue = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "Inc":
        return state + 1;
      case "Dec":
        return state - 1;
      case "reset":
        return 0;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>USE REDUCER</h1>
      <br />
      <br />
      <h1>{count}</h1>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch("Inc");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("Dec");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
};
