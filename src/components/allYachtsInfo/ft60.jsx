import Buttons from "../Buttons/buttons";

//  <-----   feet 60 images ------->
import feet60_1 from "../../assets/60 feet/feet60_1.jpg";
import feet60_2 from "../../assets/60 feet/feet60_2.jpg";
import feet60_3 from "../../assets/60 feet/feet60_3.jpg";
import feet60_4 from "../../assets/60 feet/feet60_4.jpg";
import feet60_5 from "../../assets/60 feet/feet60_5.jpg";
import feet60_6 from "../../assets/60 feet/feet60_6.jpg";
import feet60_7 from "../../assets/60 feet/feet60_7.jpg";
import feet60_8 from "../../assets/60 feet/feet60_8.jpg";
import feet60_9 from "../../assets/60 feet/feet60_9.jpg";
import feet60_10 from "../../assets/60 feet/feet60_10.jpg";
import feet60_11 from "../../assets/60 feet/feet60_11.jpg";
import feet60_12 from "../../assets/60 feet/feet60_12.jpg";

export default function Ft60() {
  return (
    <div className="yachtInfo">
      <br />
                <br />
                <br />
                <br />
      <div className="yachtDetail">
        <div className="yachtImages">
          <img src={feet60_1} alt="60 feet image" />
          <img src={feet60_2} alt="60 feet image" />
          <img src={feet60_3} alt="60 feet image" />
          <img src={feet60_4} alt="60 feet image" />
          <img src={feet60_5} alt="60 feet image" />
          <img src={feet60_6} alt="60 feet image" />
          <img src={feet60_7} alt="60 feet image" />
          <img src={feet60_8} alt="60 feet image" />
          <img src={feet60_9} alt="60 feet image" />
          <img src={feet60_10} alt="60 feet image" />
          <img src={feet60_11} alt="60 feet image" />
          <img src={feet60_12} alt="60 feet image" />
        </div>
        <h1>Key Features of 60 Feet Yacht Domintor</h1>
        <h2>60 Feet Yacht Domintor</h2>
        <ul>
          <li>
            <strong>Capacity:</strong> 25 Guests
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
