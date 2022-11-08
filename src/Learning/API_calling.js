import React, { useEffect } from "react";

function API_calling() {
  var arr = [];
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((val) => val.json())
      .then((val) => arr.push(val));
    return () => {};
  }, []);
  console.log(arr);
  return (
    <div>
      <div className="table">
        <table>
          <thead>
            <tr>User ID</tr>
            <tr>Title</tr>
          </thead>
          <tbody>
            <tr>
              {/* {arr.map((ele) => {
                return (
                  <>
                    <td>{ele.userId}</td>
                    <td>{ele.title}</td>
                  </>
                );
              })} */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default API_calling;
