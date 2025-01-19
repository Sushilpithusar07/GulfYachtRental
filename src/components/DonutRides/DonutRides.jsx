import React from "react";
import "./DonutRides.css";
import donut1 from "../../assets/Donut/Donut1.jpg";
import donut2 from "../../assets/Donut/Donut2.jpg";
// import donut3 from "../../assets/Donut/Donut3.jpg";

const DonutRides = () => {
  return (
    <>
      <div className="donut-container newYear">
        <h1 className="index">Donut Rides</h1>
      </div>

      <div className="newYear-page2">
        <h2>Donut Rides : Water Sports</h2>
        <div className="birthday-images">
          <div className="birthday-image-box">
            <img src={donut1} alt="Wedding Celebration 1" />
          </div>
          <div className="birthday-image-box">
            <img src={donut2} alt="Wedding Celebration 2" />
          </div>
        </div>
        <br />
        <p>
          4 people can sit on donut ride dubai at the same time. The water
          sports activity in dubai can make you ever enjoyable. Without
          pressure, you can just enjoy the donut ride at dubai, no need to go to
          the sea if you do not feel like it. With Gulf Yacht Rentals you feel
          to do water sports activities one of the best choice, you will have
          guaranteed fun. Compared to other donut ride experience, the speedboat
          can pull ovet the donuts in high nuts, and our captain is a
          specialist. You can instruct them And they will follow the vibe. All
          rides start slowly so you can get used to the donuts and the waves,
          and you are ready to be the last survivor on the donut. You choseed
          one of the best water sports activity in dubai,
        </p>
        <br />

        <br />
        <br />
        <div className="packages-info">
          <span>
            Contact <a href="https://gulfyachtsdubai.com">Gulf Yachts Dubai</a>{" "}
            for boat and yacht rentals to make your Donut Rides truly magical.
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

export default DonutRides;
