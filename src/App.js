import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import Encabezado from './componentes/Encabezado';
import PiedePagina from './componentes/PieDePagina';
import Inicio from './pagina/Inicio';
import Servicios from './pagina/Servicios';
import Contacto from './pagina/Contacto';
import NoExiste from './pagina/NoExiste'

function App() {
  return (
   
      <BrowserRouter>
        <main>
        <Encabezado/>
                
        <Routes>
             <Route path="/"          element={<Inicio/>} />
             <Route path="/Inicio"    element={<Inicio/>} />
             <Route path="/Servicios" element={<Servicios/>} />
             <Route path="/Contacto"  element={<Contacto/>} />
             <Route path="*"          element={<NoExiste/>} />
        </Routes>
        
        </main>

      </BrowserRouter>
    );
}

export default App;
