import React from "react";
import "./card.css";
function Card({ icone }) {
  return (
    <div className="card">
      <div className="card-img">
        <i className={icone} style={{ color: "#000000" }}></i>
      </div>
      <span className="card-text">card text</span>
    </div>
  );
}

export default Card;
