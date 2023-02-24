import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import '../hoja-estilo/proyecto.css';
import Proyecto from './proyecto';

function ProyectoProgramacion() {

  return (
      <> 
      <CardGroup>
        <Card className= "d-flex mt-5 mx-3 rounded-4">
          <Card.Body>
            <Proyecto 
              titulo='La Plaza'
              nombre='Desarrollo de aplicación Web Proyecto Ciclo 4 (front end y Back end'
              centro='Presentado a Misión Tic 2022 UTP'
              objetivo='Objetivo: Crear un software como apoyo a pequeños productores, 
              con el fin de establecer los precios unitarios de sus productos agrícolas, 
              mejorar su margen de venta y rentabilidad.'
              fecha='28 de Noviembre 2022'
              imagen='laPlaza'/>
              <br></br>
        <a target='_blank'rel="noreferrer" href = 'https://github.com/La-plaza'>GitHub</a>
            <Button
                target='_blank'rel="noreferrer"
                href="https://youtu.be/prNclF8s5nU"
                variant="primary"
                className="mx-3"
                >
                Ver Video
            </Button>
            <Button
            target='_blank'rel="noreferrer"
            href="https://www.youtube.com/watch?v=-MKRl3y2EAQ"
            variant="primary"
            className="mx-3"
                >
                Ver Video
                </Button>
          </Card.Body>
        </Card>
    
        <Card className= "d-flex mt-5 mx-4 rounded-4">
          <Card.Body >
          <Proyecto 
          titulo='Proyecto agro MisionTic'
          nombre='Desarrollo de Software Web Proyecto Ciclo 3 (front end y Back end)'
          centro='Presentado a Misión Tic 2022 UTP'
          objetivo='Objetivo: Crear un software como apoyo a pequeños productores, 
          con el fin de establecer los precios unitarios de sus productos agrícolas, 
          mejorar su margen de venta y rentabilidad.'
          fecha='Fecha: 4 de octubre del 2022'
          imagen='laPlaza1'/>
        <br></br>
        <a target='_blank'rel="noreferrer" href = 'https://github.com/La-plaza'>GitHub</a>
        <Button
            target='_blank'rel="noreferrer"
            href="https://www.youtube.com/watch?v=kVhqYkvgP2s"
            variant="primary"
            className="mx-3"
                >
                Ver Video
                </Button>
              
          </Card.Body>
        </Card>
  </CardGroup>
    </> 
  );
}
  export default ProyectoProgramacion;