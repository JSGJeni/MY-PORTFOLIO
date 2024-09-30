import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 MyPortfolio</p>
      <div className="social-links">
        <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;
