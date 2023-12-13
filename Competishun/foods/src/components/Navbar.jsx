import React, { useState } from 'react';
import "../style/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link,useNavigate } from "react-router-dom";
import { auth } from '../firebase';
import { signOut } from "firebase/auth"

const Navbar = () => {
    const [click,setClick] = useState(false);
    const navigate = useNavigate();

    const handleLogout =async() =>{
      try {
        signOut(auth);
      navigate("/")
      alert("Logout Sucessfully!")
      } catch (error) {
        console.log(error)
      }
      
    }

    const handleClick = () =>{
        setClick(!click);
        //  console.log(click);
    }
  return (
    <>
      <nav>
        <div className='nav-div1' onClick={handleClick}><GiHamburgerMenu className='menuIcon' size={30} color='white'/></div>
        <div className='nav-div2'>
            <ul>
                <Link to="/recipe" className='navlink'><li>Recipe</li></Link>
                <Link to="/calorie" className='navlink'><li>Calorie</li></Link>
                <Link to="/diet" className='navlink'><li>Diet</li></Link>
            </ul>
        </div>
        <div className='nav-div3'>
            <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      <div className={click ? "navSliderClicked" : "navSlider"}>
          <Link to="/recipe" className='navlink'><p>Recipe</p></Link>
          <Link to="/calorie" className='navlink'><p>Calorie</p></Link>
          <Link to="/diet" className='navlink'><p>Diet</p></Link>
      </div>
    </>
  )
}

export default Navbar;
