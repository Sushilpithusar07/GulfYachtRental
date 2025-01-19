import Buttons from "../Buttons/buttons";

//  <-----   feet 70 images ------->
import feet70_1 from "../../assets/70 feet/feet70_1.jpg";
import feet70_2 from "../../assets/70 feet/feet70_2.jpg";
import feet70_3 from "../../assets/70 feet/feet70_3.jpg";
import feet70_4 from "../../assets/70 feet/feet70_4.jpg";
import feet70_5 from "../../assets/70 feet/feet70_5.jpg";
import feet70_6 from "../../assets/70 feet/feet70_6.jpg";
import feet70_7 from "../../assets/70 feet/feet70_7.jpg";

export default function Ft70() {
  return (
    <div className="yachtInfo">
      <br />
                <br />
                <br />
                <br />
      <div className="yachtDetail">
        <div className="yachtImages">
          <img src={feet70_1} alt="70 feet image" />
          <img src={feet70_2} alt="70 feet image" />
          <img src={feet70_3} alt="70 feet image" />
          <img src={feet70_4} alt="70 feet image" />
          <img src={feet70_5} alt="70 feet image" />
          <img src={feet70_6} alt="70 feet image" />
          <img src={feet70_7} alt="70 feet image" />
        </div>
        <h1>Key Features of 70 Feet Luxurious Yacht</h1>
        <h2>70 Feet Luxurious Yacht</h2>
        <ul>
          <li>
            <strong>Capacity:</strong> 30 Guests
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
