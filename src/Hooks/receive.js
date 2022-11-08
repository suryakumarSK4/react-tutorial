import { React, useContext } from "react";
import { seatContext } from "./UseContext";
function Receive() {
  let name = useContext(seatContext);

  return (
    <div>
      <h1>Receive</h1>
      <ol>
        {name.map((e, ind) => {
          return <li key={ind}>{e}</li>;
        })}
      </ol>
    </div>
  );
}

export default Receive;
