import React, { useState } from "react";
import logo from "../assets/monify-logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggle = (e) => {
    e.preventDefault();
    setIsNavExpanded(!isNavExpanded);
  };
  return (
    <div className="navbar">
      <nav>
        <header className="logo-container">
          <img src={logo} className="logo" alt="Monify logo" />
          <h1>Monify</h1>
        </header>

        <ul
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#"> About</a>
          </li>
          <li>
            <a href="#"> Login</a>
          </li>
        </ul>

        <div className="hamburger-menu" onClick={toggle}>
          <AiOutlineMenu className="menu" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
