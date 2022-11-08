import React, { PureComponent, useState, useMemo, Component, createRef, useRef } from "react";
import ReactDOM from "react-dom";
import Purecomp from "./Counter";
import AnotherComp from "./AnotherComp"

// %%%%%%%%%%%%%%  PURE COMPONENT WITH STATES and PROPS  %%%%%%%%%%%%%%%%%%

export default class App2 extends PureComponent {

    constructor(){
        super();
        this.state={count:1};
    }

    render()
    {
        // console.log("render");
        return(
            <div className="App">
                <h3>PURE COMPONENT</h3>

                {/* Using States */}

                {/* <p><b>{this.state.count}</b></p>
                <button
                onClick={() => this.setState({count:4})}
                >change</button> */}

                {/* Using PROPS COunter.js */}
                <Purecomp count={this.state.count}/>
                <button onClick={() => this.setState({count:4})}>
                    Update
                </button>
            </div>
        );
    }
}




// ***************      useMemo Hook       *********************
// export default function App2() {
//   const [count, counter] = useState(0);
//   const [update, updater] = useState(0);

// //   function Multi() {
// //     console.warn("multi");
// //     return count * 2;
// //   }

//   const multiMemo=useMemo(
//     function Multi() {
//         console.warn("multi");
//         return count * 2;
//       },[count],
      
//   )

//   const mulMemo = useMemo(
//       function UpdaterMemo(){
//           console.warn("Updater")
//         return update * 3;
//       },[update]
//   )
//   return (
//     <div className="App">
//       <h3>useMemo Hook</h3>
//       {/* <h4>Multicount : {Multi()}</h4> */}
//       <h4>{multiMemo}</h4>
//       <button onClick={() => counter(count + 1)}>counter</button>

//       {/* <h4>Update : {update}</h4> */}
//       <h4>{mulMemo}</h4>
//       <button onClick={() => updater(update + 1)}>Update</button>
//     </div>
//   );
// }







//@@@@@@@@@@@@@@@@@@@@@@@@@@@          REF        ######### 
// Ref is modified DOM directly  
// Asmuch as we want to avoid it ref
// Basically this is for same Component not pass props


// export default class App2 extends Component {

//   constructor(){
//     super();
//     this.ipRef = createRef();

//     // !!  ================= this is for showlist()
//     // this.state={li:[]};
//   }  
//   componentDidMount(){
//     // console.warn(this.ipRef.current.value="4");
//   }
//   showVal(){
//     console.log(this.ipRef.current.value);
//     this.ipRef.current.style.color = "blue";
//     this.ipRef.current.style.backgroundColor="yellow";


//     // !!  ================= this is for showlist()
//     // this.li.push(this.ipRef.current.value);
//     // this.setState({
//     //   li:this.state.li.concat([this.ipRef.current.value])
//     // })
//   }

//   // !!  ================= this is for showlist()

//   // li=[1,2,3,4];
//   // showList(){
//   //   console.log(this.state.li);
//   //   return (
//   //       <div style={{display:"block"}}>
//   //       {this.state.li}<br/>
//   //       </div>
//   //   )
//   // }
//   render(){
//   return(
//     <div className="App">
//       <h3>Ref in React</h3>
//       <input type="text" ref={this.ipRef}/>
//       <button onClick={() =>this.showVal()}>Show in console</button>
//       < br/><br />
      

//       {/* // !!  ================= this is for showlist() */}
//       {/* <button onClick={() => this.showList()}>Show List</button>
//       <h2 style={{color:"red"}}>
//       {this.showList()}
//       </h2> */}
//       </div>
//   )
//   }
// }





//@@@@@@@@@@@@@@@@@@@@@@@@@@@          useREF        ######### 
// useref for function
// export default function App2(){

//   let ipRef=useRef(null);
//   function changeVal(){
//     // console.log(ipRef.current.value);
//     // ipRef.current.value="Surya";
//     // ipRef.current.style.color="blue";
//     // ipRef.current.style.backgroundColor="yellow";
//     // ipRef.current.style.display="none";
//     // ipRef.current.focus();
//   }
//   return(
//     <div className="App">
//       <h3>UseRef</h3>
//       <input type="text" ref={ipRef}/>
//       <button onClick={changeVal}>Handle Input</button>
//     </div>
//   )
// }




// #########     Forward Ref ********************************
// Advance version of ***** Ref *****
// Using this we can give value for another component

// export default function App2(){

//   let ipRef=useRef(null);
//   function updateInput(){
//     ipRef.current.value="sk";
//     ipRef.current.style.color="blue";
//   }
//   return (
//     <div className="App">
//       <h3>Forward Ref</h3>
//       <AnotherComp ref={ipRef}/>
//       <button onClick={updateInput}>Update Input box</button>
//     </div>
//   )
// }







//@@@@@@@@@@@@@@@@    Controlled Component @@@@@@@@@@@@@@@@@
// Handle by the REACT STATE that is controlled component

// export default function App2(){

//   const [val,setVal]=useState("");
//   console.log(val)
//   return(
//     <div className="App">
//       <h3> Controlled Component </h3>
//       <input type="text" value={val} onChange={(e) => setVal(e.target.value)}/> 
//     </div>
//   )
// }



// @@@@@@@@@@@@@@@@    UNControlled Component @@@@@@@@@@@@@@@@@
// Handle by the (DOM or ref) that is uncontrolled component


// export default function App2(){

//   let nameRef=useRef(null);
//   let passRef=useRef(null);

//   function Noreload(e){
//     e.preventDefault();
//     // Using REF
//     console.log("Name is: ",nameRef.current.value,"\nPassword is: ",passRef.current.value);
    
//     // Using DOM
//     let email = document.getElementById("email").value;
//     console.log("E-mail is: ",email);
//   }
  
//   return(
//     <div className="App">
//       <h3> UNControlled Component </h3>
//       <form onSubmit={Noreload}>
//         <input type="text" ref={nameRef} /><br /><br />
//         <input type="password" ref={passRef} /><br /><br />
//         <input type="text" id="email"/>
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }







// ************* High order Component *************
// Takes another component as a Input and produce a output component
// export default function App2(){

//   return(
//     <div className="App">
//       <h3>HOC</h3>
//       <HOC passedComp={<Counter />} />
//       <Red passedComp={<Counter />} />
//       <Yellow passedComp={<Counter />} />
//       <Green passedComp={<Counter />} />
//       <Sidebar passedComp={<Counter />} />
//     </div>
//   )
// }

// function HOC(p){
//   return <h3>{p.passedComp}</h3>
// }
// function Red(p){
//   return <h4 style={{backgroundColor:"red"}}>{p.passedComp}</h4>
// }
// function Yellow(p){
//   return <h4 style={{backgroundColor:"yellow"}}>{p.passedComp}</h4>
// }
// function Green(p){
//   return <h4 style={{backgroundColor:"green"}}>{p.passedComp}</h4>
// }
// function Sidebar(p){
//   return <h4 style={{backgroundColor:"lightblue",width:100}}>{p.passedComp}</h4>
// }
// function Counter(){
//   const [count,updateCount]=useState(0);
//   return(
//   <div>
//     <h3>{count}</h3>
//     <button onClick={() => updateCount(count+1)}>Update</button>
//   </div>
//   )
// }






