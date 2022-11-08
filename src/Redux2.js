import React from 'react';

const Redux2=(p) => {
    // ReDUX props
    const {data} = p;
    return (
        <div style={{backgroundColor: 'lightblue',height: 400}}>
            <h3>Props Component</h3>
            <h6>{p.data.name}</h6>
            <h6>{data.name}</h6>
        </div>
    )
}

export default Redux2;
