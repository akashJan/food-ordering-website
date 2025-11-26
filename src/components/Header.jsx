import React, { useState } from "react";
import "./RestaurantHome.css";
import { LOGO_URL } from "./../util/constants";

const Header = () => {
  const [buttonNameState, setButtonNameState] = useState("Login");
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="No Image" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button
              className={`login-btn ${
                buttonNameState === "Logout" ? "logout" : ""
              }`}
              onClick={() => {
                setButtonNameState(
                  buttonNameState === "Login" ? "Logout" : "Login"
                );
              }}
            >
              {buttonNameState}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
