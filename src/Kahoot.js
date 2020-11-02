import React from 'react';
import GamePin from './components/Home/GamePin';
import GamePinDisplay from './components/Home/GamePinDisplay';
import {  BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";

function Kahoot() {
  return (
<div>
    <Router>
      <div>
        <nav>
          <ul>
           
            <li>
              <Link to="/GamePin">GamePin</Link>
            </li>
            <li>
              <Link to="/GamePinDisplay">GamePinDisplay</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/GamePin">
            <GamePin />
          </Route>
          <Route path="/GamePinDisplay">
            <GamePinDisplay />
          </Route>
          
        </Switch>
      </div>
    </Router>
    </div>
  )
}

export default Kahoot;
