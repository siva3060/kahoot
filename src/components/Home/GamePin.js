import React from 'react';

function GamePin() {
    
    return (
        <div className='container'>
            <p className='fontL'> Kahoot!</p>

            <div className='minicontainer'>
             <input className='inputpin' type='text' placeholder='Game PIN' />
             <button type='submit'>Enter</button>
             </div>

        </div>
    )
}

export default GamePin;
