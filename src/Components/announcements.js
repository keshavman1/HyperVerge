import React from "react";
import "./Announcements.css"; // Import CSS for styling

const Announcements = () => {
  const announcements = [
    "Announcement 1: Check out our new feature!",
    "Announcement 2: Maintenance scheduled for 3 PM.",
    "Announcement 3: Welcome to our new users!",
    "Announcement 4: System update complete.",
    "Announcement 5: New blog post available.",
  ];

  return (
    <div className="announcements-container">
      <div className="scrolling-text">
        {announcements.map((text, index) => (
          <div key={index} className="announcement-item">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
