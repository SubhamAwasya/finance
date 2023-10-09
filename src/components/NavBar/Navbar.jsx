import React, { useState } from "react";
import axios from "axios";
import "./navbar.css";

const url = "http://localhost:3000/todo";

function Navbar() {
  return (
    <div className="navbar-container">
      <h3 className="navbar-logo" onClick={() => {}}>
        LOGO
      </h3>
      <div className="navbar-links">
        <a>Insurance Products</a>
        <a>Renew Your Policy</a>
        <a>Claim</a>
        <a>Support</a>
        <button className="navbar-btn">sign in</button>
      </div>
    </div>
  );
}

export default Navbar;
