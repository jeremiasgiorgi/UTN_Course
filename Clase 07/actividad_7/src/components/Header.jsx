import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();   
    return (
        <Navbar bg="#0e141b" expand="sm">

                <a href="https://youtu.be/Eyjj8BgsBGU?si=dzpFmxnsETMucp13" target="_blank" rel="noopener noreferrer" className="navbar-brand">
                <img src="\images\me.jpg" width="36" height="36" className="d-inline-block align-top myImage" alt="" />
                <span className='SpanName'>J.GIORGI</span>
                </a>

            <Nav style={{ marginLeft: 'auto' }}>
                <LinkContainer to="/" exact="true">
                    <Nav.Link active={location.pathname === '/'}>home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                    <Nav.Link active={location.pathname === '/about'}>about</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/hobbies">
                    <Nav.Link active={location.pathname === '/hobbies'}>hobbies</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                    <Nav.Link active={location.pathname === '/contact'}>contact</Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar>
    );
}

export default Header;