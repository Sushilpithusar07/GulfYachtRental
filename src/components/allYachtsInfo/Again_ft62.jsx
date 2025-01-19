//  <-----    feet 62 images ------->
import Again_feet62_1 from "../../assets/again 62 feet/again feet62_1.jpg";
import Again_feet62_2 from "../../assets/again 62 feet/again feet62_2.jpg";
import Again_feet62_3 from "../../assets/again 62 feet/again feet62_3.jpg";
import Again_feet62_4 from "../../assets/again 62 feet/again feet62_4.jpg";
import Again_feet62_5 from "../../assets/again 62 feet/again feet62_5.jpg";
import Again_feet62_6 from "../../assets/again 62 feet/again feet62_6.jpg";

import Buttons from "../Buttons/buttons";

export default function Again_Ft62() {
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
          <img src={Again_feet62_1} alt="62 feet image" />
          <img src={Again_feet62_2} alt="62 feet image" />
          <img src={Again_feet62_4} alt="62 feet image" />
          <img src={Again_feet62_3} alt="62 feet image" />
          <img src={Again_feet62_5} alt="62 feet image" />
          <img src={Again_feet62_6} alt="62 feet image" />
        </div>
        <h1>Key Features of 62 feet Fibo Yacht</h1>
        <h2>62 feet Fibo Yacht</h2>
        <ul>
          <li>
            <strong>Capacity:</strong> 20 Guests
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
