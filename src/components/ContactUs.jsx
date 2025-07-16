import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUserShield, FaRegSmile, FaRegClock, FaRegEdit, FaExchangeAlt, FaChalkboardTeacher, FaUniversity, FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpenText, FaCircle } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';

// Add Font Awesome CDN for icons
const fontAwesomeLink = document.createElement('link');
fontAwesomeLink.rel = 'stylesheet';
fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css';
document.head.appendChild(fontAwesomeLink);

// Add Eyesome Script or similar font from Google Fonts
if (typeof window !== 'undefined' && !document.getElementById('eyesome-font')) {
  const font = document.createElement('link');
  font.id = 'eyesome-font';
  font.rel = 'stylesheet';
  font.href = 'https://fonts.googleapis.com/css2?family=Pacifico&display=swap'; // Eyesome Script is not on Google Fonts, Pacifico is a similar script font
  document.head.appendChild(font);
}

// Add this style block at the top of the file, after imports
const contactFormWiderStyle = `
  .advanced-input input,
  .advanced-input select,
  .advanced-input textarea {
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    font-size: 1.08rem;
    padding-left: 2.2rem;
    padding-right: 1rem;
    padding-top: 1.1rem;
    padding-bottom: 1.1rem;
    border-radius: 10px;
    border: 1px solid #e0e7ef;
    background: #fff;
    transition: box-shadow 0.2s, border-color 0.2s;
    margin-bottom: 0.2rem;
  }
  .advanced-input input:focus,
  .advanced-input select:focus,
  .advanced-input textarea:focus {
    border-color: #22c7b6;
    box-shadow: 0 0 0 2px #22c7b633;
    outline: none;
  }
`;
if (typeof window !== 'undefined' && !document.getElementById('contact-form-wider-style')) {
  const style = document.createElement('style');
  style.id = 'contact-form-wider-style';
  style.innerHTML = contactFormWiderStyle;
  document.head.appendChild(style);
}

