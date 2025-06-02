import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { motion } from 'framer-motion';
import './NavbarCustom.css';

const NavbarCustom = ({ forceBackground }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleChange = (e) => {
    setMenuOpen(e.target.checked);
  };

  const resetMenu = () => {
    setMenuOpen(false);
    const checkbox = document.getElementById('checkbox');
    if (checkbox) checkbox.checked = false;
  };

  const handleNavClick = (link) => {
    setActiveLink(link);
    resetMenu();
  };

  return (
    <nav className={`navbar fixed-top ${forceBackground || isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Mobile Toggler */}
        <div className="d-flex d-md-none nav-left">
          {/* Ensure that the input and label are direct siblings */}
          <input id="checkbox" type="checkbox" onChange={handleToggleChange} />
          <label htmlFor="checkbox" className="toggle">
            <div id="bar1" className="bar"></div>
            <div id="bar2" className="bar"></div>
          </label>
        </div>

        {/* Centered Brand */}
        <div className="nav-brand">
          <Link
            to="/"
            className="navbar-brand text-white"
            onClick={() => {
              setActiveLink('');
              resetMenu();
            }}
          >
            Agency
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="d-none d-md-flex nav-links">
          <Link
            to="#services"
            className={`nav-link ${activeLink === '#services' ? 'active' : ''}`}
            onClick={() => handleNavClick('#services')}
          >
            Services
          </Link>
          <Link
            to="#portfolio-preview"
            className={`nav-link ${activeLink === '#portfolio-preview' ? 'active' : ''}`}
            onClick={() => handleNavClick('#portfolio-preview')}
          >
            Our Portfolio
          </Link>
        </div>

        {/* Contact Button */}
        <div className="nav-buttons">
          <Link
            to="#contact"
            className={`btn demo-btn rounded ${activeLink === '#contact' ? 'active' : ''}`}
            onClick={() => handleNavClick('#contact')}
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <motion.div
          className="nav-dropdown d-md-none"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.3 }}
        >
          <ul>
            <li>
              <Link
                to="#services"
                className={`nav-link ${activeLink === '#services' ? 'active' : ''}`}
                onClick={() => handleNavClick('#services')}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="#portfolio-preview"
                className={`nav-link ${activeLink === '#portfolio-preview' ? 'active' : ''}`}
                onClick={() => handleNavClick('#portfolio-preview')}
              >
                Our Portfolio
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default NavbarCustom;
