import React, { useRef, useEffect } from "react";
import { useState } from "react";

export const UseRef = () => {
  const changeStyle = useRef(null);
  const colors = ["#ceba14", "#91c0d8", "#cbbcd4", "#597d1c", "#2525f9"];
  //   useref return object is called //? current value is what we given in the useRef value
  //   useEffect(() => {
  //     console.log(changeStyle.current);
  //     // setCon(changeStyle.current.value);
  //   },[]);

  const changeColor = () => {
    let rand = Math.floor(Math.random() * colors.length);
    console.log(changeStyle.current);
    changeStyle.current.style.backgroundColor = colors[rand];
    // console.log(rand);
  };
  return (
    <div ref={changeStyle}>
      <h1>UseRef</h1>
      <button onClick={() => changeColor()}>Change Color</button>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere</p>
    </div>
  );
};
