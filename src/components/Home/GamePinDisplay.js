import React from 'react';
import {Get} from '../../utility/httplibary';
function GamePinDisplay(params) {
    const lib = Get();
    return(
        <div className='container'>
            <p className='fontL'> Kahoot!</p>
                <div className='minicontainer'>
                    <h1> Game Pin is</h1>
                    <h2>{lib}</h2>
                </div>
        </div>
    )
}
export default GamePinDisplay;