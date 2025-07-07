import { useState, useEffect } from 'react';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import aiEventImage from "../assets/img/img2.avif";
import { motion } from 'framer-motion';



export default function Events() {
  const [activeTab, setActiveTab] = useState('past');
   useEffect(() => {
  // Load Instagram embed script if not already loaded
  if (!window.instgrm) {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.onload = () => window.instgrm.Embeds.process();
    document.body.appendChild(script);
  } else {
    // If already loaded, process embeds
    window.instgrm.Embeds.process();
  }
}, []);

  return (
    <div style={{  backgroundColor: '#f9f9f9',  }}>
      {/* Hero Section */}
      <section className="hero text-center" style={{ padding: '4rem 1rem', backgroundColor: '#f0f8ff' }}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#003d4d' }}
        >
          Upcoming Events & Workshops
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', color: '#555' }}
        >
          Join our expert-led sessions to boost your career or workforce.
        </motion.p>
      </section>

      {/* Events Section */}
      <section
        className="section-events"
        style={{ maxWidth: '1100px', margin: '0 auto', padding: '1rem' }}
      >
        {/* Tabs */}
        <div
          className="event-tabs"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          <button
            className="tab-button"
            onClick={() => setActiveTab('upcoming')}
            style={{
              backgroundColor: activeTab === 'upcoming' ? '#07839a' : '#dddddd',
              color: activeTab === 'upcoming' ? 'white' : 'black',
              fontWeight: 'bold',
              padding: '0.5rem 1.5rem',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
            }}
          >
            Upcoming Events
          </button>
          <button
            className="tab-button"
            onClick={() => setActiveTab('past')}
            style={{
              backgroundColor: activeTab === 'past' ? '#07839a' : '#dddddd',
              color: activeTab === 'past' ? 'white' : 'black',
              fontWeight: 'bold',
              padding: '0.5rem 1.5rem',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
            }}
          >
            Past Events
          </button>
        </div>

        {/* Event Cards */}
        <div
          className="event-cards"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            justifyContent: 'flex-start',
          }}
        >
          {activeTab === 'past' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="event-card eael-cf-past-events"
              style={{
                width: '320px',
                backgroundColor: 'white',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                overflow: 'hidden',
                textAlign: 'left',
              }}
            >
              <img
                src="https://iyanthiran.com/img/events/brains.png"
                alt="BRAINS Event"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div className="event-info" style={{ padding: '1rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                  BRAINS / Innovate for Impact
                </h3>
                <p><strong>Date:</strong> 14 February 2024</p>
                <p><strong>Time:</strong> 11:00 AM IST</p>
                <p><strong>Location:</strong> DoMS – MSU, Tirunelveli</p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                  <a
                    href="#"
                    className="btn btn-primary"
                    style={{
                      backgroundColor: '#07839a',
                      color: 'white',
                      padding: '0.4rem 1rem',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                    }}
                  >
                    Register Now
                  </a>
                  <a
                    href="#"
                    className="btn btn-danger"
                    style={{
                      backgroundColor: '#dc3545',
                      color: 'white',
                      padding: '0.4rem 1rem',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                    }}
                  >
                    View Details
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'upcoming' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="event-card eael-cf-upcoming-events"
              style={{
                width: '320px',
                backgroundColor: 'white',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                overflow: 'hidden',
                textAlign: 'left',
              }}
            >
              <img
                src={aiEventImage}
                alt="Upcoming Event"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div className="event-info" style={{ padding: '1rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                  AI in Talent Acquisition - Webinar
                </h3>
                <p><strong>Date:</strong> July 12, 2025</p>
                <p><strong>Time:</strong> 3:00 PM - 4:30 PM IST</p>
                <p>
                  Join us for a deep dive into how AI is transforming hiring processes in modern industries.
                </p>
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: '#07839a',
                    color: 'white',
                    padding: '0.4rem 1rem',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    marginTop: '0.5rem',
                    display: 'inline-block',
                  }}
                >
                  Register Now
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </section>

    {/* Gallery Section */}
        <section
          className="gallery-section"
          style={{ maxWidth: '1100px', margin: '3rem auto', padding: '1rem',backgroundColor: '#f0f8ff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', color: '#003d4d' }}
        >
          <h2
            style={{
              fontSize: '1.8rem',
              marginBottom: '0rem',
              color: '#003d4d',
              textAlign: 'center',
            }}
          >
            Event Highlights Gallery
          </h2>

          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              paddingTop: '9rem',
              marginTop: '0rem',
              height: '700px',
              width: '550px'
            }}
          >
            {/* Google Maps Card */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '300px',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                  >
                    <div style={{ width: '100%', height: '330px', overflow: 'hidden' }}>
                      <img
                        src="https://lh3.googleusercontent.com/p/AF1QipM4wECM1i0oo3OUKQiXC6VfSGy47oyA5gY2VaeL=w600-h600-k-no"
                        alt="Iyanthiran Office"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{ padding: '1rem', height: '150px' }}>
                      <h4 style={{ marginBottom: '0.5rem', color: '#0056b3' }}>Our Office Location</h4>
                      <p style={{ fontSize: '0.95rem', color: '#444' }}>
                        Visit our corporate office and experience the Iyanthiran learning environment in person.
                      </p>
                    </div>
                  </motion.div>

                  {/* Instagram Reel Fallback Card */}
                   <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      viewport={{ once: true }}
                      style={{
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        width: '300px',
                        transition: 'transform 0.3s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                    >
                      {/* Instagram Embed with Container */}
                      <div style={{ width: '100%', height: '330px', overflow: 'hidden' }}>
                        <div
                          style={{
                            height: '100%',
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <blockquote
                            className="instagram-media"
                            data-instgrm-permalink="https://www.instagram.com/reel/DLr5RylTQBg/?utm_source=ig_web_copy_link"
                            data-instgrm-version="14"
                            style={{
                              width: '100%',
                              
                              margin: 0,
                              border: 0,
                              maxHeight: '330px',
                            }}
                          ></blockquote>
                        </div>
                      </div>

                      <div style={{ padding: '1rem', height: '150px' }}>
                        <h4 style={{ marginBottom: '0.5rem', color: '#0056b3' }}>On-Ground Workshop</h4>
                        <p style={{ fontSize: '0.95rem', color: '#444' }}>
                          Students engaging in hands-on learning activities during our field training event.
                        </p>
                      </div>
                    </motion.div>



          </div>
        </section>

    </div>
  );
}
