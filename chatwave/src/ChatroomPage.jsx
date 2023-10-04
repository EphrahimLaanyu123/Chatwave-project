import React, { useState, useEffect } from "react";
import axios from "axios";

function Chatroom() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the list of users when the chatroom component mounts
    axios.get("http://127.0.0.1:5000/chatroom/users")
      .then((response) => {
        // Update the state with the list of users
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div>
      <h2>Chatroom</h2>
      <div>
        <h3>Users in the Chatroom:</h3>
        <p>
          {users.map((user) => (
            <span key={user.id}>{user.username}, </span>
          ))}
        </p>
      </div>
      {/* Add your chatroom functionality here */}
    </div>
  );
}

export default Chatroom;
