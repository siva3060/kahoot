import React from 'react';
function Layout(props){
    const opt1 = (opt) =>{ 
        console.log(opt)
        props.fun(opt);
    } 

    
    return ( 
        <div>
            <p className='fontL'> Kahoot!</p>
                <div className='minicontainer'>
                    <button onClick ={event => opt1('newgame')} > Create Game </button> 
                        <br /><br />
                    <button onClick={event => opt1('gamelist')}> Game List</button> 
                </div>
        </div>
    )
}

export default Layout;