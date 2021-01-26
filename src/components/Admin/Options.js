import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


function Options(props) {
      let options = props.opts;
    console.log(props.opt1)
    return(
        <div className='container'>
                <div className='questioncontainer'>
                <Grid container spacing={6}> 
                    <Grid item xs>
                        <Paper className='LobbyGrid'>
                            <div><p className='opt1'>{props.opt1}</p> </div>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className='LobbyGrid'>
                            <div><p  className='opt1'>{props.opt2}</p> </div>  
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={6}> 
                    <Grid item xs>
                        <Paper className='LobbyGrid'>
                            <div><p className='opt1'>{props.opt3}</p> </div>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className='LobbyGrid'>
                            <div><p className='opt1'>{props.opt4}</p></div>  
                        </Paper>
                    </Grid>
                </Grid>


                <Grid container spacing={12}> 
                   
                    <Grid item xs>
                        <Paper className='LobbyGrid'>
                            <div><p className='opt1' onClick={props.fun1}>Submit</p></div>  
                        </Paper>
                    </Grid>
                </Grid>


                    
                </div>
        </div>
    )
}
export default Options; 