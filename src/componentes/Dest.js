import React from 'react';

function Dest({ titulo, precio, imagen }) {
  return (
    // Usao (style={{}}) para armar la tarjeta.
    <div style={{ 
      border: '1px solid #ddd', // Borde
      borderRadius: '10px',     // Esquinas redondeadas
      padding: '20px',          // Espacio interno
      width: '250px',           // Ancho fijo de la tarjeta
      backgroundColor: '#f9f9f9', // Fondo gris
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)' // Sombrita
    }}>
      
      {/* ObjectFitl: hace q el logo entre entero */}
      <img 
        src={imagen} 
        alt={titulo} 
        style={{ width: '100px', height: '100px', objectFit: 'contain', margin: '0 auto' }} 
      />
      
      {/* Mostramos el título y el precio */}
      <h3 style={{ margin: '15px 0 10px 0' }}>{titulo}</h3>
      <p style={{ color: '#666', margin: 0 }}>{precio}</p>
    </div>
  );
}

export default Dest;