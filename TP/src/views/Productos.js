

import useApi from '../hooks/useApi';


import React from 'react';
import {Link} from 'react-router-dom'
const Productos = () => {
 
  const { data: productos, isLoading, error } = useApi(`http://localhost:3069/api/productos/`);
 

      if (isLoading) {
        return <div>Cargando...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
 

  return (
    <div className='ThreeForThree'>
      {Object.values(productos).map(productos => (
        <article key={productos.id}>
          <h2>{productos.nombre}</h2>
          <p>{productos.descripcion}</p>
          <img src={"/* product.image */"} alt={"/* product.name */"} />
          <p>Precio: {"product.price"}</p>
          <Link to={"/productos/id="+productos.id}>Ver</Link>
        </article>
      ))}
    </div>
  );
}

export default Productos;