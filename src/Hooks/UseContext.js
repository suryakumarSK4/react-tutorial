import React, { createContext, useState } from "react";
import Receive from "./receive";
import Send from "./send";
export let seatContext = createContext([]);

function UseContext() {
  let [val, setVal] = useState("");
  let [values, setValue] = useState([]);
  const sendData = (e) => {
    e.preventDefault();
    setValue([...values, val]);
    // console.log(values);
  };
  return (
    <>
      <form onSubmit={sendData}>
        <input type="text" onChange={(e) => setVal(e.target.value)} />
        <button type="submit">send data</button>
      </form>
      {/* // <seatContext.Provider value={{ name, SetName }}> */}
      <seatContext.Provider value={values}>
        <h1>USE CONTEXT</h1>
        <hr />
        <Send />
        <hr />

        <Receive />
      </seatContext.Provider>
    </>
  );
}

export default UseContext;
