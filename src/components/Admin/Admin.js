import React,{useState} from 'react';
import Layout from './Layout';
import CreateGame from './CreateGame';
import GameList from './GameList';

function Admin() {
    const [page, setpage] = useState('AdminLayout');
    const lay = (data) =>{
        setpage(data)       
    }
    console.log(page)
    return (
        <div className='container'> 
            
            {  (page == 'newgame') ? <CreateGame  /> : (page == 'gamelist') ? 
            <GameList /> :   <Layout  fun={lay} />}      </div>
    ) 
}

export default Admin;
