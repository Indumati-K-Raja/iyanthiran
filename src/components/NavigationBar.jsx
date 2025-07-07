import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar expand="lg" bg="white" className="shadow-sm">
      <Container>
        {/* Brand */}
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
          Iyanthiran
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="main-navbar-nav" />

        {/* Collapsible nav items */}
        <Navbar.Collapse id="main-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
            <Nav.Link as={Link} to="/partnership">Partner with us</Nav.Link>
            <Nav.Link as={Link} to="/contactus">Contact us</Nav.Link>
            <Nav.Link as={Link} to="/faqs">FAQ</Nav.Link>
             <Nav.Link as={Link} to="/events">Events & Gallery</Nav.Link>
            <Nav.Link as={Link} to="/careerinsightsblog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
