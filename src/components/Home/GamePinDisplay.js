import React from 'react';

function GamePinDisplay(params) {

    const rand  = Math.floor(Math.random() * 10000);
    return(
        <div className='container'>
        <p className='fontL'> Kahoot!</p>

        <div className='minicontainer'>
            <h1> Game Pin is</h1>
         <h2>{rand}</h2>
         
         </div>

    </div>
    )
}

export default GamePinDisplay;