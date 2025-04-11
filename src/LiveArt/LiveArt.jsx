import React from "react"
import './LiveArt.css'

export default function LiveArt(){
  const email = 'mariberart7@gmail';
  const link = (<a href={`mailto:${email}`} style={{ color: 'blue', textDecoration: 'underline' }}>
    correo
  </a>);
  return (
    <div className='liveArtSection'>
      <div className='liveArt'>
        <h1>LIVE ART</h1>
        <p>El servicio más de moda para todo evento que se precie, ya sea boda, comunión, cumpleaños, aniversario… Cualquier excusa es buena para regalar a tus invitados esta experiencia de ilustraciones en directo de la que se llevarán un recuerdo único.</p>
        <div className="liveArtContainer">
          <div className='liveArtPictures'>
            <div className='imgContainer'>
              <img className='imgliveArt' src='../../LIVE ART.jpg' alt='Liveart'/>
            </div>
            <div className='imgContainer'>
              <img className='imgliveArt' src='../../liveart3.jpg' alt='ejemplo 1'/>
            </div>
          </div>
          <div className="proccessContainer">
            <img className='imgliveArtProccess' src='../../processLiveArt.jpg' alt='proceso'/>
          </div> 
        </div>
        <p style={{width: '100%', textAlign: 'justify'}}>
          Si quieres contar con este servicio tan especial en tu evento, envíame un {link} especificando:
        </p>
        <ul style={{width: '100%', textAlign: 'justify'}}>
          <li>Nombre y apellidos</li>
          <li>Fecha del evento</li>
          <li>Lugar del evento</li>
          <li>Número aproximado de invitados</li>
        </ul>
        <p style={{width: '100%', textAlign: 'justify'}}>
          ¡Te enviaré toda la información que necesitas!
        </p>
      </div>      
    </div>
  )
}