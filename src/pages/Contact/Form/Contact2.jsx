import './Contact2.scss';

import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';



const Contact2 = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_fp7x1dp',
        'template_1s5ceok',
        formRef.current,
        'FB09XIBhk61RhPy6N'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
      };
      return (
        <div className='Contact'>
           
          
           <div className='texto' id='TitlesContact'>
           <h2 id='Title2contact'>Vamos a Crear Juntos</h2>
           <h5 id='Title5contact'>
           Contactame ✌️
          </h5>
          </div>
         
        <section id="contact">
        
          <div className="container contact__container" id='contact__container'>
            
            <form id='form' ref={formRef} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Ingresa tu nombre Completo"
                name="user_name"
                required
              />
              <input
                type="text"
                placeholder="Ingresa tu correo electrónico"
                name="user_email"
                required
              />
              <textarea
                placeholder="Mensaje"
                rows="7"
                name="message"
                required
              ></textarea>
              <button type="submit" className="btn btn">
                Enviar mensaje
              </button>
              {message && <span> Mensaje enviado !</span>}
            </form>
          </div>
        </section>
        </div>
      );
    };
    
    export default Contact2;