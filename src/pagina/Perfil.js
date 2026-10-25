import React from 'react';
import { useParams, Link } from 'react-router';

function Perfil() {
  const { id } = useParams();

  return (
    <>
      <h2>Perfil: {id} </h2>
      
      <ul>
        <li>
          <Link to="Ana">Ana</Link></li>
        <li>
          <Link to="Juan">Juan</Link></li>
        <li>
          <Link to="Maria">Maria</Link></li>
        <li>
          <Link to="Pepe">Pepe</Link></li>  
      </ul>

    </>
  );
}

export default Perfil;