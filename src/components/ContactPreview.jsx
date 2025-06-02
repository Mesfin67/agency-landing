import React from 'react';
import { Link } from 'react-router-dom';

const ContactPreview = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Get In Touch</h2>
      <p style={styles.text}>
        Have a project in mind or need more information? We’d love to hear from you.
      </p>
      <Link to="/contact" style={styles.contactButton}>
        Contact Us
      </Link>
    </div>
  );
};

const styles = {
  container: { padding: '2rem', textAlign: 'center' },
  header: { fontSize: '2rem', marginBottom: '1rem' },
  text: { fontSize: '1.2rem' },
  contactButton: {
    marginTop: '1.5rem',
    padding: '1rem 2rem',
    backgroundColor: '#DAA520',
    color: '#fff',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '1.2rem'
  }
};

export default ContactPreview;
