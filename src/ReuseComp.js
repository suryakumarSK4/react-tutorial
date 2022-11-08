import React from 'react';

function Reuse(p){
//    This is come from App2.js -> 143 <-  line
    return (
        <div className="App">
            {/* <h3>Reuse Component with List</h3>  */}
            
            {/*  All the styles in App.css*/}
            <sk >{p.data.name} -- </sk>
            <span>{p.data.age} -- </span>
            <span>{p.data.email}</span>
        </div>
    )
}

export default Reuse;