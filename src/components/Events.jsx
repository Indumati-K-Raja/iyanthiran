import { useState, useEffect, useRef } from 'react';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import aiEventImage from "../assets/img/img2.avif";
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

export default function Events() {
  const [activeTab, setActiveTab] = useState('past');
  // Parallax state for gallery cards
  const [parallax, setParallax] = useState([
    { rotateX: 0, rotateY: 0 },
    { rotateX: 0, rotateY: 0 }
  ]);
  const cardRefs = [useRef(null), useRef(null)];
  const [instaError, setInstaError] = useState(false);

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

  // Animation variants for gallery cards
  const galleryCardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.18, duration: 0.7, ease: 'easeOut' }
    })
  };

  // Parallax handlers
  const handleParallax = (e, idx) => {
    const card = cardRefs[idx].current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 8; // max 8deg
    const rotateY = ((x - centerX) / centerX) * -8;
    setParallax((prev) => prev.map((p, i) => i === idx ? { rotateX, rotateY } : p));
  };
  const resetParallax = (idx) => {
    setParallax((prev) => prev.map((p, i) => i === idx ? { rotateX: 0, rotateY: 0 } : p));
  };

  // Theme colors
  const themeGradient = 'linear-gradient(135deg, #e6faf8 0%, #5dd3c6 40%, #26a69a 100%)';
  const themeAccent = '#07839a';

  return (
    <div style={{  backgroundColor: '#f9f9f9',  }}>
      {/* Hero Section */}
      <section className="hero text-center" style={{ padding: '4rem 1rem', backgroundColor: '#f0f8ff' }}>
        <h2
          style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#003d4d' }}
        >
          Upcoming Events & Workshops
        </h2>
        <p
          style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', color: '#555' }}
        >
          Join our expert-led sessions to boost your career or workforce.
        </p>
      </section>

      {/* Events Section */}
      <section
        className="section-events"
        style={{ maxWidth: '1100px', margin: '0 auto', padding: '1rem' }}
      >
        {/* Tabs */}
        <div
          className="event-tabs advanced-event-tabs"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          <button
            className={`advanced-tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Events
          </button>
          <button
            className={`advanced-tab-btn ${activeTab === 'past' ? 'active' : ''}`}
            onClick={() => setActiveTab('past')}
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
              gap: '2.2rem',
              paddingTop: '6rem',
              marginTop: '0rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {/* Modern Image Card */}
            <motion.div
              ref={cardRefs[0]}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={galleryCardVariants}
              whileHover={{ scale: 1.045, boxShadow: '0 8px 32px rgba(93,211,198,0.18)' }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              style={{
                background: themeGradient,
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.13)',
                display: 'flex',
                flexDirection: 'column',
                width: '320px',
                minHeight: '420px',
                maxHeight: '480px',
                position: 'relative',
                transition: 'transform 0.3s ease',
                transform: `perspective(900px) rotateX(${parallax[0].rotateX}deg) rotateY(${parallax[0].rotateY}deg)`
              }}
              onMouseMove={e => handleParallax(e, 0)}
              onMouseLeave={() => resetParallax(0)}
            >
              {/* Top section: image, fixed height */}
              <div style={{ width: '100%', height: '200px', overflow: 'hidden', flexShrink: 0, background: '#e6faf8' }}>
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipM4wECM1i0oo3OUKQiXC6VfSGy47oyA5gY2VaeL=w600-h600-k-no"
                  alt="Iyanthiran Office"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              {/* Bottom section: title, desc, fills rest */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'linear-gradient(135deg, #5dd3c6 0%, #278da0 100%)', padding: '1.3rem 1.1rem', color: '#fff', minHeight: '170px' }}>
                <div>
                  <h4 style={{ marginBottom: '0.5rem', color: '#ffe082', fontWeight: 600 }}>Our Office Location</h4>
                  <p style={{ fontSize: '0.97rem', color: '#fff', margin: 0 }}>
                    Visit our corporate office and experience the Iyanthiran learning environment in person.
                  </p>
                </div>
                <div style={{ height: '2.2rem' }} />
              </div>
            </motion.div>

            {/* Modern Instagram Card */}
            <motion.div
              ref={cardRefs[1]}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={galleryCardVariants}
              whileHover={{ scale: 1.045, boxShadow: '0 8px 32px rgba(93,211,198,0.18)' }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              style={{
                background: themeGradient,
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.13)',
                display: 'flex',
                flexDirection: 'column',
                width: '320px',
                minHeight: '420px',
                maxHeight: '480px',
                position: 'relative',
                alignItems: 'center',
                transition: 'transform 0.3s ease',
                transform: `perspective(900px) rotateX(${parallax[1].rotateX}deg) rotateY(${parallax[1].rotateY}deg)`
              }}
              onMouseMove={e => handleParallax(e, 1)}
              onMouseLeave={() => resetParallax(1)}
            >
              {/* Top section: Instagram embed, fixed height, cropped to match image card */}
              <div style={{ width: '100%', height: '200px', background: '#e6faf8', flexShrink: 0, position: 'relative', overflow: 'hidden', borderTopLeftRadius: '18px', borderTopRightRadius: '18px' }}>
                {!instaError ? (
                  <iframe
                    title="Instagram Reel"
                    src="https://www.instagram.com/reel/DLr5RylTQBg/embed"
                    width="100%"
                    height="320"
                    frameBorder="0"
                    allowFullScreen
                    style={{ border: 0, borderRadius: '0', marginTop: '-55px', minHeight: '320px', background: '#e6faf8', pointerEvents: 'auto' }}
                    onError={() => setInstaError(true)}
                  ></iframe>
                ) : (
                  <div style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex', background: '#e6faf8' }}>
                    <FaInstagram size={70} color="#278da0" style={{ filter: 'drop-shadow(0 2px 8px #5dd3c6)' }} />
                    <span style={{ color: '#278da0', marginLeft: '1rem', fontWeight: 500 }}>Instagram video unavailable</span>
                  </div>
                )}
              </div>
              {/* Bottom section: title, desc, button, fills rest */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'linear-gradient(135deg, #5dd3c6 0%, #278da0 100%)', padding: '1.3rem 1.1rem', color: '#fff', width: '100%', minHeight: '170px' }}>
                <div>
                  <h4 style={{ marginBottom: '0.5rem', color: '#ffe082', fontWeight: 600 }}>On-Ground Workshop</h4>
                  <p style={{ fontSize: '0.97rem', color: '#fff', margin: 0 }}>
                    Students engaging in hands-on learning activities during our field training event.
                  </p>
                </div>
                <a
                  href="https://www.instagram.com/reel/DLr5RylTQBg/?utm_source=ig_web_copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    marginTop: '1.1rem',
                    background: themeAccent,
                    color: '#fff',
                    padding: '0.6rem 1.3rem',
                    borderRadius: '8px',
                    fontWeight: 500,
                    textDecoration: 'none',
                    fontSize: '1rem',
                    boxShadow: '0 2px 8px rgba(7,131,154,0.13)',
                    transition: 'background 0.2s, box-shadow 0.2s',
                    textAlign: 'center',
                  }}
                >
                  <FaInstagram style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> Watch on Instagram
                </a>
              </div>
            </motion.div>
          </div>
        </section>

    {/* Advanced tab styles for event tabs */}
    <style>{`
      .advanced-tab-btn {
        padding: 0.6rem 1.3rem;
        border-radius: 8px;
        background: #f0f8ff;
        color: #07839a;
        border: 1.5px solid #e6faf8;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        transition: background 0.2s, color 0.2s, border 0.2s, box-shadow 0.2s, transform 0.13s;
        box-shadow: 0 2px 8px rgba(93,211,198,0.04);
        outline: none;
        margin-bottom: 0;
      }
      .advanced-tab-btn.active, .advanced-tab-btn:hover {
        background: linear-gradient(90deg, #5dd3c6 0%, #278da0 100%);
        color: #fff;
        border: 1.5px solid #5dd3c6;
        box-shadow: 0 4px 16px rgba(93,211,198,0.13);
        transform: scale(1.06);
      }
      .advanced-event-tabs {
        margin-bottom: 2.5rem;
      }
      @media (max-width: 600px) {
        .advanced-tab-btn {
          font-size: 0.98rem;
          padding: 0.5rem 1rem;
        }
      }
    `}</style>
    </div>
  );
}