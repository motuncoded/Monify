import React from "react";
import money from "../assets/money.png";
const Started = () => {
  return (
    <div className="get-started">
      <div>
        <h3>Get started today</h3>
        <p className=""> To ball like Dvido, Wizkid and Burnaboy!</p>
        <p>Join us today !</p>
        <button className="cta-button"> Get Started</button>
      </div>
      <img src={money} alt="money" />
    </div>
  );
};

export default Started;
