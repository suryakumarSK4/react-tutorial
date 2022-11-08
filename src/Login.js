import React,{useState} from 'react';

export default function Login(){

    let [user,setName]=useState("");
    let [userErr,setErr]=useState(false);
    let [password,setPass]=useState("");
    let [passErr,SetpassErr]=useState(false);

    function userHandler(e){
        let item=e.target.value;
        // if(item.length < 4){
        //     setErr(true);
        // }
        // else{
        //     setErr(false);
        // }
        item.length<4?setErr(true):setErr(false);
        setName(item)
    }

    function pwordHandler(e){
        let item=e.target.value;
        // if(item.length < 4){
        //     SetpassErr(true);
        // }
        // else{
        //     SetpassErr(false);
        // }
        item.length<4?SetpassErr(true):SetpassErr(false);
        setPass(item)
    }


    function Noload(e){
        if(user.length < 4 || password.length < 4){
            alert("Invalid Data")
        }
        else{
            alert("All crt")
        }
        e.preventDefault();
        // console.warn(e.target.name.value +" "+e.target.password.value);
    }
    return(
        <React.Fragment>
            <h3>Basic Login</h3>
            <form onSubmit={Noload}>
                <input type="text" placeholder="name" name="name" onChange={userHandler}/>
                {userErr?<span>Invalid Name</span>:null}
                
                <br />
                <input type="password" placeholder="password" name="password" onChange={pwordHandler}/><br />
                {passErr?<span>Must be 4 characters</span>:null}<br />
                <button>Submit</button>
            </form>
        </React.Fragment>
    )
}

