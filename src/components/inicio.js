import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import '../hoja-estilo/inicio.css';

function inicio() {

    return (
      <CardGroup>
        <Card className= "inicio-1 justify-content-center form-wrapper mt-5 mx-2 rounded-4  ">
          <Card.Body> 
            <a href="/mi-perfil">
              <Card.Img src="./foto2.1.png"/></a><br /><br />
            <Card.Title>Mi perfil</Card.Title>
          </Card.Body>
        </Card>

        <Card className= "inicio-2 justify-content-center form-wrapper mt-5 mx-2 rounded-4  ">
          <Card.Body> 
            <a href="/fotoArte">
            <Card.Img src="./Retoque.jpg" /></a><br /><br />
            <Card.Title>Fotografía</Card.Title>
          </Card.Body>
        </Card>

        <Card className= "inicio-3 justify-content-center form-wrapper mt-5 mx-2 rounded-4 ">
          <Card.Body>
          <a href="/proyectoProgramacion">
          <Card.Img src="./inteligencia.png "/></a> <br /><br />
            <Card.Title>  
              Programación
            </Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>
    );
  }

export default inicio; 