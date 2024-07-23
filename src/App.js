// src/App.js
import React from 'react';
import GoogleSlides from './Components/GoogleSlides';
import PomodoroTimer from './Components/PomodoroTimer';
import GoogleSpreadsheet from './Components/GoogleSpreadsheet';
import Leaderboard from './Components/Leaderboard';
import TILCorner from './Components/TILcorner';
import GoogleMeet from './Components/GoogleMeet';
import GoogleCalendarDayView from './Components/GoogleCalendarDayView';
import './styles.css';
import GoogleKeep from './Components/GoogleKeep';
import GoogleForm from './Components/GoogleForm';
import MusicWidget from './Components/MusicWidget';
import PollWidget from './Components/PollWidget';

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
      <div className="widget-container">
        <TILCorner />
        </div>
        <div className="widget-container">
        <GoogleCalendarDayView />
        </div>
        <div className="widget-container">
        <GoogleMeet />
        </div>
        <div className="widget-container">
        <GoogleKeep />
        </div>
        <div className="widget-container">
        <GoogleForm />
        </div>
        <div className="widget-container">
        <MusicWidget />
        </div>
        <div className="widget-container">
        <PollWidget />
        </div>
      </div>
    
  );
};

export default App;
