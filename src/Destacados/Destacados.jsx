import * as React from 'react';
import './Destacados.css';
import { useNavigate } from 'react-router-dom';
import { menuMenu } from '../MenuContext/MenuContext';

export default function Destacados() {

  const navigate = useNavigate();
  const { setItemSelected } = menuMenu();

  const goTo = (path) => {
    switch(path) {
      case '/bodas':
        setItemSelected('Bodas');
        navigate(`${path}`);
        break;
      case '/LiveArt':
        setItemSelected('Live art');
        navigate(`${path}`);
        break;
      case '/personalizadas':
        setItemSelected('Personalizados');
        navigate(`${path}`);
        break;
    }
  }

  return (
    <div className='destacadosSection'>
      <div className='destacados'>
        <h1>DESTACADOS</h1>
        <p>Vuestros productos y servicios favoritos, ¿exploras cada apartado para descubrir cuál será el tuyo?</p>
        <div className='destacadosPictures'>
          <div className='imgContainer' onClick={() => goTo('/LiveArt')}>
            <img className='imgDestacada' src='../../LIVE ART.jpg' alt='Live art'/>
            <div className='spanContainer'><span className='destacadosSubtitle'>Live art</span>   </div>       
          </div>
          <div className='imgContainer' onClick={() => goTo('/personalizadas')}>
            <img className='imgDestacada' src='../../ENCARGOS PERSONALIZADOS.jpg' alt='Encargos personalizados'/>
            <div className='spanContainer'>
              <span className='destacadosSubtitle'>
                Encargos personalizados
              </span>
            </div>
          </div>
          <div className='imgContainer' onClick={() => goTo('/bodas')}>
            <img className='imgDestacada' src='../../INVITACIONES DE BODA_1.jpg' alt='Invitaciones de boda'/>
            <div className='spanContainer'>
              <span className='destacadosSubtitle'>
                Bodas
              </span> 
            </div>                 
          </div>          
        </div>
      </div>      
    </div>
  )
}