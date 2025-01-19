import Buttons from '../Buttons/buttons';

//  <-----  feet 90 images ------->
import ft90_1 from '../../assets/charter/90ft/90ft_1.jpg';
import ft90_2 from '../../assets/charter/90ft/90ft_2.jpg';
import ft90_3 from '../../assets/charter/90ft/90ft_3.jpg';
import ft90_4 from '../../assets/charter/90ft/90ft_4.jpg';
import ft90_5 from '../../assets/charter/90ft/90ft_5.jpg';
import ft90_6 from '../../assets/charter/90ft/90ft_6.jpg';
import ft90_7 from '../../assets/charter/90ft/90ft_7.jpg';
import ft90_8 from '../../assets/charter/90ft/90ft_8.jpg';
import ft90_9 from '../../assets/charter/90ft/90ft_9.jpg';





export default function Ft90() {
  return(
    <div className="yachtInfo">
      <br />
                <br />
                <br />
                <br />
        <div className="yachtDetail">
            <div className="yachtImages">
              <img src={ft90_1} alt="90 feet image" />
              <img src={ft90_2} alt="90 feet image" />
              <img src={ft90_3} alt="90 feet image" />
              <img src={ft90_4} alt="90 feet image" />
              <img src={ft90_5} alt="90 feet image" />
              <img src={ft90_6} alt="90 feet image" />
              <img src={ft90_7} alt="90 feet image" />
              <img src={ft90_8} alt="90 feet image" />
              <img src={ft90_9} alt="90 feet image" />
            </div>
          <h1>Key Features of 90 Feet Party Yacht House Boat</h1>
          <h2>90 Feet Party Yacht House Boat</h2>
          <ul> 
            <li>A Houseboat for all types of parties and events like Dinner cruise, Sunset cruise,birthdays, engagements, small wedding receptions, family and friends get together, seminars, after parties, yoga after parties, etc.
</li>
              <li><strong>Capacity:</strong> 60-70 Guests</li>
              <li><strong>Private Charter</strong></li>
              <li><strong>Inclusions: </strong> Open air upper deck with classic view for photography + air conditioned glass enclosed lower deck + 2 washrooms + bar counter</li>
              <li><strong>Crew - 4 persons:</strong>Captain, Engine operator, 2 deckhand</li>
          </ul>

          <h2>Water, cold drinks, ice, cups, tables, chairs, speakers and ice box.</h2> 
          
          <h2>Additional services :</h2>
          <ul>
          <li> Beverages are allowed from outside. <br /> Decorations on request (balloon) <br />Food arrangements for private.</li>
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