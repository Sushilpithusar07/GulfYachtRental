//  <-----   feet 101 images ------->
import ft101_1 from '../../assets/charter/101ft/101ft_1.jpg';
import ft101_2 from '../../assets/charter/101ft/101ft_2.jpg';
import ft101_3 from '../../assets/charter/101ft/101ft_3.jpg';
import ft101_4 from '../../assets/charter/101ft/101ft_4.jpg';
import ft101_5 from '../../assets/charter/101ft/101ft_5.jpg';
import ft101_6 from '../../assets/charter/101ft/101ft_6.jpg';
import ft101_7 from '../../assets/charter/101ft/101ft_7.jpg';
import ft101_8 from '../../assets/charter/101ft/101ft_8.jpg';
import ft101_9 from '../../assets/charter/101ft/101ft_9.jpg';
import ft101_10 from '../../assets/charter/101ft/101ft_10.jpg';
import ft101_11 from '../../assets/charter/101ft/101ft_11.jpg';
import ft101_12 from '../../assets/charter/101ft/101ft_12.jpg';
import Buttons from '../Buttons/buttons';





export default function Ft101() {
  return(
    <div className="yachtInfo">
      <br />
                <br />
                <br />
                <br />
        <div className="yachtDetail">
            <div className="yachtImages">
              <img src={ft101_1} alt="101 feet image" />
              <img src={ft101_2} alt="101 feet image" />
              <img src={ft101_4} alt="101 feet image" />
              <img src={ft101_3} alt="101 feet image" />
              <img src={ft101_5} alt="101 feet image" />
              <img src={ft101_6} alt="101 feet image" />
              <img src={ft101_7} alt="101 feet image" />
              <img src={ft101_8} alt="101 feet image" />
              <img src={ft101_9} alt="101 feet image" />
              <img src={ft101_10} alt="101 feet image" />
              <img src={ft101_11} alt="101 feet image" />
              <img src={ft101_12} alt="101 feet image" />
            </div>
          <h1>Key Features of Majesty 101 Feet Yacht</h1>
          <h2>101ft Yacht</h2>
          <ul>
              <li><strong>Capacity:</strong> 50 Guests</li>
              <li><strong>Duration:</strong> Minimum 2 Hours</li>
              <li><strong>Cruise Route:</strong> Marina Canal, JBR, Ain Dubai, Palm, Skydive, Atlantis, Sheikh Island, Burj Al-Arab</li>
              <li><strong>Crew:</strong> 1 Captain, 3 Crew</li>
          </ul>

          <h2>Facilities</h2>
          <ul>
          <li>Music System, Safety Equipment, Fly Deck, Sundeck, 2 Master Bedrooms, 2 Bedrooms, Washroom, Shower, AC Lounge, Spacious Saloon, Kitchen, Swimming Platform</li>
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