import React from 'react';
import { HashRouter, Routes, Route } from "react-router";
import Encabezado from './componentes/Encabezado';
import PieDePagina from './componentes/PieDePagina';
import Inicio from './pagina/Inicio';
import Servicios from './pagina/Servicios';
import Contacto from './pagina/Contacto';
import NoExiste from './pagina/NoExiste';

function App() {
  return (
    <HashRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        <Encabezado />
        
        
         <main style={{ flex: 1, backgroundColor: '#f4f4f9' }}>>
          <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/Inicio" element={<Inicio/>} />
            <Route path="/Servicios" element={<Servicios/>} />
            <Route path="/Contacto" element={<Contacto/>} />
            <Route path="*" element={<NoExiste/>} />
          </Routes>
        </main>

        <PieDePagina />
        
      </div>
    </HashRouter>
  );
}

export default App;