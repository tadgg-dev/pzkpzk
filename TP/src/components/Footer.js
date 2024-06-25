import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {return(
    <footer className='flexAround'>
        <Link to="/"><img src='/logo192.png' alt='logo'/></Link>
        <nav>
            <ul className='menu'>
                <li><Link to='/contacto'>Contactanos</Link></li>
                <li><Link to='/help'>Ayuda</Link></li>
                <li><Link to='/Weare'>Sobre nosotros</Link></li>
                <li><Link to='/location'>Ubicación</Link></li>
            </ul>
        </nav>
    </footer>
)}

export default Footer;