import React from 'react';
import Encabezado from './componentes/Encabezado';
import PieDePagina from './componentes/PiedePagina';
import Inicio from './pagina/Inicio';
import Servicios from './pagina/Servicios';
import Contacto from './pagina/Contacto';

function App() {
  return (
    <main>
      <Encabezado />
       <h1>Hola Mundo</h1>
       <Inicio />
       <Servicios />
       <Contacto />
      <PieDePagina />
    </main>
  );
}

export default App;
