import React from "react";
import "./footer.css";

function Footer() {
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
  return (
    <div className="footer-container">
      <div>
        <div>More Products</div>
        <list>
          {arr.map((e) => (
            <li>{e}</li>
          ))}
        </list>
      </div>
      <div>
        <div>More Products</div>
        <list>
          {arr.map((e) => (
            <li>{e}</li>
          ))}
        </list>
      </div>
      <div>
        <div>More Products</div>
        <list>
          {arr.map((e) => (
            <li>{e}</li>
          ))}
        </list>
      </div>
    </div>
  );
}

export default Footer;
