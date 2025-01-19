import Buttons from "../Buttons/buttons";

//  <-----  feet 110 images ------->
import ft110_1 from "../../assets/110 feet/feet110_1.jpg";
import ft110_2 from "../../assets/110 feet/feet110_2.jpg";
import ft110_3 from "../../assets/110 feet/feet110_3.jpg";
import ft110_4 from "../../assets/110 feet/feet110_4.jpg";
import ft110_5 from "../../assets/110 feet/feet110_5.jpg";
import ft110_6 from "../../assets/110 feet/feet110_6.jpg";
import ft110_7 from "../../assets/110 feet/feet110_7.jpg";
import ft110_8 from "../../assets/110 feet/feet110_8.jpg";
import ft110_9 from "../../assets/110 feet/feet110_9.jpg";

export default function Ft110() {
  return (
    <div className="yachtInfo">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="yachtDetail">
        <div className="yachtImages">
          <img src={ft110_1} alt="110 feet image" />
          <img src={ft110_2} alt="110 feet image" />
          <img src={ft110_3} alt="110 feet image" />
          <img src={ft110_4} alt="110 feet image" />
          <img src={ft110_5} alt="110 feet image" />
          <img src={ft110_6} alt="110 feet image" />
          <img src={ft110_7} alt="110 feet image" />
          <img src={ft110_8} alt="110 feet image" />
          <img src={ft110_9} alt="110 feet image" />
        </div>
        <h1>Key Features of 110 Feet Premium Yacht</h1>
        <h2>110 Feet Premium Yacht</h2>
        <ul>
          <li>
            <strong>Capacity:</strong> 85 Guests
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
