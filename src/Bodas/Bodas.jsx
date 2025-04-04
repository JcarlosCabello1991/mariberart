import * as React from 'react';
import './Bodas.css'

export default function Bodas() {
  return (
    <div className='bodasSection'>
      <div className='bodas'>
        <h1>Bodas</h1>
        <p>El día más especial requiere los detalles más especiales, y os ayudaré a crear la papelería de vuestros sueños para un día mágico. 
        ¿Preferís invitaciones ilustradas o más minimalistas? ¿Queréis crear un pack de papelería completo? ¿Y si regaláis a vuestros invitados marcasitios personalizados? ¿O un servicio live art para dibujarles a todos en directo? Todo lo que podríais imaginar y más para vuestro enlace.</p>
        <ul>
          <li>INVITACIÓN ILUSTRADA</li>
          <li>INVITACIÓN ESTÁNDAR</li>
          <li>
            PACK DE PAPELERÍA Incluye el diseño de: invitaciones, logo, seating plan, meseros, marcasitios estándar, etiquetas y pegatinas 
          </li>
          <li>MARCASITIOS ILUSTRADOS</li>
          <li>LIVE ART</li>
          <li>ILUSTRACIONES PERSONALIZADAS</li>
        </ul>
        <div className='bodasPictures'>
          <div className='imgContainer'>
            <img className='imgBoda' src='../../INVITACIONES DE BODA.jpg' alt='Invitaciones de boda'/>
            <div className='spanContainer'>
              <span class="subtitle">
                Invitacion ilustrada
              </span>
            </div>
          </div>
          <div className='imgContainer'>
            <img className='imgBoda' src='../../INVITACIÓN ESTÁNDAR.jpg' alt='Invitacionesestandar'/>
            <div className='spanContainer'>
              <span class="subtitle">
                Invitación estándar
              </span>
            </div>
          </div>
          <div className='imgContainer'>
            <img className='imgBoda' src='../../MARCASITIOS ILUSTRADOS.jpg' alt='Marcasitios ilustrados'/>
            <div className='spanContainer'>
              <span class="subtitle">
                Marcasitios ilustrados
              </span>
            </div>
          </div>
          <div className='imgContainer'>
          <img className='imgBoda' src='../../LIVE ART.jpg' alt='Live art'/>
            <div className='spanContainer'>
              <span class="subtitle">
                Live art
              </span>
            </div>
          </div>
          <div className='imgContainer'>
          <img className='imgBoda' src='../../ILUSTRACIÓN PERSONALIZADA3.jpg' alt='Ilustracion personalizada'/>
            <div className='spanContainer'>
              <span class="subtitle">
                Ilustracion personalizada
              </span>
            </div>
          </div>
        </div>
      </div>      
    </div>
  )
}