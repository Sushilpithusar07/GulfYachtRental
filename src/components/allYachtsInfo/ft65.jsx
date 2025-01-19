//  <-----    feet 65 images ------->
import feet65_1 from "../../assets/65 feet/feet65_1.jpg";
import feet65_2 from "../../assets/65 feet/feet65_2.jpg";
import feet65_3 from "../../assets/65 feet/feet65_3.jpg";
import feet65_4 from "../../assets/65 feet/feet65_4.jpg";
import feet65_5 from "../../assets/65 feet/feet65_5.jpg";
import feet65_6 from "../../assets/65 feet/feet65_6.jpg";
import feet65_7 from "../../assets/65 feet/feet65_7.jpg";
import feet65_8 from "../../assets/65 feet/feet65_8.jpg";
import feet65_9 from "../../assets/65 feet/feet65_9.jpg";
import feet65_10 from "../../assets/65 feet/feet65_10.jpg";
import feet65_11 from "../../assets/65 feet/feet65_11.jpg";

import Buttons from "../Buttons/buttons";

export default function Ft65() {
  return (
    <div className="yachtInfo">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="yachtDetail">
        <div className="yachtImages">
          <img src={feet65_1} alt="65 feet image" />
          <img src={feet65_2} alt="65 feet image" />
          <img src={feet65_4} alt="65 feet image" />
          <img src={feet65_3} alt="65 feet image" />
          <img src={feet65_5} alt="65 feet image" />
          <img src={feet65_6} alt="65 feet image" />
          <img src={feet65_7} alt="65 feet image" />
          <img src={feet65_8} alt="65 feet image" />
          <img src={feet65_9} alt="65 feet image" />
          <img src={feet65_10} alt="65 feet image" />
          <img src={feet65_11} alt="65 feet image" />
        </div>
        <h1>Key Features of 65 Feet Party House Yacht</h1>
        <h2>65 Feet Party House Yacht</h2>
        <ul>
          <li>
            <strong>Capacity:</strong> 50 Guests
          </li>
          <li>
            <strong>Duration:</strong> Minimum 4 Hours
          </li>
          <li>
            <strong>Cruise Route:</strong> Marina Canal, JBR, Ain Dubai, Palm,
            Skydive, Atlantis, Sheikh Island, Burj Al-Arab
          </li>
          <li>
            <strong>Crew:</strong> 1 Captain, 4 Crew
          </li>
        </ul>

        <h2>Facilities</h2>
        <ul>
          <li>
            Music System, Safety Equipment, Fly Deck, Sundeck, Master Bedroom, 2
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
