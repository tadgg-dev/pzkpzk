import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connApi } from '../hooks/variables';
import { useSession } from '../hooks/SessionContext'; // Asegúrate de importar useSession desde la ubicación correcta

function UserProfile() {
  const  {user,isLoggedIn, setIsLoggedIn}  = useSession();
  const profilePicture = user.profilePicture || "/logo192.png";
  const logoutxD = async () => {
    
    try {
      await axios.get((connApi.WEB+'/api/logout'), { withCredentials: true });
     setIsLoggedIn(false)
    } catch (err) {
      console.error(err);
    }
  };
  
  
  return (
    <div>
      {!isLoggedIn?(<></>):(<div>
        <img src={profilePicture} alt="Foto de perfil" />
        <h1>{user.user}</h1>
        <p>{user.email}</p>
      </div>)}
     <nav>
          <ul className='menu'>
            <li><Link to='/productos'>Productos</Link></li>
            {!isLoggedIn?(<>
              <li><Link to='/login'>Iniciar Sesion</Link></li>
              <li><Link to='/registro'>Unirte</Link></li>
              </> )
              :
              (<>
                <li><Link to="/profile">Perfil</Link></li>
              <li><Link to="/settings">Configuración</Link></li>
              <li><Link to="/" onClick={logoutxD}>Cerrar sesión</Link></li>
              </>
              )}
          </ul>
        </nav>
     
      
    </div>
  );
}


const Header = () => {
 
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }
  
  

  return (
    <header className='flexAround'>
      <Link to="/"><img src='/logo192.png' alt='logo' className='App-logo'/></Link>
      <div>
        <label>Buscar</label>
        <input type='search' value={searchTerm} onChange={handleSearchChange} />
        <button> <Link to={"/productos/id="+searchTerm}>Buscar</Link></button>
      </div> 
    
       
          <UserProfile  />
       
     
        
    </header>
  );
}

export default Header;


/* import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';






// Esta es una implementación básica y puedes reemplazarla con tu propia lógica

function UserProfile({user}) {
  // Supongamos que tienes una forma de obtener los datos del perfil del usuario
 const profilePicture=user.profilePicture||"/logo192.png";

  return (
    <div>
    <div>
      <img src={profilePicture} alt="Foto de perfil" />
      <h1>{user.user}</h1>
      <p>{user.email}</p>

    </div>
    <nav>
            <ul className='menu'>
               <li><Link to='/productos'>Productos</Link></li>
              <li><Link to="/profile">Perfil</Link></li>
              <li><Link to="/settings">Configuración</Link></li>
              <li><Link to="/" onClick={logoutxD}>Cerrar sesión</Link></li>
            </ul>
          </nav>
    </div>
  );
}

async function logoutxD(event) {
  event.preventDefault();
  try {
       await axios.get('http://localhost:3069/api/logout',{withCredentials:true});
       
  } catch (err) {
     
  }
};

const Header = () => {
  
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [user, setUser] = useState({});
    
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    }
  
    useEffect(() => {
      const checkToken = async () => {
        try {
          const response = await axios.get('http://localhost:3069/api/checkToken', { withCredentials: true });
          if (response.status === 200) {
            setIsLoggedIn(true);
            setUser(response.data);
           
          } else {
            setIsLoggedIn(false);
          }
        } catch (error) {
          setIsLoggedIn(false);
        }
      };
  
      checkToken()
    }, []);
  

    return (
      <header className='flexAround'>
      <Link to="/"><img src='/logo192.png' alt='logo' className='App-logo'/></Link>
        <div>
            <label>Buscar</label>
            <input type='search' value={searchTerm} onChange={handleSearchChange} />
            <button> <Link to={"/productos/id="+searchTerm}>Buscar</Link></button>
          </div> 
        {isLoggedIn ? (
             <>
           <UserProfile user={user}/>
          </>
        ) : (
          <nav  >
            <ul className='menu'>
                <li><Link to='/productos'>Productos</Link></li>
                <li><Link to='/login'>Iniciar Sesion</Link></li>
                <li><Link to='/registro'>Unirte</Link></li>
            </ul>
        </nav>
        )}
      </header>
    );
    }

export default Header;
 */