// src/GoogleKeep.js
import React from 'react';
import './GoogleKeep.css';

const GoogleKeep = () => {
  return (
    <div className="keep-container">
      <h3>Google Keep</h3>
      {/* Embed Google Keep link or API integration */}
      <iframe
        src="https://keep.google.com/"
        style={{ border: '0', width: '100%', height: '400px' }}
        frameBorder="0"
        scrolling="no"
        title="Google Keep"
      ></iframe>
    </div>
  );
};

export default GoogleKeep;
