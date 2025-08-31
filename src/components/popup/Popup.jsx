import React, { useEffect, useState } from "react";
import "./Popup.css";

const Popup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  const handleLearnMore = () => {
    // change the URL to your page/route
    window.location.href = "/about-ai";
  };

  return (
    <div className="popup-overlay" onClick={() => setShow(false)} role="dialog" aria-modal="true">
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button
          className="popup__close"
          aria-label="Close"
          onClick={() => setShow(false)}
        >
          ✕
        </button>

        <div className="popup__header">
          <span className="popup__badge">🤖 AI Assistant</span>
          <h2 className="popup__title">Welcome to Our Platform</h2>
        </div>

        <div className="popup__body">
          <p>
            We are proud to introduce our <b>AI-powered assistant</b>, designed exclusively for
            <b> IB students</b>. This specialized bot provides guidance on <b>Lab Reports</b>,
            <b> MYP/DP criteria</b>, and <b>scientific documentation</b> — helping you save time and
            improve the quality of your work.
          </p>
        </div>

        <div className="popup__actions">
          <button className="popup__btn popup__btn--secondary" onClick={handleLearnMore}>
            Learn More
          </button>
          <button className="popup__btn popup__btn--primary" onClick={() => setShow(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
