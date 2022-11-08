import React,{useState} from 'react'
import PreviousProps from './PreviousProps';

function PreviousState() {

  // ************    PREVIOUS STATE   ****************
    // const [num,setNum]=useState(1);
    // function Randnum(){
        // let item=Math.floor(Math.random()*10);
        // // setNum(item)
        // setNum((prevState) => {
        //     // console.log(prevState-item)
        //     // console.log(prevState)
        //     // if(prevState == 4)
        //     //     alert("Value 4 is Gone..")
        //     return item;
        // })

        // OR

        // for(let i=0;i<4;i++){
        //     // Normal type is not working
        //     // setNum(num+1);

        //     // so Use prestate ,now Working fine
        //     setNum((pre) => pre+i);
        // }
    // }


    // &&&&&& PreviousProps !!!!!!!!!!!!!!!!!!!!!!!!

    const [count,setCount]=useState(4);

    // function ChangeVal(){
    //   let item=Math.floor(Math.random()*10);
    //   setCount((preProp) => {
    //     console.log(preProp)
    //     return item
    //   });
    // }
  return (
    <div className="App">
        <h3>Previous state</h3>
        {/* <h4>{num}</h4> */}
        {/* <button onClick={Randnum}>Change Num</button> */}

        {/* PREVIOUS PROPS */}
        <button onClick={() => setCount(Math.floor(Math.random()*10))}>Counter</button>
        <PreviousProps counter={count}/>
    </div>
  )
}

export default PreviousState