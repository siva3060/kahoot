import React,{useState,useEffect } from 'react';
import Question from './Question';
import Options from './Options';
import Newquestion_input from './Newquestion_input';
import Newoptions_input from './Newoptions_input';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function Newquestion_layout(params) {    
    
    const [newque,setnewque] = useState('Enter your question.')
    const [optionone,setoptionone] = useState(['Opt1','Opt2','Opt3','Opt4'])
  

    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title = `You clicked ${count} times`;
    });


  
    const question_input = (data) =>{
            setnewque(data)       
    }
    const opts = (data) =>{
        setoptionone(data)
        setCount(count + 1)
    }
 
    return(
        <div className='container'>
            <Grid container spacing={6}> 
                <Grid item xs>
                    <Paper className='LobbyGrid'>
                        <Question que={newque} />
                        <Options opts={optionone} />   
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className='LobbyGrid'>
                    <Newquestion_input data={question_input} />
                    <Newoptions_input  data={optionone} fun={opts} />
                    </Paper>
                </Grid>
            </Grid> 
        </div>
    )
}
export default Newquestion_layout;