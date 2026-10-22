import React from 'react';
import imagen1 from '../img/imagen1.jpg';
import imagen2 from '../img/imagen2.jpg';
import imagen3 from '../img/imagen3.jpg';
import Dest from '../componentes/Dest';

function Servicios() {
  const data = [
    { id: 1,
      titulo: "Habitación simple",
      precio: 150000,
      imagen: imagen1 },
    { id: 2,
      titulo: "Habitación doble",
      precio: 200000,
      imagen: imagen2 },
    { id: 3,
      titulo: "Habitación triple",
      precio: 250000,
      imagen: imagen3 }
  ];

  return (
    <>
      <h2>Servicios</h2>
      
      {/* Acá agregamos el map para que se muestren las tarjetas */}
      {data.map((d) => (
        <Dest 
          key={d.id} 
          titulo={d.titulo} 
          precio={d.precio} 
          imagen={d.imagen} 
        />
      ))}

    </>
  );
}

export default Servicios;