import React from 'react';
import Dest from '../componentes/Dest'; // Importamos el componente que dibuja la tarjeta

// 1. IMPORTACIÓN DE IMÁGENES: 
// Le decimos a React que busque estos archivos en la carpeta img. 
// Es obligatorio que el nombre y la extensión coincidan con el archivo real.
import logoReact from '../img/logo-react.png'; 
import logoJs from '../img/logo-js.png';
import logoHtml from '../img/logo-html.png';

function Servicios() {
  // 2. EL ARRAY LOCAL (Cumpliendo la consigna):
  // Creamos una lista de objetos. Cada objeto tiene un id (único), un título, 
  // una descripción (que en este caso la llamé "descripcion") y una imagen.
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
      
      {/* 3. EL CONTENEDOR FLEX: 
          Usamos display: 'flex' para que las tarjetas se pongan una al lado de la otra. 
          flexWrap: 'wrap' hace que si no entran en la pantalla, bajen a la siguiente línea. */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '30px' }}>
        
        {/* 4. EL MAP (Recorrer el array): 
            Por cada "tec" en el array de tecnologías, creamos un componente <Dest />. 
            Le pasamos las propiedades (props) para que <Dest /> sepa qué mostrar. */}
        {tecnologias.map((tec) => (
          <Dest 
            key={tec.id} /* key: React lo pide para saber quién es quién (evita errores) */
            id={tec.id}
            titulo={tec.titulo} 
            precio={tec.descripcion} /* OJO: Acá le pasamos la descripción al prop "precio" */
            imagen={tec.imagen} 
          />
        ))}
        
      </div>
    </div>
  );
}

export default Servicios;