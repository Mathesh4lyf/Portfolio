import "./Navbar.css";
// import { logo } from "../../assets";

const Navbar = () => {
  return (
    <header className="navbar">
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
    </header>
  );
};

export default Navbar;
