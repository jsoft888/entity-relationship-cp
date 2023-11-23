import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GymnasiumList = () => {
  const [gymnasiums, setGymnasiums] = useState([]);

  useEffect(() => {
    // Fetch gymnasium data when the component mounts
    fetchGymnasiums();
  }, []);

  const fetchGymnasiums = async () => {
    try {
      // Make a GET request to your Express.js server endpoint
      const response = await axios.get('/api/gymnasiums'); // Update the endpoint accordingly
      setGymnasiums(response.data);
    } catch (error) {
      console.error('Error fetching gymnasiums:', error);
    }
  };

  return (
    <div>
      <h2>Gymnasiums</h2>
      <ul>
        {gymnasiums.map((gymnasium) => (
          <li key={gymnasium._id}>
            <strong>{gymnasium.name}</strong>
            <p>Address: {gymnasium.address}</p>
            <p>Telephone: {gymnasium.telephone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GymnasiumList;
