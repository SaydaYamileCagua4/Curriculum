import React from 'react';
import Fototogra from './Fototogra';
import Carousel from 'react-bootstrap/Carousel';
import '../hoja-estilo/fotogra.css';
import Fotogra from './Fotogra';

function FotoModel() {

  return (
    <Carousel className= "mt-5">
      <Carousel.Item>
        <Fotogra
        foto='Laura'
        titulo='El Modelaje'
        texto='La definición amplia de modelaje se toma como una disciplina
        teórica y práctica que busca el perfeccionamiento de las
        relaciones humanas y sociales'
        />
      </Carousel.Item>

  <Carousel.Item>
    <Fototogra 
    foto='Hombre'
    titulo=''
    texto='A través del desarrollo personal de las cualidades y aptitudes
    físicas y espirituales del hombre, lo cual implica su mejoramiento
    y perfección constantes.'
    />
    </Carousel.Item>

    <Carousel.Item>
      <Fotogra 
      foto='Erika'
      titulo=''
      texto='Las personas que logren este objetivo en
      cualquier plazo, se convierten así en las sociedades en modelos,
      es decir en prototipo de un símbolo o signo de superación,éxito y
      desarrollo.'
      />
    </Carousel.Item>

    <Carousel.Item>
      <Fototogra 
      foto='Erika1' 
      titulo=''texto='' />
    </Carousel.Item>
  </Carousel>
      );
  }

export default FotoModel;
