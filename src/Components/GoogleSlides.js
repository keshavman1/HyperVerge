
import React from 'react';

const GoogleSlides = () => {
 
  const slidesUrl = "https://docs.google.com/presentation/d/e/2PACX-1vR31Cr3Qqo0aMUDbKOLcJ_3me3g5Cr0R8dDidEu8pOEKO7DEbL8wPP8OuJpoa2ve42fm8mMsMohlxBk/embed?start=true&loop=true&delayms=3000";

  return (
    <div className="widget">
      <h2>Google Slides</h2>
      <iframe
        src={slidesUrl}
        width="960"
        height="569"
        frameBorder="0"
        allowFullScreen
        title="Google Slides"
      ></iframe>
    </div>
  );
};

export default GoogleSlides;
