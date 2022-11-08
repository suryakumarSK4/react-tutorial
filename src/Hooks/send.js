import { React, useContext } from "react";
import { seatContext } from "./UseContext";
function Send() {
  // let { SetName } = useContext(seatContext);
  // console.log(seatContext);
  let val = useContext(seatContext);
  // console.log(val);
  return (
    <div>
      <h1>Send </h1>
      {/* <input
        type="text"
        onChange={(e) => {
          SetName(e.target.value);
        }}
      /> */}
      <ul>
        {val.map((e, ind) => {
          return <li key={ind}>{e}</li>;
        })}
      </ul>
    </div>
  );
}

export default Send;
