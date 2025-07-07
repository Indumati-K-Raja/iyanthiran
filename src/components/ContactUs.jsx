import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

function ContactUs() {
  const [activeForm, setActiveForm] = useState('getInTouch');
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);

  const handleFormSwitch = (form) => {
    setActiveForm(form);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero text-center" style={{ padding: '4rem 1rem', backgroundColor: '#f0f8ff' }}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#003d4d' }}
        >
          Contact Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', color: '#333' }}
        >
          Let’s Build Career Success Together. At Iyanthiran Edge, we are always ready to connect with students, job seekers, colleges, and corporates who are passionate about building strong career paths.
        </motion.p>
      </section>

      {/* Main Content */}
      <section className="contact-section" style={{ display: 'flex', gap: '2rem', maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem', flexWrap: 'wrap' }}>
        {/* Left Side - Forms */}
        <motion.div
          key={activeForm}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ flex: '1 1 500px' }}
        >
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <button
              onClick={() => handleFormSwitch('getInTouch')}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                backgroundColor: activeForm === 'getInTouch' ? '#07839a' : '#e0e0e0',
                color: activeForm === 'getInTouch' ? '#fff' : '#000',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Get in Touch
            </button>
            <button
              onClick={() => handleFormSwitch('quickContact')}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                backgroundColor: activeForm === 'quickContact' ? '#07839a' : '#e0e0e0',
                color: activeForm === 'quickContact' ? '#fff' : '#000',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Inquiry Form
            </button>
          </div>

          <div
            style={{
              backgroundColor: '#ffffff',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            {submitted && <p style={{ color: 'green', marginBottom: '1rem' }}>✅ Your message has been submitted!</p>}

            {activeForm === 'getInTouch' && (
              <form onSubmit={handleSubmit}>
                <h3 style={{ marginBottom: '1rem', color: '#0056b3' }}>Get in Touch</h3>
                <label>Full Name *</label>
                <input type="text" required style={inputStyle} placeholder="Your Name" />

                <label>Email Address *</label>
                <input type="email" required style={inputStyle} placeholder="Your Email" />

                <label>Phone Number *</label>
                <input type="tel" required style={inputStyle} placeholder="Your Phone Number" />

                <label>Organization</label>
                <input type="text" style={inputStyle} placeholder="Your Company / College" />

                <label>Message *</label>
                <textarea required rows={4} style={{ ...inputStyle, resize: 'vertical' }} placeholder="How can we help?" />

                <button type="submit" style={buttonStyle}>Submit</button>
              </form>
            )}

            {activeForm === 'quickContact' && (
              <form onSubmit={handleSubmit}>
                <h3 style={{ marginBottom: '1rem', color: '#0056b3' }}>Quick Contact</h3>
                <label>Name *</label>
                <input type="text" required style={inputStyle} placeholder="Your Name" />

                <label>Email Address *</label>
                <input type="email" required style={inputStyle} placeholder="Your Email" />

                <label>Phone Number *</label>
                <input type="tel" required style={inputStyle} placeholder="Your Phone Number" />

                <label>Inquiry Type *</label>
                <select required style={inputStyle}>
                  <option value="">Select</option>
                  <option>Courses</option>
                  <option>Internships</option>
                  <option>HR Services</option>
                  <option>College Partnership</option>
                  <option>Corporate Hiring</option>
                  <option>Other</option>
                </select>

                <label>Message *</label>
                <textarea required rows={4} style={{ ...inputStyle, resize: 'vertical' }} placeholder="Message" />

                <button type="submit" style={buttonStyle}>Submit</button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Right Side - Map */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginLeft: '5rem', marginTop: '7rem', flex: '1 1 400px', height: '100%', width: '200px' }}
        >
          <iframe
            title="Iyanthiran Location Map"
            src="https://maps.google.com/maps?q=Tamil%20Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="550"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </section>

      {/* Website & Office Hours Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ maxWidth: '500px', margin: '3rem auto', padding: '2rem', backgroundColor: '#f0f8ff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', color: '#003d4d' }}
      >
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Website & Office Hours</h3>
        <p><strong>Website:</strong> <a href="https://www.iyanthiran.com" target="_blank" rel="noopener noreferrer">www.iyanthiran.com</a></p>
        <p><strong>Office Hours:</strong><br /> Monday – Saturday: 10:00 AM to 6:00 PM<br /> Sunday: Closed</p>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ marginBottom: '2rem', margin: '2rem auto', padding: '2.1rem', textAlign: 'center', backgroundColor: '#8fe1df', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', color: '#003d4d' }}
      >
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Let's Build Your Career Path Together</h3>
        <p style={{ fontSize: '1.1rem' }}>Whether it’s your first step towards a career or your next step towards success, Iyanthiran is ready to walk with you. Contact us today and let's create success stories together!</p>
      </motion.section>
    </>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  marginBottom: '1rem',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '1rem',
};

const buttonStyle = {
  backgroundColor: '#07839a',
  color: 'white',
  padding: '0.75rem 1.5rem',
  borderRadius: '6px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1rem',
};

export default ContactUs;
