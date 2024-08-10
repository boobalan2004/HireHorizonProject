import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer1">
      <div className="contact">
        <span className="icon">&#128100;</span> CONTACT US
        <div className="social-icons">
          <a href="https://www.facebook.com/HireHorizon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com/HireHorizon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com/company/hirehorizon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/hirehorizon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <div className="content-info">
        Content of this website is designed, developed, hosted, owned, and managed by HireHorizon.
      </div>
      <div className="links">
        <a href="#copyright">Copyright</a>
        <a href="#privacy">Privacy</a>
        <a href="#disclaimer">Disclaimer</a>
      </div>
      <div className="copyright-info">
        &copy; 2024 Copyright: HireHorizon
      </div>
      <div className="footer-bottom">
        Copyright All Rights Reserved. HireHorizon
      </div>
    </footer>
  );
};

export default Footer;
