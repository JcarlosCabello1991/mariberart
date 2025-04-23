import React, { useState } from "react";
import "./Contacto.css";

export default function Contacto() { 

  const email = 'mariberart7@gmail.com';

  const userName = 'mariberart';

  const link = (<a href={`mailto:${email}`} style={{ color: 'blue', textDecoration: 'underline' }}>
                {email}
              </a>);

  const instagram = (
        <a
          href={`https://www.instagram.com/${userName}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'blue', textDecoration: 'underline' }}
        >
          @{userName}
        </a>);

  return (  
    <div className="contactoSection">
      <div className="contacto">
        <h1>CONTACTO</h1>
        <p>
          Si tienes alguna idea diferente a las que has encontrado por aquí, rellena sin compromiso el siguiente formulario y te contactaré sin falta en las próximas horas. 
          También puedes escribirme por correo a {link}, y estar al día de todas las novedades a través de mi Instagram {instagram}.
        </p>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfG8njkmg7aCFhTkjKTe5Vz8RYiPuVLgDbbtBGo2pq_f08Rlw/viewform?embedded=true" width="100%" height="1263" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
      </div>
      </div>
  );
}