import React from 'react';
import kasaLogo from '../assets/KasaLogo.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={kasaLogo} className="footer-logo-img" alt="Kasa Logo" />
      </div>
      <div className="footer-content">
        {/* Footer with the year that is dynamically updated */}
        <p className="footer-content-text">
          ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          Kasa. All rights reserved
        </p>
      </div>
    </footer>
  );
}
