import Whatsapp from "../../assets/main-whatsapp.png";
import Call from "../../assets/CallPng/callPng.png";

export default function FixedBtn() {
  return (
    <>
      <div className="fixedBtn">
        <a
          href="https://wa.me/+971543307699?text=I%20need%20more%20Info%20!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Whatsapp} alt="Whatsapp" />
        </a>
      </div>

      <div className="fixedBtn2">
        <a href="tel:+971543307699" target="_blank" rel="noopener noreferrer">
          <img src={Call} alt="Whatsapp" />
        </a>
      </div>
    </>
  );
}
