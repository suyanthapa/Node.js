import dotenv, { config } from 'dotenv';


config();

const api = process.env.api;

const getJokes = async (req,res)=>{

  try{
   const responses = await fetch(api);
    const extractData = responses.json();

    const jokes = extractData.value();
    return res.json({jokes})

 }
catch (e){
  return res.json({error: e.message})
}


}

export default getJokes;