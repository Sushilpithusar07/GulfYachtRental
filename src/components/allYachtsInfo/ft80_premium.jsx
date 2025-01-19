import Buttons from "../Buttons/buttons";

//  <-----   premium feet 80 images ------->
import premium_ft80_1 from "../../assets/80 feet premium/80 feet premium_1.jpg";
import premium_ft80_2 from "../../assets/80 feet premium/80 feet premium_2.jpg";
import premium_ft80_3 from "../../assets/80 feet premium/80 feet premium_3.jpg";
import premium_ft80_4 from "../../assets/80 feet premium/80 feet premium_4.jpg";
import premium_ft80_5 from "../../assets/80 feet premium/80 feet premium_5.jpg";
import premium_ft80_6 from "../../assets/80 feet premium/80 feet premium_6.jpg";
import premium_ft80_7 from "../../assets/80 feet premium/80 feet premium_7.jpg";
import premium_ft80_8 from "../../assets/80 feet premium/80 feet premium_8.jpg";
import premium_ft80_9 from "../../assets/80 feet premium/80 feet premium_9.jpg";

export default function Ft80Premium() {
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
          <img src={premium_ft80_1} alt="80 feet yacht" />
          <img src={premium_ft80_2} alt="80 feet yacht" />
          <img src={premium_ft80_3} alt="80 feet yacht" />
          <img src={premium_ft80_4} alt="80 feet yacht" />
          <img src={premium_ft80_5} alt="80 feet yacht" />
          <img src={premium_ft80_6} alt="80 feet yacht" />
          <img src={premium_ft80_7} alt="80 feet yacht" />
          <img src={premium_ft80_8} alt="80 feet yacht" />
          <img src={premium_ft80_9} alt="80 feet yacht" />
        </div>
        <h1>Key Features of 80 Feet Premium Yacht</h1>
        <h2>80 feet premium Yacht</h2>
        <ul>
          <li>
            <strong>Capacity:</strong> 45 Guests
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
