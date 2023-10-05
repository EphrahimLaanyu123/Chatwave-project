import React from "react";
import "./App.css"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm"; 
import Homepage from "./Home";
// import AuthForm from "./AuthForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        {/* <Route path="/authform" element={<AuthForm />} /> */}
        
      </Routes>
    </Router>
  );
}

export default App;
