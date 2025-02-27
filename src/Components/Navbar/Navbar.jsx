import './Navbar.css'
import {logo} from '../../assets';

const Navbar = () => {
  return (
    <header className='navbar'>
       <img src={logo} alt="" className="absolute -left-4 top-0 h-24 w-auto object-contain" />
        <ul className="nav-menu">
          <li><a href="#dashboard">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Portfolio</a></li>
          <li><a href="">Contacts</a></li>
        </ul>
<div className="nav-connect">Connect With Me </div>
    </header>
  )  
}

 export default Navbar
