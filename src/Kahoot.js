import React from 'react';
import AdminLayout from './components/Admin/adminlayout';
import GamePin from './components/Home/GamePin';
import GamePinDisplay from './components/Home/GamePinDisplay';
import Newquestion_layout from './components/Game/Newquestion_layout';
import Lobby from './components/Lobby/Lobby';
import Questiondisplay_layout from './components/Game/Questiondisplay_layout'; 
import {  BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";

function Kahoot() {
  return(<GamePin />);
}
export default Kahoot;

  
//TODO :
// When do i need div
//   return (
// <div>


// {/* <AdminLayout /> */}

// {
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/GamePin">GamePin</Link>
//             </li>
//             <li>
//               <Link to="/GamePinDisplay">GamePinDisplay</Link>
//             </li>
//             <li>
//               <Link to="/Lobby">Lobby</Link>
//             </li>
//             <li>
//               <Link to="/Question">Question</Link>
//             </li>
//             <li>
//               <Link to="/New_Question">New Question</Link>
//             </li>
//           </ul>
//         </nav>

//         <Switch>
//           <Route path="/GamePin">
//             <GamePin />
//           </Route>
//           <Route path="/GamePinDisplay">
//             <GamePinDisplay />
//           </Route>
//           <Route path="/Lobby">
//             <Lobby />
//           </Route>
//           <Route path="/Question">
//             <Questiondisplay_layout />
//           </Route>

//           <Route path="/New_Question">
//             <Newquestion_layout />
//           </Route>
          
          
//         </Switch>
//       </div>
//     </Router> }
//     </div>
//   )

