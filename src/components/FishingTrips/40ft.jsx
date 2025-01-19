import Buttons from '../Buttons/buttons';
import './fishingTrips.css';

//  <-----   feet 36 images ------->
import ft40_1 from '../../assets/Fishing/ft40/ft40_1.jpg';
import ft40_2 from '../../assets/Fishing/ft40/ft40_2.jpg';
import ft40_3 from '../../assets/Fishing/ft40/ft40_3.jpg';
import ft40_4 from '../../assets/Fishing/ft40/ft40_4.jpg';
import ft40_5 from '../../assets/Fishing/ft40/ft40_5.jpg';
import ft40_6 from '../../assets/Fishing/ft40/ft40_6.jpg';
import ft40_7 from '../../assets/Fishing/ft40/ft40_7.jpg';
import ft40_8 from '../../assets/Fishing/ft40/ft40_8.jpg';
import ft40_9 from '../../assets/Fishing/ft40/ft40_9.jpg';

export default function Fishing40ft(){
  return(
    <div className="yachtInfo">
        <div className="yachtDetail">
            <div className="yachtImages">
              <img src={ft40_1} alt="40 feet image" />
              <img src={ft40_2} alt="40 feet image" />
              <img src={ft40_3} alt="40 feet image" />
              <img src={ft40_4} alt="40 feet image" />
              <img src={ft40_5} alt="40 feet image" />
              <img src={ft40_6} alt="40 feet image" />
              <img src={ft40_7} alt="40 feet image" />
              <img src={ft40_8} alt="40 feet image" />
              <img src={ft40_9} alt="40 feet image" />
            </div>
          <h1>40 Feet Fishing Boat </h1>
          <h2>AED 360/ Hour</h2>
          <ul>
          Enjoy fishing, swimming, and sightseeing aboard this spacious vessel, accommodating up to 12 guests.
              <li>Crew – 1 Captain & 1 Crew</li>
              Fishing Equipments | Swimming* | Sunbathing | Sightseeing | Washroom | Quality Sound System | Safety Equipments | Professional Licensed Captain & Crew
          </ul>
        </div>
        <Buttons/>
    </div>
  )
}