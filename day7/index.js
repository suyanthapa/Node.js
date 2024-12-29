import express from 'express';
import {config} from 'dotenv';
import { getCurrentViews} from './helpers/views.js';
import { increasingViews} from './helpers/views.js';
import { getCountValue, reset } from './helpers/assign1.js';
import { increaseBy10 } from './helpers/assign1.js';
import { decreaseBy10 } from './helpers/assign1.js';
// import { reset } from './helpers/assign1.js';


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

server.get("/views/increaseBy10", function(req,res){
  res.send(increaseBy10())
})

server.get("/views/decreaseBy10", function(req,res){
  res.send(decreaseBy10())
})
server.get("/views/reset", function(req,res){
  res.send(reset())
})





const port = process.env.PORT || 8000;

server.listen(port, function(){
  console.log(" Serveer is running on" , port)
})