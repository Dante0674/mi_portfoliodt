import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Formulario() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pminqtk', 'template_3ju0nwh', form.current, {
        publicKey: 'UFZE2GVoAKLqKMSst',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('¡Correo enviado!');
          form.current.reset(); 
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Error al enviar el mensaje.');
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      
      <div>
        <label>Nombre:</label>
        <br />
        <input type="text" name="name" required />
      </div>
git add .git add .
      <div>
        <label>Email:</label>
        <br />
        <input type="email" name="email" required />
      </div>

      <div>
        <label>Mensaje:</label>
        <br />
        <textarea name="message" required rows="4" />
      </div>

      <br />
      
      <input type="submit" value="Enviar Mensaje" />
      
    </form>
  );
}

export default Formulario;