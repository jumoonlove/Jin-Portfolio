import React from 'react';
import { Link } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Jinsung Park</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="about-section" smooth={true} duration={500} style={{ cursor: 'pointer' }}>About me</Nav.Link>
            <Nav.Link as={Link} to="skills-section" smooth={true} duration={500} style={{ cursor: 'pointer' }}>Skills</Nav.Link>
            <Nav.Link as={Link} to="projects-section" smooth={true} duration={500} style={{ cursor: 'pointer' }}>Projects</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.linkedin.com/in/jinsung-park-1106a0275/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Nav.Link>
            <Nav.Link eventKey={2} href="https://github.com/jumoonlove" target="_blank" rel="noopener noreferrer">
              GitHub
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
