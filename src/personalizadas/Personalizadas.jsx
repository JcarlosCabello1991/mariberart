import React from "react";
import './Personalizadas.css'

export default function Personalizadas() {
  return (
    <div className='personalizadasSection'>
      <div className='personalizadas'>
        <h1>PERSONALIZADAS</h1>
        <p>Crea el regalo más especial para esa persona con una ilustración personalizada. Elige entre estos estilos de ilustración y tipos de fondo, cuéntame tu idea y encontraremos la mejor forma de hacerla realidad para ti y para los tuyos. 
          Un detalle personalizado siempre genera reacciones increíbles y ¡nada como regalar emociones y momentos que recordar a tus personas favoritas!
        </p>
        <div className="personalizadasContainer">
          <div className='personalizadasPictures'>
            <div className='imgContainer'>
              <span>Estilos de ilustración</span>
              <img className='imgpersonalizadas' src='../../ESTILOS.png' alt='estilos'/>
            </div>
            <div className='imgContainer'>
              <span>Estilos de fondo</span>
              <img className='imgpersonalizadas' src='../../FONDOS.png' alt='fondos'/>
            </div>
          </div>
        </div>
        <h3>Ejemplos</h3>
        <div className="personalizadasContainer">
          <div className='personalizadasEjemploPictures'>
            <div className='imgContainerpersonalizadasEjemplo'>
              <img className='imgpersonalizadasEjemplo' src='../../Ejemplo ESTILO REALISTA.jpg' alt='estilo realista'/>
            </div>
            <div className='imgContainerpersonalizadasEjemplo'>
              <img className='imgpersonalizadasEjemplo' src='../../Ejemplo ESTILO BÁSICO.jpg' alt='estilo basico'/>
            </div>
            <div className='imgContainerpersonalizadasEjemplo'>
              <img className='imgpersonalizadasEjemplo' src='../../Ejemplo ESTILO LINEAL.jpg' alt='estilo lineal'/>
            </div>
          </div>
        </div>   
      </div>      
    </div>
  );
}

