import Buttons from "../Buttons/buttons";

//  <-----   feet 35 images ------->

import feet35_1 from "../../assets/feet35/feet35_1.jpg";
import feet35_3 from "../../assets/feet35/feet35_3.jpg";
import feet35_4 from "../../assets/feet35/feet35_4.jpg";
import feet35_5 from "../../assets/feet35/feet35_5.jpg";
import feet35_6 from "../../assets/feet35/feet35_6.jpg";
import feet35_7 from "../../assets/feet35/feet35_7.jpg";

export default function Ft35() {
  return (
    <div className="yachtInfo">
      <div className="yachtDetail">
        <div className="yachtImages">
          <img src={feet35_1} alt="35 feet image" />
          <img src={feet35_3} alt="35 feet image" />
          <img src={feet35_4} alt="35 feet image" />
          <img src={feet35_5} alt="35 feet image" />
          <img src={feet35_6} alt="35 feet image" />
          <img src={feet35_7} alt="35 feet image" />
        </div>
        <h1>Key Features of 35 Feet Sightseeing Boat</h1>
        <h2>35 Feet Sightseeing Boat</h2>
        <ul>
          <li>
            <strong>Capacity:</strong> 10 Guests
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
          <li>Music System, Safety Equipment, Fly Deck, Sundeck</li>
        </ul>
        <h2>Complimentary Inclusions</h2>
        <ul>
          <li>Ice cubes, Water, Music System, Cutlery </li>
        </ul>

        <h2>Amenities</h2>
        <ul>
          <li>Ice & Cooler Box, Towels, Cutlery & Crockery</li>
        </ul>
      </div>
      <Buttons />
    </div>
  );
}
