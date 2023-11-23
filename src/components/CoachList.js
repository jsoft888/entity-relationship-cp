import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CoachList = () => {
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    // Fetch coach data when the component mounts
    fetchCoaches();
  }, []);

  const fetchCoaches = async () => {
    try {
      // Make a GET request to your Express.js server endpoint
      const response = await axios.get('/api/coaches'); // Update the endpoint accordingly
      setCoaches(response.data);
    } catch (error) {
      console.error('Error fetching coaches:', error);
    }
  };

  return (
    <div>
      <h2>Coaches</h2>
      <ul>
        {coaches.map((coach) => (
          <li key={coach._id}>
            <strong>{`${coach.firstName} ${coach.lastName}`}</strong>
            <p>Age: {coach.age}</p>
            <p>Specialty: {coach.specialty}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoachList;
