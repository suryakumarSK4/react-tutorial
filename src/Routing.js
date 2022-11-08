import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AnotherComp from "./AnotherComp";

export default function Routinglearn() {
  // $%%%%%%%%%  Dynamic Routing ******
  // let user=[
  //     { name:"surya",id:1},
  //     { name:"kumar",id:2},
  //     { name:"sk",id:3}
  // ]

  return (
    <div className="App">
      <h3>Routinglearn</h3>
      {/* Basic Routing */}
      <RouterLinks />

      {/* Dynamic Routing */}
      {/* Route with values */}
      {/* <Router>
                {
                user.map((item,i) => (
                    <Link 
                        style={{color:"#ff007f",padding:10}} 
                        key={i} 
                        to={"/user/"+item.id+"/"+item.name}
                    >
                        {item.name}
                    </Link>
        
                ))
            }
            
            Another Comp line - 17 -
            <Route path="/user/:id/:name"><AnotherComp /></Route>
            </Router> */}
    </div>
  );
}
function RouterLinks() {
  return (
    <div>
      <Router>
        {/* <Link to="/">Home</Link>
            <br />
            <Link to="/about">About</Link>
            <br />
            <Link to="/contact">Contact</Link> */}
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/*">
            <Notfound />
          </Route>
        </Switch>
        <div>Footer</div>
      </Router>
    </div>
  );
}

function Home() {
  // let navigate=useNavigate();
  return (
    <div style={{ backgroundColor: "orange" }}>
      {/* <Nav /> */}
      <br />
      <h4 style={{ color: "black", height: 400 }}>Home</h4>
      {/* <button 
        onClick={() => {
          navigate("/about");
        }}>{" "}About</button> */}
    </div>
  );
}

function About() {
  return (
    <div style={{ backgroundColor: "black" }}>
      {/* <Nav /> */}
      <br />
      <h4 style={{ color: "blue", height: 400 }}>About</h4>
    </div>
  );
}

function Contact() {
  return (
    <div style={{ backgroundColor: "green" }}>
      {/* <Nav /> */}
      <br />
      <h4 style={{ color: "pink", height: 400 }}>Contact</h4>
    </div>
  );
}
function Notfound() {
  return <h3 style={{ color: "red", margin: 50 }}>404 - Page not found</h3>;
}
function Nav() {
  return (
    <div>
      <h3 style={{ color: "tomato" }}>NavBar</h3>
      <Link style={{ color: "#ff007f", padding: 10 }} to="/">
        Home
      </Link>
      <Link style={{ color: "#ff007f", padding: 10 }} to="/about">
        About
      </Link>
      <Link style={{ color: "#ff007f", padding: 10 }} to="/contact">
        Contact
      </Link>
    </div>
  );
}
