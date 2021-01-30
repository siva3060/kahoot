import React from 'react';
import {joinBaseUrl} from '../../Configuration/resources.json'

function NickName() {

    const joinLobby = async ()=>{
        const url =   joinBaseUrl
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