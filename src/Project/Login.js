import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Header from './Header'
function Login() 
{
  const history=useHistory();

  useEffect(()=>{
    if(localStorage.getItem('user-info'))
    {
      history.push("/add")
    }
  },[])

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  async function logIn(){
    // console.log(email,password);
    let item = {email,password};
    let result = await fetch("http://localhost:3000/profile",{
      method: 'POST',
      headers: {
        "Content-Type":'application/json',
        "Accept":'application/json'
      },
        body: JSON.stringify(item)
      });
      result = await result.json();
      localStorage.setItem("user-info",JSON.stringify(result))
      history.push("/add");
  } 

  return (
    <div>
      <Header />
        
        <div className="col-sm-6 offset-sm-3">
        <h3>Login Page</h3><br />
        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="E-mail" /><br />
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" /><br />
        <button className="btn btn-success" onClick={logIn}>LogIn</button>
    </div>
    </div>
  )
}

export default Login;