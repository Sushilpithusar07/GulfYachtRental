import Buttons from "../Buttons/buttons";

//  <-----   feet 85 images ------->
import ft85_1 from "../../assets/charter/85ft/85ft_1.jpg";
import ft85_2 from "../../assets/charter/85ft/85ft_2.jpg";
import ft85_3 from "../../assets/charter/85ft/85ft_3.jpg";
import ft85_4 from "../../assets/charter/85ft/85ft_4.jpg";
import ft85_5 from "../../assets/charter/85ft/85ft_5.jpg";
import ft85_6 from "../../assets/charter/85ft/85ft_6.jpg";
import ft85_7 from "../../assets/charter/85ft/85ft_7.jpg";
import ft85_8 from "../../assets/charter/85ft/85ft_8.jpg";
import ft85_9 from "../../assets/charter/85ft/85ft_9.jpg";
import ft85_10 from "../../assets/charter/85ft/85ft_10.jpg";

export default function Ft85() {
  return (
    <div className="yachtInfo">
      <br />
      <br />
      <br />
      <br />
      <div className="yachtDetail">
        <div className="yachtImages">
          <img src={ft85_1} alt="85 feet image" />
          <img src={ft85_2} alt="85 feet image" />
          <img src={ft85_3} alt="85 feet image" />
          <img src={ft85_4} alt="85 feet image" />
          <img src={ft85_5} alt="85 feet image" />
          <img src={ft85_6} alt="85 feet image" />
          <img src={ft85_7} alt="85 feet image" />
          <img src={ft85_8} alt="85 feet image" />
          <img src={ft85_9} alt="85 feet image" />
          <img src={ft85_10} alt="85 feet image" />
        </div>
        <h1>Key Features of 85 Feet Yacht </h1>
        <h2>85 Feet Yacht</h2>
        <ul>
          <li>
            <strong>Capacity:</strong> 30-35 Guests
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
