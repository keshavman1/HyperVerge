// src/Leaderboard.js
import React from 'react';
import './Leaderboard.css';

const Leaderboard = () => {
  // Sample data for the leaderboard
  const leaderboardData = [
    { category: 'Most Steps Walked', value: '10,000 steps' },
    { category: 'Most Pages Read', value: '200 pages' },
    { category: 'Most Pomodoro Timers Clocked', value: '15 timers' },
  ];

  return (
    <div className="leaderboard-container">
      <h3>Leaderboard</h3>
      <ul className="leaderboard-list">
        {leaderboardData.map((item, index) => (
          <li key={index} className="leaderboard-item">
            <span className="leaderboard-category">{item.category}</span>
            <span className="leaderboard-value">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
