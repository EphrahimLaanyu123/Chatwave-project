import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function LoginForm() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:5000/login", { username, password })
      .then((response) => {
        // Handle successful login, e.g., store authentication tokens or user data
        // Redirect to the chatroom page or any other desired route
        // Example: history.push("/dashboard");
      })
      .catch((error) => {
        setError("Login failed. Please check your username and password.");
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Log In</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default LoginForm;
