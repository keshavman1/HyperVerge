import React, { useState } from "react";
import "./StepsHealthTracker.css";

const StepsHealthTracker = () => {
  const [steps, setSteps] = useState(0);
  const [goal, setGoal] = useState(10000); // Example daily goal

  const handleStepsChange = (e) => {
    setSteps(e.target.value);
  };

  const handleGoalChange = (e) => {
    setGoal(e.target.value);
  };

  return (
    <div className="steps-health-tracker">
      <h3>Steps/Health Tracker</h3>
      <div>
        <label>
          Steps:
          <input type="number" value={steps} onChange={handleStepsChange} />
        </label>
      </div>
      <div>
        <label>
          Daily Goal:
          <input type="number" value={goal} onChange={handleGoalChange} />
        </label>
      </div>
      <div>
        <progress value={steps} max={goal}></progress>
      </div>
      <div>{steps >= goal ? "Goal Reached!" : "Keep Going!"}</div>
    </div>
  );
};

export default StepsHealthTracker;
