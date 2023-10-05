import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import Homepage from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<LoginForm/>} /> */}
        <Route path="/" element={<Homepage/>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
