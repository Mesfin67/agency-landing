import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PortfolioPreviewCard.css';

const PortfolioPreviewCard = ({ title, description, image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="portfolio-preview-card">
        <img src={image} alt={title} className="preview-card-img" />
        <div className="preview-card-overlay">
          <div className="overlay-top">
            <h3 className="preview-card-title">{title}</h3>
            <p className="preview-card-description">{description}</p>
          </div>
          <div className="overlay-bottom">
            <a href="#!" onClick={handleOpenModal} className="view-more-link">
              View More <span className="arrow">→</span>
            </a>
            <button onClick={handleOpenModal} className="preview-btn">
              Preview
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content">
            <img src={image} alt={title} className="modal-img" />
            <button className="modal-close" onClick={handleCloseModal}>
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

PortfolioPreviewCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default PortfolioPreviewCard;
