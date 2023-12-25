import React from "react";
import logo from "../assets/logo.svg";

const Subscribe = () => {
  return (
    <div>
      <div className="subscribe">
        <div className="navigation">
          <div className="subscribe-logo">
            <img src={logo} className="logo" alt="Monify logo" />
            <h3 className="fs-500">Monify</h3>
          </div>

          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">About Us </a>
            </li>
            <li>
              <a href="#"> Courses</a>
            </li>
            <li>
              <a href="#"> Help</a>
            </li>{" "}
            <li>
              <a href="#"> Privacy</a>
            </li>
          </ul>
        </div>
        <div class="stay-updated">
          <h4 className="update">Stay updated</h4>
          <input type="text" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
