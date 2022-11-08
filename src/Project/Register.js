import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Header from './Header'
function Register() {

  useEffect(()=>{
    if(localStorage.getItem('user-info'))
    {
      history.push("/add")
    }
  },[])

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const history=useHistory();

  async function Signup(){
    // console.log(name,email,password);
    let item={name,email,password};
    // console.log(item);

    let result =await fetch('http://localhost:3000/profile',{
      method: 'POST',
      headers: {
        "Content-Type":'application/json',
        "Accept":'application/json'
      },
      body: JSON.stringify(item)
    })

    result = await result.json()
    // console.log("result",result)
    localStorage.setItem("user-info",JSON.stringify(result))
    history.push("/add")
  }

  return (
    <>
      <Header />
    
    <div className="col-sm-6 offset-sm-3">
        <h3>Register</h3><br />
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name" /><br />
        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="E-mail" /><br />
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" /><br />
        <button className="btn btn-success" onClick={Signup}>Sign-UP</button>
    </div>
    </>
  )
}

export default Register