import React, { useState } from "react";
import "./OpportunityBoard.css";

const OpportunityBoard = () => {
  const [opportunities, setOpportunities] = useState([
    {
      id: 1,
      team: "Marketing",
      description: "Automate repetitive tasks using AI.",
    },
    {
      id: 2,
      team: "Engineering",
      description: "Build an in-house tool for the marketing team.",
    },
    // Add more opportunities as needed
  ]);

  const [newOpportunity, setNewOpportunity] = useState({
    team: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOpportunity({ ...newOpportunity, [name]: value });
  };

  const handleAddOpportunity = () => {
    setOpportunities([
      ...opportunities,
      { ...newOpportunity, id: opportunities.length + 1 },
    ]);
    setNewOpportunity({ team: "", description: "" });
  };

  return (
    <div className="opportunity-board">
      <h3>Opportunity Board</h3>
      <div className="opportunity-list">
        {opportunities.map((opportunity) => (
          <div key={opportunity.id} className="opportunity-item">
            <h4>{opportunity.team}</h4>
            <p>{opportunity.description}</p>
          </div>
        ))}
      </div>
      <div className="add-opportunity">
        <input
          type="text"
          name="team"
          value={newOpportunity.team}
          onChange={handleInputChange}
          placeholder="Team"
        />
        <input
          type="text"
          name="description"
          value={newOpportunity.description}
          onChange={handleInputChange}
          placeholder="Opportunity Description"
        />
        <button onClick={handleAddOpportunity}>Add Opportunity</button>
      </div>
    </div>
  );
};

export default OpportunityBoard;
