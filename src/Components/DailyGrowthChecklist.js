import React, { useState } from "react";
import "./DailyGrowthChecklist.css";

const DailyGrowthChecklist = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Read for 30 minutes", completed: false },
    { id: 2, text: "Exercise for 1 hour", completed: false },
    { id: 3, text: "Meditate for 10 minutes", completed: false },
    { id: 4, text: "Write a journal entry", completed: false },
  ]);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="checklist-container">
      <h2>Daily Growth Checklist</h2>
      <ul className="checklist">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task ${task.completed ? "completed" : ""}`}
            onClick={() => toggleTask(task.id)}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyGrowthChecklist;
