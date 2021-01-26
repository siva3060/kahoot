import React,{useState} from 'react';

function GamePin(props) {
 const [gamePin,setGamePin] = useState(0); 

    return (
        <div className='container'>
            <p className='fontL'> Kahoot!</p>

            <div className='minicontainer'>
             <input className='inputpin' placeholder='Game PIN' />
             <button onClick={props.fun1} >Enter</button>
             </div>

        </div>
    )
}
  
export default GamePin;
