// src/App.js
import React from 'react';
import GoogleSlides from './Components/GoogleSlides';
import PomodoroTimer from './Components/PomodoroTimer';
import GoogleSpreadsheet from './Components/GoogleSpreadsheet';
import Leaderboard from './Components/Leaderboard';
import './styles.css';

const App = () => {
  return (
    <div id="notice-board">
      <div className="widget-container">
        <GoogleSlides />
      </div>
      <div className="widget-container">
        <PomodoroTimer />
      </div>
      <div className="widget-container">
        <GoogleSpreadsheet />
      </div>
      <div className="widget-container">
        <Leaderboard />
      </div>
    </div>
  );
};

export default App;
