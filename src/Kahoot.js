import React, { useState } from 'react';
import GamePin  from './components/Game/GamePin';
import Lobby from './components/Lobby/Lobby';



import {  BrowserRouter as Router, Routes, Switch,  Route,  Link } from "react-router-dom";

function Kahoot() {

    const [validPin,setValidPin]  = useState(false);
    const joinLobby= () =>{ setValidPin(true) }

  return (
      <div>
        {(validPin) ? <Lobby /> : <GamePin  handleJoin={joinLobby} />}
      </div>
  );
}

export default Kahoot;
