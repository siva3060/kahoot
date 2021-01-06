import React from 'react';

function CreateGame() {
    
    return (
        <div className='container'>
            <p className='fontL'> Enter New Game PIN !</p>

            <div className='minicontainer'>
             <input className='inputpin' type='text' placeholder='Game PIN' />
             <button type='submit'>Enter</button>
             </div>

        </div>
    )
}

export default CreateGame;
