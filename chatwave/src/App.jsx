import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import Homepage from "./Home";
import Main from "./Main";
import { io } from 'socket.io-client'
import ParentComponent from "./ParentUserChat";

const socket = io('http://localhost:5000/')
function App() {






  return (
    <div>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/" element={<Homepage/>} />
      </Routes>
    </Router>

    <Main socket={socket}/>
    </div>
  );
  }

export default App;
