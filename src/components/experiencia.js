import React from 'react';
import '../hoja-estilo/experiencia.css';

function Experiencia (props){
  return (
    <div className = 'contenedor-experiencia'>
      
      <div className='contenedor-texto-experiencia'>
        <p className= 'nombre-experiencia'> <strong>{props.nombre}</strong></p>
        <p className= 'cargo-experiencia'> {props.cargo}</p>
        <p className= 'texto-experiencia'>{props.funciones}<br></br><br></br>{props.fecha}</p>
        
      </div>
    </div>
  );
}
export default Experiencia;