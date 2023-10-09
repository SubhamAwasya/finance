import React from "react";
import "./footer.css";

function Footer() {
  const arr = [
    "geeks",
    "for",
    "geeks",
    "a",
    "portal",
    "to",
    "learn",
    "can",
    "be",
    "computer",
    "science",
    "zoom",
    "yup",
    "fire",
    "in",
    "be",
    "data",
    "geeks",
  ];
  return (
    <div className="footer-container">
      <div>
        <h1>More Products</h1>
        <list>
          {arr.map((e) => (
            <li>{e}</li>
          ))}
        </list>
      </div>
      <div>
        <h1>More Products</h1>
        <list>
          {arr.map((e) => (
            <li>{e}</li>
          ))}
        </list>
      </div>
      <div>
        <h1>More Products</h1>
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
