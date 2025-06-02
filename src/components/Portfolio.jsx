import React from 'react';
import NavbarCustom from './NavbarCustom';
import PortfolioPreview from './PortfolioPreview';
import Footer from './Footer';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-page mt-5">
      {/* Force the navbar background always visible */}
      <NavbarCustom forceBackground={true} />
      {/* Render the Portfolio Preview section */}
      <PortfolioPreview />
    
    </div>
  );
};

export default Portfolio;
