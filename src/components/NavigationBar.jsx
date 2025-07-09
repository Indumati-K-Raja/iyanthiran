import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

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
            <Nav.Link as={Link} to="/" className={isActive('/') ? 'active' : ''}>Home</Nav.Link>
            <Nav.Link as={Link} to="/courses" className={isActive('/courses') ? 'active' : ''}>Courses</Nav.Link>
            <Nav.Link as={Link} to="/partnership" className={isActive('/partnership') ? 'active' : ''}>Partner with us</Nav.Link>
            <Nav.Link as={Link} to="/contactus" className={isActive('/contactus') ? 'active' : ''}>Contact us</Nav.Link>
            <Nav.Link as={Link} to="/faqs" className={isActive('/faqs') ? 'active' : ''}>FAQ</Nav.Link>
            <Nav.Link as={Link} to="/events" className={isActive('/events') ? 'active' : ''}>Events & Gallery</Nav.Link>
            <Nav.Link as={Link} to="/careerinsightsblog" className={isActive('/careerinsightsblog') ? 'active' : ''}>Blog</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" className={isActive('/aboutus') ? 'active' : ''}>About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
