import { PostAdd } from '@material-ui/icons';
import React, { useState } from 'react';
import {Get} from '../../utility/httplibary'
function GamePin() {

    

    let textInput = React.createRef();
    
    function handleClick() {
        let pin = textInput.current.value;
        const joinPin = "http://192.168.29.174:8080/game/join/2033/123";
        let res = Get(joinPin);
        console.log(res)

      }  
    return (
        <div className='container'>
            <p className='fontL'> Kahoot!</p>
            <div className='minicontainer'>
             <input className='inputpin' ref={textInput}  type='text' placeholder='Enter Game Pin' />
             <button type='submit' onClick={handleClick} >Enter</button>
             </div>
        </div>
    )
}

export default GamePin;




