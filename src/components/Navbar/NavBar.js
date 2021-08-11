import React from 'react';

//Bootstrap
import { Navbar, Nav, NavDropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

//Components
import CartWidget from "../CartWidget/CartWidget";
import NavLogo from "../NavLogo/NavLogo";
import { useCartContext } from "../CartContext/CartContext";

function NavBar(props) {
  const { cart } = useCartContext();
    return (
      <div>
          <Navbar bg="light" expand="lg">
            <Link className="Link" to="/Inicio">
            <NavLogo envio="count"/>
            </Link>
            <Navbar.Brand >Codiciados</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link className="Link" to="/Inicio">Inicio</Link>
                <Link className="Link" to="/Sabores">Sabores</Link>
                <Link className="Link" to="/About">About</Link>
                <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <Link className="Link" to="/Categorias/Simples">
                    <NavDropdown.Item href="#Simples">
                      Simples
                    </NavDropdown.Item>
                  </Link>

                  <Link className="Link" to="/Categorias/Triples" >
                    <NavDropdown.Item href="#Triples">
                      Triples
                    </NavDropdown.Item>
                  </Link>

                  <Link className="Link" to="/Categorias/Combos" >
                    <NavDropdown.Item href="#Combos">
                      Combos
                    </NavDropdown.Item>
                  </Link>
                  
                  <Link className="Link" to="/Categorias/Postres" >
                    <NavDropdown.Item href="#Postres">
                      Postres
                    </NavDropdown.Item>
                  </Link>
                </NavDropdown>
              </Nav>
              <Link className="Link" to="Cart" href="Cart">
                <CartWidget/>
              </Link>
            </Navbar.Collapse>
          </Navbar>
      </div>
    );
}

export default NavBar;

