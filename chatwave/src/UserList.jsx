import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserListComponent = ({ users ,handleUserSelect }) => {
  

  return (
    <div>
      <h2>Find Friends</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username}
            <button onClick={() => handleUserSelect(user.id)}>Start Chat</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserListComponent;

