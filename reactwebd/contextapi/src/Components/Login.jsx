import React,{ useState,useContext } from "react"
import UserContext from "../Context/UserContext"

const Login = () => {
const[username,setusername]=useState 


  const handleSubmit=()=>{

  }
  return (
    <div>
     < usercontext>
     <h1>
      Login
      <input type="text" placeholder='username' />
      
      <input type=" text" placeholder='password' />
      <button onClick={handleSubmit}>Submit</button>
     </h1>
     </usercontext>
    </div>
  )
}

export default Login
