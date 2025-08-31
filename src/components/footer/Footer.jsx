import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-sections">
            <div className="footer-section">
              <h3>Contact Information</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-label">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 6l-10 7L2 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <strong>Emails:</strong>
                  </div>
                  <div className="contact-details">
                    <span>kurbangaliyeva.a@nisa.edu.kz</span>
                    <span>kuatbayev.s@nisa.edu.kz</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-label">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <strong>Address:</strong>
                  </div>
                  <div className="contact-details">
                    <span>Хусейн бен Талал 19, Астана 010000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h3>Quick Links</h3>
              <div className="quick-links">
                <a href="/">Home</a>
                <a href="/tutorial">Tutorial</a>
                <a href="/analysis">Data Analysis</a>
                <a href="/aikbot">AI Assistant</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 Science Project. All rights reserved.</p>
            <p className="footer-tagline">
              Empowering scientific discovery through interactive learning
            </p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
