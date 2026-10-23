import React from 'react';

// 1. PROPS: Recibimos los datos que nos manda Servicios (titulo, precio, imagen).
// Usamos ({ ... }) para desestructurar el objeto y no tener que escribir props.titulo.
function Dest({ titulo, precio, imagen }) {
  return (
    // 2. ESTILOS: Usamos CSS en línea (style={{}}) para armar la tarjeta.
    <div style={{ 
      border: '1px solid #ddd', // Borde gris claro
      borderRadius: '10px',     // Esquinas redondeadas
      padding: '20px',          // Espacio interno
      width: '250px',           // Ancho fijo de la tarjeta
      backgroundColor: '#f9f9f9', // Fondo gris muy clarito
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)' // Sombrita para que parezca una tarjeta
    }}>
      
      {/* 3. LA IMAGEN: 
          objectFit: 'contain' es clave acá. Hace que el logo entre entero 
          en el cuadro de 100x100 sin recortarse ni deformarse. */}
      <img 
        src={imagen} 
        alt={titulo} 
        style={{ width: '100px', height: '100px', objectFit: 'contain', margin: '0 auto' }} 
      />
      
      {/* 4. EL TEXTO: Mostramos el título (ej: "React JS") y el precio (que es la descripción) */}
      <h3 style={{ margin: '15px 0 10px 0' }}>{titulo}</h3>
      <p style={{ color: '#666', margin: 0 }}>{precio}</p>
    </div>
  );
}

export default Dest;