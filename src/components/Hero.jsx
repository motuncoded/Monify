import React from "react";
import Navbar from "./Navbar";
import HeroContainer from "./HeroContainer";
import money from "../assets/money.png";
import people from "../assets/people.png";
import { GoArrowUpRight } from "react-icons/go";
function Hero() {
  return (
    <div className="hero-container">
      <div className="first">
        <div className="cta-paragraph">
          <h4> New!</h4>
          <h4> Download the new iOS app </h4>
          <GoArrowUpRight className="icon-arrow" size={15} color="black" />
        </div>
        <h5>Effortless banking with seamless Functionality</h5>
        <p>
          Straightforward, transparent banking without concealed charges and
          complimentary overdrafts{" "}
        </p>
        <button className="cta-button">Get started</button>
      </div>
      <div className="second">
        <img src={people} alt="money" />
      </div>
    </div>
  );
}

export default Hero;
