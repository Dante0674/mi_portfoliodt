import React from 'react';
import Formulario from '../componentes/Formulario'; 

function Contacto() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Contacto</h1>
      <p>Podés dejarme un mensaje o visitarme en mi ubicación.</p>

      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '40px', 
        marginTop: '30px',
        alignItems: 'flex-start'
      }}>
        
        {/* LADO IZQUIERDO: EL FORMULARIO */}
        <div style={{ 
          flex: '1', 
          minWidth: '300px', 
          maxWidth: '450px',
          textAlign: 'left',
          padding: '20px',
          backgroundColor: '#f9f9f9',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
          <h3>Mandame un mensaje</h3>
          <Formulario /> 
        </div>

        {/* LADO DERECHO: EL MAPA */}
        <div style={{ flex: '1', minWidth: '300px', maxWidth: '450px' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '15px' }}>Mi Ubicación</h3>
  
          <iframe 
            title="Ubicación de Dante"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7241.893489550856!2d-65.45574776161571!3d-24.831494774833335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbarrio%2014%20de%20mayo%20manzana%20251%20B%20casa%205%20Salta!5e0!3m2!1ses-419!2sar!4v1792882146225!5m2!1ses-419!2sar" 
            width="90%" 
            height="245" 
            style={{ border: 0, borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', pointerEvents: 'auto' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
         ></iframe>
        </div>

      </div>
    </div>
  );
}

export default Contacto;