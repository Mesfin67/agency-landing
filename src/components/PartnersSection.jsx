import React from 'react';
import './PartnersSection.css';

const partnerLogos = [
  'workout.jpeg',
  'workout.jpeg',
  'workout.jpeg',
  'workout.jpeg',
  'workout.jpeg',
  'workout.jpeg',
  'workout.jpeg',
];

const PartnersSection = () => {
  const logosRow = [...partnerLogos, ...partnerLogos];

  return (
    <section className="partners-section">
      <h2 className="partners-title">Partners</h2>
      <div className="fancy-underline"></div>
      <div className="partners-marquee-container">
        <div className="partners-row slide-right">
          {logosRow.map((logo, idx) => (
            <img key={idx} src={logo} alt={`Partner ${idx + 1}`} className="partner-logo" />
          ))}
        </div>
        <div className="partners-row slide-left m-5">
          {logosRow.map((logo, idx) => (
            <img key={idx} src={logo} alt={`Partner ${idx + 1}`} className="partner-logo" />
          ))}
        </div>
        {/* Blurry overlays at both ends */}
        <div className="marquee-overlay left"></div>
        <div className="marquee-overlay right"></div>
      </div>
    </section>
  );
};

export default PartnersSection;
