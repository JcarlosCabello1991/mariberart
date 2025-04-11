import React from "react";
import "./SobreMi.css";

export default function SobreMi() {

  return(
    <div className="sobreMi">
      <h1>SOBRE MI</h1>
      <div className="sobreMiContainer">
        <img className="maribert" alt="maribert" src="../../maribert.PNG"/>
        <p className="description">
          ¡Hola, soy Mariber!<br></br>
          Ilustradora y CEO de MariberArt. <br></br>
          De Madrid, con experiencia en el sector artístico desde el año 2019 y estudios previos en Bellas Artes. Me apasiona crear recuerdos únicos basados en las emociones de las personas a las que retrato.<br></br>
          Mil gracias por haber llegado hasta aquí, estaré encantada de ayudarte a crear esa idea tan bonita que te ronda por la cabeza
          ¡Te aseguro que quedará en las mejores manos!
        </p>
      </div>
    </div>
  );
}