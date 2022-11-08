import React,{useState} from 'react';
// import ReactDOM from 'react-dom';
function Profile(props){
    // const [logIn,setLog]=useState(8);
    // This is in APP.JS ***  254  ***
    let logIn=props.data;

    return (
        <React.Fragment>
            {
                // For 2 Condition
                // logIn?<h3>Welcome Surya</h3>:<h3>Welcome Guest</h3>
                
                // For more Condition
                logIn==1?<h3>Welcome Surya</h3>
                :logIn==2?<h3>Welcome kumar</h3>
                :logIn==3?<h3>Welcome SK</h3>
                :<h3>Welcome Guest</h3>

            }
        </React.Fragment>
    )
}
export default Profile;