import React from 'react';
import Fototogra from './Fototogra';
import Carousel from 'react-bootstrap/Carousel';
import '../hoja-estilo/fotogra.css';
import Fotogra from './Fotogra';

function FotoNatural() {

  return (
    <Carousel>
      <Carousel.Item>
        <Fototogra 
        foto='Cocodrilo'
        titulo='Cocodrilo'
        texto='La fotografía de naturaleza es un género fotográfico que consiste
        en representar visualmente con una fotografía elementos naturales'
        />  
      </Carousel.Item>

    <Carousel.Item>
      <Fototogra 
      foto='rosa'
      titulo='Rosa'
      texto='Paisajes, fauna, flora, elementos inanimados como una roca o una
      montaña.'
      />
    </Carousel.Item>

    <Carousel.Item>
      <Fototogra 
      foto='flor1'  
      titulo='Orquidea'
      texto='La finalidad de la fotografía de naturaleza es capturar la parte
      estética del entorno actualmente es una de las disciplinas más
      practicadas dentro de la fotografía, debido a que engloba muchos
      subtipos.'
      />
    </Carousel.Item>

    <Carousel.Item>
      <Fotogra
      foto='FlorMacro'
      titulo=''texto='' />
    </Carousel.Item>
  </Carousel>
      
      );
    }

    export default FotoNatural;
