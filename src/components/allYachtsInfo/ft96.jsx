import Buttons from "../Buttons/buttons";

//  <-----  feet 90 images ------->
import ft96_1 from "../../assets/96 feet/feet96_1.jpg";
import ft96_2 from "../../assets/96 feet/feet96_2.jpg";
import ft96_3 from "../../assets/96 feet/feet96_3.jpg";
import ft96_4 from "../../assets/96 feet/feet96_4.jpg";
import ft96_5 from "../../assets/96 feet/feet96_5.jpg";
import ft96_6 from "../../assets/96 feet/feet96_6.jpg";
import ft96_7 from "../../assets/96 feet/feet96_7.jpg";
import ft96_8 from "../../assets/96 feet/feet96_8.jpg";
import ft96_9 from "../../assets/96 feet/feet96_9.jpg";
import ft96_10 from "../../assets/96 feet/feet96_10.jpg";
import ft96_11 from "../../assets/96 feet/feet96_11.jpg";
import ft96_12 from "../../assets/96 feet/feet96_12.jpg";
import ft96_13 from "../../assets/96 feet/feet96_13.jpg";
import ft96_14 from "../../assets/96 feet/feet96_14.jpg";
import ft96_15 from "../../assets/96 feet/feet96_15.jpg";
import ft96_16 from "../../assets/96 feet/feet96_16.jpg";

export default function Ft96() {
  return (
    <div className="yachtInfo">
      <br />
                <br />
                <br />
                <br />
      <div className="yachtDetail">
        <div className="yachtImages">
          <img src={ft96_1} alt="96 feet image" />
          <img src={ft96_2} alt="96 feet image" />
          <img src={ft96_3} alt="96 feet image" />
          <img src={ft96_4} alt="96 feet image" />
          <img src={ft96_5} alt="96 feet image" />
          <img src={ft96_6} alt="96 feet image" />
          <img src={ft96_7} alt="96 feet image" />
          <img src={ft96_8} alt="96 feet image" />
          <img src={ft96_9} alt="96 feet image" />
          <img src={ft96_10} alt="96 feet image" />
          <img src={ft96_11} alt="96 feet image" />
          <img src={ft96_12} alt="96 feet image" />
          <img src={ft96_13} alt="96 feet image" />
          <img src={ft96_14} alt="96 feet image" />
          <img src={ft96_15} alt="96 feet image" />
          <img src={ft96_16} alt="96 feet image" />
        </div>
        <h1>Key Features of 96 Feet Super Yacht</h1>
        <h2>96 Feet Super Yacht</h2>
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
            <strong>Crew:</strong> 1 Captain, 3 Crew
          </li>
        </ul>

        <h2>Facilities</h2>
        <ul>
          <li>
            Jacuzzi, Music System, Safety Equipment, Fly Deck, Sundeck, Master
            Bedroom, 2 Bedrooms, Washroom, Shower, AC Lounge, Spacious Saloon,
            Kitchen, Swimming Platform
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
