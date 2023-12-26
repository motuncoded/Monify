import React from "react";
import phone from "../assets/phone.png";
import {
  MdArrowLeft,
  MdManageAccounts,
  MdOutlineShowChart,
  MdSavings,
} from "react-icons/md";

const Features = () => {
  return (
    <div className="feature-container">
      <div class="features">
        <h3>Features</h3>
        <h4>Everything required to effortlessly manage your finances.</h4>
        <h5>
          Open a full featured account in with virtual cards in less than 5
          minutes.
        </h5>
      </div>
      <div className="featured">
        <div className="featured-card">
          <div className="featured-card-container">
            <MdManageAccounts color="black" className="icon-account" />
            <div className="card-paragraph">
              <h6>Account Management</h6>
              <p className="first-paragraph">
                Acesss a detailed record of your past transactions, and
                conveniently search for specific transactions when needed{" "}
              </p>
              <p className="featured-link">Read &#8594;</p>{" "}
            </div>
          </div>
          <div className="featured-card-container">
            <MdOutlineShowChart color="black" className="icon-account" />
            <div className="card-paragraph">
              <h6>Budgeting and Expense Tracking</h6>
              <p className="first-paragraph">
                Acesss a detailed record of your past transactions, and
                conveniently search for specific transactions when needed{" "}
              </p>
              <p className="featured-link">Read &#8594;</p>{" "}
            </div>
          </div>
          <div className="featured-card-container">
            <MdSavings color="black" className="icon-account" />
            <div className="card-paragraph">
              <h6>Savings and Investments</h6>
              <p className="first-paragraph">
                Acesss a detailed record of your past transactions, and
                conveniently search for specific transactions when needed{" "}
              </p>
              <p className="featured-link">Read &#8594;</p>{" "}
            </div>
          </div>{" "}
          <div></div>
        </div>
        <div className="featured-image">
          <img src={phone} alt="phone" />
        </div>
      </div>
    </div>
  );
};

export default Features;
