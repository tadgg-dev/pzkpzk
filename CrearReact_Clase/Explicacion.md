prop:

son las funciones que veremos por fuera ejemplo de los componentes o que tienen parte de los compoenentes(o vistas)
ejemplo 
nuestro componente header almacena

header=()=>{
    parametros
    estados del componente,estados globales etc.

return(
<header>
<Link to='ejemplo' />
<ComponentePersonalizado props(son los paramretros)>
</header>
)
}


ejemplo

importamos dicho elemento ejemplo 
import {UserProfile} from "..../views"

(
    ejemplo siendo una funcion viendo como esta construida por ejemplo
UserProfile(parametro1,parametro2){instrucciones}
)

const header=()=>{
    parametros

    estados del componente,estados globales etc.

return(
<header>
<Link to='/ejemplo' />

<UserProfile parametro1={dato/funcion/etc}>
</header>
)
}
------------------------------------------------------------

useState:

son actualizaciones de eventos

ejemplo

import React, {  useState } from 'react';

const header=()=>{
    parametros
    estados del componente,estados globales etc.

  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

  const [colorIndex, setColorIndex] = useState(0);//estado inicial de colorIndex=0 y cuando 
  usamos setColorIndex() se carga el nuevo estado o valor y se actualizan los datos en pantalla.
    
    const handleClick = () => {
    setColorIndex((colorIndex + 1) % colors.length);
    
    //funcion suma valor actual +1 y modulo del resultado(ejemplo (0+1)=1 y ejem length 7 1%7 da resto 1, si (1+1)%7=2 y cuando llega a 6+1=7 y modulo de si mismo 7%7 da 0 de resto y reinicia el flujo.)


  };


return(
<header>
<Link to='ejemplo' />
<button onClick={handleClick} style={{ backgroundColor: colors[colorIndex] }}>Hazme Click</button>
<UserProfile parametro1={setStateLogin}>
</header>
)
}


-------------------------------------------------

Hooks/useEffect
Aunque useState y useEffect se utilizan comúnmente para manejar el estado y los efectos secundarios dentro de un componente individual, también puedes utilizarlos para crear interacciones entre componentes que no están en una relación padre-hijo.

Una forma común de hacer esto es utilizando contexto en React. El Contexto te permite compartir valores como estos entre componentes sin tener que pasar explícitamente props a través de cada nivel del árbol de componentes.


ejemplo 
Se puede utilizar para estados globales y no solo del componente por ejemplo
cuando recibimos datos de una peticion 

import React, { useState, useEffect, createContext, useContext } from 'react';

// Crear un Contexto
const ColorContext = createContext();

// Crear un Proveedor de Contexto
function ColorProvider({ children }) {
  const [color, setColor] = useState('red');

  useEffect(() => {
    // Cambiar el color cada segundo
    const intervalId = setInterval(() => {
      setColor(prevColor => prevColor === 'red' ? 'blue' : 'red');
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  // Pasar el color actual como valor del contexto
  return (
    <ColorContext.Provider value={color}>
      {children}
    </ColorContext.Provider>
  );
}

// Crear un componente que utiliza el Contexto
function ColorfulComponent() {
  const color = useContext(ColorContext);

  return (
    <div style={{ color }}>
      Soy un componente colorido.
    </div>
  );
}

// Utilizar el Proveedor de Contexto y el Componente en la aplicación
function App() {
  return (
    <ColorProvider>
      <ColorfulComponent />
    </ColorProvider>
  );
}

export default App;