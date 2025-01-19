import React from "react";
import "./WaterSports.css";
import Jetski from "../../assets/WaterSports/Jetski.jpg";
import Donut from "../../assets/WaterSports/Donut-Rides.jpg";
import Banana from "../../assets/WaterSports/Banana-Boat-Ride.jpg";
import Wakeboards from "../../assets/WaterSports/Wakeboards.jpg";
import Flyboards from "../../assets/WaterSports/flyboat.jpg";
import Parasailing from "../../assets/WaterSports/Parasailing.jpg";
import Buttons from "../Buttons/buttons";
import { Link } from "react-router-dom";

const WaterSports = () => {
  return (
    <>
      <div className="watersports-container newYear">
        <h1 className="index">WaterSports</h1>
      </div>

      <div className="corporateEvents">
        <Link to="/packages/watersports/jetski" className="link">
          <div className="watersports">
            <img src={Jetski} alt="Product Launch" />
            <div className="description">
              <h2>Jetski Ride</h2>
            </div>
          </div>
        </Link>
        <Link to="/packages/watersports/donut-rides" className="link">
          <div className="watersports">
            <img src={Donut} alt="Corporate Seminar" />
            <div className="description">
              <h2>Donut Rides</h2>
            </div>
          </div>
        </Link>
        <Link to="/packages/watersports/banana-rides" className="link">
          <div className="watersports">
            <img src={Banana} alt="Team Building Activities" />
            <div className="description">
              <h2>Banana boat ride</h2>
            </div>
          </div>
        </Link>
        <Link to="/packages/watersports/wakeboards" className="link">
          <div className="watersports">
            <img src={Wakeboards} alt="Employees Award" />
            <div className="description">
              <h2>Wakeboards</h2>
            </div>
          </div>
        </Link>
        <Link to="/packages/watersports/flyboards" className="link">
          <div className="watersports">
            <img src={Flyboards} alt="Employees Award" />
            <div className="description">
              <h2>Fly Boards</h2>
            </div>
          </div>
        </Link>
        <Link to="/packages/watersports/parasailing" className="link">
        <div className="watersports">
          <img src={Parasailing} alt="Employees Award" />
          <div className="description">
            <h2>Parasailing</h2>
          </div>
        </div>
        </Link>
      </div>
      <Buttons />
    </>
  );
};

export default WaterSports;
