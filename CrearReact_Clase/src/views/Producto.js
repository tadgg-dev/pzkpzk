
import useApi from '../hooks/useApi';
import { useLocation } from 'react-router-dom';

const Producto = () => {

  
  const location = useLocation();
  const query = new URLSearchParams(location.pathname);
  const id = query.get('/productos/id');
  
  
  const { data: producto, isLoading, error } = useApi(`http://localhost:3069/api/productos/${id}`);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
     
    </div>
  );
};

export default Producto;

