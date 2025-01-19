// YachtCard.js
import React from 'react';
import PropTypes from 'prop-types';
import ImageSlider from './ImageSlider';
import { Link } from 'react-router-dom';

const YachtCard = ({ yacht = {} }) => {
  const { name = '', detail = '', btn = '', images = [] } = yacht;

  const handleWhatsAppClick = () => {
    const phoneNumber = '+971543307699';
    const message = 'I need more info !';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="yacht-card">
        <h3>{name}</h3>
      <ImageSlider images={images} />
      <div className="yacht-details">
        <p>{detail}</p>
        {/* <p>{capacity}</p> */}
        <button className="book-button" onClick={handleWhatsAppClick}>Book Yacht</button>
        <Link to={btn}>
        <button className="book-button">More Info</button>
        </Link>
      </div>
    </div>
  );
};

YachtCard.propTypes = {
  yacht: PropTypes.shape({
    name: PropTypes.string,
    detail: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
        alt: PropTypes.string
      })
    )
  })
};

export default YachtCard;
