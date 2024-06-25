const express = require('express');
const {promisePool}=require("../database/conn")
const pool=promisePool;
const { peticiones } = require("./peticiones");
const { ExistTables } = require("../database/creacionTablasLista");

const api = express();
const env = require('dotenv').config().parsed;
const CONFIG = JSON.parse(env.APICONFIG);
ExistTables();

api.use("/", peticiones);

function listenAPI(port = CONFIG.port, host = CONFIG.host) {
  const server = api.listen(port, host, () => {
    console.log(`api server on http://${host}:${port}`);
  });

  // Manejar cierre ordenado
  process.on('SIGINT', () => {
    console.log('Iniciando cierre del servidor...');
    
    server.close(() => {
      console.log('Servidor HTTP cerrado.');
      
      pool.end(err => {
        if (err) {
          console.error('Error cerrando el pool de conexiones', err);
          process.exit(1); // Salir con un código de error
        }
        console.log('Pool cerrado.');
        process.exit(0); // Salir normalmente
      });
    });
  });
}

// Si este módulo es el módulo principal, inicia el servidor
if (require.main === module) {
  listenAPI();
}

module.exports = { listenAPI }; // se exporta
