import "../styles/Navbar.css";
import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () =>{
        signOut(auth);
        navigate("/")
        alert("Logout Sucessfully!")
    }
  return (
    <nav className="nav">
      <div>
          <h1>COMPETISHUN</h1>
      </div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  )
}

export default Navbar
