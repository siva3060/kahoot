import {useState  } from 'react';
import axios from 'axios';

export function sendGetRequestTo(url) {
   let result;
   console.log(url)
   axios.get(url)
         .then(response => { 
            console.log(response)
            //setresult(response.data[0]['userId']); 
         });
         return result;  
}


export function PostRequestTo(data,url) {
   const [result, setresult ] = useState(0);

   console.log(data)
   // Simple POST request with a JSON body using axios
   const send_data = { data: data };
   axios.post(url, send_data)
       .then(response => setresult(response) );
}