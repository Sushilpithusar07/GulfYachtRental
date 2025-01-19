import Buttons from "../Buttons/buttons";

//  <-----   feet 56 images majesty------->
import feet56_1 from "../../assets/56 feet majesty/feet56_1.jpg";
import feet56_2 from "../../assets/56 feet majesty/feet56_2.jpg";
import feet56_3 from "../../assets/56 feet majesty/feet56_3.jpg";
import feet56_4 from "../../assets/56 feet majesty/feet56_4.jpg";
import feet56_5 from "../../assets/56 feet majesty/feet56_5.jpg";
import feet56_6 from "../../assets/56 feet majesty/feet56_6.jpg";
import feet56_7 from "../../assets/56 feet majesty/feet56_7.jpg";
import feet56_8 from "../../assets/56 feet majesty/feet56_8.jpg";
import feet56_9 from "../../assets/56 feet majesty/feet56_9.jpg";
import feet56_10 from "../../assets/56 feet majesty/feet56_10.jpg";


export default function Ft56Majesty() {
  return (
    <div className="yachtInfo">
      <br />
                <br />
                <br />
                <br />
      <div className="yachtDetail">
        <div className="yachtImages">
          <img src={feet56_1} alt="56 feet image" />
          <img src={feet56_2} alt="56 feet image" />
          <img src={feet56_3} alt="56 feet image" />
          <img src={feet56_4} alt="56 feet image" />
          <img src={feet56_5} alt="56 feet image" />
          <img src={feet56_6} alt="56 feet image" />
          <img src={feet56_7} alt="56 feet image" />
          <img src={feet56_8} alt="56 feet image" />
          <img src={feet56_9} alt="56 feet image" />
          <img src={feet56_10} alt="56 feet image" />
        </div>
        <h1>Key Features of Mejesty 56 Feet Yacht</h1>
        <h2>Mejesty 56 Feet  Yacht</h2>
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