function ContactUs() {
  const [activeForm, setActiveForm] = useState('getInTouch');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showGetStartedOptions, setShowGetStartedOptions] = useState(false);
  const sectionRef = useRef(null);

  const handleFormSwitch = (form) => {
    setActiveForm(form);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    }, 1500);
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

  // Advanced input with floating label and icon
  const AdvancedInput = ({ label, type, required, icon, ...props }) => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');
    return (
      <div className={`advanced-input ${focused || value ? 'focused' : ''}`}> 
        <i className={`fa-solid fa-${icon} input-icon`}></i>
        <input
          type={type}
          required={required}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={e => setValue(e.target.value)}
          {...props}
        />
        <label>{label}{required && ' *'}</label>
      </div>
    );
  };

  // Advanced select with floating label and icon
  const AdvancedSelect = ({ label, required, icon, children, ...props }) => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');
    return (
      <div className={`advanced-input ${focused || value ? 'focused' : ''}`}> 
        <i className={`fa-solid fa-${icon} input-icon`}></i>
        <select
          required={required}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={e => setValue(e.target.value)}
          {...props}
        >
          {children}
        </select>
        <label>{label}{required && ' *'}</label>
      </div>
    );
  };

  // Advanced textarea with floating label and icon
  const AdvancedTextarea = ({ label, required, icon, ...props }) => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');
    return (
      <div className={`advanced-input ${focused || value ? 'focused' : ''}`}> 
        <i className={`fa-solid fa-${icon} input-icon`}></i>
        <textarea
          required={required}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={e => setValue(e.target.value)}
          rows={4}
          {...props}
        />
        <label>{label}{required && ' *'}</label>
      </div>
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero text-center" style={{ padding: '4rem 1rem 2rem 1rem', backgroundColor: '#f0f8ff', marginBottom: '0.5rem' }}>
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
          style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 0.5rem auto', color: '#333' }}
        >
          Let’s Build Career Success Together. At Iyanthiran Edge, we are always ready to connect with students, job seekers, colleges, and corporates who are passionate about building strong career paths.
        </motion.p>
      </section>

      {/* Contact Us Header Section */}
      {/* Remove the Contact Us Header Section and contact cards row above the form */}

      {/* Themed Background Section */}
      <div style={{ padding: '0 0 1.5rem 0', background: '#fefcff' }}>
      {/* Main Content */}
        <section className="contact-section-advanced" style={{
          display: 'flex',
          flexDirection: 'row',
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '1.618rem 0',
          alignItems: 'stretch',
          justifyContent: 'center',
          background: 'none',
          borderRadius: '18px',
          boxShadow: 'none',
          gap: 0,
          flexWrap: 'wrap',
        }}>
          {/* Get in Touch: [Contact Info Card | Form] */}
          {activeForm === 'getInTouch' && (
            <>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  flex: '0 0 320px',
                  minWidth: '260px',
                  maxWidth: '340px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: '#fff',
                  borderTopLeftRadius: '24px',
                  borderBottomLeftRadius: '24px',
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  padding: '2.5rem 2rem',
                  fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
                  boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)',
                  gap: '2rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Background Pattern */}
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                  opacity: 0.3,
                  zIndex: 1,
                }} />
                
                {/* Content */}
                <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
                  {/* Header */}
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ 
                      fontSize: '1.8rem', 
                      fontWeight: 800, 
                      marginBottom: '0.8rem', 
                      letterSpacing: '-0.5px',
                      background: 'linear-gradient(45deg, #fff, #f0f8ff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>
                      Let's get in touch
                </div>
                    <div style={{ 
                      fontSize: '1.05rem', 
                      color: 'rgba(255,255,255,0.9)', 
                      fontWeight: 400,
                      lineHeight: '1.6',
                      opacity: 0.95,
                    }}>
                      We're open for any suggestion or just to have a chat about your career goals
                </div>
                </div>

                  {/* Contact Items */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {/* Location */}
                    <motion.div 
                      whileHover={{ scale: 1.02, x: 5 }}
                      transition={{ duration: 0.2 }}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '1.2rem',
                        padding: '1rem',
                        borderRadius: '16px',
                        background: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        border: '1px solid rgba(255,255,255,0.3)',
                      }}>
                        <i className="fa-solid fa-location-dot" style={{ fontSize: '1.2rem', color: '#fff' }} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)', marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Our Location
                        </div>
                        <div style={{ fontSize: '1rem', fontWeight: 500, lineHeight: '1.5' }}>
                          2nd Floor, 4/1, Rajapalayam Main Road,<br />
                          Rajapalayam, Tamil Nadu 626117
                        </div>
                      </div>
                    </motion.div>

                    {/* Phone */}
                    <motion.div 
                      whileHover={{ scale: 1.02, x: 5 }}
                      transition={{ duration: 0.2 }}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '1.2rem',
                        padding: '1rem',
                        borderRadius: '16px',
                        background: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        border: '1px solid rgba(255,255,255,0.3)',
                      }}>
                        <i className="fa-solid fa-phone" style={{ fontSize: '1.2rem', color: '#fff' }} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)', marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Call Us
                        </div>
                        <a 
                          href="tel:+919363923506" 
                          style={{ 
                            color: '#fff', 
                            fontSize: '1rem', 
                            fontWeight: 600,
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={(e) => e.target.style.color = '#f0f8ff'}
                          onMouseLeave={(e) => e.target.style.color = '#fff'}
                        >
                          +91 93639 23506
                        </a>
                      </div>
                    </motion.div>

                    {/* Email */}
                    <motion.div 
                      whileHover={{ scale: 1.02, x: 5 }}
                      transition={{ duration: 0.2 }}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '1.2rem',
                        padding: '1rem',
                        borderRadius: '16px',
                        background: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        border: '1px solid rgba(255,255,255,0.3)',
                      }}>
                        <i className="fa-solid fa-envelope" style={{ fontSize: '1.2rem', color: '#fff' }} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)', marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Email Us
                        </div>
                        <a 
                          href="mailto:info@iyanthiran.com" 
                          style={{ 
                            color: '#fff', 
                            fontSize: '1rem', 
                            fontWeight: 600,
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={(e) => e.target.style.color = '#f0f8ff'}
                          onMouseLeave={(e) => e.target.style.color = '#fff'}
                        >
                          info@iyanthiran.com
                        </a>
                      </div>
                    </motion.div>

                    {/* Hours */}
                    <motion.div 
                      whileHover={{ scale: 1.02, x: 5 }}
                      transition={{ duration: 0.2 }}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '1.2rem',
                        padding: '1rem',
                        borderRadius: '16px',
                        background: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        border: '1px solid rgba(255,255,255,0.3)',
                      }}>
                        <i className="fa-solid fa-clock" style={{ fontSize: '1.2rem', color: '#fff' }} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)', marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Working Hours
                        </div>
                        <div style={{ fontSize: '1rem', fontWeight: 500, lineHeight: '1.5' }}>
                          Mon–Sat: 10:00 AM to 6:00 PM<br />
                          <span style={{ opacity: 0.8 }}>Sunday: Closed</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
        <motion.div
          key={activeForm}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
                style={{
                  flex: '1 1 500px',
                  minWidth: '320px',
                  maxWidth: '500px',
                  background: '#fff',
                  borderTopRightRadius: '24px',
                  borderBottomRightRadius: '24px',
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                  zIndex: 2,
                  padding: '2.5rem 2rem',
                  marginLeft: 0,
                  fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
                  border: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
        >
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
            <button
              onClick={() => handleFormSwitch('getInTouch')}
                className={`advanced-tab-btn ${activeForm === 'getInTouch' ? 'active' : ''}`}
            >
              Get in Touch
            </button>
            <button
              onClick={() => handleFormSwitch('quickContact')}
                className={`advanced-tab-btn ${activeForm === 'quickContact' ? 'active' : ''}`}
            >
              Inquiry Form
            </button>
          </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="advanced-form-card"
            >
              {submitted && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: 'green', marginBottom: '1rem', textAlign: 'center' }}>✅ Your message has been submitted!</motion.p>}

            {activeForm === 'getInTouch' && (
                <form onSubmit={handleSubmit} autoComplete="off">
                  <h3 className="advanced-form-title">Get in Touch</h3>
                  <AdvancedInput label="Full Name" type="text" required icon="user" placeholder=" " />
                  <AdvancedInput label="Email Address" type="email" required icon="envelope" placeholder=" " />
                  <AdvancedInput label="Phone Number" type="tel" required icon="phone" placeholder=" " />
                  <AdvancedInput label="Organization" type="text" icon="building" placeholder=" " />
                  <AdvancedTextarea label="Message" required icon="comment-dots" placeholder=" " />
                  <motion.button
                    type="submit"
                    className="advanced-submit-btn"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    disabled={loading}
                  >
                    {loading ? <i className="fa fa-spinner fa-spin"></i> : 'Submit'}
                  </motion.button>
              </form>
            )}

            {activeForm === 'quickContact' && (
                <form onSubmit={handleSubmit} autoComplete="off">
                  <h3 className="advanced-form-title">Quick Contact</h3>
                  <AdvancedInput label="Name" type="text" required icon="user" placeholder=" " />
                  <AdvancedInput label="Email Address" type="email" required icon="envelope" placeholder=" " />
                  <AdvancedInput label="Phone Number" type="tel" required icon="phone" placeholder=" " />
                  <AdvancedSelect label="Inquiry Type" required icon="list" placeholder=" ">
                  <option value="">Select</option>
                  <option>Courses</option>
                  <option>Internships</option>
                  <option>HR Services</option>
                  <option>College Partnership</option>
                  <option>Corporate Hiring</option>
                  <option>Other</option>
                  </AdvancedSelect>
                  <AdvancedTextarea label="Message" required icon="comment-dots" placeholder=" " />
                  <motion.button
                    type="submit"
                    className="advanced-submit-btn"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    disabled={loading}
                  >
                    {loading ? <i className="fa fa-spinner fa-spin"></i> : 'Submit'}
                  </motion.button>
              </form>
            )}
            </motion.div>
          </motion.div>
            </>
          )}

          {/* Inquiry Form: [Form | Inquiry Image Card] */}
          {activeForm === 'quickContact' && (
            <>
            <motion.div
                key={activeForm}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  flex: '1 1 500px',
                  minWidth: '320px',
                  maxWidth: '500px',
                  background: '#fff',
                  borderTopLeftRadius: '24px',
                  borderBottomLeftRadius: '24px',
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                  zIndex: 2,
                  padding: '2.5rem 2rem',
                  marginRight: 0,
                  fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
                  border: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
                <button
                  onClick={() => handleFormSwitch('getInTouch')}
                    className={`advanced-tab-btn ${activeForm === 'getInTouch' ? 'active' : ''}`}
                >
                  Get in Touch
                </button>
                <button
                  onClick={() => handleFormSwitch('quickContact')}
                    className={`advanced-tab-btn ${activeForm === 'quickContact' ? 'active' : ''}`}
                >
                  Inquiry Form
                </button>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="advanced-form-card"
                >
                  {submitted && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: 'green', marginBottom: '1rem', textAlign: 'center' }}>✅ Your message has been submitted!</motion.p>}

                {activeForm === 'getInTouch' && (
                    <form onSubmit={handleSubmit} autoComplete="off">
                      <h3 className="advanced-form-title">Get in Touch</h3>
                      <AdvancedInput label="Full Name" type="text" required icon="user" placeholder=" " />
                      <AdvancedInput label="Email Address" type="email" required icon="envelope" placeholder=" " />
                      <AdvancedInput label="Phone Number" type="tel" required icon="phone" placeholder=" " />
                      <AdvancedInput label="Organization" type="text" icon="building" placeholder=" " />
                      <AdvancedTextarea label="Message" required icon="comment-dots" placeholder=" " />
                      <motion.button
                        type="submit"
                        className="advanced-submit-btn"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        disabled={loading}
                      >
                        {loading ? <i className="fa fa-spinner fa-spin"></i> : 'Submit'}
                      </motion.button>
                  </form>
                )}

                {activeForm === 'quickContact' && (
                    <form onSubmit={handleSubmit} autoComplete="off">
                      <h3 className="advanced-form-title">Quick Contact</h3>
                      <AdvancedInput label="Name" type="text" required icon="user" placeholder=" " />
                      <AdvancedInput label="Email Address" type="email" required icon="envelope" placeholder=" " />
                      <AdvancedInput label="Phone Number" type="tel" required icon="phone" placeholder=" " />
                      <AdvancedSelect label="Inquiry Type" required icon="list" placeholder=" ">
                      <option value="">Select</option>
                      <option>Courses</option>
                      <option>Internships</option>
                      <option>HR Services</option>
                      <option>College Partnership</option>
                      <option>Corporate Hiring</option>
                      <option>Other</option>
                      </AdvancedSelect>
                      <AdvancedTextarea label="Message" required icon="comment-dots" placeholder=" " />
                      <motion.button
                        type="submit"
                        className="advanced-submit-btn"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        disabled={loading}
                      >
                        {loading ? <i className="fa fa-spinner fa-spin"></i> : 'Submit'}
                      </motion.button>
                  </form>
                )}
                </motion.div>
        </motion.div>
        <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  flex: '0 0 320px',
                  minWidth: '260px',
                  maxWidth: '340px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: '#fff',
                  borderTopRightRadius: '24px',
                  borderBottomRightRadius: '24px',
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2.5rem 2rem',
                  fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
                  boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)',
                  gap: '2rem',
                  marginLeft: '-2px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
            >
                {/* Background Pattern */}
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                  opacity: 0.3,
                  zIndex: 1,
                }} />
                
                {/* Content */}
                <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', width: '100%' }}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        width: '100%',
                        height: '140px',
                        borderRadius: '20px',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.5rem',
                        border: '2px solid rgba(255,255,255,0.3)',
                        backdropFilter: 'blur(10px)',
                        overflow: 'hidden',
                        position: 'relative',
                      }}
                    >
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid rgba(255,255,255,0.5)',
                      }}>
                        <i className="fa-solid fa-comments" style={{ fontSize: '1.8rem', color: '#fff' }} />
                      </div>
                    </motion.div>
                    
                    <div style={{ 
                      fontWeight: 700, 
                      fontSize: '1.4rem', 
                      color: '#fff', 
                      textAlign: 'center',
                      marginBottom: '1rem',
                      background: 'linear-gradient(45deg, #fff, #f0f8ff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>
                      Have an inquiry?
                    </div>
                    <div style={{ 
                      color: 'rgba(255,255,255,0.9)', 
                      fontSize: '1.05rem', 
                      textAlign: 'center',
                      lineHeight: '1.6',
                      opacity: 0.95,
                    }}>
                      We're here to help you with your questions and career development needs.
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowGetStartedOptions(!showGetStartedOptions)}
                      style={{
                        marginTop: '1.5rem',
                        padding: '0.8rem 1.5rem',
                        background: 'rgba(255,255,255,0.2)',
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.3)',
                        backdropFilter: 'blur(10px)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                      }}
                    >
                      <span style={{ 
                        color: '#fff', 
                        fontWeight: 600, 
                        fontSize: '0.95rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}>
                        Get Started
                      </span>
                      
                      {/* Dropdown Arrow */}
                      <span style={{
                        marginLeft: '0.5rem',
                        fontSize: '0.8rem',
                        transition: 'transform 0.3s ease',
                        transform: showGetStartedOptions ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}>
                        ▼
                      </span>
                    </motion.div>
                    
                    {/* Get Started Options Dropdown */}
                    <AnimatePresence>
                      {showGetStartedOptions && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                          style={{
                            marginTop: '1rem',
                            background: 'rgba(255,255,255,0.95)',
                            borderRadius: '16px',
                            padding: '1rem',
                            backdropFilter: 'blur(15px)',
                            border: '1px solid rgba(255,255,255,0.3)',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                          }}
                        >
                          <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#333', marginBottom: '0.8rem', textAlign: 'center' }}>
                            Choose Your Path
                          </div>
                          
                          {/* Option 1: Fill Contact Form */}
                          <motion.div
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                              setActiveForm('quickContact');
                              setShowGetStartedOptions(false);
                            }}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.8rem',
                              padding: '0.8rem',
                              borderRadius: '12px',
                              background: 'rgba(102, 126, 234, 0.1)',
                              cursor: 'pointer',
                              marginBottom: '0.5rem',
                              border: '1px solid rgba(102, 126, 234, 0.2)',
                              transition: 'all 0.2s ease',
                            }}
                          >
                            <div style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '8px',
                              background: 'linear-gradient(135deg, #667eea, #764ba2)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}>
                              <i className="fa-solid fa-file-lines" style={{ fontSize: '0.9rem', color: '#fff' }} />
                            </div>
                            <div>
                              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#333' }}>
                                Fill Contact Form
                              </div>
                              <div style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.1rem' }}>
                                Quick inquiry submission
                              </div>
                            </div>
                          </motion.div>
                          
                          {/* Option 2: Call Us */}
                          <motion.div
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => window.open('tel:+919363923506', '_self')}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.8rem',
                              padding: '0.8rem',
                              borderRadius: '12px',
                              background: 'rgba(34, 197, 94, 0.1)',
                              cursor: 'pointer',
                              marginBottom: '0.5rem',
                              border: '1px solid rgba(34, 197, 94, 0.2)',
                              transition: 'all 0.2s ease',
                            }}
                          >
                            <div style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '8px',
                              background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}>
                              <i className="fa-solid fa-phone" style={{ fontSize: '0.9rem', color: '#fff' }} />
                            </div>
                            <div>
                              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#333' }}>
                                Call Us Directly
                              </div>
                              <div style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.1rem' }}>
                                Speak with our team
                              </div>
                            </div>
                          </motion.div>
                          
                          {/* Option 3: Email Us */}
                          <motion.div
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => window.open('mailto:info@iyanthiran.com', '_self')}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.8rem',
                              padding: '0.8rem',
                              borderRadius: '12px',
                              background: 'rgba(59, 130, 246, 0.1)',
                              cursor: 'pointer',
                              marginBottom: '0.5rem',
                              border: '1px solid rgba(59, 130, 246, 0.2)',
                              transition: 'all 0.2s ease',
                            }}
                          >
                            <div style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '8px',
                              background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}>
                              <i className="fa-solid fa-envelope" style={{ fontSize: '0.9rem', color: '#fff' }} />
                            </div>
                            <div>
                              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#333' }}>
                                Send Email
                              </div>
                              <div style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.1rem' }}>
                                Write to info@iyanthiran.com
                              </div>
                            </div>
                          </motion.div>
                          
                          {/* Option 4: View Courses */}
                          <motion.div
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                              // You can add navigation to courses page here
                              alert('Courses page coming soon!');
                            }}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.8rem',
                              padding: '0.8rem',
                              borderRadius: '12px',
                              background: 'rgba(168, 85, 247, 0.1)',
                              cursor: 'pointer',
                              marginBottom: '0.5rem',
                              border: '1px solid rgba(168, 85, 247, 0.2)',
                              transition: 'all 0.2s ease',
                            }}
                          >
                            <div style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '8px',
                              background: 'linear-gradient(135deg, #a855f7, #9333ea)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}>
                              <i className="fa-solid fa-graduation-cap" style={{ fontSize: '0.9rem', color: '#fff' }} />
                            </div>
                            <div>
                              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#333' }}>
                                View Courses
                              </div>
                              <div style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.1rem' }}>
                                Explore our programs
                              </div>
                            </div>
                          </motion.div>
                          
                          {/* Option 5: Book Consultation */}
                          <motion.div
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                              setActiveForm('getInTouch');
                              setShowGetStartedOptions(false);
                            }}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.8rem',
                              padding: '0.8rem',
                              borderRadius: '12px',
                              background: 'rgba(245, 158, 11, 0.1)',
                              cursor: 'pointer',
                              border: '1px solid rgba(245, 158, 11, 0.2)',
                              transition: 'all 0.2s ease',
                            }}
                          >
                            <div style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '8px',
                              background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}>
                              <i className="fa-solid fa-calendar-check" style={{ fontSize: '0.9rem', color: '#fff' }} />
                            </div>
                            <div>
                              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#333' }}>
                                Book Consultation
                              </div>
                              <div style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.1rem' }}>
                                Schedule a meeting
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                </div>
          </motion.div>
            </>
          )}
        </section>

        {/* Map Section - Restored */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ maxWidth: '900px', margin: '2rem auto', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(93,211,198,0.10)' }}
        >
          <iframe
            title="Iyanthiran Location Map"
            src="https://maps.google.com/maps?q=Tamil%20Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="350"
            style={{ border: 0, width: '100%', minHeight: '300px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
      </motion.section>

      {/* FAQ Hero Section (modern background) */}
      <section
        className="faq-hero-section"
        style={{
          background: '#f7f5f2', // soft warm beige for elegance
          padding: '2.618rem 0 1.618rem 0', // golden ratio spacing
          margin: '0 0 2rem 0',
          width: '100vw',
          boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
          textAlign: 'center',
          borderRadius: 0,
          borderBottom: '1px solid #e2e8f0',
          fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
        }}
      >
        <div style={{ maxWidth: '990px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 style={{
            fontSize: '2.618rem', // golden ratio heading
            fontWeight: 900,
            marginBottom: '1rem',
            background: 'linear-gradient(90deg, #1976d2 20%, #32bdac 80%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.5px',
            lineHeight: '1.13',
            fontFamily: 'inherit',
          }}>
            Frequently Asked Questions
          </h2>
          <div style={{
            width: '61.8px', // golden ratio divider
            height: '4px',
            background: 'linear-gradient(90deg, #32bdac 0%, #1976d2 100%)',
            borderRadius: '2px',
            margin: '0 auto 1.3rem auto',
            opacity: 0.18,
          }} />
          <p style={{
            fontSize: '1.1rem',
            maxWidth: '610px', // golden ratio inner width
            margin: '0 auto',
            color: '#5b6b7a',
            lineHeight: '1.7',
            fontWeight: 400,
            letterSpacing: '0.01em',
            fontFamily: 'inherit',
          }}>
            At Iyanthiran Edge, we know that choosing the right partner for your career journey is important. Find quick answers to help you decide with confidence.
          </p>
        </div>
      </section>

      {/* FAQ Section Below Contact */}
      <section
        className="faq-section"
        style={{
          margin: '0',
          padding: '1.618rem 0', // golden ratio vertical padding
          borderRadius: 0,
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          width: '100vw',
        }}
      >
        <div style={{ maxWidth: '990px', margin: '0 auto' }}>
          {/* FAQ Accordion */}
          {(() => {
            const faqData = [
              {
                question: 'What is Iyanthiran Edge and how can it help my career?',
                answer: [
                  'Iyanthiran is a career development organization.',
                  'Offers specialized career guidance, training, internships, and placement support.',
                  'Helps students and professionals identify the right career path, build skills, and succeed in the corporate world.'
                ]
              },
              {
                question: 'What types of courses do you offer?',
                answer: [
                  'Soft Skills & Communication Training',
                  'Interview Preparation Programs',
                  'Final-Year Placement Training',
                  'Domain-Specific Programs (IT, Science, Arts, Business)',
                  'Skill Development Workshops'
                ]
              },
              {
                question: 'Who can enroll in your programs?',
                answer: [
                  'College students',
                  'Fresh graduates',
                  'Job seekers',
                  'Working professionals seeking a career change',
                  'Institutions seeking bulk training and HR services'
                ]
              },
              {
                question: 'How do your internship programs work?',
                answer: [
                  'Real-time projects with hands-on experience',
                  'Free and sponsored internships',
                  'Industry exposure through implant training',
                  'Certificates provided after successful completion'
                ]
              },
              {
                question: 'What is the fee structure for your courses and services?',
                answer: [
                  'Fees vary by program selected',
                  'Free internships available for selected students',
                  'Affordable career training programs',
                  'Customized corporate packages for colleges/businesses'
                ]
              },
              {
                question: 'How do you assist with interview preparation?',
                answer: [
                  'Resume and LinkedIn profile optimization',
                  'Mock interviews with industry experts',
                  'Coaching for behavioral and technical interviews',
                  'Post-interview feedback for improvement'
                ]
              },
              {
                question: 'What kind of placement support does Iyanthiran offer?',
                answer: [
                  'Employer tie-ups and referrals',
                  'Aptitude and technical training',
                  'Campus-to-corporate transition programs',
                  'Placement readiness workshops'
                ]
              },
              {
                question: 'How can colleges and corporates collaborate with Iyanthiran?',
                answer: [
                  'Placement training packages',
                  'Recruitment drives and talent support',
                  'Sponsored skill development events',
                  'Custom learning and skilling initiatives'
                ]
              },
              {
                question: 'Where is Iyanthiran located?',
                answer: [
                  'Headquartered in Rajapalayam, Tamil Nadu',
                  'Workshops and events across various regions',
                  'Google Map available on Contact Us page'
                ]
              },
              {
                question: 'How can I get started?',
                answer: [
                  'Call us at +91 93639 23506',
                  'Email info@iyanthiran.com',
                  'Fill the quick form on Contact Us page',
                  'Visit our office directly'
                ]
              }
            ];
            const faqIcons = [
              <FaUserShield size={24} color="#32bdac" />,
              <FaRegSmile size={24} color="#32bdac" />, 
              <FaRegClock size={24} color="#32bdac" />, 
              <FaExchangeAlt size={24} color="#32bdac" />, 
              <FaRegEdit size={24} color="#32bdac" />, 
              <FaChalkboardTeacher size={24} color="#32bdac" />, 
              <FaUniversity size={24} color="#32bdac" />, 
              <FaEnvelopeOpenText size={24} color="#32bdac" />, 
              <FaMapMarkerAlt size={24} color="#32bdac" />, 
              <FaPhoneAlt size={24} color="#32bdac" />
            ];
            const [openIndices, setOpenIndices] = React.useState([]);
            const handleAccordion = (index) => {
              setOpenIndices((prev) =>
                prev.includes(index)
                  ? prev.filter((i) => i !== index)
                  : [...prev, index]
              );
            };
            return faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
                style={{
                  marginBottom: '1rem',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: '1px solid #e6e6e6',
                  backgroundColor: '#fcfcfd',
                  boxShadow: openIndices.includes(index)
                    ? '0 8px 32px rgba(0,0,0,0.18)'
                    : '0 2px 8px rgba(0,0,0,0.10)',
                  textAlign: 'justify',
                  transition: 'box-shadow 0.2s, border 0.2s',
                  position: 'relative',
                }}
                whileHover={{ boxShadow: '0 8px 32px rgba(0,0,0,0.22)', borderColor: '#b2f0e9' }}
              >
                <button
                  onClick={() => handleAccordion(index)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    padding: '1.25rem 1.5rem',
                    background: 'none',
                    color: '#003d4d',
                    border: 'none',
                    fontWeight: 600,
                    fontSize: '1rem', // golden ratio base font size
                    cursor: 'pointer',
                    outline: 'none',
                    transition: 'background 0.2s',
                    gap: '1rem',
                    borderBottom: openIndices.includes(index) ? '1px solid #32bdac' : '1px solid #f2f2f2',
                  }}
                  aria-expanded={openIndices.includes(index)}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ minWidth: 32, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      {faqIcons[index % faqIcons.length]}
                    </span>
                    {faq.question}
                  </span>
                  <span style={{
                    transform: openIndices.includes(index) ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s',
                    fontSize: '1.5rem',
                    color: '#32bdac',
                    marginLeft: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                    ▼
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndices.includes(index) && (
                    <motion.div
                      key="answer"
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ opacity: { duration: 0.25 } }}
                      style={{
                        overflow: 'hidden',
                        background: '#fcfcfc',
                        fontSize: '1rem',
                        color: '#222',
                      }}
                    >
                      <motion.ul
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ delay: 0.08, duration: 0.3 }}
                        style={{ padding: '1rem 2.5rem 1.5rem 4.5rem', margin: 0, listStyle: 'none' }}
                      >
                        {faq.answer.map((point, i) => (
                          <li key={i} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                            <FaCircle size={8} color="#32bdac" style={{ marginTop: '0.4em', flexShrink: 0 }} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ));
          })()}
        </div>
      </section>

      {/* Final CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
          style={{
            
            margin: '0rem auto',
            padding: '2.8rem 1.5rem 2.5rem 1.5rem',
            textAlign: 'center',
            background: '#159384', // slightly darker teal
            borderRadius: '1.2rem',
            boxShadow: '0 4px 24px rgba(27,182,163,0.10)',
            color: '#fff',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <h3 style={{
            fontSize: '2.1rem',
            marginBottom: '1.5 rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.8em',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-0.5px',
            textShadow: '0 2px 12px rgba(0,0,0,0.10)',
            lineHeight: 1.1,
          }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,255,255,0.13)',
              borderRadius: '50%',
              width: '2.7em',
              height: '2.7em',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            }}>
              <i className="fa-solid fa-road" style={{ color: '#fff', fontSize: '1.5em', verticalAlign: 'middle' }}></i>
            </span>
            Let's Build Your Career Path Together
          </h3>
          <p style={{ fontSize: '1.18rem', color: '#fff', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto', letterSpacing: '0.01em', textShadow: '0 1px 6px rgba(0,0,0,0.07)' }}>
            Starting your career or aiming higher? Iyanthiran is with you—let’s build success together. Contact us today!
          </p>
      </motion.section>
      </div>
    </>
  );
}

// Advanced styles for the form (to be added in your CSS file or as a <style> tag)
const advancedFormStyles = `
.advanced-form-card {
  background: rgba(255,255,255,0.85);
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  padding: 2.5rem 2rem 2rem 2rem;
  margin: 0 auto;
  backdrop-filter: blur(6px);
  border: 1.5px solid #e6faf8;
  transition: box-shadow 0.3s;
}
.advanced-form-title {
  text-align: center;
  color: #07839a;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  letter-spacing: 0.01em;
}
.advanced-input {
  position: relative;
  margin-bottom: 2.1rem;
  display: flex;
  align-items: center;
}
.advanced-input input,
.advanced-input select,
.advanced-input textarea {
  width: 100%;
  padding: 1.1rem 1.1rem 1.1rem 2.7rem;
  border-radius: 10px;
  border: 1.5px solid #e0e0e0;
  background: rgba(255,255,255,0.95);
  font-size: 1rem;
  outline: none;
  transition: border-color 0.25s, box-shadow 0.25s;
  box-shadow: 0 2px 8px rgba(93,211,198,0.04);
}
.advanced-input.focused input,
.advanced-input.focused select,
.advanced-input.focused textarea {
  border-color: #5dd3c6;
  box-shadow: 0 2px 12px rgba(93,211,198,0.10);
}
.advanced-input label {
  position: absolute;
  left: 2.7rem;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  font-size: 1rem;
  pointer-events: none;
  background: transparent;
  transition: all 0.2s cubic-bezier(0.4,0,0.2,1);
  padding: 0 0.2rem;
}
.advanced-input.focused label,
.advanced-input input:not(:placeholder-shown) + label,
.advanced-input select:not(:placeholder-shown) + label,
.advanced-input textarea:not(:placeholder-shown) + label {
  top: -0.7rem;
  left: 2.3rem;
  font-size: 0.92rem;
  color: #07839a;
  background: #fff;
  padding: 0 0.3rem;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(93,211,198,0.04);
}
.input-icon {
  position: absolute;
  left: 0.9rem;
  top: 50%;
  transform: translateY(-50%);
  color:rgb(20, 161, 145);
  font-size: 1.2rem;
  pointer-events: none;
  transition: color 0.2s;
}
.advanced-input.focused .input-icon {
  color: #07839a;
}
.advanced-submit-btn {
  width: 100%;
  background: #07839a;
  color: #fff;
  padding: 1rem 0;
  border-radius: 10px;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 0.5rem;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(7,131,154,0.10);
  transition: background 0.18s, box-shadow 0.18s, transform 0.1s;
}
.advanced-submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
.advanced-submit-btn:hover:not(:disabled) {
  background: #06667a;
  box-shadow: 0 4px 16px rgba(7,131,154,0.13);
}
.advanced-tab-btn {
  padding: 0.7rem 1.4rem;
  border-radius: 9px;
  background: #f9fafb;
  color: #07839a;
  border: 1.5px solid #e0f7fa;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.18s, color 0.18s, border 0.18s;
}
.advanced-tab-btn.active, .advanced-tab-btn:hover {
  background: #07839a;
  color: #fff;
  border: 1.5px solid #07839a;
}
.advanced-form-image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 350px;
}
.advanced-form-info-card {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 350px;
  height: 100%;
}
.website-office-card {
  width: 100%;
  background: linear-gradient(135deg, #f0f8ff 0%, #e6faf8 50%, #d4f4f1 100%);
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(93,211,198,0.13);
  padding: 2.7rem 2.1rem 2.3rem 2.1rem;
  color: #003d4d;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 300px;
  height: 100%;
  border: 1.5px solid #e6faf8;
  margin: 0 auto;
  font-size: 1.13rem;
}
.colorful-image-card {
  background: linear-gradient(135deg, #f0f8ff 0%, #e6faf8 50%, #d4f4f1 100%);
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(93,211,198,0.13);
  padding: 2.2rem 1.5rem 2rem 1.5rem;
  min-height: 300px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 900px) {
  .contact-section-advanced {
    flex-direction: column !important;
    border-radius: 18px !important;
  }
  .contact-section-advanced > div, .contact-section-advanced > form {
    border-radius: 18px !important;
    max-width: 100% !important;
    min-width: 0 !important;
    margin-left: 0 !important;
  }
  .website-office-card {
    min-height: 220px;
    padding: 2rem 1.2rem 1.7rem 1.2rem;
  }
  .colorful-image-card {
    min-height: 220px;
    padding: 2rem 1.2rem 1.7rem 1.2rem;
  }
}
`;

// Inject advanced styles into the document head
if (typeof window !== 'undefined' && !document.getElementById('advanced-form-styles')) {
  const style = document.createElement('style');
  style.id = 'advanced-form-styles';
  style.innerHTML = advancedFormStyles;
  document.head.appendChild(style);
}

export default ContactUs;
