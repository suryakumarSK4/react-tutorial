import React, { useState } from "react";

function UseState() {
  //   const [names, setName] = useState(["surya", "kumar"]);
  //   let newName = document.querySelector(".userName");
  //   const addName = () => {
  //     let s = newName.value;
  //     setName((n) => [...n, "sk"]);
  //   };

  const [names, setName] = useState([{ fname: "surya", lname: "kumar" }]);
  const addName = () => {
    setName((n) => [...n, { fname: "s", lname: "k" }]);
  };
  return (
    <>
      <div>
        <h1>USE STATE HOOK</h1>
      </div>

      <input type="text" className="userName" />
      <button onClick={addName}>Add Name</button>
      {/* <ul>
        {names.map((ele, index) => (
          <li key={index}>{ele}</li>
        ))}
      </ul> */}

      <ul>
        {names.map((ele, index) => (
          <>
            <li key={index}>{ele.fname}</li>
            <li key={ele.lname}>{ele.lname}</li>
          </>
        ))}
      </ul>
    </>
  );
}

export default UseState;
