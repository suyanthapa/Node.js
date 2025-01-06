import { Router } from "express";
import { getMetadata, updateMetadata } from "../models/libraryMetadata.js";
import { update } from "../validations/metadata.js";
import { books } from "../models/books.js";
import { booksValidation } from "../validations/books.js";
import mongoose from "mongoose";
import validate from "../middlewares/validate.js";



const bookRouter = Router();

//get metadata
bookRouter.get("/", async function(req,res){

  try{  
    const metadata =( await getMetadata()).toObject();
    const books1 = await books.findOne({});

    return res.json({...metadata, books:books1 , _id: undefined, __v: undefined})

  }
  catch(e){
    return res.status(400).json({Error: e.message})
  }
})
//edit metadata
bookRouter.put("/",validate(update),async function (req,res) {

  try{
  
    const { source, updatedBy} = req.body;
    const latest = await updateMetadata({source,updatedBy});
    return res.json({metadata: latest ,_id: undefined, __v: undefined})
  }
  catch (e){
    return res.status(400).json({Error: e.message})
  }
  
})

//add new boook
bookRouter.post("/", validate(booksValidation), async function(req,res) {
    try{
      const metadata =( await getMetadata()).toObject();
      const { title,author,genre,publishedYear,rating} = req.body;
      const add = await books.create({title,publishedYear,genre,author,rating});
      return res.json({...metadata,books:add, _id: undefined, __v: undefined})
    }
 catch (e){
  return res.status(400).json({errror: e.message})
 }
})

const specificRouter = Router();

bookRouter.use("/:existingId", validate(booksValidation), async function (req,res,next) {


    try{
      const { existingId} = req.params;
      const db_id = await books.find({_id: existingId})

      if(db_id){
        req.exisitngId = db_id;
        next()
      }
      else{
        throw new error ("Currency not found by id:", db_id)
      }
    }
    catch (e){
      return res.status(400).json({error: e.message})
    }
}, specificRouter)

specificRouter.get("/", async function (req,res) {

  return res.send({books : req.exisitngId})
  
})
export {bookRouter, specificRouter}

