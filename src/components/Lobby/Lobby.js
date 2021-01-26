import React,{useState} from 'react';
import PlayerName from './PlayerName';
import PlayerList from './PlayerList';
import Questiondisplay_layout from '../Admin/Questiondisplay_layout';

function Lobby(params) {
    const [playerName,setPlayername]  = useState(false);
    const joinPlayer= () =>{ setPlayername(true) }
    return(
        <div>
            {playerName}
           {(playerName) ?  <Questiondisplay_layout /> : <div> <PlayerList /> <PlayerName fun1={joinPlayer} /> </div>}
        </div>
    )
}

export default Lobby;