import React from "react";
import "./Productos.css";

export default function Productos() {

  const form = (
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfC_3b57raEwxW6XWlt5aywU7vpankpVtgmExpI9GyWkX_HZw/viewform" target="_blank" rel="noopener noreferrer">formulario</a>
  )
  return (
    <div className='bodasSection'>
      <div className='bodas'>
        <h1>PRODUCTOS</h1>
        <p>Un calendario que te haga viajar o un cuaderno de colorear que te ayude a evadirte y desarrollar tu creatividad te esperan en esta sección. Además de que también podrás celebrar el nacimiento de ese bebé tan querido personalizando un natalicio muy adorable..</p>
        <ul style={{width: '100%', textAlign: 'justify'}}>
          <li>CALENDARIO 2025</li>
          <li>CUADERNO COLOREA(TE)</li>
          <li>
           NATALICIO Personalizamos animal, colores y datos del bebé
          </li>
        </ul>
        <div className='bodasPictures'>
          <div className='imgContainer'>
          <img className='imgBoda' src='../../CALENDARIO 2025.JPG' alt='calendario'/>
            <div className='spanContainer'>
              <span class="subtitle">
                Calendario
              </span>
            </div>
          </div>
          <div className='imgContainer'>
          <img className='imgBoda' src='../../CUADERNO DE COLOREAR...jpg' alt='cuaderno colorear 3'/>
            <div className='spanContainer'>
              <span class="subtitle">
                Cuaderno de colorear
              </span>
            </div>
          </div>
          <div className='imgContainer'>
            <img className='imgBoda' src='../../NATALICIO.jpg' alt='Natalicio1'/>
            <div className='spanContainer'>
              <span class="subtitle">
                Natalicio personalizado
              </span>
            </div>
          </div>
        </div>
        <p style={{width: '100%', textAlign: 'justify'}}>
          Rellena el siguiente {form} con tus productos favoritos y te enviaré un resumen de tu pedido con las instrucciones para confirmarlo.
        </p>
      </div>      
    </div>
  );
}