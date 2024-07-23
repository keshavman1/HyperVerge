// src/GoogleMeet.js
import React from 'react';
import './GoogleMeet.css';

const GoogleMeet = () => {
  const openGoogleMeet = () => {
    window.open('https://meet.google.com/', '_blank');
  };

  return (
    <div className="meet-container">
      <h3>Google Meet</h3>
      <p>Click the button below to open Google Meet:</p>
      <button onClick={openGoogleMeet}>Open Google Meet</button>
    </div>
  );
};

export default GoogleMeet;
