import React, { useState } from "react";
import GoogleSlides from "./Components/GoogleSlides";
import PomodoroTimer from "./Components/PomodoroTimer";
import GoogleSpreadsheet from "./Components/GoogleSpreadsheet";
import Leaderboard from "./Components/Leaderboard";
import TILCorner from "./Components/TILcorner";
import GoogleMeet from "./Components/GoogleMeet";
import GoogleCalendarDayView from "./Components/GoogleCalendarDayView";
import GoogleKeep from "./Components/GoogleKeep";
import GoogleForm from "./Components/GoogleForm";
import MusicWidget from "./Components/MusicWidget";
import PollWidget from "./Components/PollWidget";
import Announcements from "./Components/announcements";
import StepsHealthTracker from "./Components/StepsHealthTracker";
import DailyGrowthChecklist from "./Components/DailyGrowthChecklist";
import OpportunityBoard from "./Components/OpportunityBoard";
import NotionWidget from './Components/NotionWidget';
import "./styles.css";

const App = () => {
  const [widgetVisibility, setWidgetVisibility] = useState({
    googleSlides: true,
    pomodoroTimer: true,
    googleSpreadsheet: true,
    leaderboard: true,
    tilCorner: true,
    googleMeet: true,
    googleCalendarDayView: true,
    googleKeep: true,
    googleForm: true,
    musicWidget: true,
    pollWidget: true,
    announcements: true,
    stepsHealthTracker: true,
    dailyGrowthChecklist: true,
    opportunityBoard: true,
    notionWidget: true,
  });

  const toggleWidgetVisibility = (widgetName) => {
    setWidgetVisibility({
      ...widgetVisibility,
      [widgetName]: !widgetVisibility[widgetName],
    });
  };

  return (
    <div id="notice-board">
      <div className="widget-controls">
        <h2>Widget Controls</h2>
        {Object.keys(widgetVisibility).map((widgetName) => (
          <label key={widgetName}>
            <input
              type="checkbox"
              checked={widgetVisibility[widgetName]}
              onChange={() => toggleWidgetVisibility(widgetName)}
            />
            {widgetName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
          </label>
        ))}
      </div>

      {widgetVisibility.googleSlides && (
        <div className="widget-container">
          <GoogleSlides />
        </div>
      )}
      {widgetVisibility.pomodoroTimer && (
        <div className="widget-container">
          <PomodoroTimer />
        </div>
      )}
      {widgetVisibility.googleSpreadsheet && (
        <div className="widget-container">
          <GoogleSpreadsheet />
        </div>
      )}
      {widgetVisibility.leaderboard && (
        <div className="widget-container">
          <Leaderboard />
        </div>
      )}
      {widgetVisibility.tilCorner && (
        <div className="widget-container">
          <TILCorner />
        </div>
      )}
      {widgetVisibility.googleCalendarDayView && (
        <div className="widget-container">
          <GoogleCalendarDayView />
        </div>
      )}
      {widgetVisibility.googleMeet && (
        <div className="widget-container">
          <GoogleMeet />
        </div>
      )}
      {widgetVisibility.googleKeep && (
        <div className="widget-container">
          <GoogleKeep />
        </div>
      )}
      {widgetVisibility.googleForm && (
        <div className="widget-container">
          <GoogleForm />
        </div>
      )}
      {widgetVisibility.musicWidget && (
        <div className="widget-container">
          <MusicWidget />
        </div>
      )}
      {widgetVisibility.pollWidget && (
        <div className="widget-container">
          <PollWidget />
        </div>
      )}
      {widgetVisibility.announcements && (
        <div className="widget-container">
          <Announcements />
        </div>
      )}
      {widgetVisibility.stepsHealthTracker && (
        <div className="widget-container">
          <StepsHealthTracker />
        </div>
      )}
      {widgetVisibility.dailyGrowthChecklist && (
        <div className="widget-container">
          <DailyGrowthChecklist />
        </div>
      )}
      {widgetVisibility.opportunityBoard && (
        <div className="widget-container">
          <OpportunityBoard />
        </div>
      )}
      {widgetVisibility.notionWidget && (
        <div className="widget-container">
          <NotionWidget />
        </div>
      )}
    </div>
  );
};

export default App;
