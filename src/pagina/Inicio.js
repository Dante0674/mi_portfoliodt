import React, { useState, useEffect } from 'react'; // Importa los hooks. 
import axios from 'axios'; // Importamos axios para llamar HTTP.

function Inicio() {
  
  const [characters, setCharacters] = useState([]); // Creamos un estado para guardar los personajes.
  
  useEffect(() => { //Llamamos a la API de Rick and Morty para traer los personajes
    axios.get('https://rickandmortyapi.com/api/character/')
    .then((valores) => setCharacters([valores.data.results[0]]));
  
  }, [] );

  return (
    <>
      <h1> Inicio </h1>
      {
        characters.map((d) => (
          <div key={d.id}>
            <h3> {d.name}</h3>
            <p>  {d.status}</p>
            <p>  {d.gender}</p>
            <p>  {d.type}</p>
            <p>  {d.origin.name}</p>
            <p>  {d.origin.url}</p>
            <img src= {d.image}/>
          </div>
        ))
      }
    </>
  );
}

export default Inicio;