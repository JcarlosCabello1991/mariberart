import React from "react";
import "./Productos.css";

export default function Productos() {
  return (
    <div className='bodasSection'>
      <div className='bodas'>
        <h1>PRODUCTOS</h1>
        <p>Un calendario que te haga viajar o un cuaderno de colorear que te ayude a evadirte y desarrollar tu creatividad te esperan en esta sección. Además de que también podrás celebrar el nacimiento de ese bebé tan querido personalizando un natalicio muy adorable..</p>
        <ul>
          <li>CALENDARIO 2025</li>
          <li>CUADERNO COLOREA(TE)</li>
          <li>
           NATALICIO Personalizamos animal, colores y datos del bebé
          </li>
        </ul>
        <div className='bodasPictures'>
          <div className='imgContainer'>
            <img className='imgBoda' src='../../NATALICIO.jpg' alt='Natalicio1'/>
            <div className='spanContainer'>
              <span class="subtitle">
                Natalicio personalizado
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
            <img className='imgBoda' src='../../CUADERNO DE COLOREAR..jpg' alt='cuaderno de colorear 1'/>
            <div className='spanContainer'>
              <span class="subtitle">
               Cuaderno de colorear 2
              </span>
            </div>
          </div>
          <div className='imgContainer'>
          <img className='imgBoda' src='../../NATALICIO - personaliza animal bebé, colores y datos de tu bebé.jpg' alt='Natalicio personalizado'/>
            <div className='spanContainer'>
              <span class="subtitle">
                Natalicio personalizado 2
              </span>
            </div>
          </div>
          <div className='imgContainer'>
          <img className='imgBoda' src='../../CALENDARIO 2025.JPG' alt='calendario'/>
            <div className='spanContainer'>
              <span class="subtitle">
                Calendario
              </span>
            </div>
          </div>
          <div className='imgContainer'>
          <img className='imgBoda' src='../../CUADERNO DE COLOREAR.JPG' alt='cuaderno de colorear'/>
            <div className='spanContainer'>
              <span class="subtitle">
                Cuaderno colorea(t)
              </span>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
}