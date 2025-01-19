import React from "react";
import "./Catering.css";
import Catering1 from "../../assets/Catering/Catering1.jpg";
import Catering2 from "../../assets/Catering/Catering2.jpg";
import Catering3 from "../../assets/Catering/Catering3.jpg";
import Catering4 from "../../assets/Catering/Catering4.jpg";

// Define the Package component with all props
const Package = ({ title, time, menu, refreshments, price }) => {
  return (
    <div className="inside-package">
      <h3>{title}</h3>
      <ul>
        <li>{time}</li>
        <li>{menu}</li>
        <li>{refreshments}</li>
        <li>{price}</li>
      </ul>
    </div>
  );
};

const Catering = () => {
  return (
    <>
      <div className="catering-container newYear">
        <h1 className="index">Catering</h1>
      </div>

      <div className="newYear-page2">
        <h2>Yacht Party Dubai : Luxurious Experiences on the Arabian Gulf</h2>
        <div className="catering-images">
          <div className="catering-image-box">
            <img src={Catering1} catering image />
          </div>
          <div className="catering-image-box">
            <img src={Catering2} catering image />
          </div>
          <div className="catering-image-box">
            <img src={Catering3} catering image />
          </div>
          <div className="catering-image-box">
            <img src={Catering4} catering image />
          </div>
        </div>
        <p>
          We Provides Yacht Catering Services in Dubai. Yacht Rental Dubai We
          provide amazing meals on the water. We deliver yacht and make sure
          everything is taken care of dubai yacht trips. We have the express
          option of delivering your amazing catering piping hot from our five
          star yacht catering , and also have full service, where we set up and
          serve all of your courses. We can provide servers, hostesses, bar
          tenders and more on yachts trips! We also have last minute delivery
          and can deliver your food to our yachts on dubai even if your already
          cruising! We have our famous BBQ menu on offer as well as our - Finger
          Food Menu - Seafood Menu - Deluxe Seafood Menu - International Menu -
          Tour of Asia Menu - Americana Menu - VIP Grand Feast - Vegan Fusion
          Menu .
        </p>
        <h2>Our catering services</h2>
          <p>Birthday party on yacht, Event yacht with food, Catering services on yacht, Wedding Events with food, Birthday Yacht, Wedding Yacht party, Corporate Event on yacht</p>
        

        <div className="headline">Here are the party Yacht Dubai packages:</div>
        <div className="packages">
          <Package
            title="52 Feet Yacht – Up To 20 People"
            time="5 Hours Cruise"
            menu="5 Star Buffet Menu"
            refreshments="Refreshments"
            price="4500 AED Only"
          />
          <Package
            title="70 Feet Yacht – Up To 30 People"
            time="4 Hours Cruise"
            menu="5 Star Buffet Menu"
            refreshments="Refreshments"
            price="5700 AED Only"
          />
          <Package
            title="MAJESTY 90 Feet Premium Yacht – Up To 40 People"
            time="4 Hours Cruise"
            menu="5 Star Buffet Menu"
            refreshments="Refreshments"
            price="9900 AED Only"
          />
          <Package
            title="52 Feet Yacht – Up To 20 People"
            time="3 Hours Cruise"
            menu="5 Star Buffet Menu"
            refreshments="Refreshments"
            price="3800 AED Only"
          />
          <Package
            title="80 Feet Yacht – Up To 35 People"
            time="4 Hours Cruise"
            menu="Jacuzzi"
            refreshments="5 Star Buffet Menu, Refreshments"
            price="7900 AED Only"
          />
          <Package
            title="95 Feet Yacht – Up To 65 People"
            time="4 Hours Cruise"
            menu="Swimming Pool"
            refreshments="5 Star Buffet Menu, Refreshments"
            price="11199 AED Only"
          />
          <div className="packages-info">
            <span>
              Dubai based the Gulf Yachts is the perfect place to give you the
              best{" "}
              <a href="https://gulfyachtsdubai.com/packages">
                yacht rental packages
              </a>{" "}
              and party ideas you are looking for, to make your party a
              fun-filled, most exceptional and fabulous party in the middle of
              the sea.
            </span>
            <div className="contact-btns">
              <a href="tel:+971543307699">Call</a>
              <a
                href="https://wa.me/+971543307699?text=I%20need%20more%20Info%20!"
                target="_blank"
                rel="noopener noreferrer"
              >
                Whatsapp
              </a>
              <a href="mailto:gulfyachtrental@gmail.com">Email</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catering;
