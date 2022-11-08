import React, { useRef, useEffect } from "react";
import { useState } from "react";

export const UseRef = () => {
  const changeStyle = useRef("green");
  const colors = ["#ceba14", "#91c0d8", "#cbbcd4", "#597d1c", "#2525f9"];
  //   useref return object is called //? current value is what we given in the useRef value
  useEffect(() => {
    console.log(changeStyle.current);
    // setCon(changeStyle.current.value);
  });

  const s = {
    color: "green",
  };

  const changeColor = () => {
    let rand = Math.floor(Math.random() * colors.length);
    changeStyle.current.style.backgroundColor = colors[rand];
    console.log(rand);
  };
  return (
    <div>
      <h1>UseRef</h1>
      <button onClick={() => changeColor()}>Change Color</button>
      <p ref={changeStyle} style={{ color: "white" }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
        distinctio facilis quibusdam! Rem ea facilis quasi quae debitis
        explicabo possimus accusantium cumque dolorem architecto consequuntur
        autem perspiciatis, itaque ducimus est!
      </p>
    </div>
  );
};
