import React,{useEffect,useState} from 'react'
import {Table} from 'react-bootstrap'

function Get() {
    // UPDATE 
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [email,setEmail]=useState("");
    const [userId,setUserId]=useState(null);

    const [users,setUser]=useState([]);
    useEffect(() => {
        getUser()
    },[])
    // console.log(users);

function getUser(){
    fetch("http://localhost:3000/records")
        .then((result) => {
            result.json().then((resp) => {
                setUser(resp)
                // UPDATE
                setName("")
                setAge("")
                setEmail("")
                setUserId("")
            })
        })
}
function deleteUser(id){
    // console.log("delete",id);
    fetch(`http://localhost:3000/records/${id}`,{
        method: "DELETE",
    }).then((result)=>{
        result.json().then((resp)=>{
            console.log("deleted item is: ",resp)
            getUser();
        })
    })
}

// Select for UPDATE
function selectUser(id){
    // console.log("update function",users[id-1]);

    let item=users[id-1]
    setName(item.name)
    setAge(item.age)
    setEmail(item.email)
    setUserId(item.id)
}

// UPDATE
function updateUser(){
    let item={name,age,email,userId}
    // console.log("update User",item);

    fetch(`http://localhost:3000/records/${userId}`,{
        method: "PUT",
        headers:{
            'Accept': "application/json",
            'Content-type': "application/json"
        },
        body:JSON.stringify(item)
    }).then((resp)=>{
        resp.json().then((result)=>{
            console.log(result);
            getUser();
        })
    })
}


  return (
    <div className="App">
        <h3>Get the data from API'S</h3>

        <Table striped variant="warning">
          <tbody>
          <tr>
            <td>#</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
            <td>Action</td>
          </tr>

          {users.map((item,i) => (
                  <tr key={i}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>{item.email}</td>
                      <td><button onClick={() => deleteUser(item.id)} style={{marginRight:10}}>Delete</button>
                      <button onClick={() => selectUser(item.id)}>UPDATE</button></td>   
                  </tr>
          ))
          }
          </tbody>
      </Table>
      <div>
          <input type="text" placeholder="name" value={name} name="name" onChange={(e) => setName(e.target.value)} /> <br /><br />
          <input type="text" placeholder="age" value={age} name="age" onChange={(e) => setAge(e.target.value)}/> <br /><br />
          <input type="text" placeholder="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)}/> <br /><br />
          <button onClick={updateUser}>Update User</button>
      </div>

    </div>
  )
}

export default Get