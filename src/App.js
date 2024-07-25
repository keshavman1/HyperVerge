import React, { useState } from "react";
import WidgetSlider from "./Components/WidgetSlider";
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
          <button
            key={widgetName}
            onClick={() => toggleWidgetVisibility(widgetName)}
          >
            {widgetName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
          </button>
        ))}
      </div>
      <WidgetSlider widgetVisibility={widgetVisibility} />
    </div>
  );
};

export default App;
