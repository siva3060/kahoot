import React,{useState} from 'react';
import PlayerName from './PlayerName';
import PlayerList from './PlayerList';

function Lobby(params) {
    const [playerName,setPlayername]  = useState(false);
    const joinPlayer= () =>{ setPlayername(true) }
    return(
        <div>
        <PlayerList />
        <PlayerName fun1={joinPlayer} />
     </div>
    )
}

export default Lobby;