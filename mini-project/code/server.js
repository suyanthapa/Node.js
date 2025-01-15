import {config} from 'dotenv';
import express from 'express';
import connectToDB from './connect.js';

config();

const port = process.env.PORT;
const server = express();


connectToDB().then(function (connectMessage) {
console.log(connectMessage)
server.listen(port , ()=>{

  console.log("Server connected on port ---- "+ port)
})
})
.catch(function (error){
  console.error(error)
})
