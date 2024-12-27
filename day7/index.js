import express from 'express';
import {config} from 'dotenv';
import { getCurrentViews} from './helpers/views.js';
import { increasingViews} from './helpers/views.js';

config();

// console.log(process.env.PORT);

const server = new express();


server.get("/" , function(req,res){
  res.send("Views.app")
})

server.get("/views", function(req,res){
  res.send(getCurrentViews())
})

server.get("/views/increase", function(req,res){
  res.send(increasingViews())
})




const port = process.env.PORT || 8000;

server.listen(port, function(){
  console.log(" Serveer is running on" , port)
})