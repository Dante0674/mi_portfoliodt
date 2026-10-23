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

        {/* LADO DERECHO: EL MAPA DE SALTA */}
        <div style={{ flex: '1', minWidth: '300px', maxWidth: '450px' }}>
          <h3>¿Dónde estoy?</h3>
          <iframe 
            title="Mapa de Salta Capital"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.06468828717!2d-65.4819144359728!3d-24.78212683318979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3a35151b7f9%3A0x8c919432bb636195!2sSalta%2C%20Salta!5e0!3m2!1ses-419!2sar!4v1715000000000!5m2!1ses-419!2sar" 
            width="100%" 
            height="250" 
            style={{ border: 0, borderRadius: '10px' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </div>
  );
}

export default Contacto;