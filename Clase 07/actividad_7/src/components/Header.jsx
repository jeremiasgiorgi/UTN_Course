import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
    return (
        <Navbar bg="light" expand="none">
            <LinkContainer to="/">
                <div className='mx-2'>
                <Navbar.Brand>Perfil de Jeremias Giorgi</Navbar.Brand>
                </div>
            </LinkContainer>
            <Navbar id="basic-navbar-nav">
                <div className='mr-auto'>
                <Nav className="ml-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Inicio</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link>Acerca de</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/hobbies">
                        <Nav.Link>Hobbies</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                        <Nav.Link>Contacto</Nav.Link>
                    </LinkContainer>
                </Nav>
                </div>
            </Navbar>
        </Navbar>
    );
}

export default Header;