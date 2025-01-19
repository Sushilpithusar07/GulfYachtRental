import Buttons from "../Buttons/buttons";

//  <-----   again feet 60 images ------->
import again_feet60_1 from "../../assets/again 60 feet/again feet60_1.jpg";
import again_feet60_2 from "../../assets/again 60 feet/again feet60_2.jpg";
import again_feet60_3 from "../../assets/again 60 feet/again feet60_3.jpg";

export default function Again_Ft60() {
  return (
    <div className="yachtInfo">
      <br />
      <br />
      <br />
      <br />
      <div className="yachtDetail">
        <div className="yachtImages">
          <img src={again_feet60_1} alt="feet 60 image" />
          <img src={again_feet60_2} alt="feet 60 image" />
          <img src={again_feet60_3} alt="feet 60 image" />
        </div>
        <h1>Key Features of 60 Feet Princess Yacht</h1>
        <h2>60 Feet Princess Yacht</h2>
        <ul>
          <li>
            <strong>Capacity:</strong> 22 Guests
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
