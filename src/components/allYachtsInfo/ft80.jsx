import Buttons from '../Buttons/buttons';

//  <-----   feet 80 images ------->
import ft80_1 from '../../assets/charter/80ft/80ft_1.jpg';
import ft80_2 from '../../assets/charter/80ft/80ft_2.jpg';
import ft80_3 from '../../assets/charter/80ft/80ft_3.jpg';
import ft80_4 from '../../assets/charter/80ft/80ft_4.jpg';
import ft80_5 from '../../assets/charter/80ft/80ft_5.jpg';
import ft80_6 from '../../assets/charter/80ft/80ft_6.jpg';
import ft80_7 from '../../assets/charter/80ft/80ft_7.jpg';
import ft80_8 from '../../assets/charter/80ft/80ft_8.jpg';
import ft80_9 from '../../assets/charter/80ft/80ft_9.jpg';
import ft80_10 from '../../assets/charter/80ft/80ft_10.jpg';
import ft80_11 from '../../assets/charter/80ft/80ft_11.jpg';
import ft80_12 from '../../assets/charter/80ft/80ft_12.jpg';
import ft80_13 from '../../assets/charter/80ft/80ft_13.jpg';
import ft80_14 from '../../assets/charter/80ft/80ft_14.jpg';
import ft80_15 from '../../assets/charter/80ft/80ft_15.jpg';





export default function Ft80() {
  return(
    <div className="yachtInfo">
      <br />
                <br />
                <br />
                <br />
        <div className="yachtDetail">
            <div className="yachtImages">
              <img src={ft80_1} alt="80 feet image" />
              <img src={ft80_2} alt="80 feet image" />
              <img src={ft80_3} alt="80 feet image" />
              <img src={ft80_4} alt="80 feet image" />
              <img src={ft80_5} alt="80 feet image" />
              <img src={ft80_6} alt="80 feet image" />
              <img src={ft80_7} alt="80 feet image" />
              <img src={ft80_8} alt="80 feet image" />
              <img src={ft80_9} alt="80 feet image" />
              <img src={ft80_10} alt="80 feet image" />
              <img src={ft80_11} alt="80 feet image" />
              <img src={ft80_12} alt="80 feet image" />
              <img src={ft80_13} alt="80 feet image" />
              <img src={ft80_14} alt="80 feet image" />
              <img src={ft80_15} alt="80 feet image" />
            </div>
          <h1>Key Features of 80 Feet Azimut Yacht</h1>
          <h2>80ft Azimut Yacht</h2>
          <ul>
              <li><strong>Capacity:</strong> 35 Guests</li>
              <li><strong>Duration:</strong> Minimum 2 Hours</li>
              <li><strong>Cruise Route:</strong> Marina Canal, JBR, Ain Dubai, Palm, Skydive, Atlantis, Sheikh Island, Burj Al-Arab</li>
              <li><strong>Crew:</strong> 1 Captain, 3 Crew</li>
          </ul>

          <h2>Facilities</h2>
          <ul>
          <li>Jacuzzi, Music System, Safety Equipment, Fly Deck, Sundeck, Master Bedroom, 2 Bedrooms, Washroom, Shower, AC Lounge, Spacious Saloon, Kitchen, Swimming Platform</li>
          </ul>

          <h2>Amenities</h2>
          <ul>
          <li>Mineral Water, Ice & Cooler Box, Towels, Microwave, Refrigerator, BBQ Station, Cutlery & Crockery</li>
          </ul>

          <h2>On Request</h2>
          <ul>
          <li>Fishing Equipment, Water Sports Activities, Exclusive Cuisine, Live BBQ Onboard, Beverage Packages, Decorations, Entertainment, Transportation</li>
          </ul>
        </div>
        <Buttons/>
    </div>
  )
}