import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import fotoPerfil from '../img/foto-perfil.jpg'; 

function Inicio() {
  // Estado para guardar los personajes
  const [personajes, setPersonajes] = useState([]); 
  
  // Traemos los personajes de Rick and Morty
  useEffect(() => { 
    axios.get('https://rickandmortyapi.com/api/character')
      .then((valores) => setPersonajes(valores.data.results.slice(0, 6))); // Solo 6
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      
      {/* --- TU PRESENTACIÓN (se queda igual) --- */}
      <div style={{ textAlign: 'center', padding: '30px' }}>
        <img 
          src={fotoPerfil} 
          alt="Foto de Dante" 
          style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #333' }} 
        />
        <h1>Hola, soy Dante</h1>
        <h3>Estudiante de Desarrollador de Aplicaciones</h3>
        <p style={{ maxWidth: '600px', margin: '20px auto', fontSize: '18px' }}>
          Bienvenido a mi portafolio. Soy estudiante de programación web II.
        </p>
      </div>

      {/* --- SECCIÓN API (Para el profesor) --- */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h2>Personajes de Rick and Morty</h2>
        <p>Consumiendo una API pública para mostrar información.</p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
          {personajes.map((d) => (
            <div key={d.id} style={{ 
              border: '1px solid #ccc', padding: '15px', borderRadius: '10px', width: '200px', backgroundColor: '#fff', boxShadow: '2px 2px 8px rgba(0,0,0,0.1)' 
            }}>
              <img src={d.image} alt={d.name} style={{ width: '100%', borderRadius: '5px' }} />
              <h3 style={{ margin: '10px 0 5px 0' }}>{d.name}</h3>
              <p style={{ margin: '5px 0' }}><strong>Estado:</strong> {d.status}</p>
              <p style={{ margin: '5px 0' }}><strong>Especie:</strong> {d.species}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Inicio;