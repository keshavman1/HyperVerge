import React from 'react';

const GoogleSlides = () => {
  const slidesUrl = "https://docs.google.com/presentation/d/e/2PACX-1vTwBIA8-h_x1_WSKcd2sdrzhssczfpYQ5JS8AVmIHxgl1XXa--nrE-zb7OG0G2EVx1nOjS6B3IrLf0T/embed?start=true&loop=true&delayms=3000";

  return (
    <div className="widget">
      <h2>Google Slides</h2>
      <iframe
        src={slidesUrl}
        width="1000"
        height="569"
        frameBorder="0"
        allowFullScreen
        title="Google Slides"
      ></iframe>
    </div>
  );
};

export default GoogleSlides;
