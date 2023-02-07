import React, { Component } from "react";
import '../hoja-estilo/contacto.css';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export default class Contacto extends Component {
  render() {
    return (
      
      <CardGroup className=" " >
          <Card className= " d-flex justify-content-center mt-4 form-wrapper rounded-4">
          <Card.Body> 
          <h1>Ubicación</h1>
            <p> Cundinamarca, Bogotá,</p>
          <h1>Email:</h1>
            <p>saydayamilecaguac@gmail.com</p>
          <h1>Teléfono:</h1>
            <p>+57 3017678726</p>
          </Card.Body>
        </Card>

        <Card className= "  d-flex justify-content-center mt-4  form-wrapper rounded-4">
          <Card.Body> 
          <form action="https://formsubmit.co/saydayamilecaguac@gmail.com" method="POST">
            <label for="nombre">Nombre</label>
            <br/>
            <input type="texto" id="name" name="nombre" placeholder="Ingrese por favor su nombre" required/>
            <br/>
  
            <label for="email">Email</label>
            <br/>
            <input type="email" id="email" name="email" placeholder="Ingrese por favor su email" required/>
            <br/>
  
            <label for="comentario">Comentario</label>
            <br/>
            <textarea cols="30" row="20" id="comentario" placeholder="Agrege por favor su comentario"></textarea> 
            <br/> 
          
            <button type="submit">Enviar</button> 
          </form>
          </Card.Body>
        </Card>
      </CardGroup>
    );
  } 
}