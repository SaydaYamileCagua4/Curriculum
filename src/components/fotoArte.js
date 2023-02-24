import React from 'react';
import Fototogra from './Fototogra';
import Carousel from 'react-bootstrap/Carousel';
import '../hoja-estilo/fotogra.css';
import Fotogra from './Fotogra';

function FotoArte() {
  return (
    <Carousel>
      <Carousel.Item>
        <Fototogra 
        foto='Araña'
        titulo='Araña'
        texto='El hombre opta la personificación
        de dicho animal. Sin mencionar en las civilizaciones egipcias donde la mayor parte
        de Dioses eran representados hombre-animal..'
        />
      </Carousel.Item>

    <Carousel.Item>
      <Fototogra 
      foto='pezBailarina'
      titulo='Pez Bailarina'
      texto='Al desarrollar la técnica de Hombre-animal utilizó una serie de fotografías sobre montadas
      de modelos desnudos, al principio utilice por intervalos un haz de luz con filtros de colores
      con fotomontaje; teniendo en cuenta la figura a realizar. Luego para texturizarlo de tal
      manera poder darle la identificación del animal, decidí sobreponer texturas en photoshop.'
      />
    </Carousel.Item>

    <Carousel.Item>
      <Fototogra 
      foto='pezReina'  
      titulo='Pez Reina'
      texto='Utilice como base al fotógrafo Brad Wilson por sus bellas imágenes a animales en estudio y
      al ver el resultado tome diferentes imágenes y cree texturas para montarlas sobre ellas, de
      tal manera que el resultado fuera optimo. Por ello, es indispensable los bocetos, estudiar
      la estructura previa del animal, y la formación del cuerpo, la dirección en el modelo y las
      debidas posturas que éste opta, para lograr la imagen deseada tomando foto a foto cada
      movimiento.'
      />
    </Carousel.Item>
    
    <Carousel.Item>
      <Fotogra
      foto='Colibri'
      titulo='Colibri'
      texto='El proyecto muestra repetidamente una acción humana convirtiéndola en otro ser vivo
      como parte de la naturaleza.
      “El humano se identifica con el animal”'
      />
    </Carousel.Item>
  </Carousel>
  );
}

export default FotoArte;