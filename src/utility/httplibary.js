import {useState  } from 'react';
import axios from 'axios';

export function sendGetRequestTo(url) {
   let result = {'status' : false};
   
   console.log(url)
   axios.get(url)
      .then(response => {
         console.log(response)
         //setresult(response.data[0]['userId']); 
      })
      .catch(error => console.log(error));
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

// Defensive code for network error or network slow 
// I don't want the UI to show weird erros I want it to show 
// Network not avaliable 
// Slow internet 
// Error on server side not 500 internal server error 