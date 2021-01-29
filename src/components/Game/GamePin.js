import React,{useState} from 'react';
import  {sendGetRequestTo} from '../../utility/httplibary';
import {joinGameBaseUrl} from '../../Configuration/resources.json';


function GamePin({handleJoin}) {

 const [gamePin,setGamePin] = useState(0); 

 const validatePin = async ()=>{
     const url =  joinGameBaseUrl +gamePin+'/'+'123';
     const responseStatus =  await sendGetRequestTo(url)
     console.log("response  stats is "+responseStatus)
     if(responseStatus === 200){
         console.log(" pin is valid and sending true")
         return true;
    }
    return false;
 }

 // refactor with useCallBackHook resources
 const canJoinGame = async ()=>{
     if (await validatePin()) {
         console.log("The game pin is valid " + gamePin + " user is joining the game")
         handleJoin();
     }
     //console.log("The game pin is invalid not able to join game")

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
