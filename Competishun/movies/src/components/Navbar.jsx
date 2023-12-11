import React, { useState } from 'react';
import "../style/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [click,setClick] = useState(false);

    const handleLogout = () =>{
         
    }

    const handleClick = () =>{
        setClick(!click);
         console.log(click);
    }
  return (
    <>
      <nav>
        <div className='nav-div1' onClick={handleClick}><GiHamburgerMenu className='menuIcon' size={30}/></div>
        <div className='nav-div2'>
            <ul>
                <Link className='navlink'><li>Home</li></Link>
                <Link className='navlink'><li>Favourites</li></Link>
                <Link className='navlink'><li>Watchlist</li></Link>
            </ul>
        </div>
        <div className='nav-div3'>
            <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      <div className={click ? "navSliderClicked" : "navSlider"}>
          <Link className='navlink'><p>Home</p></Link>
          <Link className='navlink'><p>Favourites</p></Link>
          <Link className='navlink'><p>Watchlist</p></Link>
      </div>
    </>
  )
}

export default Navbar;
