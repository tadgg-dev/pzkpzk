const {promisePool}=require("../../database/conn")

const obtenerProducto =async (id) => {
    const [row,fields]= await promisePool.query(`SELECT * FROM nombre_de_tu_tabla WHERE id = ?`,[id])

    return row.length===1?row[0]:row;
    
  };

  const listProductoPaga=async(arg)=>{
    const [resp,reqr]=await promisePool.query('SELECT * FROM nombre_de_tu_tabla LIMIT ? OFFSET ?',arg)
    return resp.length===1?resp[0]:resp;
  }
  //ejemplo de consulta para traer productos relacionados sin incluir el que notificamos.
  const obtenerProductoR =async (id,franquicias) => {
    const [row,fields]= await db.query(`SELECT *
    FROM nombre_de_tu_tabla 
    WHERE franquicias IN (
        SELECT franquicias
        FROM nombre_de_tu_tabla 
        WHERE franquicias = ?
    ) AND id <> ?;`,[franquicias,id])

    return row.length===1?row[0]:row;
    
  };
  
  module.exports={
    obtenerProducto,obtenerProductoR,listProductoPaga
  }