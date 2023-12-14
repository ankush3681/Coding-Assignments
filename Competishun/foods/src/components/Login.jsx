import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, googleAuthProvider } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import "../style/Login.css";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const navigate = useNavigate();

    const handleClick = async () =>{
          try {
            const result = await signInWithPopup(auth,googleAuthProvider);
            console.log(result)
            navigate("/recipe");
            alert("Login Successfully!")
          } catch (err) {
            console.log(err);
          }
    }
  return (
    <div className='login-container'>
       <div className='login-box'>
        <h1>Sign In Here</h1>
        <p>Sign In Here with google</p>
        <button onClick={handleClick}><FcGoogle size={35} className='googleIcon'/> Sign In With Google</button>
        <p>Don't have an account? <Link className='signup'>SignUp</Link></p>
       </div>
    </div>
  )
}

export default Login;
