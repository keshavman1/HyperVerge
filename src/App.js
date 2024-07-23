
import React from 'react';
import GoogleSlides from './Components/GoogleSlides';
import PomodoroTimer from './Components/PomodoroTimer';
import './styles.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="widget-container">
        <GoogleSlides />
      </div>
      <div className="widget-container">
        <PomodoroTimer />
      </div>
      {/* Add more widgets here */}
    </div>
  );
};

export default App;
