import {useState  } from 'react';
import axios from 'axios';

export async function sendGetRequestTo(url) {
   let status = 404
   await axios.get(url)
        .then( res => {
           console.log(res)
           status = res.status
        })
   console.log("the response status sending is "+status)
   return status;
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