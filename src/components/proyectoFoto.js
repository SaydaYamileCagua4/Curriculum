import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import '../hoja-estilo/proyecto.css';
import Proyecto from './proyecto';

function ProyectoFoto() {


  return (
      <> 
      <CardGroup>
        <Card className= "d-flex justify-content-center form-wrapper mt-5 mx-3 rounded-4">
          <Card.Body>
            <Proyecto 
              titulo='Parasomnia'
              nombre='Proyecto audiovisual Teaser'
              centro='Presentado a SENA'
              objetivo='Dossier informe de recopilacion audiovisual, guion tecnico lenguaje audiovisual,
              planimetria, plan de produccio y presupuesto.'
              fecha='Fecha 03 Diciembre 2020'
              imagen='parasomnia'/>
              <br />
        <a href = 'https://www.calameo.com/books/00580503732c350c97fe0'>Parasomnia </a>
            <Button
                target="_blank"
                href="https://vimeo.com/485295259"
                variant="primary"
                className="mx-3"
                >
                Ver Video
            </Button>
            </Card.Body>
        </Card>
    
        <Card className= "d-flex  form-wrapper mt-5 mx-3 rounded-4">
          <Card.Body >
          <Proyecto 
          titulo='Pequeños Cineastas'
          nombre='Programa Infantil'
          centro='Presentado a SENA'
          objetivo='Programa infantil, Prosupuesto de programa, plan de produccion, plan de rodaje'
          fecha='Fecha: 04 Junio 2020'
          imagen='cineastas'/>
        <br />
        <a href = ' https://indd.adobe.com/view/fec310a2-3065-4f44-9456-c71e8a5cac6d'>Libro de produccion</a>
        <Button
            target="_blank"
            href="https://www.youtube.com/watch?v=FYiqFVMND2Q"
            variant="primary"
            className="mx-3"
                >
                Ver Video
                </Button>
              
          </Card.Body>
        </Card>

        <Card className= "d-flex justify-content-center form-wrapper mt-5 mx-3 rounded-4">
          <Card.Body >
          <Proyecto 
          titulo='Otros Proyectos'
          nombre='Studio Cagua'
          centro='Presentado CIDE'
          objetivo='Dar a comocer mi trabajo fotografico y audiovisual'
          fecha='Fecha: 05 Junio 2022'
          imagen='naturaleza'/>
        <br /> <span />
          <Button
            target="_blank"
            href="https://youtu.be/oucInERrO-Q"
            variant="primary"
            className="mx-3">
                Portafolio
                </Button> <span /><br />
                <Button
            target="_blank"
            href="https://youtu.be/7neAePbHU5s"
            variant="primary"
            className="mx-3">
                El Asecho
                </Button><span />
                <Button
            target="_blank"
            href="https://youtu.be/QIDUhfMdNjM"
            variant="primary"
            className="mx-3">
                Etica Profesional
                </Button> <span />  
                <Button
            target="_blank"
            href="https://youtu.be/NuyjgagHasU"
            variant="primary"
            className="mx-3">
                Psicopata
                </Button> 
          </Card.Body>
        </Card>

      </CardGroup>
    </> 
  );
}
  export default ProyectoFoto;