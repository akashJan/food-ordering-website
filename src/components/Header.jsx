import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../util/constants";
import useOnlineStatus from "../util/useOnlineStatus";
import UserContext from "../util/UserContext";

const Header = () => {
  const [buttonNameState, setButtonNameState] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  return (
    <header className="flex justify-between items-center px-10 py-4 bg-white shadow-md sticky top-0 z-50">
      {/* Logo + Title */}
      <div className="flex items-center gap-4">
        <img
          src={LOGO_URL}
          alt="logo"
          className="w-16 h-16 object-cover rounded-xl border-2 border-rose-500"
        />
        <h2 className="text-3xl font-extrabold tracking-[3px] uppercase text-rose-500 font-poppins">
          FoodExpress
        </h2>
      </div>

      {/* Navigation Items */}
      <nav>
        <ul className="flex items-center gap-10 font-poppins">
          <li>Online Status: {onlineStatus ? "✔" : "🔴"}</li>
          <li>
            <Link
              to="/"
              className="relative text-lg font-semibold text-gray-700 pb-1 hover:text-rose-500 transition"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-rose-500 transition-all duration-300 rounded-md hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="relative text-lg font-semibold text-gray-700 pb-1 hover:text-rose-500 transition"
            >
              About Us
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-rose-500 transition-all duration-300 rounded-md hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="relative text-lg font-semibold text-gray-700 pb-1 hover:text-rose-500 transition"
            >
              Contact Us
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-rose-500 transition-all duration-300 rounded-md hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link
              to="/grocery"
              className="relative text-lg font-semibold text-gray-700 pb-1 hover:text-rose-500 transition"
            >
              Grocery
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-rose-500 transition-all duration-300 rounded-md hover:w-full"></span>
            </Link>
          </li>

          {/* Login/Logout Button */}
          <button
            className={`ml-4 px-5 py-2 rounded-lg font-semibold text-white transition shadow-sm
              ${
                buttonNameState === "Login"
                  ? "bg-rose-500 hover:bg-rose-600"
                  : "bg-green-600 hover:bg-green-700"
              }
            `}
            onClick={() =>
              setButtonNameState(
                buttonNameState === "Login" ? "Logout" : "Login"
              )
            }
          >
            {buttonNameState}
          </button>
          <li>
            <Link
              to="/grocery"
              className="relative text-lg font-semibold text-gray-700 pb-1 hover:text-rose-500 transition"
            >
              {loggedInUser}
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-rose-500 transition-all duration-300 rounded-md hover:w-full"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
