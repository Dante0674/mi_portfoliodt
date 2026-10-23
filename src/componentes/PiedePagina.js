import React from 'react';

function PieDePagina() {
  return (
    <footer style={{
      backgroundColor: '#222', // Fondo gris
      color: 'white',          // Texto blanco
      textAlign: 'center',     // Centrado
      padding: '20px',         // Espacio arriba y abajo
      marginTop: '40px',       // Lo separa del contenido de arriba
      width: '100%'
    }}>
      <p style={{ margin: 0 }}>
        {new Date().getFullYear()} Dante Torres - Portafolio Web
      </p>
      <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: 'white' }}>
        Correo: dantectorres@gmail.com
      </p>
    </footer>
  );
}

export default PieDePagina;