import React, { useState, useEffect } from "react";
import WidgetSlider from "./Components/WidgetSlider";
import Loading from "./Components/Loading";
import { DarkModeSwitch } from "./Components/DarkModeSwitch";
import "./styles.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const loadContent = async () => {
      await new Promise(resolve => setTimeout(resolve, 3000));
      setIsLoading(false);
    };

    loadContent();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    localStorage.setItem("darkMode", isDarkMode);

    // Trigger animation on theme change
    if (isDarkMode) {
      setShowAnimation(true);
      const timer = setTimeout(() => setShowAnimation(false), 4000); // Duration of the animation
      return () => clearTimeout(timer);
    }
  }, [isDarkMode]);

  const handleThemeToggle = (checked) => {
    setIsDarkMode(checked);
  };

  const createStarElements = () => {
    let elements = [];
    for (let i = 1; i <= 100; i++) {
      elements.push(<div className="star" key={i}></div>);
    }
    return elements;
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
      <h1 className="app-heading">HYPERLINK BULLETIN</h1>
      <WidgetSlider isDarkMode={isDarkMode} />
      {showAnimation && <div className="starfield">{createStarElements()}</div>}
    </div>
  );
};

export default App;
