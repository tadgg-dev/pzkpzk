const {ProductoTablaEjem} = require("../database/listEjemplo")
const {tablaUsers} = require("../database/tablaUsuarios")

const ExistTables=async()=>{
   
    try
{
    ProductoTablaEjem();
    tablaUsers();
  
}catch(e){
  console.error(e)
}
    }

module.exports={ExistTables}