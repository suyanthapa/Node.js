import e, { Router } from "express";
import Car from "../models/car.js";
const carRouter = Router();

// Get all Cars
carRouter.get("/", async function (req, res) {
  const carsInDatabase = await Car.find({});
  return res.json(carsInDatabase);
});

//add data using req.body
carRouter.post("/", async function (req, res) {
  const { name, price, manufacturer, makeYear } = req.body;
  try {
    let existingData = await Car.findOne({ name });
    if (existingData) {
      return res.status(401).json({ message: " Car already exists !" });
    }
    const carDetails = await Car.create({
      name,
      price,
      manufacturer,
      makeYear,
    });
    return res.json(carDetails);
  } catch (e) {
    return e.message;
  }
});
//get specific car details using params
carRouter.get("/:name", async function (req, res) {
  let data = req.params.name;
  try {
    const existingData = await Car.findOne({ name: data });
    if (existingData) {
      let specificDetails = await Car.findOne({ name: data });
      return res.send(specificDetails);
    }
    return res.status(404).send(" Car not found  !");
  } catch (e) {
    return e.message;
  }
});

//edit car details
carRouter.put("/edit/:name", async function (req, res) {
  let data = req.params.name;
  let { name, manufacturer, price, makeYear } = req.body;
  try {
    const existingData = await Car.findOne({ name: data });
    if (existingData) {

    let specificDetails = await Car.findOneAndUpdate(
        { name: data },
        { name, price, manufacturer, makeYear },
        {
          new: true,
        }
      );
 
      return res.send(specificDetails);
    }
    return res.status(404).send(" Car not found  !");
  } catch (e) {
    return e.message;
  }
});

//delete specific name and its details
carRouter.delete("/:name", async function (req, res) {
    let data = req.params.name;
    try {
      const existingData = await Car.findOne({ name: data });
      if (existingData) {
        let specificDetails = await Car.deleteOne({ name: data });
        return res.status(200).send("deleted successfully");
      }
      return res.status(404).send(" Car not found  !");
    } catch (e) {
      return e.message;
    }
  });
  



export { carRouter };
