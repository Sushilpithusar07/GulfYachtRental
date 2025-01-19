import Buttons from '../Buttons/buttons';
import './fishingTrips.css';

//  <-----   feet 35 images ------->
import ft35_1 from '../../assets/Fishing/ft35/ft35_1.jpg';
import ft35_2 from '../../assets/Fishing/ft35/ft35_2.jpg';
import ft35_3 from '../../assets/Fishing/ft35/ft35_3.jpg';
import ft35_4 from '../../assets/Fishing/ft35/ft35_4.jpg';
import ft35_5 from '../../assets/Fishing/ft35/ft35_5.jpg';

export default function Fishing35ft(){
  return(
    <div className="yachtInfo">
        <div className="yachtDetail">
            <div className="yachtImages">
              <img src={ft35_1} alt="35 feet image" />
              <img src={ft35_2} alt="35 feet image" />
              <img src={ft35_3} alt="35 feet image" />
              <img src={ft35_4} alt="35 feet image" />
              <img src={ft35_5} alt="35 feet image" />
            </div>
          <h1>35 Feet Fishing Boat </h1>
          <h2>AED 350/ Hour</h2>
          <ul>
          Enjoy fishing, swimming, and sightseeing aboard this spacious vessel, accommodating up to 10 guests.
              <li>Crew – 1 Captain & 1 Crew</li>
              Fishing Equipments | Swimming* | Sunbathing | Sightseeing | Washroom | Quality Sound System | Safety Equipments | Professional Licensed Captain & Crew
          </ul>
        </div>
        <Buttons/>
    </div>
  )
}