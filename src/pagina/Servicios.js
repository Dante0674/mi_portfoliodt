import React from 'react';
import Dest from '../componentes/Dest'; // Importamos el componente que dibuja la tarjeta
import logoReact from '../img/logo-react.png'; // Importamos imagenes
import logoJs from '../img/logo-js.png';
import logoHtml from '../img/logo-html.png';

function Servicios() {
  // EL ARRAY
    const tecnologias = [
    { 
      id: 1, 
      titulo: "React JS", 
      descripcion: "Interfaces dinámicas", 
      imagen: logoReact 
    },
    { 
      id: 2, 
      titulo: "JavaScript", 
      descripcion: "Lógica y funcionalidad", 
      imagen: logoJs 
    },
    { 
      id: 3, 
      titulo: "HTML5 & CSS3", 
      descripcion: "Maquetación web", 
      imagen: logoHtml 
    }
  ];

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Mis Tecnologías</h1>
      <p>Estas son las herramientas con las que estoy construyendo mis proyectos:</p>
            
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '30px' }}>
        
        {/* EL MAP (Recorrer el array) */}
        {tecnologias.map((tec) => (
          <Dest 
            key={tec.id} /* key, evita errores */
            id={tec.id}
            titulo={tec.titulo} 
            precio={tec.descripcion}
            imagen={tec.imagen} 
          />
        ))}
        
      </div>
    </div>
  );
}

export default Servicios;