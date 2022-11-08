import React,{useEffect} from 'react'
import {useHistory} from 'react-router-dom'

function Protected(props) {

    let Component = props.Comp
    let history = useHistory();
    
    useEffect(()=>{
        if( !localStorage.getItem('user-info') ){
            history.push('/register')
        }
    }) 

    return (
    <div>
        <Component />
    </div>
  )
}

export default Protected