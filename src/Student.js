import React,{Component} from 'react';
import App from './App'
//Function Component PROPS

// export default function Student(props){
//     console.log(props);
//     return(
//     <div>
//             <h3 style={{backgroundColor:"yellow",margin:20}}>Hello Student {props.stuname}</h3>
//             <h4>Age is {props.age}</h4>

//             {/* using state */}
//             <h3 style={{backgroundColor:"yellow",margin:20}}>Hello Student {props.name}</h3>
//     </div>
//     )
// }



// Class Component PROPS

// export default class Student extends Component {
    
//     render(){
        
//      console.warn(this.props);
//         return(<div>
//             <h3 style={{backgroundColor:"yellow",margin:20}}>Class Component</h3>
//             <p>Hello student {this.props.name}</p>
//             <p>{this.props.array}</p>
//             <p>{this.props.objname} {this.props.objage}</p>
//             <p>{this.props.name} {this.props.age}</p>
//         </div>)
//     }
// }



// @@@@@@@@@@@@@@@@@@@@@  Pass function as Props
//  User.js ------ >>>> 81
function Student(props){


    function getDatafromchild(){
        alert("GOT IT ALL");
      }
    //  GET DATA FROM CHILD USER 
     return (
     <div>
         <h3>Student Component receive from User</h3>
         <button onClick={props.userdata}>Show</button>

        <App childfunc={getDatafromchild} />
     </div>
     )
}
export default Student;