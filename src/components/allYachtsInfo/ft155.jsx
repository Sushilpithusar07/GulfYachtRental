//  <-----    feet 240 images ------->
import feet155_1 from "../../assets/155 feet/feet155_1.jpg";
import feet155_2 from "../../assets/155 feet/feet155_2.jpg";
import feet155_3 from "../../assets/155 feet/feet155_3.jpg";
import feet155_4 from "../../assets/155 feet/feet155_4.jpg";
import feet155_5 from "../../assets/155 feet/feet155_5.jpg";
import feet155_6 from "../../assets/155 feet/feet155_6.jpg";

import Buttons from "../Buttons/buttons";

export default function Ft155() {
  return (
    <div className="yachtInfo">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="yachtDetail">
        <div className="yachtImages">
          <img src={feet155_1} alt="155 feet image" />
          <img src={feet155_2} alt="155 feet image" />
          <img src={feet155_4} alt="155 feet image" />
          <img src={feet155_3} alt="155 feet image" />
          <img src={feet155_5} alt="155 feet image" />
          <img src={feet155_6} alt="155 feet image" />
        </div>
        <h1>Key Features of 155 Feet The Rose Yacht</h1>
        <h2>155 feet rose Yacht</h2>
        <ul>
          <li>
            <strong>Capacity:</strong> 250 Guests
          </li>
          <li>
            <strong>Duration:</strong> Minimum 4 Hours
          </li>
          <li>
            <strong>Cruise Route:</strong> Marina Canal, JBR, Ain Dubai, Palm,
            Skydive, Atlantis, Sheikh Island, Burj Al-Arab
          </li>
          <li>
            <strong>Crew:</strong> 1 Captain, 8 Crew
          </li>
        </ul>

        <h2>Facilities</h2>
        <ul>
          <li>
            Music System, Safety Equipment, Fly Deck, Sundeck, Master Bedroom, 6
            Bedrooms, Washroom, Shower, AC Lounge, Spacious Saloon, Kitchen,
            Swimming Platform
          </li>
        </ul>

        <h2>Amenities</h2>
        <ul>
          <li>
            Mineral Water, Ice & Cooler Box, Towels, Microwave, Refrigerator,
            BBQ Station, Cutlery & Crockery
          </li>
        </ul>

        <h2>On Request</h2>
        <ul>
          <li>
            Fishing Equipment, Water Sports Activities, Exclusive Cuisine, Live
            BBQ Onboard, Beverage Packages, Decorations, Entertainment,
            Transportation
          </li>
        </ul>
      </div>
      <Buttons />
    </div>
  );
}
