import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MemberList = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Fetch member data when the component mounts
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      // Make a GET request to your Express.js server endpoint
      const response = await axios.get('/api/members'); // Update the endpoint accordingly
      setMembers(response.data);
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };

  return (
    <div>
      <h2>Members</h2>
      <ul>
        {members.map((member) => (
          <li key={member._id}>
            <strong>{`${member.firstName} ${member.lastName}`}</strong>
            <p>Address: {member.address}</p>
            <p>Date of Birth: {new Date(member.dateOfBirth).toLocaleDateString()}</p>
            <p>Gender: {member.gender}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberList;
