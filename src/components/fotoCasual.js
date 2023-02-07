import React from 'react';
import Fototogra from './Fototogra';
import Carousel from 'react-bootstrap/Carousel';
import '../hoja-estilo/fotogra.css';
import Fotogra from './Fotogra';

function FotoCasual() {
  return (
    <Carousel className= "mt-5">
      <Carousel.Item>
        <Fototogra 
        foto='Amor'
        titulo='Amor'texto='' />
      </Carousel.Item>

    <Carousel.Item>
      <Fototogra 
      foto='Camilo'
      titulo='Inocencia'texto='' />
    </Carousel.Item>

    <Carousel.Item>
      <Fototogra 
      foto='enMente'  
      titulo='Pensamiento'texto='' />
    </Carousel.Item>

    <Carousel.Item>
      <Fotogra
      foto='Agua'
      titulo='Libre como agua'texto='' />
    </Carousel.Item>
  </Carousel>
  );
}

export default FotoCasual;