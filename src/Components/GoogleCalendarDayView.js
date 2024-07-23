// src/GoogleCalendarDayView.js
import React from 'react';
import './GoogleCalendarDayView.css';

const GoogleCalendarDayView = () => {
  return (
    <div className="calendar-container">
      <h3>Google Calendar Day View</h3>
      {/* Embed Google Calendar iframe or API integration */}
      <iframe
        src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=Your/Timezone"
        style={{ border: '0', width: '100%', height: '400px' }}
        frameBorder="0"
        scrolling="no"
        title="Google Calendar"
      ></iframe>
    </div>
  );
};

export default GoogleCalendarDayView;
