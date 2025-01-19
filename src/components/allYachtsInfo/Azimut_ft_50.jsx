import Buttons from "../Buttons/buttons";

//  <-----  again feet 50 images ------->
import azimut_feet50_1 from "../../assets/again 50 feet/again feet50_1.jpg";
import azimut_feet50_2 from "../../assets/again 50 feet/again feet50_2.jpg";
import azimut_feet50_3 from "../../assets/again 50 feet/again feet50_3.jpg";
import azimut_feet50_4 from "../../assets/again 50 feet/again feet50_4.jpg";
import azimut_feet50_5 from "../../assets/again 50 feet/again feet50_5.jpg";
import azimut_feet50_6 from "../../assets/again 50 feet/again feet50_6.jpg";
import azimut_feet50_7 from "../../assets/again 50 feet/again feet50_7.jpg";
import azimut_feet50_8 from "../../assets/again 50 feet/again feet50_8.jpg";
import azimut_feet50_9 from "../../assets/again 50 feet/again feet50_9.jpg";
import azimut_feet50_10 from "../../assets/again 50 feet/again feet50_10.jpg";
import azimut_feet50_11 from "../../assets/again 50 feet/again feet50_11.jpg";
import azimut_feet50_12 from "../../assets/again 50 feet/again feet50_12.jpg";

export default function Ft40() {
  return (
    <div className="yachtInfo">
      <br />
                <br />
                <br />
                <br />
      <div className="yachtDetail">
        <div className="yachtImages">
          <img src={azimut_feet50_1} alt="50 feet image" />
          <img src={azimut_feet50_2} alt="50 feet image" />
          <img src={azimut_feet50_3} alt="50 feet image" />
          <img src={azimut_feet50_4} alt="50 feet image" />
          <img src={azimut_feet50_5} alt="50 feet image" />
          <img src={azimut_feet50_6} alt="50 feet image" />
          <img src={azimut_feet50_7} alt="50 feet image" />
          <img src={azimut_feet50_8} alt="50 feet image" />
          <img src={azimut_feet50_9} alt="50 feet image" />
          <img src={azimut_feet50_10} alt="50 feet image" />
          <img src={azimut_feet50_11} alt="50 feet image" />
          <img src={azimut_feet50_12} alt="50 feet image" />
        </div>
        <h1>Key Features of 50 Feet Azimuth Brand Yacht</h1>
        <h2>50 Feet Azimuth Brand Yacht</h2>
        <ul>
          <li>
            <strong>Capacity:</strong> 17 Guests
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
