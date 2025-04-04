import React from "react"
import './LiveArt.css'

export default function LiveArt(){
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
               
      </div>      
    </div>
  )
}