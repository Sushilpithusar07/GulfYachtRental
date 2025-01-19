import Buttons from "../Buttons/buttons";

//  <-----   feet 42 images ------->
import feet42_1 from "../../assets/42 feet/feet42_1.jpg";
import feet42_2 from "../../assets/42 feet/feet42_2.jpg";
import feet42_3 from "../../assets/42 feet/feet42_3.jpg";
import feet42_4 from "../../assets/42 feet/feet42_4.jpg";
import feet42_5 from "../../assets/42 feet/feet42_5.jpg";
import feet42_6 from "../../assets/42 feet/feet42_6.jpg";
import feet42_7 from "../../assets/42 feet/feet42_7.jpg";
import feet42_8 from "../../assets/42 feet/feet42_8.jpg";
import feet42_9 from "../../assets/42 feet/feet42_9.jpg";
import feet42_10 from "../../assets/42 feet/feet42_10.jpg";
import feet42_11 from "../../assets/42 feet/feet42_11.jpg";
import feet42_12 from "../../assets/42 feet/feet42_12.jpg";
import feet42_13 from "../../assets/42 feet/feet42_13.jpg";

export default function Ft42() {
  return (
    <div className="yachtInfo">
      <br />
      <br />
      <br />
      <br />
      <div className="yachtDetail">
        <div className="yachtImages">
          <img src={feet42_1} alt="42 feet image" />
          <img src={feet42_2} alt="42 feet image" />
          <img src={feet42_3} alt="42 feet image" />
          <img src={feet42_4} alt="42 feet image" />
          <img src={feet42_5} alt="42 feet image" />
          <img src={feet42_6} alt="42 feet image" />
          <img src={feet42_7} alt="42 feet image" />
          <img src={feet42_8} alt="42 feet image" />
          <img src={feet42_9} alt="42 feet image" />
          <img src={feet42_10} alt="42 feet image" />
          <img src={feet42_11} alt="42 feet image" />
          <img src={feet42_12} alt="42 feet image" />
          <img src={feet42_13} alt="42 feet image" />
        </div>
        <h1>Key Features of 42 Feet Azimuth Brand Yacht</h1>
        <h2>42 Feet Azimuth Brand Yacht</h2>
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
