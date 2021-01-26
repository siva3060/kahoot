import React,{useState} from 'react';
import  {sendGetRequestTo} from httplibary;

function GamePin(props) {

 const [gamePin,setGamePin] = useState(0); 


 const validatePin = (gamePin)=>{
        const url = "http://localhost:8080/kahoot/game/"+{gamePin};
        const  responseStatus = sendGetRequestTo(url)
        if(responseStatus == 200){
            return true;
        }
        console.log("Pin is not valid "+responseStatus.data)
        return false;
 }

 // refactor with useCallBackHook
 const updateValidateResponse = ()=>{
        if(validatePin(gamePin)){
                props.fun1()
        }
 }

    return (
        <div className='container'>
            <p className='fontL'> Kahoot!</p>
            <div className='minicontainer'>
                <input className='inputpin' placeholder='Game PIN' onChange={ e=> setGamePin(e.target.value)}/>
                <button onClick={updateValidateResponse} >Enter</button>
            </div>
        </div>
    )
}
  
export default GamePin;
