import React from 'react';
import PropTypes from 'prop-types';
import './PortfolioCard.css';

const PortfolioCard = ({ topic, description, buttonText, image }) => {
  return (
    <div className="portfolio-card  group">
      {/* Full card image */}
      <img src={image} alt={topic} className="card-img" />
      
      {/* Overlay that appears on hover */}
      <div className="card-overlay">
        <h2 className="card-title">{topic}</h2>
        <p className="card-description">{description}</p>
        <button className="view-btn">{buttonText}</button>
      </div>
    </div>
  );
};

PortfolioCard.propTypes = {
  topic: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  image: PropTypes.string.isRequired,
};

PortfolioCard.defaultProps = {
  buttonText: 'View Detail',
};

export default PortfolioCard;
