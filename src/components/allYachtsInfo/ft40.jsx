import Buttons from "../Buttons/buttons";

//  <-----   feet 40 images ------->

import feet40_1 from "../../assets/40 feet/feet40_1.jpg";
import feet40_2 from "../../assets/40 feet/feet40_2.jpg";
import feet40_3 from "../../assets/40 feet/feet40_3.jpg";
import feet40_4 from "../../assets/40 feet/feet40_4.jpg";
import feet40_5 from "../../assets/40 feet/feet40_5.jpg";
import feet40_6 from "../../assets/40 feet/feet40_6.jpg";
import feet40_8 from "../../assets/40 feet/feet40_8.jpg";
import feet40_9 from "../../assets/40 feet/feet40_9.jpg";

export default function Ft40() {
  return (
    <div className="yachtInfo">
      <div className="yachtDetail">
        <div className="yachtImages">
          <img src={feet40_1} alt="40 feet image" />
          <img src={feet40_2} alt="40 feet image" />
          <img src={feet40_3} alt="40 feet image" />
          <img src={feet40_4} alt="40 feet image" />
          <img src={feet40_5} alt="40 feet image" />
          <img src={feet40_6} alt="40 feet image" />
          <img src={feet40_8} alt="40 feet image" />
          <img src={feet40_9} alt="40 feet image" />
        </div>
        <h1>Key Features of 40 Feet Luxury Mini Yacht</h1>
        <h2>40 Feet Luxury Mini Yacht</h2>
        <ul>
          <li>
            <strong>Capacity:</strong> 12 Guests
          </li>
          <li>
            <strong>Duration:</strong> Minimum 2 Hours
          </li>
          <li>
            <strong>Cruise Route:</strong> Marina Canal, JBR, Ain Dubai, Palm,
            Skydive, Atlantis, Sheikh Island, Burj Al-Arab
          </li>
          <li>
            <strong>Crew:</strong> 1 Captain, 2 Crew
          </li>
        </ul>

        <h2>Facilities</h2>
        <ul>
          <li>
            Music System, Safety Equipment, Fly Deck, Sundeck, 1 Bedrooms,
            Washroom, Shower, AC Lounge, Kitchen, Swimming Platform
          </li>
        </ul>

        <h2>Amenities</h2>
        <ul>
          <li>
            Mineral Water, Ice & Cooler Box, Towels, Microwave, Refrigerator,
            Cutlery & Crockery
          </li>
        </ul>

        <h2>On Request</h2>
        <ul>
          <li>
            Fishing Equipment, Water Sports Activities, Exclusive Cuisine,
            Beverage Packages, Decorations, Entertainment, Transportation
          </li>
        </ul>
      </div>
      <Buttons />
    </div>
  );
}
