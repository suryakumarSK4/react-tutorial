import React,{useEffect,useState} from 'react';

// export default function Home(){
//     return(
//         <h1>Home</h1>
        
//     )
// }
export function SubHome(){
    return(
        <h1>SubHome</h1>
    )
}


// export default class Home extends React.Component{

//     // Component will unmount  { USER : 65 }
//     componentWillUnmount(){
//         alert("Component Removed");
//     }

//     render(){
//         return (
//             <div>Home component</div>
//         )
//     }
// }



// REACT HOOKS (using lifecycle from function)
function Home(p){
    // const [count,setN]=useState(0);
    // useEffect is equal to componentDidMount,componentDidUpdate,componentWillUnmount
    // componentDidMount
    useEffect(()=>{
        console.warn("useEffect -> componentDidMount");
    })
    // componentDidUpdate
    useEffect(()=>{
        console.warn("useEffect -> componentDidUpdate");
    },[])

    return(<div>
        <h3>Home component</h3>
        {/* <h4>{count}</h4>
        <button onClick={() => {setN(count+1)}} >update</button> */}

        {/* useEffect using props */}
        <h4>{p.count}</h4>
        {/* <button onClick={() => {setN(count+1)}} >update</button> */}
        </div>);
}
export default Home;