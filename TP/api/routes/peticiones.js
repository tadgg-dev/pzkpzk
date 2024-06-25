
const express = require("express");

const cors = require("cors")

const cookieParser=require("cookie-parser")

const peticiones = express.Router();


const {urls} = require('./listURL');

const { productID } = require("../Http/Controllers/productos");

const env=require('dotenv').config().parsed;

const whiteList=JSON.parse(env.ListaBlanca)

peticiones.use(cors({
    origin:whiteList, // reemplaza esto con tu dominio
    credentials: true
  }))

  peticiones.use(cookieParser())

  peticiones.use(express.json())

  peticiones.use(express.urlencoded({ extended: true }));

peticiones.get('/api/productos/:id', productID);

peticiones.get("*",(req,res)=>{
  
const [method,path]=[req.method,req.path]

  try{
  return  urls[method][path](req,res)
  }catch(e){
    res.sendStatus(404)
  }

})
  peticiones.post("*",(req,res)=>{


const [method,path]=[req.method,req.path]

  try{
    
   return urls[method][path](req,res)
  }catch(e){
    res.sendStatus(404)
  }

})
  


module.exports={
    peticiones
}