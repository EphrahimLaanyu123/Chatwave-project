import React, { useState,useEffect } from 'react';
import UserListComponent from './UserList';
import PersonalChatComponent from './PersonalChat';
import axios from 'axios';

const ParentComponent = () => {
  // State to keep track of the selected user
  const [selectedUser, setSelectedUser] = useState(null);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  // Callback function to handle selected user
  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <div className="column">
        <UserListComponent users={users} handleUserSelect={handleUserSelect} />
      </div>
      <div className="column">
        {selectedUser ? (
          <PersonalChatComponent currentUser={currentUser} recipientUser={selectedUser} />
        ) : (
          <div>Select a user to start chatting</div>
        )}
      </div>
    </div>
  );
};

export default ParentComponent;
