import React,{useState} from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FaceIcon from '@material-ui/icons/Face';
import { Table, Button, TableBody } from '@material-ui/core';

function Result(props)
{
    return(
        <div className='container'>
        <p className='fontL'> Score Board</p>
            <div className='lobbycontainer'> 
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <div> Name</div>
                    </Grid>
                    <Grid item xs={6}>
                        <p>10</p>
                    </Grid>
                    <Grid item xs={6}>
                        <div> Name</div>
                    </Grid>
                    <Grid item xs={6}>
                        <p>10</p>
                    </Grid>
                    <Grid item xs={6}>
                        <div> Name</div>
                    </Grid>
                    <Grid item xs={6}>
                        <p>10</p>
                    </Grid>
                    <Grid item xs={6}>
                        <div> Name</div>
                    </Grid>
                    <Grid item xs={6}>
                        <p>10</p>
                    </Grid>
                </Grid>
                <button  onClick={props.fun2} >NEXT</button>
            </div>
        </div>
    )
}
export default Result;