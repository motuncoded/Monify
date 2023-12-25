import React from "react";
import logo from "../assets/logo.svg";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <header className="logo-container">
          <img src={logo} className="logo" alt="Monify logo" />
          <h1>Monify</h1>
        </header>
        <ul className="primary-navigation">
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
      </nav>
    </div>
  );
};

export default Navbar;
