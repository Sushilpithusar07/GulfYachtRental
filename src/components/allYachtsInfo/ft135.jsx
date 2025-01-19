//  <-----  feet 135 images ------->
import ft135_1 from '../../assets/charter/135ft/135ft_1.jpg';
import ft135_2 from '../../assets/charter/135ft/135ft_2.jpg';
import ft135_3 from '../../assets/charter/135ft/135ft_3.jpg';
import ft135_4 from '../../assets/charter/135ft/135ft_4.jpg';
import ft135_5 from '../../assets/charter/135ft/135ft_5.jpg';
import ft135_6 from '../../assets/charter/135ft/135ft_6.jpg';
import ft135_7 from '../../assets/charter/135ft/135ft_7.jpg';
import ft135_8 from '../../assets/charter/135ft/135ft_8.jpg';
import ft135_9 from '../../assets/charter/135ft/135ft_9.jpg';
import ft135_10 from '../../assets/charter/135ft/135ft_10.jpg';
import ft135_11 from '../../assets/charter/135ft/135ft_11.jpg';
import ft135_12 from '../../assets/charter/135ft/135ft_12.jpg';
import ft135_13 from '../../assets/charter/135ft/135ft_13.jpg';
import ft135_14 from '../../assets/charter/135ft/135ft_14.jpg';
import ft135_15 from '../../assets/charter/135ft/135ft_15.jpg';
import Buttons from '../Buttons/buttons';





export default function Ft135() {
  return(
    <div className="yachtInfo">
      <br />
                <br />
                <br />
                <br />
        <div className="yachtDetail">
            <div className="yachtImages">
              <img src={ft135_1} alt="135 feet image" />
              <img src={ft135_2} alt="135 feet image" />
              <img src={ft135_4} alt="135 feet image" />
              <img src={ft135_3} alt="135 feet image" />
              <img src={ft135_5} alt="135 feet image" />
              <img src={ft135_6} alt="135 feet image" />
              <img src={ft135_7} alt="135 feet image" />
              <img src={ft135_8} alt="135 feet image" />
              <img src={ft135_9} alt="135 feet image" />
              <img src={ft135_10} alt="135 feet image" />
              <img src={ft135_11} alt="135 feet image" />
              <img src={ft135_12} alt="135 feet image" />
              <img src={ft135_13} alt="135 feet image" />
              <img src={ft135_14} alt="135 feet image" />
              <img src={ft135_15} alt="135 feet image" />
            </div>
          <h1>Key Features of 135 Feet Azimuth Yacht</h1>
          <h2>135 Feet Azimuth Yacht</h2>
          <ul>
              <li><strong>Capacity:</strong> 135 Guests</li>
              <li><strong>Duration:</strong> Minimum 2 Hours</li>
              <li><strong>Cruise Route:</strong> Marina Canal, JBR, Ain Dubai, Palm, Skydive, Atlantis, Sheikh Island, Burj Al-Arab</li>
              <li><strong>Crew:</strong> 1 Captain, 3 Crew</li>
          </ul>

          <h2>Facilities</h2>
          <ul>
          <li>Music System, Safety Equipment, Fly Deck, Sundeck, Master Bedroom, 3 Bedrooms, Washroom, Shower, AC Lounge, Spacious Saloon, Kitchen, Swimming Platform</li>
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