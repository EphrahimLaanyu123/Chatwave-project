import React, { useEffect, useState } from "react";
import axios from "axios";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm"; // Import the SignupForm component

function Homepage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the list of users when the component mounts
    axios
      .get("http://127.0.0.1:5000/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center bg-white-800 p-1">
        <h1 className="text-2xl font-bold text-customBlue">ChatWave</h1>
        <nav className="flex space-x-4">
          <a href="#" className="text-black">
            services
          </a>
          <a href="#" className="text-black">
            help center
          </a>
        </nav>
      </div>

      <div className="flex justify-center items-center h-screen flex-col text-center">
        <img
          className="w-90 h-80"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwoOybZyR8PaEZi9DSPbDYOd4HYLctFEvd2w&usqp=CAU"
          alt="ChatWave Logo"
        />
        <p className="text-7xl font-bold mb-2 text-customBlue">ChatWave.</p>
        <button className="bg-white hover:bg-blue-700 text-customBlue font-bold py-2 px-4 rounded">
          LOG IN
        </button>
        <p>LIFE ON LINE</p>

        {/* Render the LoginForm component */}
        <LoginForm />

        {/* Render the SignupForm component */}
        <SignupForm />

        <h2>List of Users:</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.username} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Homepage;
