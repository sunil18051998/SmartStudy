// src/pages/Dashboard.jsx
import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">📚 Smart Study Scheduler</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold mb-2">Today's Tasks</h2>
          {/* Map tasks with repetition algorithm */}
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold mb-2">Productivity Analytics</h2>
          {/* Placeholder for charts */}
        </div>
      </div>

      <div className="mt-6">
        <a href="/connect-google" className="btn">
          📅 Connect Google Calendar
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
