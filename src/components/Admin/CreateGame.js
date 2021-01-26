import React,{useState} from 'react';
import {Post} from '../../utility/httplibary';
function CreateGame() {

    
    const [pin, setpin] = useState('');
    const [name, setname] = useState('');
    const handleSubmit = () =>{ 
        
        const myobj = {
            "Pin" : pin,
            "Name" : name
        }

    }
    const handleSetPin = (opt) =>{ 
        setpin(opt)
    }
    const handleSetName = (opt) =>{ 
        setname(opt)
    }
    return (
        <div className='container'>
            <p className='fontL'> Enter New Game PIN !</p>
            <div className='minicontainer'>
                    <input className='inputpin'  onChange={e => handleSetPin(e.target.value)} placeholder='Game PIN' type="text"  />
                    <input className='inputpin'  onChange={e => handleSetName(e.target.value)} placeholder='Game Name' type="text"  />
                    <button type='submit' onClick={handleSubmit} >Enter</button>
            </div>
        </div>
    )
}
export default CreateGame;