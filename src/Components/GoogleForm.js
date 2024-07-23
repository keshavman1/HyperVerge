// src/Components/GoogleForm.js

import React from 'react';
import './GoogleForm.css';

const GoogleForm = () => {
  const formUrl ="https://docs.google.com/forms/d/e/1FAIpQLSfSsIvot7ubm-UMLUn704I8ipdrxoj13_F4i54zkUBwTspfaA/viewform?usp=sf_link"

  return (
    <div className="widget">
      <h2>Google Form</h2>
      <iframe
        src={formUrl}
        width="640"
        height="800"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Google Form"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default GoogleForm;
