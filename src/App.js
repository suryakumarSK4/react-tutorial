import logo from "./logo.svg";
import React, { Component, useRef } from "react";
import { ReactDOM } from "react-dom";
import "./App.css";
import Home, { SubHome } from "./Home";
import User from "./User";
import { useState } from "react";
import Student from "./Student";
import Profile from "./Profile";
import Login from "./Login";
import ChildtoParent from "./ChildtoParent";
import UseContext from "./Hooks/UseContext";
import API_calling from "./Learning/API_calling";
import Props from "./Props and states/Props";
import UseState from "./Hooks/UseState";
import UseEffect from "./Hooks/UseEffect";
import { UseReducer } from "./Hooks/UseReducer";
import { UseRef } from "./Hooks/UseRef";
// export default function App() {
//   const a="surya";
//   // Nested Component Apple()
//   function Apple(){
//     return (
//     <div>
//       <h4>Apple</h4>
//       <p>From App js function component inside component</p>
//     </div>
//     )
//   }

//   // let [data,setData]=useState("surya");
//   let [data,setData]=useState(0);

//     function Clickevent()
//     {
//       // setData("sk");
//       setData(data+1)
//       console.log(data);
//     }
//     function Clickevent2()
//     {
//       // setData("sk");
//       setData(data-1)
//       console.log(data);
//     }

//   return (
//     <div className="App">
//      <h1>Hello World!</h1>
//     <Home />
//     <hr />
//     <SubHome />
//     <hr />
//     {/* <User name={a} fun={Apple()}/> */}
//     <User />
// <hr />
//     {/* {Apple()} */}
//     <Apple />

//     {/* Click Event */}
//     <button onClick={Clickevent}>Click</button>

// <hr />
//     {/* STATES is a kind of data container such as variables */}
//     <h3>{data}</h3>
//       <button onClick={Clickevent}>Add</button>
//      <button onClick={Clickevent2}>Remove</button>
//      {/* {console.log(data)}  */}
//      {/* <Compstate /> */}
//      <hr />
//     </div>
//   );

// }

// *********************** Class Component *****************
// class Compstate extends Component {
//   constructor(){
//     super();
//     this.state={name:'surya',age:20,data:0};
//     // this.state={data:0};
//   }

//   changeval = () => {
//     // this.setState({name:'sk',age:22});
//     this.setState({data:this.state.data+1});
//   }
//   render(){
//     return (
//       <div>
//         <h4>Class Component</h4>
//         <button onClick={()=>this.changeval()}>Change</button>
//         <button onClick={() => this.setState({data:this.state.data+2})}>Increase by 2</button>
//         {/* <h3>{this.state.name} - {this.state.age}</h3> */}
//         <h3>{this.state.data}</h3>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Compstate />, document.getElementById('root2'));

// Props With Function Component

// export default function App(){
//   // let name="surya";
//   const [name,setName]=useState("surya");
//   let [age,setAge]=useState(20);
//   return (
//     <div className="App">
//       <h3>Props in React</h3>
//       {/* <Student name={name} age={20}/> */}
//       <Student name={name} age={age}/>

//       <button onClick={() => {{setName("sk")}{setAge(22)}}}>Update</button>
//     </div>
//   )
// }

// ********************         Props with Class Component
// export default class App extends Component {
//   constructor(){
//     super();
//     this.state={name:"kumar",age:20}
//   }
//   senddata() {
//       // this.setState({name:"suryakumar.A"})
//       this.setState({name:"suryakumar",age:21});
//   }
//    render(){
//     const obj={name:'sk',age:22};
//      return(
//        <div className="App">
//          <h3>App Component</h3>
//          <button onClick={() => this.senddata()}>Change</button>
//          <Student name="surya" array={[0,1,2,3,4]}/>
//          <Student objname={this.state.name} objage={this.state.age}/>
//          <Student {...obj}/>
//        </div>
//      )
//    }
// }

// GET INPUT VALUE AND PASS TO COMPONENT

// export default function App(){
//   let [value,setVal]=useState(null);
//   let [print,setPrint]=useState(false);
//   function getData(val){
//   console.warn(val.target.value);
//   setPrint(false);
//   setVal(val.target.value);
// }
//   return (
//     <div className="App">
//       <h3>GET INPUT VALUE AND PASS TO COMPONENT</h3>
//       {
//         print? <h4>{value}</h4> :null
//       }
//       {/* <h4>{value}</h4> */}
//       <input type="text" onChange={getData}/>
//       <br />
//       <button onClick={() => setPrint(true)}>show</button>
//     </div>
//   )
// }

// TOGGLE USING BUTTON HIDE AND SHOW THE ELEMENT
// export default function App(){
//   let [data,Showdata]=useState(true);

//   return (
//     <div className="App">
//       {data? <h3>TOGGLE Show</h3> :null}
//       {data? <h3 style={{backgroundColor:"green"}}>TOGGLE Show</h3> :
//               <h3 style={{backgroundColor:"red"}}>TOGGLE Not Show</h3>}

