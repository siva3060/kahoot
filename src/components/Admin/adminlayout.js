import React from 'react';

import CreateGame from './CreateGame';
import GameList from './GameList';
import {  BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";

function AdminLayout() {
    
    return (
        <div className='container'> 
        <p className='fontL'> Kahoot!</p>
            <div className='minicontainer'>
                <Router>
                    <div>

                    <span className="input-group-btn">
                        <Link to="/CreateGame">Click to login</Link>
                    </span>


                        <nav>
                            <ul>
                                <li>
                                <Link to="/CreateGame">CreateGame</Link>
                                </li>
                                <li>
                                <Link to="/GameList">GameList</Link>
                                </li>
                            </ul>
                        </nav>
                       {<Switch>
                            <Route path="/CreateGame">
                                <CreateGame />
                            </Route>
                            <Route path="/GameList">
                                <GameList />
                            </Route>
    </Switch>  }
                    </div>
                </Router> 
               
            </div>
        </div>
    ) 
}

export default AdminLayout;
