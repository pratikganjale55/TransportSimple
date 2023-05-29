import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png" ;
import bars from "../../assets/bars.png" ;
import "./Header.css"
const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false ;
    const [meanuOpen, setMenuOpen] = useState(false) ;
  return (
    <div className='header' id='header'>
     <img src={logo} alt="" className='logo'/>
     <ul className="header_menu">
       <li>Home</li>
       <li>Feature</li>
       <li>Industry</li>
       <li>About</li>
       <li>Contact us</li>
      </ul>
     <div className='navbar_button'>
        <button >Get demo</button>
     </div>
      
    </div>
  )
}

export default Header
