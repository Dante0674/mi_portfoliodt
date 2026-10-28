import React from 'react';
import { NavLink } from "react-router";

function Encabezado() {
  // Estilos para la barra contenedora
  const estiloBarra = {
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#222',  
    padding: '15px 20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
  };

  // Estilos para cada enlace
  const estiloLink = ({ isActive }) => ({
    color: isActive ? '#61dafb' : 'white', 
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '0 20px', 
    transition: 'color 0.3s'
  });

  return (
    <header style={estiloBarra}>
      <nav>
        <NavLink to="/" style={estiloLink} end>
          Inicio
        </NavLink>
        <NavLink to="/Servicios" style={estiloLink}>
          Servicios
        </NavLink>
        <NavLink to="/Contacto" style={estiloLink}>
          Contacto
        </NavLink>
      </nav>
    </header>
  );
}

export default Encabezado;