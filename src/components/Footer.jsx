import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#003942', color: 'white', padding: '2rem 1rem', textAlign: 'center' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <div style={{ flex: 1, textAlign: 'left' }}>
            <p>© IYANTHIRAN EDGE Private Limited</p>
          </div>

          <div style={{ flex: 1, textAlign: 'center' }}>
            <a href="#" style={{ color: 'white', margin: '0 10px' }}>
              <i className="fas fa-phone-alt"></i> +91 93639 23506
            </a>
            <a href="mailto:info@iyanthiran.com" style={{ color: 'white', margin: '0 10px' }}>
              <i className="fas fa-envelope"></i> info@iyanthiran.com
            </a>
          </div>

        <div style={{ flex: 1, textAlign: 'right' }}>
  <a
    href="https://www.facebook.com/people/Iyanthiran-Edge-Pvt-Ltd/61568117892283/?_rdr"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: 'white', margin: '0 8px' }}
  >
    <i className="fab fa-facebook-f"></i>
  </a>
  <a
    href="https://x.com/Iyanthiran_edge"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: 'white', margin: '0 8px' }}
  >
    <i className="fab fa-twitter"></i>
  </a>
  <a
    href="https://www.youtube.com/channel/UCyem1EspwJ0j9_Ep9Hg2GCg"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: 'white', margin: '0 8px' }}
  >
    <i className="fab fa-youtube"></i>
  </a>
  <a
    href="https://www.linkedin.com/company/iyanthiran/posts/?feedView=all"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: 'white', margin: '0 8px' }}
  >
    <i className="fab fa-linkedin-in"></i>
  </a>
  <a
    href="https://www.instagram.com/iyanthiran_edge/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: 'white', margin: '0 8px' }}
  >
    <i className="fab fa-instagram"></i>
  </a>
</div>

        </div>

        <hr style={{ margin: '1.5rem 0', borderColor: '#005963' }} />
         <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
          <Link to="/courses" style={{ color: '#fff', textDecoration: 'none' }}>Courses</Link>
          <Link to="/partnership" style={{ color: '#fff', textDecoration: 'none' }}>Partner with us</Link>
          <Link to="/contactus" style={{ color: '#fff', textDecoration: 'none' }}>Contact us</Link>
          <Link to="/faqs" style={{ color: '#fff', textDecoration: 'none' }}>FAQ</Link>
          <Link to="/events" style={{ color: '#fff', textDecoration: 'none' }}>Event&Gallery</Link>
          <Link to="/careerinsightsblog" style={{ color: '#fff', textDecoration: 'none' }}>Blog</Link>
          <Link to="/aboutus" style={{ color: '#fff', textDecoration: 'none' }}>About Us</Link>
          <Link to="/privacy" style={{ color: '#fff', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link to="/terms" style={{ color: '#fff', textDecoration: 'none' }}>Terms of Service</Link>
        </div>

      
      </div>
    </footer>
  );
};

export default Footer;
