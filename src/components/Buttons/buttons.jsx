import call from '../../assets/phone-line.svg';
import email from '../../assets/mail-line.svg';
import whatsapp from '../../assets/whatsapp-line.svg';
import './buttons.css';

export default function Buttons(){
  return(
    <div className="contact-btns">
      <a href="tel:+971543307699" target="_blank" rel="noopener noreferrer"><img src={call} alt="" />Call Now</a>
      <a href="https://wa.me/+971543307699?text=I%20need%20more%20Info%20!" target="_blank" rel="noopener noreferrer"><img src={whatsapp} alt="" />Whatsapp</a>
      <a href="mailto:gulfyachtrental@gmail.com" target="_blank" rel="noopener noreferrer"><img src={email} alt="" />Email</a>
    </div>
  )
}