import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm" style={{ padding: '0.5rem 0' }}>
      <div className="container d-flex align-items-center" style={{ gap: '2.5rem' }}>
        {/* Logo on the left */}
        <a className="navbar-brand p-0 m-0 d-flex align-items-center" href="/">
          <img src="/images/logo.png" alt="Logo" style={{ height: '44px', width: 'auto', display: 'block' }} />
        </a>

        {/* Hamburger icon (mobile only) */}
        <button
          className="navbar-toggler ms-auto d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links (horizontal, right of logo) */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-lg-4 mb-2 mb-lg-0 d-flex align-items-center" style={{ gap: '2.2rem' }}>
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
             <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Courses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog & Insights</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Partner With Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
