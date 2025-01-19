import React from "react";
import "./Jetski.css";
import Jetski1 from "../../assets/Jetski/Jetski1.jpg";
import Jetski2 from "../../assets/Jetski/Jetski2.jpg";
import Jetski3 from "../../assets/Jetski/Jetski3.jpg";

const Jetski = () => {
  return (
    <>
      <div className="jetski-container newYear">
        <h1 className="index">Jetski Ride</h1>
      </div>

      <div className="newYear-page2">
        <h2>Jetski Ride : Water Sports</h2>
        <div className="birthday-images">
          <div className="birthday-image-box">
            <img src={Jetski1} alt="Wedding Celebration 1" />
          </div>
          <div className="birthday-image-box">
            <img src={Jetski2} alt="Wedding Celebration 2" />
          </div>
          <div className="birthday-image-box">
            <img src={Jetski3} alt="Wedding Celebration 2" />
          </div>
        </div>
        <p>
        Gulf yacht Rentals we provides best  jetski rental tour in dubai  .jetski ride on the sea in Dubai makes special to our guest. Our clints will really enjoy our brand new jetskis in dubai and their new performance and equipments and you can discover Dubai like never before. If you are first timer chance to ride around jetski at Burj AL Arab or Atlantis. While you riding a jetski in dubai experience is unique and unforgettable .
        </p>
        <br />
        <br />
        <br />
        <div className="packages-info">
          <span>
            Contact <a href="https://gulfyachtsdubai.com">Gulf Yachts Dubai</a>{" "}
            for boat and yacht rentals to make your Yacht Ride truly
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

export default Jetski;
