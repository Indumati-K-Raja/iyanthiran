import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

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

function ContactUs() {
  const [activeForm, setActiveForm] = useState('getInTouch');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
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

      {/* Themed Background Section */}
      <div style={{ padding: '0 0 3rem 0' }}>
        {/* Main Content */}
        <section className="contact-section-advanced" style={{ display: 'flex', gap: '2rem', maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
          {/* Left Side - Forms */}
          <motion.div
            key={activeForm}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ flex: '1 1 500px', minWidth: '340px', maxWidth: '500px', zIndex: 2 }}
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

          {/* Right Side - Card or Image depending on activeForm */}
          {activeForm === 'getInTouch' ? (
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="advanced-form-info-card"
              style={{ flex: '1 1 400px', minWidth: '340px', maxWidth: '480px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}
            >
              <div className="website-office-card">
                <div style={{ width: '100%', textAlign: 'center', marginBottom: '1.2rem' }}>
                  <span style={{ fontFamily: 'Pacifico, cursive', fontSize: '2.1rem', color: '#FFB300', letterSpacing: '1px', display: 'inline-block', textShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>Contact Us</span>
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#003d4d', fontWeight: 600 }}>Website & Office Hours</h3>
                <p style={{ color: '#003d4d', marginBottom: '0.7rem' }}><strong>Website:</strong> <a href="https://www.iyanthiran.com" target="_blank" rel="noopener noreferrer" style={{ color: '#07839a', textDecoration: 'none' }}>www.iyanthiran.com</a></p>
                <p style={{ color: '#003d4d', marginBottom: '0.7rem' }}><strong>Office Hours:</strong><br /> Monday – Saturday: 10:00 AM to 6:00 PM<br /> Sunday: Closed</p>
              </div>
            </motion.div>
          ) : (
          <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            viewport={{ once: true }}
              className="advanced-form-image-container colorful-image-card"
              style={{ flex: '1 1 400px', minWidth: '340px', maxWidth: '480px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}
            >
              <img
                src="/images/inquiry.jpg"
                alt="Contact Illustration"
                style={{ width: '100%', maxWidth: '320px', borderRadius: '18px', boxShadow: '0 8px 32px rgba(93,211,198,0.13)' }}
              />
          </motion.div>
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
      </div>
    </>
  );
}

// Advanced styles for the form (to be added in your CSS file or as a <style> tag)
const advancedFormStyles = `
.advanced-form-card {
  background: rgba(255,255,255,0.85);
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(93,211,198,0.13);
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
  background: linear-gradient(90deg,rgb(127, 249, 235) 0%, #278da0 100%);
  color: #fff;
  padding: 0.9rem 0;
  border-radius: 10px;
  border: none;
  font-size: 1.1rem;
  font-weight: 500;
  margin-top: 0.5rem;
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(93,211,198,0.10);
  transition: background 0.2s, box-shadow 0.2s, transform 0.1s;
}
.advanced-submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
.advanced-submit-btn:hover:not(:disabled) {
  background: linear-gradient(90deg, #278da0 0%, #5dd3c6 100%);
  box-shadow: 0 4px 16px rgba(93,211,198,0.18);
}
.advanced-tab-btn {
  padding: 0.6rem 1.3rem;
  border-radius: 8px;
  background: #f0f8ff;
  color: #07839a;
  border: 1.5px solid #e6faf8;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border 0.2s;
}
.advanced-tab-btn.active, .advanced-tab-btn:hover {
  background: linear-gradient(90deg, #5dd3c6 0%, #278da0 100%);
  color: #fff;
  border: 1.5px solid #5dd3c6;
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
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 900px) {
  .contact-section-advanced {
    flex-direction: column;
    gap: 2.5rem;
  }
  .advanced-form-image-container, .advanced-form-info-card {
    margin-top: 0;
    margin-bottom: 2rem;
    max-width: 100%;
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
