import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/premkhandelwal" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
        </a>
        <a href="https://github.com/premkhandelwal" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="footer-icon" />
        </a>
        <a href="mailto:prem.dkhandelwal@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
        </a>
      </div>
      <p className="footer-text">2024 &copy; All rights reserved.</p>
    </footer>
  );
}
