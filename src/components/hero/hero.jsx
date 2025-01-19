import "./hero.css";
import { useState, useEffect } from "react";

const yachtNames = [
  "Yacht Rentals ",
  "Luxury Yachts ",
  "Exclusive Charters ",
  "Premium Yachts ",
  "Standard Yachts",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % yachtNames.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero center" id="hero">
      <div className="hero-content">
        <h3></h3>
        <div className="yacht-animation">
          <div className="yacht-text">{yachtNames[index]}</div> in Dubai
        </div>
        <br />
        <br />
        <br />
        <div className="btns">
          <ul>
            <li>
              <a
                href="tel:+971543307699"
                target="_blank"
                rel="noopener noreferrer"
              >
                Call
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+971543307699?text=I%20need%20more%20Info%20!"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="mailto:gulfyachtrental@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
