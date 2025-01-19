//  <-----    feet 240 images ------->
import feet240_1 from "../../assets/240 feet/feet240_1.jpg";
import feet240_2 from "../../assets/240 feet/feet240_2.jpg";
import feet240_3 from "../../assets/240 feet/feet240_3.jpg";
import feet240_4 from "../../assets/240 feet/feet240_4.jpg";
import feet240_5 from "../../assets/240 feet/feet240_5.jpg";
import feet240_6 from "../../assets/240 feet/feet240_6.jpg";
import feet240_7 from "../../assets/240 feet/feet240_7.jpg";
import feet240_8 from "../../assets/240 feet/feet240_8.jpg";

import Buttons from "../Buttons/buttons";

export default function Ft240() {
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
          <img src={feet240_1} alt="240 feet image" />
          <img src={feet240_2} alt="240 feet image" />
          <img src={feet240_4} alt="240 feet image" />
          <img src={feet240_3} alt="240 feet image" />
          <img src={feet240_5} alt="240 feet image" />
          <img src={feet240_6} alt="240 feet image" />
          <img src={feet240_7} alt="240 feet image" />
          <img src={feet240_8} alt="240 feet image" />
        </div>
        <h1>Key Features of 240 Feet Mega Yacht Alexandria</h1>
        <h2>240 Feet Mega Yacht</h2>
        <ul>
          <li>
            <strong>Capacity:</strong> 500 Guests
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
