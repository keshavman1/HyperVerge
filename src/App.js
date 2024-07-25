import React, { useState, useEffect } from "react";
import WidgetSlider from "./Components/WidgetSlider";
import Loading from "./Components/Loading";
import { DarkModeSwitch } from "./Components/DarkModeSwitch"; // Update this path based on the actual location
import "./styles.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    const loadContent = async () => {
      // Simulate a delay for loading. Adjust as needed.
      await new Promise(resolve => setTimeout(resolve, 3000));
      setIsLoading(false);
    };

    loadContent();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const handleThemeToggle = (checked) => {
    setIsDarkMode(checked);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="notice-board">
      <div className="dark-mode-toggle">
        <DarkModeSwitch
          onChange={handleThemeToggle}
          checked={isDarkMode}
          size={30}
          style={{ position: 'fixed', top: 25, right: 25 }}
        />
      </div>
      <WidgetSlider />
    </div>
  );
};

export default App;
