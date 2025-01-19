import React from "react";
import "./WeddingCelebration.css";
import Wedding1 from "../../assets/Wedding/Wedding1.jpg";
import Wedding2 from "../../assets/Wedding/Wedding2.jpg";

// Define the Package component with all props for Wedding Celebrations
const Package = ({
  title,
  time,
  menu,
  decorations,
  bouquet,
  refreshments,
  additional,
  price,
}) => {
  return (
    <div className="inside-package">
      <h3>{title}</h3>
      <ul>
        <li>
          <b>Time:</b> {time}
        </li>
        <li>
          <b>Menu:</b> {menu}
        </li>
        <li>
          <b>Decorations:</b> {decorations}
        </li>
        <li>
          <b>Flower Bouquet:</b> {bouquet}
        </li>
        <li>
          <b>Refreshments & BBQ:</b> {refreshments}
        </li>
        {additional && (
          <li>
            <b>Additional:</b> {additional}
          </li>
        )}
        <li>
          <b>Price:</b> {price}
        </li>
      </ul>
    </div>
  );
};

const WeddingCelebration = () => {
  return (
    <>
      <div className="wedding-container newYear">
        <h1 className="index">Wedding Celebration</h1>
      </div>

      <div className="newYear-page2">
        <h2>Wedding Celebrations: Romantic Moments on a Yacht</h2>
        <div className="birthday-images">
          <div className="birthday-image-box">
            <img src={Wedding1} alt="Wedding Celebration 1" />
          </div>
          <div className="birthday-image-box">
            <img src={Wedding2} alt="Wedding Celebration 2" />
          </div>
        </div>
        <p>
          Wedding Anniversaries Yachts Rental in Dubai,Plan Your Special
          Occasions and make it a magical celebration on Luxury Yachts in Dubai
          Marina. wedding yachts dubai marina we provides ,yacht party packages
          for your wedding anniversary celebration have got you covered.Yacht
          for Wedding and Anniversary ,the moments is much needed than just a
          celebration! celebration with your love or hosting a group of family
          and friends with Dubai yacht party packages .
        </p>
        <div className="headline">Here are the packages:</div>
        <div className="packages">
          <Package
            title="50 Feet Luxury Yacht – Up To 20 People"
            time="3 Hours Cruise"
            menu="Cake, BBQ"
            decorations="Elegant Wedding Decorations"
            bouquet="Flower Bouquet"
            refreshments="Refreshments & BBQ"
            additional="5 Star Food, Wines & Champagne"
            price="Contact for Pricing"
          />
          <Package
            title="70 Feet Luxury Yacht – Up To 30 People"
            time="3 Hours Cruise"
            menu="Cake, BBQ"
            decorations="Elegant Wedding Decorations"
            bouquet="Flower Bouquet"
            refreshments="Refreshments & BBQ"
            additional="5 Star Food, Wines & Champagne"
            price="Contact for Pricing"
          />
          <Package
            title="80 Feet Luxury Yacht with Jacuzzi – Up To 40 People"
            time="3 Hours Cruise"
            menu="Cake, BBQ"
            decorations="Elegant Wedding Decorations"
            bouquet="Flower Bouquet"
            refreshments="Refreshments & BBQ"
            additional="5 Star International Food, Wines & Champagne"
            price="Contact for Pricing"
          />
          <Package
            title="101 Feet New Majesty Luxury Yacht"
            time="3 Hours Cruise"
            menu="Cake, BBQ"
            decorations="Elegant Wedding Decorations"
            bouquet="Flower Bouquet"
            refreshments="Refreshments & BBQ"
            additional="5 Star Food, Wines & Champagne"
            price="Contact for Pricing"
          />
          <Package
            title="100+ Feet Super Yacht – Large Groups"
            time="3 Hours Cruise"
            menu="Cake, BBQ"
            decorations="Elegant Wedding Decorations"
            bouquet="Flower Bouquet"
            refreshments="Refreshments & BBQ"
            additional="5 Star Food, Wines & Champagne"
            price="Contact for Pricing"
          />
          <div className="packages-info">
            <span>
              Contact{" "}
              <a href="https://gulfyachtsdubai.com/">Gulf Yachts Dubai</a> for
              boat and yacht rentals to make your wedding celebration truly
              magical.
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

export default WeddingCelebration;
