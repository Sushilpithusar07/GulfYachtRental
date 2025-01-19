import Buttons from "../Buttons/buttons";

//  <-----   feet 55 images ------->
import feet55_1 from "../../assets/55 feet/feet55_1.jpg";
import feet55_2 from "../../assets/55 feet/feet55_2.jpg";
import feet55_3 from "../../assets/55 feet/feet55_3.jpg";
import feet55_4 from "../../assets/55 feet/feet55_4.jpg";
import feet55_5 from "../../assets/55 feet/feet55_5.jpg";
import feet55_6 from "../../assets/55 feet/feet55_6.jpg";
import feet55_7 from "../../assets/55 feet/feet55_7.jpg";
import feet55_8 from "../../assets/55 feet/feet55_8.jpg";
import feet55_9 from "../../assets/55 feet/feet55_9.jpg";
import feet55_10 from "../../assets/55 feet/feet55_10.jpg";
import feet55_11 from "../../assets/55 feet/feet55_11.jpg";
import feet55_12 from "../../assets/55 feet/feet55_12.jpg";

export default function Ft55() {
  return (
    <div className="yachtInfo">
      <br />
                <br />
                <br />
                <br />
      <div className="yachtDetail">
        <div className="yachtImages">
          <img src={feet55_1} alt="55 feet image" />
          <img src={feet55_2} alt="55 feet image" />
          <img src={feet55_3} alt="55 feet image" />
          <img src={feet55_4} alt="55 feet image" />
          <img src={feet55_5} alt="55 feet image" />
          <img src={feet55_6} alt="55 feet image" />
          <img src={feet55_7} alt="55 feet image" />
          <img src={feet55_8} alt="55 feet image" />
          <img src={feet55_9} alt="55 feet image" />
          <img src={feet55_10} alt="55 feet image" />
          <img src={feet55_11} alt="55 feet image" />
          <img src={feet55_12} alt="55 feet image" />
        </div>
        <h1>Key Features of 55 Feet Luxurious Yacht</h1>
        <h2>55 Feet Luxurious Yacht</h2>
        <ul>
          <li>
            <strong>Capacity:</strong> 20 Guests
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
