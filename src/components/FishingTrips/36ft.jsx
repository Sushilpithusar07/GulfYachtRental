import Buttons from '../Buttons/buttons';
import './fishingTrips.css';

//  <-----   feet 36 images ------->
import ft36_1 from '../../assets/Fishing/ft36/ft36_1.jpg';
import ft36_2 from '../../assets/Fishing/ft36/ft36_2.jpg';
import ft36_3 from '../../assets/Fishing/ft36/ft36_3.jpg';
import ft36_4 from '../../assets/Fishing/ft36/ft36_4.jpg';
import ft36_5 from '../../assets/Fishing/ft36/ft36_5.jpg';
import ft36_6 from '../../assets/Fishing/ft36/ft36_6.jpg';
import ft36_7 from '../../assets/Fishing/ft36/ft36_7.jpg';
import ft36_8 from '../../assets/Fishing/ft36/ft36_8.jpg';
import ft36_9 from '../../assets/Fishing/ft36/ft36_9.jpg';

export default function Fishing36ft(){
  return(
    <div className="yachtInfo">
        <div className="yachtDetail">
            <div className="yachtImages">
              <img src={ft36_1} alt="36 feet image" />
              <img src={ft36_2} alt="36 feet image" />
              <img src={ft36_3} alt="36 feet image" />
              <img src={ft36_4} alt="36 feet image" />
              <img src={ft36_5} alt="36 feet image" />
              <img src={ft36_6} alt="36 feet image" />
              <img src={ft36_7} alt="36 feet image" />
              <img src={ft36_8} alt="36 feet image" />
              <img src={ft36_9} alt="36 feet image" />
            </div>
          <h1>36 Feet Fishing Boat </h1>
          <h2>AED 360/ Hour</h2>
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