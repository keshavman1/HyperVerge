// src/GoogleKeep.js
import React from 'react';
import './GoogleKeep.css';

const GoogleKeep = () => {
  const openGoogleKeep = () => {
    window.open('https://keep.google.com/', '_blank');
  };

  return (
    <div className="keep-container">
      <h3>Google Keep</h3>
      <p>Click the button below to open Google Keep:</p>
      <button onClick={openGoogleKeep}>Open Google Keep</button>
    </div>
  );
};

export default GoogleKeep;
