import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Experiencia from './experiencia';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../hoja-estilo/experiencia.css';



function MiPerfil() {

  const [show, setShow] = useState(false);
  const [imagen, setImagen] = useState('certificados/01.Basico_Java');
  const handleClose = () => setShow(false);
  const abrirModal = (imagen) => {
    setShow(true)
    setImagen(imagen)
  };

  return (
      <> <link href="https://fonts.googleapis.com/css2?family=Anek+Gurmukhi:wght@200&family=Epilogue:wght@200&family=Francois+One&family=Lobster&family=Marck+Script&family=Markazi+Text&family=Mea+Culpa&family=Parisienne&family=Pinyon+Script&display=swap" rel="stylesheet"/>
        <CardGroup>
        <Card className= "d-flex justify-content-center form-wrapper mt-5 mx-2 rounded-4 "> <br /> <br />
          <Card.Img variant="top" src="./Sayda1.png " className= "d-flex justify-content-center form-wrapper rounded-4"  style={{ height: "25rem", width: "12rem" }}/>
          <Card.Body>
            <Card.Title>Mi Perfil </Card.Title>
            <Experiencia
            funciones=' Persona emprendedora, responsable y colaboradora, con capacidad analítica y destreza para tomar decisiones
            con base en los conocimientos y experiencia adquirida. 
            Dichos conocimientos se basan en manejo adecuado de sistemas de cómputo;  
            manejo el paquete office,  paquete adobe, sistema prevalidador muisca Dian, 
            Tortoise, entre otras plataformas. 
            Con una sólida formación integral, y grandes fortalezas a destacar,  
            las cuales cabe resaltar el dinamismo y la organización, cumplimiento de actividades 
            asignadas, proactividad y aprovechamiento de manera eficiente y eficaz de los recursos a
            su alcance en mejoramiento de procesos logísticos y operativos.'
            />
            <p><a target="_blank" href="./Hoja_Vida_Sayda_Yamile_Cagua_Carrillo.pdf">Hoja de vida</a></p>  
          </Card.Body>
        </Card>
    
        <Card className= "d-flex justify-content-center form-wrapper mt-5 mx-2 rounded-4">
          <Card.Body >
            <Card.Title>Educación</Card.Title>
            <Experiencia
            nombre='CIDE'
            cargo='Corporación Internacional Del Desarrollo Educativo'
            funciones=' Técnica Profesional en Fotografía y Camarografía'
            fecha='Bogotá 23 de Agosto 2014.'
            />
            <Button variant="primary" onClick={ () => abrirModal('certificados/00.DiplomaFotografía')}>VER</Button>     
            <br/> <br/>
            <Card.Text>   

              <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
            <img
                alt="logo"
                width="170"
                height="80"
                src="./01.logoMisionTic.jpg"
                className="boton1 img-thumbnail  d-flex justify-content-center form-wrapper"
              /></Accordion.Header>
            
            <Accordion.Body>
            <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>DIPLOMADO</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Diplomado en Fundamentos de Programación en Python</td>
          <Button variant="primary" onClick={ () => abrirModal('certificados/00.FundamentosPhyton')}>VER</Button>     
        </tr>
      
        <tr>
        <td>Diplomado en Programación Básica en Java</td>
        <Button variant="primary" onClick={ () => abrirModal('certificados/01.Basico_Java')}>VER</Button>       
        </tr>
      
        <tr>
        <td>Diplomado en Desarrollo de Software</td>
        <Button variant="primary"onClick={ () => abrirModal('certificados/02.DesarrolloSoftware')}>VER</Button>     
        </tr>
      
        <tr>
        <td>Diplomado de Aplicaciones Web</td>
        <Button variant="primary" onClick={ () => abrirModal('certificados/02.DesarrolloWeb')}>VER</Button>     
        </tr>

        <tr>
        <td>Programa de formación general en habilidades de programación con énfasis en Desarrollo Web </td>
        <Button variant="primary" onClick={ () => abrirModal('certificados/02.GeneralDesarrolloWeb')}>VER</Button>     
        </tr>
      </tbody>
    </Table>
  </Accordion.Body>
  </Accordion.Item>
  
  <Accordion.Item eventKey="1">
    <Accordion.Header>
    <img
                alt="logo"
                width="180"
                height="80"
                src="./01.SenaSofia.jpg"
                className="boton1 img-thumbnail  d-flex justify-content-center form-wrapper"
              /></Accordion.Header>
      <Accordion.Body>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>CURSO</th>
          <th></th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <td>Seminario Retoque Fotografico Avanzado</td>
          <Button variant="primary" onClick={ () => abrirModal('certificados/RetoqueFotografico')}>VER</Button>     
        </tr>
        
        <tr>
        <td>Seminario Ilustración Avanzado</td>
        <Button variant="primary" onClick={ () => abrirModal('certificados/Ilustracion')}>VER</Button>     
        </tr>
        
        <tr>
        <td>Contac Center</td>
        <Button variant="primary" onClick={ () => abrirModal('certificados/ContacCenter')}>VER</Button>     
        </tr>
        
        <tr>
        <td>Corel Draw 5</td>
        <Button variant="primary" onClick={ () => abrirModal('certificados/02.SenaCorelDraw5')}>VER</Button>     
        </tr>

        <tr>
        <td>Metodologia Programacion Sistemas Informaticos</td>
        <Button variant="primary" onClick={ () => abrirModal('certificados/02.SenaMetodologiaProgramacion')}>VER</Button>     
        </tr>
        
        <tr>
        <td>Diploma Habitos Saludables </td>
        <Button variant="primary" onClick={ () => abrirModal('certificados/02.SenaHabitos')}>VER</Button>     
        </tr>

        <tr>
        <td> Diploma Fundamentos Diseño Gráfico</td>
        <Button variant="primary" onClick={ () => abrirModal('certificados/02.SenaDiseñoGrafico')}>VER</Button>       
        </tr>

      </tbody>
    </Table>
  </Accordion.Body>
</Accordion.Item>

<Accordion.Item eventKey="2">
  <Accordion.Header>
    <img
                alt="logo"
                width="80"
                src="./01.Cide.jpg"
                className="boton1 img-thumbnail  d-flex justify-content-center form-wrapper"
              /></Accordion.Header>
            <Accordion.Body>
            <Table striped bordered hover size="sm">
            <thead>
        <tr>
          <th>CURSO</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>Seminario Consolidation of English Knowledge</td>
          <Button variant="primary" onClick={ () => abrirModal('certificados/Ingles')}>VER</Button>       
        </tr>
      </tbody>
    </Table>
  </Accordion.Body>
  </Accordion.Item>

<Accordion.Item eventKey="3">
  <Accordion.Header>
    <img
                alt="logo"
                width="100"
                height="80"
                src="./logoUniversidadRosario.png"
                className="boton1 img-thumbnail  d-flex justify-content-center form-wrapper"
              /></Accordion.Header>
            <Accordion.Body>
            <Table striped bordered hover size="sm">
            <thead>
        <tr>
          <th>CURSO</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>El Ser y la Cultura Ética Como Bases del Éxito</td>
          <Button variant="primary" onClick={ () => abrirModal('certificados/CulturaSer')}>VER</Button>       
        </tr>
      </tbody>
    </Table>
  </Accordion.Body>
  </Accordion.Item>


  <Accordion.Item eventKey="4">
  <Accordion.Header>
            <img
                alt="logo"
                width="130"
                height="80"
                src="./01.Atento.jpg"
                className="boton1 img-thumbnail  d-flex justify-content-center form-wrapper"
              />
        </Accordion.Header>
            <Accordion.Body>
            <Table striped bordered hover size="sm">
            <thead>
        <tr>
          <th>CURSO</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>Formación de Experiencia</td>
          <Button variant="primary" onClick={ () => abrirModal('certificados/Experiencia')}>VER</Button>       
        </tr>
      </tbody>
    </Table>
  </Accordion.Body>
  </Accordion.Item>

              </Accordion>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className= "d-flex justify-content-center form-wrapper mt-5 mx-2 rounded-4">
          <Card.Body>
            <Card.Title>Mi Experiencia</Card.Title>
            <Experiencia
            nombre='COMDATA'
            cargo='Asesor call center'
            funciones='Funciones : Atencion al cliente Campaña Etb hogares inbound manejo tecnología ; 
            Regional trámites y Fibra área de trámites y reclamos, 
            Retención en primer nivel, venta de producto, verificación y ajuste de factura.'
            fecha='Abril 2021-Actualmente'
            />
            <Button variant="primary" onClick={ () => abrirModal('certificados/Comdata')}>VER</Button>  
            <br></br><br></br>
        
        <Accordion>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <img
                alt="logo"
                width="130"
                height="80"
                src="./01.Atento.jpg"
                className="boton1 img-thumbnail  d-flex justify-content-center form-wrapper"
              />
        </Accordion.Header>
            <Accordion.Body>
            <Experiencia
            nombre='ATENTO COLOMBIA'
            cargo='Asesor call center'
            funciones='Funciones : Atencion al cliente Campaña Etb hogares inbound manejo   tecnología ; 
            Regional trámites y Fibra área de trámites y reclamos, 
            Retención en primer nivel, venta de producto, verificación y ajuste de factura año y medio en área
            de ajustes y posterior 4 meses en área de backoffice verificación y solución de reclamaciones área 
            de lecturabilidad y en área de torres verificación de solución de procesos y escalamientos.'
            fecha='Agosto 2017 – Abril 2021.'
            />
          <Button variant="primary" onClick={ () => abrirModal('certificados/Atento')}>VER</Button>       
      </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="6">
          <Accordion.Header>
            <img
                alt="logo"
                width="130"
                height="80"
                src="./00.logoStefanini.png"
                className="boton1 img-thumbnail  d-flex justify-content-center form-wrapper"
              />
        </Accordion.Header>
        <Accordion.Body>
            <Experiencia
            nombre='STEFANINI'
            cargo='Documentador Técnico Funcional'
            funciones='Funciones: Organizar y garantizar el almacenamiento de documentación, 
            elaboración de: Plantillas, actas, bitácora, evidencias de pruebas funcionales, 
            casos de pruebas, manuales de usuario, manejo de la estructura de documental relacionada
            a proyecto iMTegra, RUI, Claro Información Sistemas'
            fecha='Agosto 2017 – Abril 2021.'
            />
          <Button variant="primary" onClick={() => abrirModal('certificados/stefanini')} >VER</Button>
      </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="7">
          <Accordion.Header>
            <img
                alt="logo"
                width="130"
                height="80"
                src="./00.logofundacionPulso.jpg"
                className="boton1 img-thumbnail  d-flex justify-content-center form-wrapper"
              />
        </Accordion.Header>
            <Accordion.Body>
            <Experiencia
            nombre='FUNDACION PULSO'
            cargo='Fotografía y asistente de diseño grafico'
            funciones='Funcones: Imagen digital, elaboración de piezas publicitarias; avisos, pendones, tarjetas
            de presentacion, pagina web, fotografía de eventos y material ecológico para la fundación'
            fecha='Agosto 2017 – Abril 2021.'
            />
          <Button variant="primary" onClick={ () => abrirModal('certificados/fundacionPulso')}>VER</Button>
      </Accordion.Body>
  </Accordion.Item>



        </Accordion>
      </Card.Body>
    </Card>
  </CardGroup>
      
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <img src={require(`../imagenes/${imagen}.jpg`)} 
          alt ={imagen}
          style={{height:'100%',width:'100%'}}
          /> 
        </Modal.Body> 
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </> 
  );
}
  export default MiPerfil;