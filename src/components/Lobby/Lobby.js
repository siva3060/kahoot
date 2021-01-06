import React from 'react';
import PlayerName from './PlayerName';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FaceIcon from '@material-ui/icons/Face';

function Lobby(params) {

    return(
        
        <div className='container'>
        <div className='lobbycontainer'>
            <h1>Lobby</h1>       

            

        <Grid container spacing={3}>
        <Grid item xs>
            <Paper className='LobbyGrid'>
                <div> <FaceIcon />
                    <br /><p>Name</p>
                </div>
            </Paper>
        </Grid>
        <Grid item xs>
            <Paper className='LobbyGrid'>
            <div> <FaceIcon />
                    <br /><p>Name</p>
                </div>    
            </Paper>
        </Grid>
        <Grid item xs>
            <Paper className='LobbyGrid'>
            <div> <FaceIcon />
                    <br /><p>Name</p>
                </div>    
            </Paper>
        </Grid>
        <Grid item xs>
            <Paper className='LobbyGrid'>
            <div> <FaceIcon />
                    <br /><p>Name</p>
                </div>    
            </Paper>
        </Grid>
      </Grid>
      
      <Grid container spacing={3}>
        <Grid item xs>
            <Paper className='LobbyGrid'>
                <div> <FaceIcon />
                    <br /><p>Name</p>
                </div>
            </Paper>
        </Grid>
        <Grid item xs>
            <Paper className='LobbyGrid'>
            <div> <FaceIcon />
                    <br /><p>Name</p>
                </div>    
            </Paper>
        </Grid>
        <Grid item xs>
            <Paper className='LobbyGrid'>
            <div> <FaceIcon />
                    <br /><p>Name</p>
                </div>    
            </Paper>
        </Grid>
        <Grid item xs>
            <Paper className='LobbyGrid'>
            <div> <FaceIcon />
                    <br /><p>Name</p>
                </div>    
            </Paper>
        </Grid>
      </Grid>
 










        </div>
        <PlayerName />
    </div>
    )
}

export default Lobby;