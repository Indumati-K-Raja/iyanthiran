import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Animation variants
const sectionFadeVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
};
const cardStaggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};
const cardFadeVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: 'spring', stiffness: 80 } }
};

const Home = () => {
  const imageStyle = {
    height: '180px',
    objectFit: 'contain',
    marginBottom: `${1.618}rem`
  };

    const lightThemeBg = {
    backgroundColor: '#f2ebe2',
    padding: `${2 * 1.618}rem 0`,
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const sectionWrapperStyle = {
    padding: `${1.618}rem`,
    borderRadius: '1.618rem',
    background: '#fff',
    boxShadow: '0 4px 24px rgba(34, 199, 182, 0.10)',
    transition: 'box-shadow 0.3s ease',
  };

  const hoverEffect = {
    boxShadow: '0 12px 36px rgba(34, 199, 182, 0.18)'
  };

  const buttonStyle = {
    padding: `${0.618 * 1.618}rem ${2 * 1.618}rem`,
    borderRadius: '0.618rem',
    fontWeight: 'bold',
    fontSize: '1.08rem',
    background: 'linear-gradient(90deg, #07839a 0%, #b85c38 100%)',
    color: '#fff',
    border: 'none',
    margin: `0 ${0.618 * 1.618}rem`,
    boxShadow: '0 2px 8px rgba(93,211,198,0.13)',
    transition: 'background 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
  };

  // Categories and scroll logic for Explore Course Categories
  const categories = [
    {
      label: 'IT & Software',
      icon: <i className="fa-solid fa-network-wired" style={{ fontSize: '2rem', color: '#222' }}></i>,
      bg: '#fbe3d3',
      iconBg: '#f6d7c3',
    },
    {
      label: 'Personal development',
      icon: <i className="fa-solid fa-user-graduate" style={{ fontSize: '2rem', color: '#222' }}></i>,
      bg: '#fdf0b3',
      iconBg: '#f7e7a3',
    },
    {
      label: 'Business',
      icon: <i className="fa-solid fa-handshake" style={{ fontSize: '2rem', color: '#222' }}></i>,
      bg: '#d7e7dd',
      iconBg: '#c7dbd1',
    },
    {
      label: 'Digital marketing',
      icon: <i className="fa-solid fa-bullhorn" style={{ fontSize: '2rem', color: '#222' }}></i>,
      bg: '#e3e6fa',
      iconBg: '#d3d7f6',
    },
  ];
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const updateScrollButtons = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };
  useEffect(() => { updateScrollButtons(); }, []);
  const scrollByAmount = (amount) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
      setTimeout(updateScrollButtons, 350);
    }
  };
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollButtons);
    return () => el.removeEventListener('scroll', updateScrollButtons);
  }, []);
  const getScrollAmount = () => {
    const amount = 300;
    console.log('ScrollRef:', scrollRef.current);
    console.log('Scroll amount:', amount);
    return amount;
  };

  return (
    <div style={{ background: '#fefcff', minHeight: '100vh', width: '100vw' }}>
      {/* HERO SECTION - Glassmorphism Card */}
      <section
        className="hero-section-modern"
        style={{
          minHeight: '70vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '5rem 1.5rem 4rem 1.5rem',
          position: 'relative',
          overflow: 'hidden',
          background: `url('/images/hom1.jpg') center/cover no-repeat`,
        }}
      >
        {/* Blurred overlay for glassmorphism effect */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(120deg, rgba(224,247,250,0.85) 60%, rgba(178,235,231,0.75) 100%)',
            zIndex: 1,
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        ></div>
        {/* Glassmorphism Card Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center',
            background: 'rgba(255,255,255,0.22)',
            borderRadius: '2.5rem',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
            padding: '3.5rem 2.5rem',
            backdropFilter: 'blur(16px) saturate(180%)',
            WebkitBackdropFilter: 'blur(16px) saturate(180%)',
            border: '1.5px solid rgba(255,255,255,0.35)',
            boxSizing: 'border-box',
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              fontSize: '2.8rem',
              fontWeight: 900,
              color: '#003d4d',
              marginBottom: '1.3rem',
              letterSpacing: '0.01em',
              lineHeight: 1.13,
              fontFamily: 'Poppins, Inter, Arial, sans-serif',
              textShadow: '0 2px 8px #e0f7fa99',
            }}
        >
          Spark Your Potential,<br />Mould Your Destiny
          </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontSize: '1.22rem',
              color: '#222',
              marginBottom: '2.3rem',
              fontWeight: 500,
              maxWidth: '500px',
              lineHeight: 1.6,
              margin: '0 auto',
              textShadow: '0 1px 8px #fff8',
            }}
        >
          Iyanthiran is a leading HR consulting and skill development firm that helps businesses and individuals achieve their goals.
        </motion.p>

          {/* Two buttons: Contact Us and About Us */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1.7rem', flexWrap: 'wrap' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ scale: 1.07, boxShadow: '0 6px 24px #07839a33' }}
              whileTap={{ scale: 0.97 }}
              style={{ borderRadius: '2rem', display: 'inline-block' }}
            >
              <Link
                to="/contactus"
                style={{
                  padding: '1.05rem 2.7rem',
                  borderRadius: '2rem',
                  fontWeight: 'bold',
                  fontSize: '1.15rem',
                  background: 'linear-gradient(90deg, #07839a 0%, #b85c38 100%)',
                  color: '#fff',
                  border: 'none',
                  margin: 0,
                  boxShadow: '0 2px 8px rgba(93,211,198,0.13)',
                  transition: 'background 0.2s, box-shadow 0.2s',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'inline-block',
                  letterSpacing: '0.01em',
                }}
              >
                <i className="fa-solid fa-envelope" style={{ marginRight: '0.7rem', fontSize: '1.2rem' }}></i>
                Contact Us
              </Link>
            </motion.div>
        <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              whileHover={{ scale: 1.07, boxShadow: '0 6px 24px #b85c3833' }}
              whileTap={{ scale: 0.97 }}
              style={{ borderRadius: '2rem', display: 'inline-block' }}
            >
              <Link
                to="/aboutus"
                style={{
                  padding: '1.05rem 2.7rem',
                  borderRadius: '2rem',
                  fontWeight: 'bold',
                  fontSize: '1.15rem',
                  background: 'linear-gradient(90deg, #b85c38 0%, #07839a 100%)',
                  color: '#fff',
                  border: 'none',
                  margin: 0,
                  boxShadow: '0 2px 8px rgba(93,211,198,0.13)',
                  transition: 'background 0.2s, box-shadow 0.2s',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'inline-block',
                  letterSpacing: '0.01em',
                }}
              >
                <i className="fa-solid fa-user" style={{ marginRight: '0.7rem', fontSize: '1.2rem' }}></i>
                About Us
              </Link>
        </motion.div>
          </div>
        </div>
      </section>

      {/* GROWTH & PERFORMANCE Section */}
      <motion.section
        variants={sectionFadeVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{
          background: '#fefcff',
          padding: '1.5rem 1.5rem',
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: `${2 * 1.618}rem` }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            color: '#07839a', 
            fontWeight: 800, 
            marginBottom: '0.5rem',
            letterSpacing: '0.01em'
          }}>
            Growth & Performance
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#666', 
            maxWidth: '600px', 
            margin: '0 auto',
            fontWeight: 500
          }}>
            Transform your organization with data-driven strategies and performance optimization
          </p>
          </div>
        
          <motion.div
          variants={cardStaggerContainer}
                  initial="hidden"
                  whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '1.5rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          {/* Card 1 */}
          <motion.div variants={cardFadeVariant} style={{ 
            background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
            borderRadius: '1.2rem', 
            padding: '1.5rem',
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{ 
              position: 'absolute', 
              top: '1rem', 
              left: '1rem', 
              background: 'rgba(255,255,255,0.9)', 
              padding: '0.5rem 1rem', 
              borderRadius: '2rem',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: '#1976d2'
            }}>
              GROWTH
            </div>
            <div style={{ marginTop: '3rem' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem', 
                marginBottom: '1rem' 
              }}>
                <i className="fa-solid fa-arrow-trend-up" style={{ 
                  fontSize: '2rem', 
                  color: '#1565c0' 
                }}></i>
                <h3 style={{ 
                  fontSize: '1.4rem', 
                  fontWeight: 700, 
                  color: '#1565c0', 
                  margin: 0,
                  lineHeight: 1.3
                }}>
                  Driving Organization Growth
                </h3>
              </div>
              <p style={{ 
                color: '#424242', 
                fontSize: '1rem', 
                lineHeight: 1.6,
                marginBottom: '0'
              }}>
                Empower your workforce for sustainable growth with strategic HR consulting services tailored to your organization's unique needs.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={cardFadeVariant} style={{ 
            background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)',
            borderRadius: '1.2rem', 
            padding: '1.5rem',
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{ 
              position: 'absolute', 
              top: '1rem', 
              left: '1rem', 
              background: 'rgba(255,255,255,0.9)', 
              padding: '0.5rem 1rem', 
              borderRadius: '2rem',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: '#7b1fa2'
            }}>
              PERFORMANCE
            </div>
            <div style={{ marginTop: '3rem' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem', 
                marginBottom: '1rem' 
              }}>
                <i className="fa-solid fa-person-chalkboard" style={{ 
                  fontSize: '2rem', 
                  color: '#6a1b9a' 
                }}></i>
                <h3 style={{ 
                  fontSize: '1.4rem', 
                  fontWeight: 700, 
                  color: '#6a1b9a', 
                  margin: 0,
                  lineHeight: 1.3
                }}>
                  Enhancing Employee Performance
                </h3>
              </div>
              <p style={{ 
                color: '#424242', 
                fontSize: '1rem', 
                lineHeight: 1.6,
                marginBottom: '0'
              }}>
                Elevate your team's performance through targeted HR consulting solutions. We help optimize workflows and foster a culture of continuous improvement.
              </p>
                  </div>
                </motion.div>

          {/* Card 3 */}
          <motion.div variants={cardFadeVariant} style={{ 
            background: 'linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)',
            borderRadius: '1.2rem', 
            padding: '1.5rem',
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{ 
              position: 'absolute', 
              top: '1rem', 
              left: '1rem', 
              background: 'rgba(255,255,255,0.9)', 
              padding: '0.5rem 1rem', 
              borderRadius: '2rem',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: '#388e3c'
            }}>
              ANALYTICS
            </div>
            <div style={{ marginTop: '3rem' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem', 
                marginBottom: '1rem' 
              }}>
                <i className="fa-solid fa-chart-pie" style={{ 
                  fontSize: '2rem', 
                  color: '#2e7d32' 
                }}></i>
                <h3 style={{ 
                  fontSize: '1.4rem', 
                  fontWeight: 700, 
                  color: '#2e7d32', 
                  margin: 0,
                  lineHeight: 1.3
                }}>
                  Metrics-Driven Decision Making
                </h3>
              </div>
              <p style={{ 
                color: '#424242', 
                fontSize: '1rem', 
                lineHeight: 1.6,
                marginBottom: '0'
              }}>
                Revolutionize your decision-making processes with data-driven insights and comprehensive analytics.
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div variants={cardFadeVariant} style={{ 
            background: 'linear-gradient(135deg, #fff3e0 0%, #ffcc02 100%)',
            borderRadius: '1.2rem', 
            padding: '1.5rem',
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{ 
              position: 'absolute', 
              top: '1rem', 
              left: '1rem', 
              background: 'rgba(255,255,255,0.9)', 
              padding: '0.5rem 1rem', 
              borderRadius: '2rem',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: '#f57c00'
            }}>
              CULTURE
            </div>
            <div style={{ marginTop: '3rem' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem', 
                marginBottom: '1rem' 
              }}>
                <i className="fa-solid fa-people-group" style={{ 
                  fontSize: '2rem', 
                  color: '#ef6c00' 
                }}></i>
                <h3 style={{ 
                  fontSize: '1.4rem', 
                  fontWeight: 700, 
                  color: '#ef6c00', 
                  margin: 0,
                  lineHeight: 1.3
                }}>
                  Creating a High-Performance Culture
                </h3>
        </div>
              <p style={{ 
                color: '#424242', 
                fontSize: '1rem', 
                lineHeight: 1.6,
                marginBottom: '0'
              }}>
                Foster a culture of excellence with our leadership development and employee engagement strategies.
              </p>
    </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* WHAT WE OFFER Section */}
      <motion.section
        variants={sectionFadeVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{
          background: '#fefcff',
          padding: '1rem 1rem',
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            color: '#b85c38', 
            fontWeight: 800, 
            marginBottom: '0.5rem',
            letterSpacing: '0.01em',
            paddingTop: '1rem'
          }}>
            What We Offer
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#666', 
            maxWidth: '600px', 
            margin: '0 auto',
            fontWeight: 500
          }}>
            Comprehensive solutions designed to meet your business needs and drive success
          </p>
          </div>
        
          <motion.div
          variants={cardStaggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: `${1.618}rem`,
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          {/* Card 1 */}
          <motion.div variants={cardFadeVariant} style={{ 
            background: 'linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%)',
            borderRadius: '1.2rem', 
            padding: '1.5rem',
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{ 
              position: 'absolute', 
              top: '1rem', 
              left: '1rem', 
              background: 'rgba(255,255,255,0.9)', 
              padding: '0.5rem 1rem', 
              borderRadius: '2rem',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: '#00695c'
            }}>
              TECHNOLOGY
            </div>
            <div style={{ marginTop: '3rem' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem', 
                marginBottom: '1rem' 
              }}>
                <i className="fa-solid fa-microchip" style={{ 
                  fontSize: '2rem', 
                  color: '#004d40' 
                }}></i>
                <h3 style={{ 
                  fontSize: '1.4rem', 
                  fontWeight: 700, 
                  color: '#004d40', 
                  margin: 0,
                  lineHeight: 1.3
                }}>
                  Advanced Technologies
                </h3>
              </div>
              <p style={{ 
                color: '#424242', 
                fontSize: '1rem', 
                lineHeight: 1.6,
                marginBottom: '0'
              }}>
                Leverage our deep knowledge in AI/ML, IoT, analytics, pharma, FMCG and semiconductor industries to stay ahead of the curve.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={cardFadeVariant} style={{ 
            background: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%)',
            borderRadius: '1.2rem', 
            padding: '1.5rem',
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{ 
              position: 'absolute', 
              top: '1rem', 
              left: '1rem', 
              background: 'rgba(255,255,255,0.9)', 
              padding: '0.5rem 1rem', 
              borderRadius: '2rem',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: '#c2185b'
            }}>
              SOLUTIONS
            </div>
            <div style={{ marginTop: '3rem' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem', 
                marginBottom: '1rem' 
              }}>
                <i className="fa-solid fa-puzzle-piece" style={{ 
                  fontSize: '2rem', 
                  color: '#ad1457' 
                }}></i>
                <h3 style={{ 
                  fontSize: '1.4rem', 
                  fontWeight: 700, 
                  color: '#ad1457', 
                  margin: 0,
                  lineHeight: 1.3
                }}>
                  Customized Solutions
                </h3>
              </div>
              <p style={{ 
                color: '#424242', 
                fontSize: '1rem', 
                lineHeight: 1.6,
                marginBottom: '0'
              }}>
                We specialize in creating tailored solutions that meet the unique needs of your business and industry requirements.
              </p>
            </div>
                  </motion.div>

          {/* Card 3 */}
          <motion.div variants={cardFadeVariant} style={{ 
            background: 'linear-gradient(135deg, #e8eaf6 0%, #c5cae9 100%)',
            borderRadius: '1.2rem', 
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{ 
              position: 'absolute', 
              top: '1rem', 
              left: '1rem', 
              background: 'rgba(255,255,255,0.9)', 
              padding: '0.5rem 1rem', 
              borderRadius: '2rem',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: '#3f51b5'
            }}>
              TRACK RECORD
            </div>
            <div style={{ marginTop: '3rem' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem', 
                marginBottom: '1rem' 
              }}>
                <i className="fa-solid fa-award" style={{ 
                  fontSize: '2rem', 
                  color: '#303f9f' 
                }}></i>
                <h3 style={{ 
                  fontSize: '1.4rem', 
                  fontWeight: 700, 
                  color: '#303f9f', 
                  margin: 0,
                  lineHeight: 1.3
                }}>
                  Proven Track Record
                </h3>
              </div>
              <p style={{ 
                color: '#424242', 
                fontSize: '1rem', 
                lineHeight: 1.6,
                marginBottom: '0'
              }}>
                With years of experience and a portfolio of successful projects, we are a trusted partner in technology innovation.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* SERVICES Section (restored) */}
      <motion.section
        variants={sectionFadeVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{
          background: '#fefcff',
          padding: `1rem 1rem`,
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: `${2 * 1.618}rem` }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            color: '#07839a', 
            fontWeight: 800, 
            marginBottom: '0.5rem',
            letterSpacing: '0.01em',
            paddingTop: '1rem'
          }}>
            Services
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#666', 
            maxWidth: '600px', 
            margin: '0 auto',
            fontWeight: 500
          }}>
            Comprehensive HR solutions to drive your business forward
          </p>
        </div>
                <motion.div
          variants={cardStaggerContainer}
                  initial="hidden"
                  whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: `${1.618}rem`,
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          {/* Card 1: Placements */}
          <motion.div variants={cardFadeVariant} style={{ 
            background: 'linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%)',
            borderRadius: '1.2rem', 
            padding: `${1.5 * 1.618}rem`,
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{ 
              position: 'absolute', 
              top: '1rem', 
              left: '1rem', 
              background: 'rgba(255,255,255,0.9)', 
              padding: '0.5rem 1rem', 
              borderRadius: '2rem',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: '#f57f17'
            }}>
              PLACEMENTS
            </div>
            <div style={{ marginTop: '3rem' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem', 
                marginBottom: '1rem' 
              }}>
                <i className="fa-solid fa-briefcase" style={{ 
                  fontSize: '2rem', 
                  color: '#ef6c00' 
                }}></i>
                <h3 style={{ 
                  fontSize: '1.4rem', 
                  fontWeight: 700, 
                  color: '#ef6c00', 
                  margin: 0,
                  lineHeight: 1.3
                }}>
                  Placements
                </h3>
              </div>
              <p style={{ 
                color: '#424242', 
                fontSize: '1rem', 
                lineHeight: 1.6,
                marginBottom: '0'
              }}>
                Discover more relevant content tailored to your interests with our comprehensive placement services.
              </p>
            </div>
     </motion.div> 

          {/* Card 2: Training And Skill Development */}
          <motion.div variants={cardFadeVariant} style={{ 
            background: 'linear-gradient(135deg, #e1f5fe 0%, #b3e5fc 100%)',
            borderRadius: '1.2rem', 
            padding: `${1.5 * 1.618}rem`,
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{ 
              position: 'absolute', 
              top: '1rem', 
              left: '1rem', 
              background: 'rgba(255,255,255,0.9)', 
              padding: '0.5rem 1rem', 
              borderRadius: '2rem',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: '#0277bd'
            }}>
              TRAINING
            </div>
            <div style={{ marginTop: '3rem' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem', 
                marginBottom: '1rem' 
              }}>
                <i className="fa-solid fa-graduation-cap" style={{ 
                  fontSize: '2rem', 
                  color: '#01579b' 
                }}></i>
                <h3 style={{ 
                  fontSize: '1.4rem', 
                  fontWeight: 700, 
                  color: '#01579b', 
                  margin: 0,
                  lineHeight: 1.3
                }}>
                  Training And Skill Development
                </h3>
              </div>
              <p style={{ 
                color: '#424242', 
                fontSize: '1rem', 
                lineHeight: 1.6,
                marginBottom: '0'
              }}>
                Investing in training and skill development enhances employee performance and drives organizational growth.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Partnerships */}
          <motion.div variants={cardFadeVariant} style={{ 
            background: 'linear-gradient(135deg, #f1f8e9 0%, #dcedc8 100%)',
            borderRadius: '1.2rem', 
            padding: `${1.5 * 1.618}rem`,
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{ 
              position: 'absolute', 
              top: '1rem', 
              left: '1rem', 
              background: 'rgba(255,255,255,0.9)', 
              padding: '0.5rem 1rem', 
              borderRadius: '2rem',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: '#558b2f'
            }}>
              PARTNERSHIPS
            </div>
            <div style={{ marginTop: '3rem' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem', 
                marginBottom: '1rem' 
              }}>
                <i className="fa-solid fa-handshake" style={{ 
                  fontSize: '2rem', 
                  color: '#33691e' 
                }}></i>
                <h3 style={{ 
                  fontSize: '1.4rem', 
                  fontWeight: 700, 
                  color: '#33691e', 
                  margin: 0,
                  lineHeight: 1.3
                }}>
                  Partnerships
                </h3>
                  </div>
              <p style={{ 
                color: '#424242', 
                fontSize: '1rem', 
                lineHeight: 1.6,
                marginBottom: '0'
              }}>
                We build strong partnerships that extend our capabilities and create value-driven solutions for our clients across various industries.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* EXPLORE COURSE CATEGORIES SECTION */}
      <motion.section
        variants={sectionFadeVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{
          background: '#fdf6ee',
          paddingTop: '1rem',
          paddingBottom: '3rem',
          display: 'flex',
          marginTop: '1rem',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '40vh',
          flexDirection: 'column',
        }}
      >
        <div style={{ width: '100%', maxWidth: '1400px', display: 'flex', gap: '2.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          {/* Left: Heading and button */}
          <div style={{ flex: '1 1 320px', minWidth: 260, maxWidth: 400 }}>
            <h2 style={{ fontSize: '2.7rem', color: '#222', fontWeight: 800, margin: 0, lineHeight: 1.1 }}>Explore course<br />categories</h2>
            <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '1.2rem 0 2rem 0' }}>
              <motion.div
                whileHover={{ scale: 1.07, boxShadow: '0 6px 24px #07839a33' }}
                whileTap={{ scale: 0.97 }}
                style={{ borderRadius: '2rem', display: 'inline-block' }}
              >
                <Link
                  to="/courses"
                  style={{
                    padding: '1.05rem 2.7rem',
                    borderRadius: '2rem',
                    fontWeight: 'bold',
                    fontSize: '1.15rem',
                    background: 'linear-gradient(90deg, #07839a 0%, #b85c38 100%)',
                    color: '#fff',
                    border: 'none',
                    margin: 0,
                    boxShadow: '0 2px 8px rgba(93,211,198,0.13)',
                    transition: 'background 0.2s, box-shadow 0.2s',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    display: 'inline-block',
                    letterSpacing: '0.01em',
                  }}
                >
                  <i className="fa-solid fa-graduation-cap" style={{ marginRight: '0.7rem', fontSize: '1.2rem' }}></i>
                  Explore Courses
                </Link>
              </motion.div>
     </div> 
          </div>
          {/* Right: Scrollable cards and buttons */}
          <div style={{ flex: '3 1 600px', minWidth: 320, width: '100%', display: 'flex', alignItems: 'center' }}>
            <div
              ref={scrollRef}
              style={{
                display: 'flex',
                gap: `${1.618}rem`,
                minHeight: '260px',
                overflowX: 'auto',
                paddingBottom: '0.5rem',
                scrollbarWidth: 'thin',
                scrollBehavior: 'smooth',
                width: '100%',
                scrollSnapType: 'x mandatory',
              }}
            >
              {categories.map((cat, idx) => (
                <motion.div
                  variants={cardFadeVariant}
                  key={cat.label}
                  style={{
                    background: cat.bg,
                    borderRadius: '1.2rem',
                    padding: `${1.618}rem`,
                    minWidth: '260px',
                    minHeight: '260px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-end',
                    boxShadow: 'none',
                    flex: '0 0 48%', // About half the row
                    scrollSnapAlign: 'start',
                  }}
                >
                  <div style={{ background: cat.iconBg, borderRadius: '50%', width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                    {cat.icon}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '1.18rem', color: '#222' }}>{cat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      <style>{`
        html { scroll-behavior: smooth; }
        @media (max-width: 900px) {
          .hero h2 { font-size: 2rem !important; }
        }
      `}</style>
    </div>
  );
};

export default Home;
