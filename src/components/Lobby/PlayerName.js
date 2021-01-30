import React from 'react';
import {joinGameBaseUrl} from '../../Configuration/resources.json'
import {sendGetRequestTo} from '../../utility/httplibary'

// Player enters his nickname and joins the lobby
// Before : A valid game pin is found and entered 
// After : A Nickname is enterd and can see his name in lobby
            // waiting on the game admin to start the game 

function NickName() {

    const joinLobby = async ()=>{
        const url =   joinGameBaseUrl
        const responseStatus =  await sendGetRequestTo(url)
        console.log("response  stats is "+responseStatus)
        if(responseStatus === 200){
            console.log(" pin is valid and sending true")
            return true;
       }
       return false;
    }

    return(
        <div className='container'>
            <div className='minicontainer'>
                <h1>PlayerName</h1>   
                <input className='inputpin' type='text' placeholder='Enter Nick Name' />
                <button onClick={()=>joinLobby()}>Join</button>
            </div>
        </div>
    )
}
export default NickName;