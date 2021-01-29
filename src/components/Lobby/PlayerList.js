import React,{useState,useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FaceIcon from '@material-ui/icons/Face';
import PlayerName from './PlayerName';
import axios from 'axios';

function PlayerList({gamePin})
{

    const [playerList, setPlayerList] = useState("");

    useEffect( ()=>{
        axios.get("http://localhost:8080/game/lobby/"+gamePin)
             .then( response =>{
                 setPlayerList(response.data)
             })
    })

    return(
        <div className='container'>
            <div className='lobbycontainer'>
                <h1>Lobby</h1>
                <Grid container spacing={3}>
                    {playerList.map(player=>{
                        <Player {... PlayerName,PlayerId} />
                    })}
                </Grid>
            </div>
        </div>
        )
}
export default PlayerList;