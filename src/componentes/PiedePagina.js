import React from 'react';

function PieDePagina() {
  return (
    <footer style={{
      backgroundColor: '#222', 
      color: 'white',          
      textAlign: 'center',     
      padding: '20px',         
      marginTop: '40px',       
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