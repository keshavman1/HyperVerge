// src/Components/PollWidget.js
import React, { useState } from 'react';
import './PollWidget.css';


const PollWidget = () => {
  const [votes, setVotes] = useState([0, 0, 0]);
  const options = [
    'Introduce AI-powered coffee machine',
    'Host epic team-building escape rooms',
    'Upgrade to sci-fi themed office chairs'
  ];

  const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index] += 1;
    setVotes(newVotes);
  };

  const totalVotes = votes.reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="widget">
      <h2>Poll - Run by Admin</h2>
      <div className="poll-options">
        {options.map((option, index) => (
          <div key={index} className="poll-option">
            <span>{option}</span>
            <button onClick={() => handleVote(index)}>Vote</button>
            <div className="poll-results">
              <div
                className="poll-progress"
                style={{ width: `${(votes[index] / totalVotes) * 100 || 0}%` }}
              ></div>
              <span>{votes[index]} votes</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PollWidget;
