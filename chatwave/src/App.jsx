import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "./LoginForm";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginForm} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;
