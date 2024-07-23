// src/App.js
import React from 'react';
import GoogleSlides from './Components/GoogleSlides';
import PomodoroTimer from './Components/PomodoroTimer';
import GoogleSpreadsheet from './Components/GoogleSpreadsheet';
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
      {/* Add more widgets here */}
    </div>
  );
};

export default App;
