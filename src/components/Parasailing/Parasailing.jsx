import React from "react";
import "./Parasailing.css";
import Parasailing1 from "../../assets/Parasailing/Parasailing1.webp";
import Parasailing2 from "../../assets/Parasailing/Parasailing2.jpg";

const Parasailing = () => {
  return (
    <>
      <div className="Parasailing-container newYear">
        <h1 className="index">Parasailing</h1>
      </div>

      <div className="newYear-page2">
        <h2>Parasailing : Water Sports</h2>
        <div className="birthday-images">
          <div className="birthday-image-box">
            <img src={Parasailing1} alt="Wedding Celebration 1" />
          </div>
          <div className="birthday-image-box">
            <img src={Parasailing2} alt="Wedding Celebration 2" />
          </div>
        </div>
        <p>
          Try our parasailing activity in Dubai! If you are looking for the best
          way to enjoy Dubai’s scenic views, our parasailing ride activity is
          the way to go! Floating high above the water is truly an exhilarating
          experience. If you are looking for a bit of adrenaline, and
          sightseeing, and don’t feel like getting wet, parasailing would be an
          excellent option for you, and the speedboat tour would be a great
          alternative! On top of the thrills, you will get the best holiday
          pictures.
        </p>
        <br />
        <p>
          We are ideally located less than 10 minutes away from the Burj Al
          Arab, and the parasailing sessions offer the best background. The
          sessions are near the Burj Al Arab, and we can also offer Dubai Marina
          and Atlantis views at different prices.
        </p>
        <br />
        <p>
          Our team will take pictures during your parasailing flight behind a
          boat in Dubai. Also, you can also rent our GoPro with a selfie stick
          to be able to capture the moment from above and have a video of your
          adventure to share with friends and family.
        </p>
        <br />
        <div className="packages-info">
          <span>
            Contact <a href="https://gulfyachtsdubai.com/">Gulf Yachts Dubai</a>{" "}
            for boat and yacht rentals to make your Fly Boards truly magical.
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

export default Parasailing;
