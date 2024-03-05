import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './TopBar.css'

const TopBar = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => scrollToSection('about')}>About Me</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('skills')}>My Skills</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('projects')}>Projects</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('blogs')}>Blogs</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('connect')}>Connect</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
