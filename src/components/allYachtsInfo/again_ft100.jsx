import Buttons from '../Buttons/buttons';


//  <-----  again feet 100 images ------->
import again_ft100_1 from '../../assets/charter/100ft/100ft_1.jpg';
import again_ft100_2 from '../../assets/charter/100ft/100ft_2.jpg';
import again_ft100_3 from '../../assets/charter/100ft/100ft_3.jpg';
import again_ft100_4 from '../../assets/charter/100ft/100ft_4.jpg';
import again_ft100_5 from '../../assets/charter/100ft/100ft_5.jpg';
import again_ft100_6 from '../../assets/charter/100ft/100ft_6.jpg';
import again_ft100_7 from '../../assets/charter/100ft/100ft_7.jpg';
import again_ft100_8 from '../../assets/charter/100ft/100ft_8.jpg';
import again_ft100_9 from '../../assets/charter/100ft/100ft_9.jpg';





export default function Ft80() {
  return(
    <div className="yachtInfo">
      <br />
                <br />
                <br />
                <br />
        <div className="yachtDetail">
            <div className="yachtImages">
              <img src={again_ft100_1} alt="100 feet image" />              
              <img src={again_ft100_2} alt="100 feet image" />              
              <img src={again_ft100_3} alt="100 feet image" />              
              <img src={again_ft100_4} alt="100 feet image" />              
              <img src={again_ft100_5} alt="100 feet image" />              
              <img src={again_ft100_6} alt="100 feet image" />              
              <img src={again_ft100_7} alt="100 feet image" />              
              <img src={again_ft100_8} alt="100 feet image" />              
              <img src={again_ft100_9} alt="100 feet image" />                
            </div>
          <h1>Key Features of 100 Feet Dream Yacht</h1>
          <h2>100 Feet Dream Yacht</h2>
          <ul>
              <li><strong>Capacity:</strong> Upto 100 Pax</li>
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