// Download.js
import React from 'react';
import './download.css';

const Download = () => {
  return (
    <div className="download-container">
      <h1 className="download-slogan">Kill your friends, Assassinate your enemies</h1>

      <div className="phone-container">
        <img className="iphone-image" src="/logo512.png" alt="iPhone Screen Image" />
        <img className="iphone-image" src="/logo512.png" alt="iPhone Screen Image" />
        <img className="iphone-image" src="/logo512.png" alt="iPhone Screen Image" />
      </div>

      <div className="download-buttons">
        <div className="download-button">
          <a href="https://play.google.com/store/games?hl=en_US&gl=US" target="_blank" rel="noopener noreferrer">
            <img src="/logo512.png" alt="Download from Google Play" />
          </a>
        </div>
        <div className="download-button">
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img src="/logo512.png" alt="Download from Apple App Store" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Download;
