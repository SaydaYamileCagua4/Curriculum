import React from 'react';
import '../hoja-estilo/fotogra.css';

function Fototogra (props){
    return (
    <div className = 'contenedor-foto'>
        <img className='imagen-foto' 
        src={require(`../imagenes/fotos/foto-${props.foto}.jpg`)}
        alt='Foto'  />
        <p className= 'titulo-foto'> <strong>{props.titulo}</strong></p>
        <p className= 'texto-foto'>{props.texto}</p>
    </div>
    );
}
export default Fototogra;