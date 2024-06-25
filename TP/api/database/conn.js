const mysql = require('mysql2');
const env=require('dotenv').config().parsed;
// Crear el pool de conexiones
const CONFIG=JSON.parse(env.DATABASE)


const pool = mysql.createPool({
  host: CONFIG.host, // servidor
  user: CONFIG.user, // usuario
  password: CONFIG.password, // pass
  database: CONFIG.database, // nombre de la base de datos
  waitForConnections:true,
  connectionLimit: 10,
  queueLimit: 0,
  idleTimeout: 16200
});

// Obtener una instancia de Promise del pool
const promisePool = pool.promise();
const allAsync=(arg) => Promise.all(arg)
.then(() => {
  console.log('Todas las solicitudes enviadas con exito!');
  
})
.then(() => {
  console.log('Fin de solicitud.');
})
.catch(error => {
  console.error('Error:', error);
});
const existTable=async(arg,arg2)=>{
  [resp,query]=await promisePool.query("SHOW TABLES LIKE ?",[arg])
  if(resp.length>0){
    console.log("Tabla existente :",arg)
    return false
  }else{
    return await promisePool.query(arg2)
  }
   
}
  
 
  module.exports={promisePool,allAsync,existTable};

