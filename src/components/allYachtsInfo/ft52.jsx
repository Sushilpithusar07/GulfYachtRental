import Buttons from "../Buttons/buttons";

//  <-----   feet 52 images ------->
import feet52_1 from "../../assets/52 feet/feet52_1.jpg";
import feet52_4 from "../../assets/52 feet/feet52_4.jpg";
import feet52_5 from "../../assets/52 feet/feet52_5.jpg";
import feet52_6 from "../../assets/52 feet/feet52_6.jpg";
import feet52_7 from "../../assets/52 feet/feet52_7.jpg";
import feet52_8 from "../../assets/52 feet/feet52_8.jpg";
import feet52_9 from "../../assets/52 feet/feet52_9.jpg";

export default function Ft52() {
  return (
    <div className="yachtInfo">
      <br />
                <br />
                <br />
                <br />
      <div className="yachtDetail">
        <div className="yachtImages">
          <img src={feet52_1} alt="52 feet image" />
          <img src={feet52_4} alt="52 feet image" />
          <img src={feet52_5} alt="52 feet image" />
          <img src={feet52_6} alt="52 feet image" />
          <img src={feet52_7} alt="52 feet image" />
          <img src={feet52_8} alt="52 feet image" />
          <img src={feet52_9} alt="52 feet image" />
        </div>
        <h1>Key Features of 52 Feet Luxurious Yacht</h1>
        <h2>52 Feet Luxurious Yacht</h2>
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
