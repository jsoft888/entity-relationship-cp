import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SessionList = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    // Fetch session data when the component mounts
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    try {
      // Make a GET request to your Express.js server endpoint
      const response = await axios.get('/api/sessions'); // Update the endpoint accordingly
      setSessions(response.data);
    } catch (error) {
      console.error('Error fetching sessions:', error);
    }
  };

  return (
    <div>
      <h2>Sessions</h2>
      <ul>
        {sessions.map((session) => (
          <li key={session._id}>
            <strong>{session.sportType}</strong>
            <p>Schedule: {session.schedule}</p>
            <p>Max Capacity: {session.maxCapacity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionList;
