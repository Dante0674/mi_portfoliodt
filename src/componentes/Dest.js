import React from 'react';

function Dest({titulo, precio, imagen}) {
  return (
    <>
      <h2> {titulo} </h2>
      <p> {precio} </p>
      <img src={imagen} />
    </>
  );
}

export default Dest;