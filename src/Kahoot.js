<<<<<<< HEAD
import React, { useState } from 'react';
import GamePin  from './components/Game/GamePin';
import GamePinDisplay from './components/Game/GamePinDisplay';
import Lobby from './components/Lobby/Lobby';
import Questiondisplay_layout from '../src/components/Admin/Questiondisplay_layout'
import Newqestion from '../src/components/Admin/Newquestion_input'
import Newquestion_layout from '../src/components/Admin/Newquestion_layout'



import {  BrowserRouter as Router, Routes, Switch,  Route,  Link } from "react-router-dom";

function Kahoot() {

    const [validPin,setValidPin]  = useState(false);
    const joinLobby= () =>{ setValidPin(true) }

    console.log("Current Pin is valid "+validPin)
    return (
=======
import React from 'react';
import Admin from './components/Admin/Admin';
import GamePin from './components/Home/GamePin';
import GamePinDisplay from './components/Home/GamePinDisplay';
import Newquestion_layout from './components/Game/Newquestion_layout';
import Lobby from './components/Lobby/Lobby';
import Questiondisplay_layout from './components/Game/Questiondisplay_layout'; 
import {  BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";

function Kahoot() {
  return (
<div>


<Admin />

{
    <Router>
>>>>>>> 313228a80689be2e4777464a3132d0ddfc4b8cff
      <div>
        {(validPin) ? <Lobby /> : <GamePin {...joinLobby} />}
      </div>
        
    
	    /*
    <Router>
    <div>
        <nav>
          <ul>
            <li>
              <Link to="/">GamePin</Link>
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
          <Route path="/" >
            <GamePin/>
          </Route>
          <Route path="/GamePinDisplay">
            <GamePinDisplay />
            </Route>
          <Route path="/Lobby" >
            <Lobby/> </Route>
          <Route path="/Question">
          <Questiondisplay_layout />
          </Route>
          <Route path="/New_Question" >
            <Newquestion_layout />
<<<<<<< HEAD
            </Route>
       </Switch>     
    
=======
          </Route>
          
          
        </Switch>
      </div>
    </Router> }
>>>>>>> 313228a80689be2e4777464a3132d0ddfc4b8cff
    </div>
    </Router>
	    */
)
}
export default Kahoot;
