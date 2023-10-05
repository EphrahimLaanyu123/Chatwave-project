
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AuthForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true); 
  const [error, setError] = useState("");

  //navigate to chatroom
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    if (isLoginMode) {
      // Handle login
      axios
        .post("http://127.0.0.1:5000/login", { username, password })
        .then((response) => {
          // Handle successful login
          console.log("Login successful:", response.data);
          // Navigate to chat room
          navigate("/chatroom"); 
        })
        .catch((error) => {
          setError("Login failed. Please check your username and password.");
        });
    } else {
      // Handle signup
      axios
        .post("http://127.0.0.1:5000/users", { username, email, password })
        .then((response) => {
          // Handle successful sign-up
          console.log("User created:", response.data);
          // Navigate to chat room
          navigate("/chatroom"); 
        })
        .catch((error) => {
          setError("Sign-up failed. Please check your information.");
        });
    }
  };
  

  const toggleMode = () => {
    // Switch between login and signup modes
    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <div className="bg-blue-500 min-h-screen flex items-center justify-center">
  <div className="max-w-sm mx-auto mt-8 bg-white p-6 rounded shadow-md">
    <h2 className="text-2xl font-bold mb-4">{isLoginMode ? "Login" : "Sign Up"}</h2>
    <form onSubmit={handleFormSubmit}>
      {/* Common form fields */}
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
          Username:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
        />
      </div>
      {!isLoginMode && (
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>
      )}
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-500 focus:outline-none"
      >
        {isLoginMode ? "Log In" : "Sign Up"}
      </button>
    </form>
    <p className="mt-2 text-blue-500 cursor-pointer" onClick={toggleMode}>
      {isLoginMode ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
    </p>
    {error && <p className="text-red-500 mt-2">{error}</p>}
  </div>
</div>
  );
}

export default AuthForm;
