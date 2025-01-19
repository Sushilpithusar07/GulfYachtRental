import Buttons from "../Buttons/buttons";
import "./Packages.css";
import Catering from "../../assets/Packages/Catering.webp";
import SeaFishing from "../../assets/Packages/deep-sea-fishing.jpg";
import WaterSports from "../../assets/Packages/Watersports.jpg";
import BirthdayParty from "../../assets/Packages/birthday.jpg";
import Wedding from "../../assets/Packages/wedding.jpg";
import BacheloretteParty from "../../assets/Packages/bachelorette.jpg";
import CorporateEvents from "../../assets/Packages/Corporate-Events.jpg";
import Formula from "../../assets/Packages/formulla.jpg";
import NewYear from "../../assets/Packages/newYear.jpg";
import React from "react";
import { Link } from "react-router-dom";

export default function Packages() {
  return (
    <>
      <div className="packagesHero">
        <div className="packages-hero">
          <div className="packages-hero-content">
            <h1>YACHT RENTAL DUBAI PACKAGES</h1>
            <p>
              "Discover Exclusive Luxury: Experience Premier Yacht Rentals in
              Dubai with Unmatched Offers!"
            </p>
          </div>
          <br />
          <br />
          <Buttons />
        </div>
        <div className="charterYachts-content">
          <h1>LUXURY YACHT RENTAL DUBAI PACKAGES</h1>
          <p>
            At Gulf Yachts, we offer a wide range of luxury yacht rental
            packages in Dubai to cater to your every need. Whether you’re
            looking for a sightseeing tour, a fishing trip in Dubai, or a
            romantic sunset cruise, we have the perfect yacht charter for you.
          </p>
          <p>
            Gulf Yachts have a wide range of yacht charters with base prices
            that include insurance, equipment, water toys, crew, food, water,
            soft drinks, snacks, fuel, and luxury boat rental for cruising in
            Dubai.
          </p>
          <h1>
            Explore Unforgettable Experiences With Our Best Yacht Rental Dubai
            Packages
          </h1>
          <p>
            From exploring the Dubai Canal to cruising around the iconic Palm
            Jumeirah, our yacht charter services provide endless possibilities
            for adventure and relaxation. Choose from our selection of exclusive
            cuisine menus, transportation options, and water sports activities
            to customize your perfect yacht rental Dubai experience.
          </p>
        </div>
      </div>
      <div className="packages">
        <div className="package">
          <img src={Catering} alt="package image" />
          <div className="package-overlay">
            <Link to="/Catering">
              <h1>Catering</h1>
            </Link>
          </div>
        </div>
        <div className="package">
          <img src={SeaFishing} alt="package image" />
          <div className="package-overlay">
            <Link to="/fishingTrips">
              <h1>Deep Sea Fishing</h1>
            </Link>
          </div>
        </div>

        <div className="package">
          <img src={BirthdayParty} alt="package image" />
          <div className="package-overlay">
            <Link to="/Package/BirthdayParty">
              <h1>Birthday Party</h1>
            </Link>
          </div>
        </div>

        <div className="package">
          <img src={Wedding} alt="package image" />
          <div className="package-overlay">
            <Link to="/Wedding">
              <h1>Wedding</h1>
            </Link>
          </div>
        </div>
        <div className="package">
          <img src={CorporateEvents} alt="package image" />
          <div className="package-overlay">
            <Link to="/Package/CorporateEvents">
              <h1>Corporate Events</h1>
            </Link>
          </div>
        </div>

        <div className="package">
          <img src={WaterSports} alt="package image" />
          <div className="package-overlay">
            <Link to="/Package/WaterSports">
              <h1>WaterSports</h1>
            </Link>
          </div>
        </div>

        <div className="package">
          <img src={BacheloretteParty} alt="package image" />
          <div className="package-overlay">
            <a
              href="https://wa.me/+971543307699?text=I%20need%20more%20Info%20!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>Bachelorette Party</h1>
            </a>
          </div>
        </div>

        <div className="package">
          <img src={Formula} alt="package image" />
          <div className="package-overlay">
            <a
              href="https://wa.me/+971543307699?text=I%20need%20more%20Info%20!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>Formula 1</h1>
            </a>
          </div>
        </div>
        <div className="package">
          <img src={NewYear} alt="package image" />
          <div className="package-overlay">
            <a
              href="https://wa.me/+971543307699?text=I%20need%20more%20Info%20!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>New Year Celebrations</h1>
            </a>
          </div>
        </div>
      </div>
      <div className="charterYachts-content">
        <h1>Discover Our Luxurious Yacht Rental Packages</h1>
        <p>
          Experience the pinnacle of luxury with Gulf Yacht Rental's bespoke
          packages, meticulously designed to cater to every occasion. Whether
          it's a romantic getaway, a thrilling adventure, or a grand
          celebration, our packages promise an unforgettable experience on the
          pristine waters of Dubai.
        </p>
        <h1>1. Catering Package</h1>
        <p>
          Savor the finest culinary delights with our Catering Package. Perfect
          for intimate gatherings or large parties, this package includes:
        </p>
        <ul>
          <li>Customized menu crafted by top chefs</li>
          <li>Onboard dining setup with elegant décor</li>
          <li>Professional serving staff</li>
          <li>Optional live cooking stations</li>
        </ul>
        <h1>2. Deep Sea Fishing Package</h1>
        <p>
          Embark on an exhilarating fishing adventure with our Deep Sea Fishing
          Package. Ideal for fishing enthusiasts, this package offers:
        </p>
        <ul>
          <li>6-hour fishing trip on a fully-equipped yacht</li>
          <li>Experienced fishing guide and crew</li>
          <li>High-quality fishing equipment and bait</li>
          <li>Refreshments and snacks</li>
        </ul>
        <h1>3. Photo Shoot Package</h1>
        <p>
          Capture your special moments against the stunning backdrop of Dubai's
          skyline with our Photo Shoot Package. This package includes:
        </p>
        <ul>
          <li>3-hour yacht rental for the photo session</li>
          <li>Professional photographer and crew</li>
          <li>Access to iconic landmarks for breathtaking shots</li>
          <li>Complimentary refreshments</li>
        </ul>
        <h1>4. Birthday Party Package</h1>
        <p>
          Celebrate your birthday in style with our Birthday Party Package. This
          package is designed to make your special day unforgettable and
          includes:
        </p>
        <ul>
          <li>5-hour luxury yacht rental</li>
          <li>Customized decorations and theme setup</li>
          <li>Professional DJ and sound system</li>
          <li>Delicious gourmet catering and bar service</li>
        </ul>
        <h1>5. Wedding Package</h1>
        <p>
          Say "I do" in the most romantic setting with our Wedding Package.
          Perfect for intimate ceremonies or grand celebrations, this package
          offers:
        </p>
        <ul>
          <li>Full-day yacht rental</li>
          <li>Customized wedding décor and setup</li>
          <li>Professional wedding planner and coordinator</li>
          <li>Gourmet catering and beverage service</li>
        </ul>
        <h1>6. Bachelorette Party Package</h1>
        <p>
          Celebrate your last fling before the ring with our Bachelorette Party
          Package. Designed for an unforgettable night, this package includes:
        </p>
        <ul>
          <li>4-hour luxury yacht rental</li>
          <li>Customized party decorations</li>
          <li>Professional DJ and sound system</li>
          <li>Premium bar service and catering</li>
        </ul>
        <h1>7. Corporate Event Package</h1>
        <p>
          Host your next corporate event on the high seas with our Corporate
          Event Package. Ideal for meetings, team-building, or client
          entertainment, this package offers:
        </p>
        <ul>
          <li>4-hour yacht rental with flexible scheduling</li>
          <li>Onboard conference facilities and AV equipment</li>
          <li>Customized catering options</li>
          <li>Professional event planning and coordination</li>
        </ul>
        <h1>8. Formula 1 Package</h1>
        <p>
          Experience the thrill of the Grand Prix from the water with our
          Formula 1 Package. Perfect for racing fans, this package includes:
        </p>
        <ul>
          <li>8-hour yacht rental during the Formula 1 event</li>
          <li>Prime viewing location on the water</li>
          <li>Gourmet catering and bar service</li>
          <li>Live race screening onboard</li>
        </ul>
        <h1>9. New Year Celebration Package</h1>
        <p>
          Ring in the New Year with style and elegance on the waters of Dubai
          with our New Year Celebration Package. This package offers:
        </p>
        <ul>
          <li>6-hour luxury yacht rental on New Year's Eve</li>
          <li>Spectacular fireworks view</li>
          <li>Professional DJ and live entertainment</li>
          <li>Exquisite dining and premium bar service</li>
        </ul>
        <h1>Why Choose Gulf Yacht Rental?</h1>
        <p>
          At Gulf Yacht Rental, we pride ourselves on delivering exceptional
          service and creating unforgettable experiences. Our fleet of luxurious
          yachts, experienced crew, and personalized packages ensure that every
          detail is taken care of, allowing you to relax and enjoy your time on
          the water.
        </p>
        <p>
          <strong>Luxurious Fleet: </strong> Choose from a wide range of premium
          yachts equipped with state-of-the-art amenities.
        </p>
        <p>
          <strong>Experienced Crew:</strong>Our professional crew and captains
          are dedicated to providing top-notch service.
        </p>
        <p>
          <strong>Customizable Packages: </strong> Tailor your yachting
          experience to meet your specific needs and preferences.
        </p>
        <p>
          <strong>Competitive Pricing: </strong> Enjoy the best value for your
          money with our competitively priced packages.
        </p>
        <h1>Book Your Dream Yacht Experience Today!</h1>
        <p>
          Ready to embark on an unforgettable journey with Gulf Yacht Rental?
          Contact us today to learn more about our packages and to book your
          exclusive yacht rental experience. Discover the ultimate luxury and
          elegance on the waters of Dubai with Gulf Yacht Rental.
        </p>
      </div>
    </>
  );
}
