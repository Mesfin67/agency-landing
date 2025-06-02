import React from 'react';
import './OurServices.css';

const servicesData = [
  {
    icon: '🔵',
    title: 'Social Media Marketing',
    description: 'Engage your audience with strategic social media campaigns. Our tailored solutions drive engagement and growth.'
  },
  {
    icon: '🎥',
    title: 'Video Editing',
    description: 'Create captivating video content with precision editing and creative flair for modern viewers.'
  },
  {
    icon: '🎨',
    title: 'Graphics Design',
    description: 'Design striking logos, posters, and branding materials that capture your brand identity perfectly.'
  },
  {
    icon: '💰',
    title: 'Paid Advertising',
    description: 'Maximize ROI with targeted, data-driven advertising across multiple platforms with proven strategies.'
  },
  {
    icon: '🤝',
    title: 'Consulting & Management',
    description: 'Receive expert insights and comprehensive management to optimize your digital presence.'
  }
];

const OurServices = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-header">Our Services</h2>
        <div className="fancy-underline"></div>
        <div className="services-grid">
          {servicesData.map((service, idx) => (
            <div key={idx} className="service-item">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
