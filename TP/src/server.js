const {listenAPP}=require("../app/routes/app")
const {listenAPI}=require("../api/routes/api")
const env=require('dotenv').config().parsed;

const APICONFIG=JSON.parse(env.APICONFIG)
const APPCONFIG=JSON.parse(env.APPCONFIG)

const serverOn=()=>{


listenAPI(APICONFIG.port,APICONFIG.host);

listenAPP(APPCONFIG.port,APPCONFIG.host);
 
}

serverOn()



process.on('uncaughtException', function(err) {
  console.error('Se capturó una excepción no controlada:', err);
  // Haz algo para manejar el error
  process.exit(1); // Salir del proceso
})

