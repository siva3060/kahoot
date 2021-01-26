import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


function Newoptions_input(props) {  
       let allopts = props.data;
    const opt1 = (opt,optno) =>{   
        allopts[optno]=opt;  
        props.fun(allopts);
        
    } 
    
    return( 
        <div className='container'>
                <div className='questioncontainer'>
                <Grid container spacing={6}> 
                    <Grid item xs>
                        <Paper className='LobbyGrid'>
                            <div> 
                                <input className='inputpin' placeholder='Option1' type="text" onKeyUp={event => opt1(event.target.value,0)}  /> 
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className='LobbyGrid'>
                            <div> 
                            <input className='inputpin' placeholder='Option2' type="text" onKeyUp={event => opt1(event.target.value,1)}  /> 
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={6}> 
                    <Grid item xs>
                        <Paper className='LobbyGrid'>
                            <div> 
                            <input className='inputpin' placeholder='Option3' type="text" onKeyUp={event => opt1(event.target.value,2)}  /> 
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className='LobbyGrid'>
                            <div> 
                            <input className='inputpin' placeholder='Option4' type="text" onKeyUp={event => opt1(event.target.value,3)}  /> 
                            </div> 
                        </Paper>
                    </Grid>
                </Grid>
                    
                </div>
        </div>
    )
}
export default Newoptions_input; 