// src/Components/NotionWidget.js
import React from 'react';
import './NotionWidget.css';  // Ensure this path matches your actual file structure

const NotionWidget = () => {
  const notionPageUrl = 'https://www.notion.so/Getting-Started-20a2a5d8976a49dfb126c8cdea0a64a5?pvs=4'; // Replace with your Notion page URL

  return (
    <div className="notion-widget">
      <h2 className="widget-title">Notion Dashboard</h2>
      <p className="widget-description">Access the latest updates and notes directly from Notion. Click below to view the page.</p>
      <a href={notionPageUrl} target="_blank" rel="noopener noreferrer" className="notion-link">
        View Notion Page
      </a>
    </div>
  );
};

export default NotionWidget;
