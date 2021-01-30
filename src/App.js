import React,{useState} from 'react'
import GamePin from './components/Game/GamePin'
import Lobby from './components/Lobby/Lobby'

// user lands on this page and enters the pin -> 
//                                      enter nickname -> waiting page 
export default function App(){

    const [isValidPin,setValidPin] = useState(false)

    return (
        isValidPin ? <Lobby {...setValidPin}/> : < GamePin />
    )
}