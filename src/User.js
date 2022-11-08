import React,{Component} from "react";
import App from "./App"
import Student from './Student'
import Home from './Home'

// export default class User extends Component {
//     constructor(){
//         super();
//         // this.state={email:"surya@123",count:0};
//         // console.warn("Constructor");

//         // unmount
//         this.state={show:true};
//     }

//     // This is run after Render so we can call( API) here
//     componentDidMount(){
//         console.warn("componentDidMount")
//     }

//     // any component is update only that time call this function
//     componentDidUpdate(prevProps,prevState,snapshot) {
//         console.warn("componentDidUpdate",prevProps);
//         if(this.state.count < 4)
//         {
//         this.setState({count:this.state.count+1});
//         }
//     }

//     // This is work before componentDidUpdate
//     //  This is control componentDidUpdate is work are not
    
//     shouldComponentUpdate(){
//         console.log("shouldComponentUpdate");
//         // also use conditions also
//         if(this.state.count<=10)
//         return true;
//         return false;
//     }

//     // This is delete the component
    

//     // This is run after Constructor
//     render() {
//         // console.log("render",this.props);
//         // console.warn("render")
//         return(
//             <>
//                 <h3>USER Component</h3>
//                 {this.props.fun}
//                 <h3>Hello User {this.props.name}</h3>
//                 </>

//             // REACT LIFE CYCLE
//             //    APP.JS    (   325   )
//             // <div>
//             //     {/* APP.JS     332   */}
//             //     {/* // from app UseUpdate */}
//             //     {/* <h3>User Component</h3>
//             //     <p>{this.props.name}</p> */}

//             //     {/* Using constructor state */}
//             //     {/* <h3>User Component</h3>
//             //     <p>{this.state.email} -- {this.state.count}</p>
//             //     <button onClick={() => this.setState({email:"sk@4321",count:this.state.count+1})}>Update</button> */}



//             //     {/* Component will Unmount */}
//             //     {/* {
//             //         this.state.show?<Home />:<h4>component removed</h4>
//             //     }
//             //     <button onClick={() => this.setState({show:!this.state.show})}>Update</button> */}

//             // </div>
//             )
//     }
// }




//  Send this function to App component 
// @@@@@@@@@@@@@@@@@@@@@  Pass function as Props  293
function User(p)
{
    function U1(){
        alert("Hello from USER");
    }
 return ( <div>
     <hr />
            <h3>User Function send to Parent</h3>
            <button onClick={p.data}>Call APP Function</button>
            
            {/* <App remainder={U1}/> */}
            <hr />
            <Student userdata={U1} />
            </div>
           )
 }
 export default User;