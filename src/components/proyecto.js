import React from 'react';
import '../hoja-estilo/proyecto.css';

function Proyecto (props){
  return (
    <div className = 'contenedor-proyecto'>
        <p className= 'titulo-proyecto'> <strong>{props.titulo}</strong></p>
        <p className= 'nombre-proyecto'> {props.nombre}</p>
        <p className= 'centro-proyecto'> {props.centro}</p>
        <p className= 'texto-proyecto'>{props.objetivo}<br /><br />{props.fecha}</p>
        <img className='imagen-proyecto' 
      src={require(`../imagenes/proyectos/proyecto-${props.imagen}.jpg`)}
      alt='Foto proyecto'  />
      </div>
 
  );
}
export default Proyecto;