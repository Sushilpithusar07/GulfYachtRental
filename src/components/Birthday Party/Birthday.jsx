import React from "react";
import "./Birthday.css";
import Birthday1 from "../../assets/Birthday/Birthday1.jpg";
import Birthday2 from "../../assets/Birthday/Birthday2.jpg";

// Define the Package component with all props for Birthday Party
const Package = ({ title, time, menu, decorations, price }) => {
  return (
    <div className="inside-package">
      <h3>{title}</h3>
      <ul>
        <li>{time}</li>
        <li>{menu}</li>
        <li>{decorations}</li>
        <li>{price}</li>
      </ul>
    </div>
  );
};

const BirthdayParty = () => {
  return (
    <>
      <div className="birthday-container newYear">
        <h1 className="index">Birthday Party</h1>
      </div>

      <div className="newYear-page2">
        <h2>Birthday Parties: Memorable Celebrations on a Yacht</h2>
        <div className="birthday-images">
          <div className="birthday-image-box">
            <img src={Birthday1} alt="birthday img" />
          </div>
          <div className="birthday-image-box">
            <img src={Birthday2} alt="birthday img" />
          </div>
        </div>
        <p>
        Host your Birthday on luxuries yachts in dubai. 
Birthday Party on a Yacht in Dubai.
Make your special day more memorable by hosting a birthday party at a premium yacht rental in Dubai marina with us. 
Celebrate your birthday party  with a luxurious yachts in dubai! gulf Yacht Rental is your go-to for Birthday Yacht Rentals in Dubai, ensuring your special day is memorable. 
Dubai Marina Birthday Party Yacht / Birthday Party Boat /Birthday Party Cruise might be just the right thing you are looking for! 
Celebrate Your party on dubai yachts , birthday celebration on super yachts , party yachts dubai , book your special Oceans yacht rental dubai .
        </p>
        <p>
          We allow you to customise your birthday theme that showcases your
          personality and simply eat, drink, dance, enjoy and sway the evening
          away!
        </p>
        <p>
          We have specialized themes like BBQ theme, sport theme, fishing theme
          and many more to count. Opt for themes that showcase your personality
          and simply eat, drink, dance, enjoy and sway the evening away!
        </p>
        <div className="headline">Here are the packages:</div>
        <div className="packages">
          <Package
            title="2 Hours Cruise – Birthday Package"
            time="2 Hours Cruise"
            menu="Birthday Cake, Decorations & Refreshments"
            decorations="1399 AED Only"
            price="1399 AED Only"
          />
          <Package
            title="50 Feet Yacht – Up To 15 People"
            time="4 Hours Cruise"
            menu="Live BBQ"
            decorations="Birthday Cake, Decorations & Refreshments"
            price="2999 AED Only"
          />
          <Package
            title="50 Feet Yacht – Up To 20 People"
            time="4 Hours Cruise"
            menu="Buffet Menu (Choose your menu)"
            decorations="Birthday Cake, Decorations & Refreshments"
            price="4200 AED Only"
          />
          <Package
            title="70 Feet Yacht – Up To 30 People"
            time="3 Hours Cruise"
            menu="Buffet Menu"
            decorations="Birthday Cake, Decorations & Refreshments"
            price="5200 AED Only"
          />
          <div className="packages-info">
            <span>
              Contact Gulf Yachts Dubai for boat and yacht rentals to make your
              birthday celebration truly unforgettable.
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

export default BirthdayParty;
