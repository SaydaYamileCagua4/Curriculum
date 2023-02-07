import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./App.css";
import {  CDBBtn, CDBIcon, CDBBox} from 'cdbreact';
import { Dropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MiPerfil from "./components/mi-perfil";
import "bootstrap/dist/css/bootstrap.css";
import ProyectoFoto from "./components/proyectoFoto";
import ProyectoProgramacion from "./components/proyectoProgramacion";
import Inicio from "./components/inicio";
import FotoArte from "./components/fotoArte";
import FotoNatural from "./components/fotoNatural";
import FotoModel from "./components/fotoModel";
import FotoCasual from "./components/fotoCasual";
import Contacto from "./components/contacto";


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar collapseOnSelect expand="lg" variant="light" bg="light">
          <Container>
            <Dropdown.Header></Dropdown.Header> 
              <Link to={"/"} className="nav-link">
              <link href="https://fonts.googleapis.com/css2?family=Anek+Gurmukhi:wght@200&family=Epilogue:wght@200&family=Francois+One&family=Lobster&family=Marck+Script&family=Markazi+Text&family=Mea+Culpa&family=Parisienne&family=Pinyon+Script&display=swap" rel="stylesheet"/>
                <img
                alt="Logo"
                src="/Logo_Studio_Cagua.png"
                width="200"
                height="100"
                className="d-inline-block align-top"
                />          
            </Link>
          <span>Sayda Yamile Cagua Carrillo </span>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto  mx-5">
            <Nav.Link href="/mi-perfil">Mi Perfil</Nav.Link> <span />
            
            <NavDropdown title="Proyecto" id ="navbarScrollingDropdown">
                <NavDropdown.Item href="/proyectoProgramacion">Proyectos de Programación</NavDropdown.Item>
                <NavDropdown.Item href="/proyectoFoto">Proyectos de Fotografía</NavDropdown.Item>
              </NavDropdown> <span />   

              <NavDropdown title="Fotografía" id ="navbarScrollingDropdown">
                <NavDropdown.Item href="/fotoArte">Fotografía Artistica</NavDropdown.Item>
                <NavDropdown.Item href="/fotoNatural">Fotografía Natural</NavDropdown.Item>
                <NavDropdown.Item href="/fotoModel">Fotografía Modelaje</NavDropdown.Item>
                <NavDropdown.Item href="/fotoCasual">Fotografía Casual</NavDropdown.Item>
              </NavDropdown><span />
          
            <Nav.Link href="/Contacto">Contactame</Nav.Link>
          </Nav>
        </Navbar.Collapse>
          </Container>
      </Navbar>

        <Container>
          <Row>
            <Col md={12}>
              <Switch>
                <Route  // Se dirige a cada una de las rutas y precisa cual es cada una basada en las propiedades(switch) 
                  exact
                  path="/"
                  component={(props) => <Inicio {...props} />}
                />

                <Route 
                  exact
                  path="/mi-perfil"
                  component={(props) => <MiPerfil {...props} />}
                />

                <Route 
                  exact
                  path="/proyectoFoto"
                  component={(props) => <ProyectoFoto {...props} />}
                />

                <Route 
                  exact
                  path="/proyectoProgramacion"
                  component={(props) => <ProyectoProgramacion {...props} />}
                />

                <Route  
                  exact
                  path="/fotoArte"
                  component={(props) => <FotoArte {...props} />}
                />

                <Route  
                  exact
                  path="/fotoCasual"
                  component={(props) => <FotoCasual {...props} />}
                />

                <Route  
                  exact
                  path="/fotoModel"
                  component={(props) => <FotoModel {...props} />}
                />

                <Route  
                  exact
                  path="/fotoNatural"
                  component={(props) => <FotoNatural {...props} />}
                />

                <Route 
                  exact
                  path="/contacto"
                  component={(props) => <Contacto {...props} />}
                />

              </Switch>
              <br></br><br></br>
            </Col>
          </Row>
        </Container>

  <footer className="footer bg-light">
  <CDBBox display="flex" flex="column" className="mx-auto py-4" style={{ width: '70%' }}>
  <CDBBox display="flex" justifyContent="between" className="flex-wrap">
  <CDBBox>
    <a href="/mi-perfil" className="d-flex align-items-center p-0 text-dark">
      <Link to={"/"} className="nav-link">
        <img
          alt="Logo"
          src="/Logo_Studio_Cagua.png"
          width="200"
          height="100"
          className="d-inline-block align-top"
        />        
          
      </Link>
    </a>
  </CDBBox>

  <CDBBox>
    <p display="flex">
      Contactenos
    </p>
  <CDBBox>
    <p>(+57) 3017678726 </p>
      <p>saydayamilecaguac@gmail.com</p>
    </CDBBox>
  </CDBBox>

  
    
    <CDBBox>
      <p display="flex">
        Proyectos</p>
        <CDBBox>
          <a href="/proyectoProgramacion">
            <img
              alt="Inteligencia"
              src="inteligencia.png" 
              width="50"
              height="50"
              className="bg-warning form-wrapper rounded-5"
            />
          <span>Programación </span>
          </a>
        </CDBBox>
    
    <CDBBox display="flex">
      <a href="/proyectoFoto" >
        <img
          alt="Fotografías"
          src="https://i.pinimg.com/originals/2f/1f/14/2f1f14c57c96fe3065b9ef9c0bd10ad8.jpg"
          width="50"
          height="50"
          className="bg-warning form-wrapper rounded-5"
        />
        <span>Fotografia </span>
      </a>
      </CDBBox>
    </CDBBox>

    <CDBBox>
      <p>
      Fotografia</p>
        <CDBBox>
          <ul className="list-unstyled">
            <li><a href="/fotoArte">Fotografia Artistica</a></li>
            <li><a href="/fotoModel">Fotografia Modelo</a></li>
            <li><a href="/fotoNatural">Fotografia Naturaleza</a></li>
            <li><a href="/fotoCasual">Fotografia Casual</a></li>
          </ul>
        </CDBBox>
    </CDBBox>
  </CDBBox>

  <CDBBox
    display="flex" 
    className="mx-auto">
      
    <CDBBtn flat color="dark"className="mx-3" >
      <CDBIcon fab icon="github" />
    </CDBBtn>

    <CDBBtn flat color="primary" className="mx-3">
      <CDBIcon fab icon="linkedin" />
      </CDBBtn>

    <CDBBtn flat color="success" className="mx-3">
      <CDBIcon fab icon="whatsapp" />
    </CDBBtn>
  </CDBBox>

    <small className="text-center mt-3"> Todos los derechos reservados &copy;Sayda Yamile Cagua Carrillo, 2023</small> 
    </CDBBox>

    </footer>
  </div>
</Router>  
  );
}

export default App;