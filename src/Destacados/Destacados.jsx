import * as React from 'react';
import './Destacados.css';

export default function Destacados() {
  return (
    <div className='destacadosSection'>
      <div className='destacados'>
        <h1>Destacados</h1>
        <p>Vuestros productos y servicios favoritos, ¿exploras cada apartado para descubrir cuál será el tuyo?</p>
        <div className='destacadosPictures'>
          <div className='imgContainer'>
            <img className='imgDestacada' src='../../MARCASITIOS PERSONALIZADOS.jpg' alt='Marcasitios'/>
            <div className='spanContainer'><span className='destacadosSubtitle'>Marcasitios personalizados</span></div>       
          </div>
          <div className='imgContainer'>
            <img className='imgDestacada' src='../../LIVE ART.jpg' alt='Live art'/>
            <div className='spanContainer'><span className='destacadosSubtitle'>Live art</span>   </div>       
          </div>
          <div className='imgContainer'>
            <img className='imgDestacada' src='../../ENCARGOS PERSONALIZADOS.jpg' alt='Encargos personalizados'/>
            <div className='spanContainer'>
              <span className='destacadosSubtitle'>
                Encargos personalizados
              </span>
            </div>
          </div>
          <div className='imgContainer'>
            <img className='imgDestacada' src='../../INVITACIONES DE BODA_1.jpg' alt='Invitaciones de boda'/>
            <div className='spanContainer'>
              <span className='destacadosSubtitle'>
                Invitaciones de boda
              </span> 
            </div>                 
          </div>          
        </div>
      </div>      
    </div>
  )
}