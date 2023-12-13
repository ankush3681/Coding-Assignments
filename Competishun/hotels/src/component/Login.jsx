import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, googleAuthProvider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import "../styles/Login.css";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const navigate = useNavigate();

    const handleClick = async () =>{
          try {
            const result = await signInWithPopup(auth,googleAuthProvider);
            console.log(result)
            navigate("/home");
            alert("Login Successfully!")
          } catch (err) {
            console.log(err);
          }
    }
  return (
    <div className='login-container'>
       <div className='login-box'>
        <h1>SignIn Here</h1>
        <button onClick={handleClick}><FcGoogle size={35}/> SignIn With Google</button>
       </div>
    </div>
  )
}

export default Login;
