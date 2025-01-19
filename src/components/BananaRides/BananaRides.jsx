import React from "react";
import "./BananaRides.css";
import Banana1 from "../../assets/Banana/Banana1.jpg";
import Banana2 from "../../assets/Banana/Banana2.jpg";

const BananaRides = () => {
  return (
    <>
      <div className="banana-container newYear">
        <h1 className="index">Banana Boat Ride</h1>
      </div>

      <div className="newYear-page2">
        <h2>Banana Boat Ride : Water Sports</h2>
        <div className="birthday-images">
          <div className="birthday-image-box">
            <img src={Banana1} alt="Wedding Celebration 1" />
          </div>
          <div className="birthday-image-box">
            <img src={Banana2} alt="Wedding Celebration 2" />
          </div>
        </div>
        <p>
          Banana boat Dubai at Gulf Yacht Rentals, you will feel the same way
          Jet Ski ride in Dubai, although the speed is not like a Jet Ski.
          Banana Boat Ride as it can accommodate 10 people at once. Banan ride
          Dubai one of the best water sports activities in Dubai .
        </p>
        <br />
        <br />

        <div className="packages-info">
          <span>
            Contact <a href="https://gulfyachtsdubai.com">Gulf Yachts Dubai</a>{" "}
            for boat and yacht rentals to make your Banana Boat Rides truly
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
    </>
  );
};

export default BananaRides;
