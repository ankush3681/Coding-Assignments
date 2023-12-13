import React, { useState } from 'react';
import "../style/Navbar.css";
import { signOut } from 'firebase/auth'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link,useNavigate } from "react-router-dom";
import { auth } from '../firebase';

const Navbar = () => {
    const [click,setClick] = useState(false);
    const navigate = useNavigate();

    const handleLogout = async () =>{
      signOut(auth);
      navigate("/")
      alert("Logout Sucessfully!")
    }

    const handleClick = () =>{
        setClick(!click);
         console.log(click);
    }
  return (
    <>
      <nav>
        <div className='nav-div1' onClick={handleClick}><GiHamburgerMenu className='menuIcon' size={30} color='white'/></div>
        <div className='nav-div2'>
            <ul>
                <Link to="/home" className='navlink'><li>Home</li></Link>
                <Link to="/favorite" className='navlink'><li>Favourites</li></Link>
                <Link to="/watchlist" className='navlink'><li>Watchlist</li></Link>
            </ul>
        </div>
        <div className='nav-div3'>
            <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      <div className={click ? "navSliderClicked" : "navSlider"}>
          <Link to="/home" className='navlink'><p>Home</p></Link>
          <Link to="/favorite" className='navlink'><p>Favourites</p></Link>
          <Link to="/watchlist" className='navlink'><p>Watchlist</p></Link>
      </div>
    </>
  )
}

export default Navbar;
