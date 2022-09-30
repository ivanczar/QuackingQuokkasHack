import React, { useState } from "react";
import logo from "../assets/ezyFind_Horizontal.png";
import "../components/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  let screen = toggle ? "register" : "scan";

  const toggleScreens = () => {
    setToggle(!toggle);
  };

  return (
    <div className="navbar">
      <img id="logo" src={logo} alt="ezyFind logo" />
      <Link to={`/${screen}`}>
        <button id="nav-button" onClick={toggleScreens}>
          {screen}
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
