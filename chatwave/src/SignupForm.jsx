import React, { useState } from "react";
import axios from "axios";

function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // Send a POST request to your backend to create a new user
    axios
      .post("http://127.0.0.1:5000/users", {
        username,
        email,
        password, // You may need to add password to the request body
      })
      .then((response) => {
        // Handle successful sign-up, e.g., show a success message or redirect
        console.log("User created:", response.data);
      })
      .catch((error) => {
        // Handle sign-up error, e.g., display an error message
        console.error("Sign-up failed:", error);
      });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        {/* Add a password field if needed */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;
