import Buttons from '../Buttons/buttons';
import './fishingTrips.css';

//  <-----   feet 36 images ------->
import ft52_1 from '../../assets/Fishing/ft52/ft52_1.jpg';
import ft52_2 from '../../assets/Fishing/ft52/ft52_2.jpg';
import ft52_3 from '../../assets/Fishing/ft52/ft52_3.jpg';
import ft52_4 from '../../assets/Fishing/ft52/ft52_4.jpg';
import ft52_5 from '../../assets/Fishing/ft52/ft52_5.jpg';
import ft52_6 from '../../assets/Fishing/ft52/ft52_6.jpg';
import ft52_7 from '../../assets/Fishing/ft52/ft52_7.jpg';
import ft52_8 from '../../assets/Fishing/ft52/ft52_8.jpg';
import ft52_9 from '../../assets/Fishing/ft52/ft52_9.jpg';
import ft52_10 from '../../assets/Fishing/ft52/ft52_10.jpg';
import ft52_11 from '../../assets/Fishing/ft52/ft52_11.jpg';
import ft52_12 from '../../assets/Fishing/ft52/ft52_12.jpg';

export default function Fishing52ft(){
  return(
    <div className="yachtInfo">
        <div className="yachtDetail">
            <div className="yachtImages">
              <img src={ft52_1} alt="52 feet image" />
              <img src={ft52_2} alt="52 feet image" />
              <img src={ft52_3} alt="52 feet image" />
              <img src={ft52_4} alt="52 feet image" />
              <img src={ft52_5} alt="52 feet image" />
              <img src={ft52_6} alt="52 feet image" />
              <img src={ft52_7} alt="52 feet image" />
              <img src={ft52_8} alt="52 feet image" />
              <img src={ft52_9} alt="52 feet image" />
              <img src={ft52_10} alt="52 feet image" />
              <img src={ft52_11} alt="52 feet image" />
              <img src={ft52_12} alt="52 feet image" />
            </div>
          <h1>52 Feet Fishing Boat </h1>
          <ul>
          Enjoy fishing, swimming, and sightseeing aboard this spacious vessel, accommodating up to 20 guests.
              <li>Crew – 1 Captain & 1 Crew</li>
              Fishing Equipments | Swimming* | Sunbathing | BBQ Stations & Microwave | Washroom | Quality Sound System | Safety Equipments | Professional Licensed Captain & Crew
          </ul>
        </div>
        <Buttons/>
    </div>
  )
}