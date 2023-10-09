import React from "react";
import "./header.css";
import Card from "../Card/Card";

function Header() {
  return (
    <div className="header-container">
      <div className="header-top-container">
        <div className="left">
          <h1>Let's find you</h1>
          <h1>the Best Insurance</h1>
          <div class="usp">
            <h3 class="lowest-price">50+ insurers with of the best prices</h3>
            <h3>Quick, easy & hassle free</h3>
          </div>
        </div>
        <div className="right">
          <img src="https://static.pbcdn.in/cdn/images/home/term_1cr_desktop.png?v=1"></img>
        </div>
      </div>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Header;