//       <button onClick={() => Showdata(true)}>Show</button>
//       <button onClick={() => Showdata(false)}>Hide</button>

//       {/* toggle */}
//       {console.log(data)}
//       <button onClick={() => Showdata(!data)}>TOGGLE</button>
//     </div>
//   )
// }

// ^^^^^^^^^^^^^^^^^^^^^^^^   BASIC FORM

// function Collection(props){
//   return(
//     <div className="App">
//       <p style={{backgroundColor:"green",color:"white"}}>{props.data}</p>
//     </div>
//   )
// }

// export default function App(){

//   const [name,setName]=useState("");
//   const [dept,setDept]=useState("CSE");
//   const [term,setTerm]=useState(false);
//   const [datas,sendData]=useState("");
//   function handlesub(e){
//     e.preventDefault();
//     sendData("Name is "+name+" - "+dept+" - "+term);
//   }
//   return (
//         <div className="App">
//           <h3>Basic Form</h3>
//           <form onSubmit={handlesub}>
//             <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/><br />
//             <select onChange={(e) => setDept(e.target.value)} >
//               {/* <option></option> */}
//               <option>CSE</option>
//               <option>ECE</option>
//               <option>IT</option>
//             </select><br />
//             <input type="checkbox" onChange={(e) => {setTerm(e.target.checked)}} /><label>Agree</label><br />
//             <button>Submit</button>
//           </form>
//           <Collection data={datas}/>
//         </div>
//         )

// }

// %%%%%%%%%%% CONDITIONAL RENDERING if CONDITION
// export default function App(){

//   return (
//     <div className="App">
//       <h3>CONDITIONAL RENDERING if CONDITION</h3>

//       <Profile data={4}/>
//     </div>
//   )
// }

// @@@@@@@@@@@@@@@@@@@@@  BASIC FORM VALIDATION

// export default function App(){

//   return (
//     <div className="App">
//       <h3>Basic Form Validation</h3>

//       <Login />
//     </div>
//   )
// }

// @@@@@@@@@@@@@@@@@@@@@  Pass function as Props

export default function App() {
  //   function getData(){
  //     alert("Hello from APP")
  //   }

  //   let [first, setFirst] = useState("");
  //   const changeData = (event) => {
  //     setFirst(event.target.value);
  //   };

  //   let dataRef = useRef(null);
  //   const show = () => {
  //     console.log(dataRef.current.value);
  //     dataRef.current.focus();
  //     dataRef.current.value = "";
  //   };
  return (
    <div className="App">
      {/* <h3>{props.remainder}</h3>
      <h2>Parent APP</h2>

      <User data={getData}/>
      <hr />
      <h4>Function from child Student component</h4>
      <button onClick={props.childfunc}>Call Function</button> */}
      {/* <br />
      <br />
      <p>{first}</p>
      <br />
      <br />
      <input onChange={changeData} type={"text"} ref={dataRef} />
      <br />
      <br />
      <button onClick={show}>click me</button>

      <UseContext /> */}

      {/* <API_calling /> */}

      {/* <Props name={"surya"} />
      <Props name={"kumar"} />
      <Props /> */}

      {/* //? HOOKS */}
      {/* <UseState /> */}
      {/* <UseEffect /> */}

      {/* <UseContext /> */}
      {/* <UseReducer /> */}
      <UseRef />
    </div>
  );
}

// #############################              LIFE CYCLE

// REACT LIFE CYCLE

// export default function App(){
//   const[name,setName]=useState("surya");
//   return(
//     <div className="App">
//       {/* using app useState */}
//       {/* <User name={name}/>
//       <hr />
//       <button onClick={() => setName("sk")}>Update Name</button> */}

//       {/* using User constructor */}
//       {/* <User /> */}
//     </div>
//   )
// }

// REACT HOOKS (using lifecycle from function)
// function Usestates(){
//   // const [n,sN]=useState("okk");

//   let [y,sY]=useState(0);
//   return (
//     <div className="App">
//       {/* <h3>{n}</h3>
//       <button onClick={() => sN("yes")}>Change</button> */}

//       {/* send to Home 35 */}
//       {/* <h4>{n}</h4> */}
//       <Home count={y}/>
//       <button onClick={() => sY(y+1)} >update</button>
//     </div>
//   );
// }

// class App extends Component {

//   render(){
//     return (<div className="App">
//       <h3><Usestates /></h3>
//       <Home count={<Usestates />}/>
//     </div>)
//   }
// }
// export default Usestates;

// CHILD TO PARENT DATA PASSING

// export default function App() {

//   let [n,setN]=useState("surya");
//   function getData(n){
//     //  alert(n);
//      setN(n);
//   }
//   return(
//     <div className="App">
//       <h3>App parent</h3>
//       {n}
//       <hr />
//       <ChildtoParent funcpass={getData}/>
//     </div>
//   )
// }
