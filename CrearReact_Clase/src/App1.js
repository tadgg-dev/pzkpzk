import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Componente Home
const Home = () => (
  <div>
    <h1>Inicio</h1>
    <Link to="/about">Ir a Acerca de</Link>
    <Link to="/settings">Ir a Configuración</Link>
  </div>
);

// Componente About
const About = () => (
  <div>
    <h1>Acerca de</h1>
    <Link to="/">Ir a Inicio</Link>
  </div>
);

// Componente Settings
const Settings = () => (
  <div>
    <h1>Configuración</h1>
    <Link to="/">Ir a Inicio</Link>
  </div>
);

// App principal que incluye el Router y las Rutas
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;