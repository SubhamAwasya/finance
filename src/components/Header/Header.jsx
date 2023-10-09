import React from "react";
import "./header.css";
import Card from "../Card/Card";

function Header() {
  const arr = [
    "fa-solid fa-gear",
    "fa-solid fa-cube",
    "fa-solid fa-shield-halved",
    "fa-solid fa-bug",
    "fa-solid fa-microchip",
    "fa-solid fa-ghost",
    "fa-solid fa-chess-rook",
    "fa-solid fa-chess-rook",
    "fa-solid fa-dice-d20",
  ];
  const createCard = () => {
    const randomIcone = arr[Math.floor(Math.random() * arr.length)];
    console.log(randomIcone);
    return <Card icone={randomIcone} />;
  };
  return (
    <div className="header-container">
      <div className="header-top-container">
        <div className="left">
          <h1>Let's find you</h1>
          <h1>the Best Insurance</h1>
          <div className="usp">
            <h3 className="lowest-price">
              50+ insurers with of the best prices
            </h3>
            <h3>Quick, easy & hassle free</h3>
          </div>
        </div>
        <div className="right">
          <img src="https://static.pbcdn.in/cdn/images/home/term_1cr_desktop.png?v=1"></img>
        </div>
      </div>
      <div className="card-container">
        {createCard()}
        {createCard()}
        {createCard()}
        {createCard()}
        {createCard()}
        {createCard()}
        {createCard()}
        {createCard()}
        {createCard()}
        {createCard()}
        {createCard()}
        {createCard()}
        {createCard()}
        {createCard()}
        {createCard()}
        {createCard()}
        {createCard()}
        {createCard()}
      </div>
    </div>
  );
}

export default Header;
