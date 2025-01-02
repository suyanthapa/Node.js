import { model,  Schema} from "mongoose";
import { stringify } from "querystring";

const carSchema = new Schema ({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  manufacturer: {
    type: String,
    required: true,
  },

  makeYear: {
    type: Date,
    required: true,
  },
  
},{ timestamps: true})

const car = model("Car", carSchema);

async function insertCar({name, price, manufacturer, makeYear}) {
  return car.create({name,price,manufacturer,makeYear})
}

export default car;
export { insertCar}