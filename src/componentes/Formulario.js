import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

function Formulario () {

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
          alert('Correo enviado');
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
      <label>Nombre</label>
      <input type="text" name="name" required /> 
      <label>Email</label>
      <input type="email" name="email" required />
      <label>Mensaje</label>
      <textarea name="message" required />
      <input type="submit" value="Enviar" />
    </form>
  );
};

export default Formulario;