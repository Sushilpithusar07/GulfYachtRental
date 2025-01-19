import "./heroOther.css";
import React from "react";
import packages from "../../assets/Packages/yacht-rental-packages.webp";
import catering from "../../assets/Catering/Catering-banner.webp";
import deepseafishing from "../../assets/Packages/deep-sea-fishing.jpg";
import events from "../../assets/Corporate Events/award.webp";
import watersports from "../../assets/Packages/Watersports.jpg";
import { Link } from "react-router-dom";

export default function HeroOther() {
  return (
    <div className="heroOther">
      <h1>Popular Activities</h1>
      <h3>What We do for you</h3>

      <div className="heroOther-box">
        <div className="heroOther-img">
          <img src={packages} alt="Yacht Rental Packages" />
        </div>
        <div className="heroOther-content">
          <h1>Yacht Rental Packages</h1>
          <p>
            Gulf Yachts Dubai Have a Variety Of Rental Yacht Packages for
            wedding events, Birthday parties, Romantic Dinners, Bachelorette
            parties, Corporate Events, and New Year Celebrations. Gulf Yacht
            Rentals Providing world class premium yachts and offers No1 Yacht
            Rental Services.
          </p>
          <div className="flex">
            <a
              href="https://wa.me/+971543307699?text=I%20need%20more%20Info%20!"
              target="_blank"
              rel="noopener noreferrer"
              className="book-button"
            >
              Book Now
            </a>
            <a
              href="https://gulfyachtsdubai.com/packages"
              className="book-button"
            >
              More Info
            </a>
          </div>
        </div>
      </div>

      <div className="heroOther-box">
        <div className="heroOther-img">
          <img src={events} alt="Event Yachts Dubai" />
        </div>
        <div className="heroOther-content">
          <h1>Event Yachts Dubai</h1>
          <p>
            Are you looking for event yachts in dubai, we take care of each and
            every detail of your event to make your experience a memorable one.
            Gulf Yachts Dubai Provide customized yachts for all kind of events
            at best prices. Every package is suits your requirement.
          </p>
          <div className="flex">
            <a
              href="https://wa.me/+971543307699?text=I%20need%20more%20Info%20!"
              target="_blank"
              rel="noopener noreferrer"
              className="book-button"
            >
              Book Now
            </a>
            <Link to="/Package/CorporateEvents"
              className="book-button"
            >
              More Info
            </Link>
          </div>
        </div>
      </div>

      <div className="heroOther-box">
        <div className="heroOther-img">
          <img src={catering} alt="Catering" />
        </div>
        <div className="heroOther-content">
          <h1>Catering</h1>
          <p>
            Gulf Yacht Rentals Dubai Provides a Variety Of Catering Services
            Includes Continental and International Menus, Arabic and Indian Food
            Menus ,Luxury Hot and Cold Beverages, and Luxury 3 or 4-course ,
            5-star buffet Setup Dinners.Come on board & savor on delicious
            grilled meat as you cruise along the waters with someone special by
            your side.
          </p>
          <div className="flex">
            <a
              href="https://wa.me/+971543307699?text=I%20need%20more%20Info%20!"
              target="_blank"
              rel="noopener noreferrer"
              className="book-button"
            >
              Book Now
            </a>
            <a
              href="https://gulfyachtsdubai.com/Packages/Catering"
              className="book-button"
            >
              More Info
            </a>
          </div>
        </div>
      </div>

      <div className="heroOther-box">
        <div className="heroOther-img">
          <img src={deepseafishing} alt="Deep Sea Fishing Dubai" />
        </div>
        <div className="heroOther-content">
          <h1>Deep Sea Fishing Dubai</h1>
          <p>
            Gulf Yachts Dubai Provides Deep-sea Sea Fishing Trips To Spend Some
            Quality Outdoors with Your Family Friends and Loved Ones. We Provide
            the Best Deep Sea Fishing Trips in Dubai. Gulf Yacht Rentals Dubai
            One Of The Best Fishing Trip Provider.
          </p>
          <div className="flex">
            <a
              href="https://wa.me/+971543307699?text=I%20need%20more%20Info%20!"
              target="_blank"
              rel="noopener noreferrer"
              className="book-button"
            >
              Book Now
            </a>
            <a
              href="https://gulfyachtsdubai.com/fishingTrips"
              className="book-button"
            >
              More Info
            </a>
          </div>
        </div>
      </div>

      <div className="heroOther-box">
        <div className="heroOther-img">
          <img src={watersports} alt="Water Sports Dubai" />
        </div>
        <div className="heroOther-content">
          <h1>Water Sports Dubai</h1>
          <p>
            Gulf Yachts Dubai Provides Best Adventure Water Sports Activities In
            Dubai with a breathtaking view of the Coastline. We have on board a
            variety of water sports and adventure activities. For the real dare
            devils to the first time.
          </p>
          <div className="flex">
            <a
              href="https://wa.me/+971543307699?text=I%20need%20more%20Info%20!"
              target="_blank"
              rel="noopener noreferrer"
              className="book-button"
            >
              Book Now
            </a>
            <Link to="/Package/WaterSports"
              className="book-button"
            >
              More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
