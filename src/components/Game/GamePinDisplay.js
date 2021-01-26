import React,{useState} from 'react';

function GamePinDisplay(params) {

    const [gamePin,setGamePin] = useState(34)

    return(
        <div className='container'>
            <p className='fontL'> Kahoot!</p>
                <div className='minicontainer'>
                    <h1> Game Pin is</h1>
                    <h2>{gamePin}</h2>
                </div>
        </div>
    )
}
export default GamePinDisplay;
