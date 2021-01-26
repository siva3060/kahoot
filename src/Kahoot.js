import React, { useState } from 'react';
import GamePin from './components/Game/GamePin';
import Lobby from './components/Lobby/Lobby';
import {  BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";

function Kahoot() {
    const [validPin,setValidPin]  = useState(false);
    const joinLobby= () =>{ setValidPin(true) }
  return (
<div>
{(validPin)? <Lobby />:<GamePin fun1={joinLobby} />}


{/*
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
            <li>
              <Link to="/Lobby">Lobby</Link>
            </li>
            <li>
              <Link to="/Question">Question</Link>
            </li>
            <li>
              <Link to="/New_Question">New Question</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/GamePin">
            <GamePin />
          </Route>
          <Route path="/GamePinDisplay">
            <GamePinDisplay />
          </Route>
          <Route path="/Lobby">
            <Lobby />
          </Route>
          <Route path="/Question">
            <Questiondisplay_layout />
          </Route>

          <Route path="/New_Question">
            <Newquestion_layout />
          </Route>
          
          
        </Switch>
      </div>
    </Router> */}
    </div>
  )
}

export default Kahoot;
