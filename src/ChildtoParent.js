import React from 'react';
import useState from 'react';
function ChildtoParent(p){

    let name="suryakumar";
    // console.log(p.funcpass);
    return (
        <>
            <h6>Child Component</h6>
            <h6>Data send from child is {name}</h6>
            <button onClick={() => p.funcpass(name)}>Click</button>
        </>
    )
}

export default ChildtoParent;