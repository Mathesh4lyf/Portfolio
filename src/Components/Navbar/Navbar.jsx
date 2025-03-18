import { useState } from "react"; // Import the useState hook for managing mobile menu state
import "./Navbar.css";
// import { logo } from "../../assets";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false); // State to track if menu is open

  const toggleMenu = () => {
    setIsMobile(!isMobile); // Toggle mobile menu visibility
  };

  return (
    <header className={`navbar ${isMobile ? "mobile" : ""}`}>
      {/* <img
        src={logo}
        alt=""
        className="absolute -left-4 top-0 h-24 w-auto object-contain"
      /> */}
      <ul className="nav-menu">
        <li>
          <a href="#dashboard">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#mywork">MyWorks</a>
        </li>
        {/* <li>
          <a href="">Portfolio</a>
        </li> */}
        <li>
          <a href="#contact">Contacts</a>
        </li>
      </ul>
      <div className="nav-connect">
        <a href="#contact" className="connect-link">
          Connect With Me
        </a>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="nav-mob-icon" onClick={toggleMenu}>
        {/* Simple hamburger icon */}
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Mobile close button */}
      <div className="nav-mob-close" onClick={toggleMenu}>
        <span className="close-icon">X</span>
      </div>
    </header>
  );
};

export default Navbar;
