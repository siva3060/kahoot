import {useState  } from 'react';
import axios from 'axios';

const url = "http://localhost:700/api/user/gamePin"

export function Get() {
   const [result, setresult ] = useState(0);

//'https://jsonplaceholder.typicode.com/posts'
   axios.get(url)
         .then(response => { 
            setresult(response.data[0]['userId']); 
         });
         return result;  
}
