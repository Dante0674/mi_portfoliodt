import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import fotoPerfil from '../img/foto-perfil.jpg'; 

function Inicio() {
  // Guardo los personajes
  const [personajes, setPersonajes] = useState([]); 
  
  // Traemos los personajes de Harry Potter
  useEffect(() => { 
    axios.get('https://hp-api.onrender.com/api/characters')
      .then((valores) => setPersonajes(valores.data.slice(0, 4))) // Solo 4 con slice
      .catch((error) => console.log("Error al cargar la API", error));  
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      
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

      {/* API */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h2>Personajes de Harry Potter</h2>
        <p>Consumiendo una API pública para mostrar información.</p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
          {personajes.map((d) => (
    <div key={d.id}>
      <img src={d.image} alt={d.name} width="150" />
      <h3>{d.name}</h3>
      <p><strong>Casa:</strong> {d.house}</p>
      <p><strong>Actor:</strong> {d.actor}</p>
    </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Inicio;