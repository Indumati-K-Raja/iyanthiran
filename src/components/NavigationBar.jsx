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
    <Navbar expand="lg" bg="white" className="shadow-sm align-items-center" style={{ minHeight: '70px' }}>
      <Container className="d-flex align-items-center justify-content-between" style={{ gap: '2rem' }}>
        {/* Logo on the left */}
        <Navbar.Brand as={Link} to="/" className="p-0 m-0 d-flex align-items-center" style={{ height: '60px' }}>
          <img
            src="/images/logo.png"
            alt="Iyanthiran Logo"
            height="48"
            style={{ display: 'block', maxHeight: '60px', width: 'auto' }}
          />
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="main-navbar-nav" />

        {/* Collapsible nav items */}
        <Navbar.Collapse id="main-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center" style={{ gap: '1.2rem' }}>
            <Nav.Link as={Link} to="/" className={isActive('/') ? 'active' : ''}>Home</Nav.Link>
            <Nav.Link as={Link} to="/courses" className={isActive('/courses') ? 'active' : ''}>Courses</Nav.Link>
            <Nav.Link as={Link} to="/partnership" className={isActive('/partnership') ? 'active' : ''}>Partner with us</Nav.Link>
            <Nav.Link as={Link} to="/contactus" className={isActive('/contactus') ? 'active' : ''}>Contact us</Nav.Link>
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
