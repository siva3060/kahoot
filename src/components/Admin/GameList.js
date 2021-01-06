import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


function GameList() {
     
    return(
        <div className='container'>
                <div className='questioncontainer'>
                <Grid container spacing={6}> 
                    <Grid item xs>
                        <Paper className='LobbyGrid'>
                            <div><p className='opt1'>Game 1 </p> </div>
                        </Paper>
                    </Grid>
                   
                </Grid>
                <Grid container spacing={6}> 
                   
                    <Grid item xs>
                        <Paper className='LobbyGrid'>
                            <div><p className='opt1'>Game 2</p></div>  
                        </Paper>
                    </Grid>
                </Grid>
                    
                </div>
        </div>
    )
}
export default GameList; 