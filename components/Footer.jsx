// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="main-footer">
    <div className="footer-content">
      <div className="contact-info">
        <h4>Contact</h4>
        <p>Phone: +91-9876543210</p>
        <p>Email: support@crackersmart.com</p>
      </div>
      <div className="bank-details">
        <h4>Bank Details</h4>
        <p>Name: CrackersMart Pvt Ltd</p>
        <p>IFSC: ICIC0001234</p>
        <p>Account: 1234567890</p>
      </div>
      <div className="gpay-qr-container">
        <img src="/images/gpay-qr.png" alt="GPay QR" className="gpay-qr" />
        <p>Scan & Pay</p>
      </div>
    </div>
    <p className="footer-copy">&copy; 2025 CrackersMart. All Rights Reserved.</p>
  </footer>
);

export default Footer;
