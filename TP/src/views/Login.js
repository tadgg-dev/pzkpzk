
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useSession } from '../hooks/SessionContext';
import { connApi } from '../hooks/variables';

// Formulario de inicio de sesión
export function LoginForm() {
    const  {setUser,isLoggedIn, setIsLoggedIn}  = useSession();
    const [userL, setUserL] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async event => {
        event.preventDefault();
        try {
             const response =await axios.post((connApi.WEB+'/api/login'), { user:userL, password },{withCredentials:true});
             if(response.status===200){
                setIsLoggedIn(true)
                navigate(-1);
               setUser(response.data)
            }
             
        } catch (err) {
            setError('Verifique los datos ingresados');
        }
    };
    if (isLoggedIn) {
        return <Link to="/" />;
      }
    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <label>
                Usuario:
                <input type="text" value={userL} onChange={e => setUserL(e.target.value)} required />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            </label>
            <button type="submit">Iniciar sesión</button>
        </form>
    );
}

// Formulario de registro
export function RegisterForm() {

    const  {isLoggedIn, /* setIsLoggedIn */}  = useSession();
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async event => {
        event.preventDefault();
        try {
             const response = await  axios.post((connApi.WEB+'/api/register'), { user,nombre,email, password },{withCredentials:true});
            if(response.status===200){
                console.log('registrado')
                navigate(-1);
            }
            
        } catch (err) {
            setError('Intente con otro Usuario/Mail');
        }
    };
    if (isLoggedIn) {
        return <Link to="/" />;
      }
    return (
        <form onSubmit={handleSubmit} className='flexForm'>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
            <label>
                Usuario:
                <input type="text" value={user} onChange={e => setUser(e.target.value)} required />
            </label>
            </div>
            <div>
            <label>

                Nombre/s:
                <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} required />
            </label>
            </div>
            <div>
            <label>
                Email:
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </label>
            </div>
            <div>
            <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            </label>
            </div>
            <button type="submit">Registrarse</button>
        </form>
    );
}