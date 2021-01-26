import React,{useState} from 'react';
import  {sendGetRequestTo} from '../../utility/httplibary';


function GamePin({joinGame}) {

 const [gamePin,setGamePin] = useState(0); 
 const validatePin = ()=>{

     const url =  resources.joinGameBaseUrl +gamePin+'/'+'123';
     const responseStatus = sendGetRequestTo(url)
     const result = false
     if(responseStatus.status === 200){
         result = true;
    }
    return result;
 }

 // refactor with useCallBackHook resources
 const canJoinGame = ()=>{
        if(validatePin()){
        console.log("The game pin is valid "+gamePin+" user is joining the game")
            joinGame();
        }
        console.log("The game pin is invalid not able to join game")
 }

    return (
        <div className='container'>
            <p className='fontL'> Kahoot!</p>
            <div className='minicontainer'>
                <input className='inputpin' placeholder='Game PIN' onChange={ e=> setGamePin(e.target.value)}/>
                <button onClick={()=>canJoinGame()} >Enter</button>
            </div>
        </div>
    )
}
  
export default GamePin;
