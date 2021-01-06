import React from 'react';

function PlayerName(params) {

    return(
        
        <div className='container'>
        <div className='minicontainer'>
            <h1>PlayerName</h1>   
             <input className='inputpin' type='text' placeholder='Enter Nick Name' />
             <button type='submit'>Join</button>
             </div>

    </div>
    )
}

export default PlayerName;