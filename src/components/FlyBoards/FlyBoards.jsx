import React from "react";
import "./FlyBoards.css";
import FlyBoards1 from "../../assets/FlyBoards/FlyBoards1.jpg";
import FlyBoards2 from "../../assets/FlyBoards/FlyBoards2.jpg";

const FlyBoards = () => {
  return (
    <>
      <div className="Flyboards-container newYear">
        <h1 className="index">Fly Boards</h1>
      </div>

      <div className="newYear-page2">
        <h2>Fly Boards : Water Sports</h2>
        <div className="birthday-images">
          <div className="birthday-image-box">
            <img src={FlyBoards1} alt="Wedding Celebration 1" />
          </div>
          <div className="birthday-image-box">
            <img src={FlyBoards2} alt="Wedding Celebration 2" />
          </div>
        </div>
        <p>
          It is always an exciting experience to discover new ways to keep fit
          and active. And if you're an adrenaline seeker, the popular new
          flyboarding sport provides a perfect combination of high energy and
          fitness on the water. A water jetpack shaped like a snowboard and
          connected to a long hose attached to watercraft is a flyboard. The
          flyboard rider is driven in the air up to 15 meters by high-pressure
          water propulsion transmitted through the hose. Although it looks
          difficult, experienced fly boarders say it's like learning to walk and
          is not constrained by fitness level. Flyboarding can require some
          significant hand and foot coordination, but it does not require
          massive amounts of strength.
        </p>
        <br />
        <p>
          Go on an exciting adventure, floating away and sailing above the water
          with our Dubai flyboard experience. At Ride in Dubai, the latest sport
          which has revolutionized the world is now available. It's a modern
          description of fun in the water. It goes on your feet and lets you fly
          like a man of iron and swim like a dolphin!. Listen as a teacher with
          expertise demonstrates how during a full safety briefing, the Flyboard
          works. Wait for the jet boat to power up and buckle yourself onto the
          flyboard. We guarantee that our clients have unforgettable experiences
          and sensations after this sport!
        </p>
        <br />
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

export default FlyBoards;
