// import React,{forwardRef} from 'react';
// // This is in APP2.js  line - 190 -
// function AnotherComp(p,r){

//     return (
//       <div>
//         <input ref={r} type="text" /><br /><br />
//       </div>
//     )
//   }
//   export default forwardRef(AnotherComp);
  




// ^^^^^^^^^^^^^^^^^   DYNAMIC ROUTING ^^^^^^^^^^^^^^^^
import React from 'react';
import {withRouter} from 'react-router';
function DynamicRoute(p){
  console.log(p);
  return (
    <div  style={{backgroundColor:"lightblue",paddingTop:100,height:400}}>
      <h3>User Dynamic Routes</h3>
      <h4>Your Number is: {p.match.params.id}</h4>
      <h4>Your Name is: {p.match.params.name}</h4>
    </div>
  )
}
export default withRouter(DynamicRoute);

