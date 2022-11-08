import React,{useEffect,useState} from 'react'


function Post() {

    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [email,setEmail]=useState("");

    function saveData(){
        let data={name,age,email}
        // console.log(data);

        fetch("http://localhost:3000/records",{
            method: "POST",
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            // console.log("response",resp);
            resp.json().then((result) => {
                // console.log("result",result);
            })
        })
    }

    return (
    <div className="App">
        <h3>Post Method</h3>
        <form>
            <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/><br /><br />
            <input type="text" name="age" value={age} onChange={(e)=>{setAge(e.target.value)}}/><br /><br />
            <input type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br /><br />
            <button type="button" onClick={saveData}>Save User</button>
        </form>
    </div>
  )
}

export default Post;