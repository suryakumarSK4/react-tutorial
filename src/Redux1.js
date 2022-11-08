import React from "react";
import Redux2 from "./Redux2";
// Redux is used to send the data from one component to another component like ( PROPS )
// Store the data first
// Then send it to any component

// REDUX COMPONENT to COMPONENT Data Sharing
import HeaderContainer from "./container/HeaderContainer";
import HomeContainer from "./container/HomeContainer";

function Redux1() {
  return (
    <div className="App">
      {/* <h3>Redux Component</h3>
      <Redux2 data={{name:"surya"}}/> */}

      {/* REDUX COMPONENT to COMPONENT Data Sharing */}
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}
export default Redux1;
