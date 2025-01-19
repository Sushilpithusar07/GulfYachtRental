//  <-----    feet 164 images ------->
import feet164_1 from "../../assets/164 feet/feet164_1.jpg";
import feet164_2 from "../../assets/164 feet/feet164_2.jpg";
import feet164_3 from "../../assets/164 feet/feet164_3.jpg";
import feet164_4 from "../../assets/164 feet/feet164_4.jpg";
import feet164_5 from "../../assets/164 feet/feet164_5.jpg";
import feet164_6 from "../../assets/164 feet/feet164_6.jpg";
import feet164_7 from "../../assets/164 feet/feet164_7.jpg";
import feet164_8 from "../../assets/164 feet/feet164_8.jpg";
import feet164_9 from "../../assets/164 feet/feet164_9.jpg";

import Buttons from "../Buttons/buttons";

export default function Ft164() {
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
          <img src={feet164_1} alt="164 feet image" />
          <img src={feet164_2} alt="164 feet image" />
          <img src={feet164_4} alt="164 feet image" />
          <img src={feet164_3} alt="164 feet image" />
          <img src={feet164_5} alt="164 feet image" />
          <img src={feet164_6} alt="164 feet image" />
          <img src={feet164_7} alt="164 feet image" />
          <img src={feet164_8} alt="164 feet image" />
          <img src={feet164_9} alt="164 feet image" />
        </div>
        <h1>Key Features of 164 Feet Super Yacht</h1>
        <h2>164 Feet Super Yacht</h2>
        <ul>
          <li>
            <strong>Capacity:</strong> 135 Guests
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
            Music System, Safety Equipment, Fly Deck, Sundeck, Master Bedroom, 5
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
