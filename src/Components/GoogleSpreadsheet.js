import React from 'react';

const GoogleSpreadsheet = () => {
  const spreadsheetUrl ="https://docs.google.com/spreadsheets/d/1vCh72lpTW7W3UmCre5JQZZZwY43EnxTPkwWiCKM1XLQ/edit?usp=sharing";

  return (
    <div className="widget">
      <h2>Google Spreadsheet</h2>
      <iframe
        src={spreadsheetUrl}
        width="960"
        height="569"
        frameBorder="0"
        allowFullScreen
        title="Google Spreadsheet"
      ></iframe>
    </div>
  );
};

export default GoogleSpreadsheet;
