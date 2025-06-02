import React, { useState } from 'react';
import PortfolioPreviewCard from './PortfolioPreviewCard';
import { cardsByCategory } from './cardsData';
import './PortfolioPreview.css';

//  filter options
const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'Web Development', value: 'web' },
  { label: 'Graphics Design', value: 'graphics' },
  { label: 'Social Media Marketing', value: 'social' },
  { label: '3D Design', value: '3d' },
  { label: 'Video Editing', value: 'video' }
];

const PortfolioPreview = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const allCards = Object.values(cardsByCategory).flat();
  const filteredCards = activeFilter === 'all'
    ? allCards
    : cardsByCategory[activeFilter] || [];

  return (
    <section className="portfolio-preview-section">
      <div className="portfolio-preview-container">
        <h2 className="portfolio-preview-header">Portfolio</h2>
        <div className="fancy-underline"></div>
        <div className="portfolio-preview-filters">
          {filterOptions.map((option, idx) => (
            <button
              key={idx}
              className={`filter-button ${activeFilter === option.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
        <div className="portfolio-preview-grid">
          {filteredCards.map(card => (
            <PortfolioPreviewCard
              key={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
