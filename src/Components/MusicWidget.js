// src/Components/MusicWidget.js

import React from 'react';
import './MusicWidget.css';

const MusicWidget = () => {
  return (
    <div className="widget">
      <h2>Music Player</h2>
      <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"
        width="300"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        title="Spotify Playlist"
      ></iframe>
    </div>
  );
};

export default MusicWidget;
