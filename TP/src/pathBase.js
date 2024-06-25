const path = require('path');


const baseDir=(a) => path.resolve(__dirname,a);

function src(subruta = '') {
    return path.join(baseDir(""), subruta);
  };
  
function api(subruta = '') {
    return path.join(baseDir("../api"), subruta);
  };
  function app(subruta = '') {
    return path.join(baseDir("../app"), subruta);
  };
  const Public=(subruta)=>{
    return path.join(baseDir("../public"), subruta);
  }
  const database=(subruta)=>{
    return path.join(baseDir("../api/database"), subruta);
  }
// Exporta una función que construye rutas a partir de la ruta base
module.exports = {app,src,api,Public,database}