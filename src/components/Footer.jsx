import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <hr />
      
      </nav>
      <p className="footer-copy">&copy; {new Date().getFullYear()}  Agency. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
