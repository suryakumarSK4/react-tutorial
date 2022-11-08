import React from "react";
import { useEffect, useState } from "react";

function UseEffect() {
  let [arr, setArr] = useState([]);
  let [count, setCount] = useState(0);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((val) => {
        setArr([val]);
        console.log(arr);
      });
  }, [count]);
  return (
    <div>
      <h1>USE EFFECT</h1>

      <button onClick={() => setCount(count + 1)}>
        Every button click the useEffect call again once
      </button>
      <ul>
        {arr.map((e, ind) => {
          return e.map((a, i) => {
            return (
              <>
                <li key={a.id}>
                  {a.id} - {a.name} - {a.username} - {a.address.city}
                </li>
              </>
            );
          });
        })}
      </ul>
    </div>
  );
}

export default UseEffect;
