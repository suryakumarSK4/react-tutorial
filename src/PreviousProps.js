import React,{useEffect,useRef} from 'react'

function PreviousProps(props) {
    let values=[];
    const lastVal=useRef();
    useEffect(()=>{
        lastVal.current=props.counter
    })
    const preProps=lastVal.current
    
  return (
    <div>
        <hr />
        <h4>Previous State Props</h4>
        <h5>Counter Current : {props.counter}</h5>
        <h5>Previous PROPS : {preProps}</h5>
    </div>
  )
}

export default PreviousProps