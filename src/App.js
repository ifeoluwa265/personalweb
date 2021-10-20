import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./Components/landingPage"
const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          </Switch> 
          </div>
    </Router>
  )
}

export default App
