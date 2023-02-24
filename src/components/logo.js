import React from 'react';
import '../hoja-estilo/logo.css';

function Logo (props){
    return (
    <div className= 'cont-logo'>
        <img className='imagen-logo' 
        src={require(`../imagenes/Logo_Studio_Cagua.png`)}
        alt='Imagotipo Studio Cagua'  />
    </div>
    );
}
export default Logo;