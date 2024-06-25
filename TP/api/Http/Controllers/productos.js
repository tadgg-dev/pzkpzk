const {obtenerProducto,listProductoPaga}=require("../Middleware/consultaProductos")



const productos = listProductoPaga([6,1]);






const productID=async (req, res) => {
 const {id}=req.params;
  obtenerProducto(Number(id))
  .then(producto => {
    
    res.json(producto);
    
  })
  .catch(error => {
    console.error('Error:', error);
    res.status(404).send('Producto no encontrado');
  });
  
}


 const productosList=async(req, res) => {
  console.log(productos)

  if (productos) {
    res.json(await productos);
  } else {
    res.status(404).send('Producto no encontrado');
  }
};

module.exports={
productosList,productID
}