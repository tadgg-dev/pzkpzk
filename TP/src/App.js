


import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './views/Inicio';
import Productos from './views/Productos';
import Producto from './views/Producto';
import NotFound from './views/NotFound';
import {LoginForm,RegisterForm} from './views/Login';
import {SessionProvider} from "./hooks/SessionContext"



function App() {
  return (
    <SessionProvider>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} exact />
          <Route path="/productos/" element={<Productos />} exact />
          <Route path="/productos/:id" element={<Producto />} />
          <Route path="/login/" element={<LoginForm />} /> 
          <Route path="/registro/" element={<RegisterForm />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
    </SessionProvider>
  );
}

export default App;