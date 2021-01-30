import {useState  } from 'react';
import axios from 'axios';


export async function sendGetRequestTo(url) {
   let status = 404
   let data = ""
   await axios.get(url)
        .then( res => {
           console.log(res)
           status = res.status
           data = res.data;
        })
   return [status,data];
}


export function PostRequestTo(url,requestData) {
   let status = 404
   let data = ""
   await axios.get(url)
        .then( res => {
           status = res.status
           data = res.data;
        })
   return [status,data];

}

// Defensive code for network error or network slow 
// I don't want the UI to show weird erros I want it to show 
// Network not avaliable 
// Slow internet 
// Error on server side not 500 internal server error 