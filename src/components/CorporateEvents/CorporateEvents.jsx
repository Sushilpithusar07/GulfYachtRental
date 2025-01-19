import React from "react";
import "./CorporateEvents.css";
import award from "../../assets/Corporate Events/award.webp";
import team from "../../assets/Corporate Events/team.webp";
import product from "../../assets/Corporate Events/product.webp";
import corporate from "../../assets/Corporate Events/corporate.webp";
import Buttons from "../Buttons/buttons";

const CorporateEvents = () => {
  return (
    <>
      <div className="corporateEvents">
        <div className="event">
          <img src={product} alt="Product Launch" />
          <div className="description">
            <h2>Product Launch</h2>
            <p>
              Arranging a corporate product launch event at a yacht in Dubai
              will definitely help you in achieving your mega goals with your
              staff members.
            </p>
          </div>
        </div>
        <div className="event">
          <img src={corporate} alt="Corporate Seminar" />
          <div className="description">
            <h2>Corporate Seminar</h2>
            <p>
              Include company seminars, annual audit of the company with the
              team. In short, it will be good enough to arrange your annual
              corporate meeting at corporate yacht
            </p>
          </div>
        </div>
        <div className="event">
          <img src={team} alt="Team Building Activities" />
          <div className="description">
            <h2>Team Building Activities</h2>
            <p>
              Let our expert planners help you host the perfect team building
              event on yacht. You can perform multiple team building activities
              on yacht Dubai.
            </p>
          </div>
        </div>
        <div className="event">
          <img src={award} alt="Employees Award" />
          <div className="description">
            <h2>Employees Award</h2>
            <p>
              Host employee award ceremony on a yacht in Dubai and make it
              special for the team. Corporate charter Dubai provides you with
              best professional environment
            </p>
          </div>
        </div>
        <div className="corporate-content">
          <h1>CORPORATE EVENTS ON YACHTS & BOATS</h1>
          <p>
            Gulf yachts dubai, organise a very productive corporate events on
            yachts. You can hire the best corporate private yacht in Dubai at a
            decent price with us. Private yachts in Dubai best place for
            business meetings. Plan for a private yacht hire Dubai and book your
            corporate events and meetings. call now for business deal on our
            corporate yacht charter in Dubai
          </p>
        </div>
      </div>
      <Buttons />
    </>
  );
};

export default CorporateEvents;
