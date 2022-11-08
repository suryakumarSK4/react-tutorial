import React from 'react'

function StateObject(props) {
    const [data,setData]=React.useState({name:'surya',age:22})
  return (
    <div className="App">
        <h3>State With Object</h3>
        {/* <h4>{props.objs}</h4> */}

        <input type="text" onChange={(e) => setData({...data,name:e.target.value})}/>
        <input type="text" onChange={(e) => setData({...data,age:e.target.value})}/>
        <h4>{data.name}</h4>
        <h4>{data.age}</h4>

        <Child />

    </div>
  )
}

export default StateObject

function Child(){
    const obj={
        name:"surya", 
        age: 22, 
        email: "surya165078@gmail.com"
    }
    return (
        <div>
            <hr />
            <h3>Child Component</h3>
            {/* <StateObject objs={obj.name} /> */}
        </div>
    )
}