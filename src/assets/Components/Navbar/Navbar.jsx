// import React from 'react'
import './Navbar.css'
import logo from '../../logo/Samuel-2-25-2025.jpg';
import "tailwindcss";

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" className='navbar h-32'/>
        <ul className="nav-menu">
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contacts</li>
        </ul>
<div className="nav-connect">Connect With Me </div>
    </div>
  )  
}

 export default Navbar
