import { config} from 'dotenv';


import mongoose from 'mongoose';
import { insertCar } from './car.js';
config();

mongoose.connect(process.env.MONGODB_URL).then(async ()=>{
  console.log("Connected to mongoose")
  var insertCarDetails = await insertCar({ name: "BYD",
    price: 20000, manufacturer: "tesla", makeYear: "2018"
  })

  console.log({insertCarDetails})
})
.catch(function (err){
  console.error("Error connectionnto db",err)
})