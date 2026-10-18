import React from 'react';
import { NavLink } from "react-router";

function Encabezado() {
  return (
    <header>
     <nav>
         <NavLink to="/Inicio" style={({ isActive }) => ({
    color: isActive ? "red" : "black",
  })} end> 
           Inicio
         </NavLink>
         <NavLink to="/Servicios" style={({ isActive }) => ({
    color: isActive ? "red" : "black",
  })} end>
           Servicios
         </NavLink>
         <NavLink to="/Contacto" style={({ isActive }) => ({
    color: isActive ? "red" : "black",
  })} end>
           Contacto
         </NavLink>
     </nav>
    </header>
  );
}

export default Encabezado;