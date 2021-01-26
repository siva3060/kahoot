import React from 'react';

function PlayerName(props) {

    return(
        
        <div className='container'>
            <div className='minicontainer'>
                <h1>PlayerName</h1>   
                <input className='inputpin' type='text' placeholder='Enter Nick Name' />
                <button onClick={props.fun1}>Join</button>
            </div>
        </div>
    )
}
export default PlayerName;