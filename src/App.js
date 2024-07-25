import React, { useState, useEffect } from "react";
import WidgetSlider from "./Components/WidgetSlider";
import Loading from "./Components/Loading";
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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      // Simulate a delay for loading. Adjust as needed.
      await new Promise(resolve => setTimeout(resolve, 3000));
      setIsLoading(false);
    };

    loadContent();
  }, []);

  const toggleWidgetVisibility = (widgetName) => {
    setWidgetVisibility({
      ...widgetVisibility,
      [widgetName]: !widgetVisibility[widgetName],
    });
  };

  if (isLoading) {
    return <Loading />;
  }

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
