import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaHandshake, FaGraduationCap, FaBriefcase, FaFileInvoiceDollar } from 'react-icons/fa';


function Partnership() {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const promiseRef = useRef(null);
  const promiseInView = useInView(promiseRef, { once: true, margin: '-100px' });

  const slideUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    // Set page background color
    const prevBg = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#fefcff';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      document.body.style.backgroundColor = prevBg;
    };
  }, []);

  return (
    <div style={{ background: '#fefcff', minHeight: '100vh', width: '100vw' }}>
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundColor: '#f0f8ff',
          padding: '3rem 1rem',
          textAlign: 'center',
          marginBottom: '1.5rem',
        }}
      >
        <motion.h2
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            fontSize: '2rem',
            marginBottom: '1rem',
            color: '',
          }}
        >
          Build Careers. Build Futures. Build Success.
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            fontSize: '1.1rem',
            maxWidth: '800px',
            margin: '0 auto',
            color: '',
          }}
        >
          Empowering careers through collaboration. Join hands with Iyanthiran Edge to bring real career success to students and professionals.
        </motion.p>
      </section>

      {/* Why Partner */}
      <section
        ref={sectionRef}
        style={{
          background: '#fff',
          padding: '2.5rem 0',
          margin: '0 auto 1.5rem auto',
          borderRadius: '18px',
          maxWidth: '1200px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
          position: 'relative',
          overflow: 'visible',
        }}
      >
        <h3 style={{ color: '#07839a', marginBottom: '2.2rem', fontSize: '1.8rem', textAlign: 'center', fontWeight: 700 }}>
          Why Partner with Iyanthiran?
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2.2rem',
          maxWidth: '900px',
          margin: '0 auto',
          zIndex: 2,
          position: 'relative',
        }}>
          <motion.div
            whileHover={{
              scale: 1.045,
              boxShadow: '0 12px 36px rgba(0,0,0,0.18)',
              backgroundColor: '#aee7e1',
            }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            style={{ background: '#b2ebe7', border: '1.5px solid #b2ebe7', borderRadius: '14px', boxShadow: '0 8px 32px rgba(0,0,0,0.13)', padding: '1.3rem 0.8rem', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
          >
            <i className="fa-solid fa-user-graduate" style={{ color: '#07839a', fontSize: '1.7rem', marginBottom: '0.5rem' }}></i>
            <div style={{ fontWeight: 600, color: '#07839a', fontSize: '0.92rem', marginBottom: '0.2rem', textAlign: 'center' }}>12,000+ students trained<br/>3,500+ placements</div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.045,
              boxShadow: '0 12px 36px rgba(0,0,0,0.18)',
              backgroundColor: '#aee7e1',
            }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            style={{ background: '#b2ebe7', border: '1.5px solid #b2ebe7', borderRadius: '14px', boxShadow: '0 8px 32px rgba(0,0,0,0.13)', padding: '1.3rem 0.8rem', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
          >
            <i className="fa-solid fa-chalkboard-teacher" style={{ color: '#07839a', fontSize: '1.7rem', marginBottom: '0.5rem' }}></i>
            <div style={{ fontWeight: 600, color: '#07839a', fontSize: '0.92rem', marginBottom: '0.2rem', textAlign: 'center' }}>Career-focused training<br/>Practical programs</div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.045,
              boxShadow: '0 12px 36px rgba(0,0,0,0.18)',
              backgroundColor: '#aee7e1',
            }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            style={{ background: '#b2ebe7', border: '1.5px solid #b2ebe7', borderRadius: '14px', boxShadow: '0 8px 32px rgba(0,0,0,0.13)', padding: '1.3rem 0.8rem', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
          >
            <i className="fa-solid fa-briefcase" style={{ color: '#07839a', fontSize: '1.7rem', marginBottom: '0.5rem' }}></i>
            <div style={{ fontWeight: 600, color: '#07839a', fontSize: '0.92rem', marginBottom: '0.2rem', textAlign: 'center' }}>Customized HR solutions<br/>Colleges & corporates</div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.045,
              boxShadow: '0 12px 36px rgba(0,0,0,0.18)',
              backgroundColor: '#aee7e1',
            }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            style={{ background: '#b2ebe7', border: '1.5px solid #b2ebe7', borderRadius: '14px', boxShadow: '0 8px 32px rgba(0,0,0,0.13)', padding: '1.3rem 0.8rem', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
          >
            <i className="fa-solid fa-lightbulb" style={{ color: '#07839a', fontSize: '1.7rem', marginBottom: '0.5rem' }}></i>
            <div style={{ fontWeight: 600, color: '#07839a', fontSize: '0.92rem', marginBottom: '0.2rem', textAlign: 'center' }}>Real-time workshops<br/>Project-based learning</div>
          </motion.div>
        </div>
        <motion.img
          src="/images/PartWidUs.png"
          alt="Why Partner"
          initial={{ opacity: 1 }}
          animate={sectionInView ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 2 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            backgroundColor: 'white',
            borderRadius: '18px',
            pointerEvents: 'none',
          }}
        />
      </section>

      {/* Partnership Options */}
      <section
        style={{
          padding: '1.5rem 0',
          margin: 0,
          width: '100%',
          position: 'relative',
          overflow: 'visible',
        }}
      >
        <h3 style={{ color: '#07839a', marginBottom: '2.2rem', fontSize: '1.8rem', textAlign: 'center', fontWeight: 700 }}>
          Partnership Options
        </h3>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '4.5rem', // Further increased gap for more space between cards
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          {/* Card 1 */}
        <motion.div
            whileHover={{
              scale: 1.045,
              boxShadow: '0 16px 40px rgba(34,199,182,0.18)',
            }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            style={{
              background: '#fff',
              borderRadius: '2.5rem',
              boxShadow: '0 8px 32px rgba(0,0,0,0.13)',
              padding: '2.8rem 2.2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: '320px',
              maxWidth: '340px',
              border: '1.5px solid #e0f7fa',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18 }}
          style={{
                background: 'rgba(34,199,182,0.12)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.7rem',
              }}
            >
              <i className="fa-solid fa-university" style={{ color: '#07839a', fontSize: '2.2rem' }}></i>
            </motion.div>
            <h4 style={{
              color: '#07839a',
              fontWeight: 700,
              fontSize: '1.32rem',
              marginBottom: '1.1rem',
              textAlign: 'center',
              letterSpacing: '0.01em',
              fontFamily: 'Segoe UI, Arial, Helvetica Neue, Helvetica, sans-serif',
              lineHeight: 1.2,
            }}>College Partnerships</h4>
            <ul style={{ color: '#222', fontSize: '1.04rem', marginBottom: '1.3rem', textAlign: 'left', listStyle: 'none', padding: 0, width: '100%' }}>
              <li style={{display:'flex',alignItems:'center',marginBottom:'0.7em'}}><span style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:'1.5em',height:'1.5em',background:'#b2ebe7',borderRadius:'50%',marginRight:'0.7em'}}><i className="fa-solid fa-circle-check" style={{ color: '#22c7b6', fontSize: '1em' }}></i></span>Career-focused programs</li>
              <li style={{display:'flex',alignItems:'center',marginBottom:'0.7em'}}><span style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:'1.5em',height:'1.5em',background:'#b2ebe7',borderRadius:'50%',marginRight:'0.7em'}}><i className="fa-solid fa-circle-check" style={{ color: '#22c7b6', fontSize: '1em' }}></i></span>Internships & final year training</li>
              <li style={{display:'flex',alignItems:'center',marginBottom:'0.7em'}}><span style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:'1.5em',height:'1.5em',background:'#b2ebe7',borderRadius:'50%',marginRight:'0.7em'}}><i className="fa-solid fa-circle-check" style={{ color: '#22c7b6', fontSize: '1em' }}></i></span>Workshops on soft skills & aptitude</li>
              <li style={{display:'flex',alignItems:'center',marginBottom:'0.7em'}}><span style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:'1.5em',height:'1.5em',background:'#b2ebe7',borderRadius:'50%',marginRight:'0.7em'}}><i className="fa-solid fa-circle-check" style={{ color: '#22c7b6', fontSize: '1em' }}></i></span>Implant training & industry visits</li>
            </ul>
            <div style={{ color: '#07839a', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem', textAlign: 'left', width: '100%' }}>Benefits</div>
            <ul style={{ color: '#555', fontSize: '1.01rem', textAlign: 'left', listStyle: 'none', padding: 0, width: '100%' }}>
              <li style={{display:'flex',alignItems:'center',marginBottom:'0.6em'}}><span style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:'1.3em',height:'1.3em',background:'#fffbe7',borderRadius:'50%',marginRight:'0.7em'}}><i className="fa-regular fa-star" style={{ color: '#f7b731', fontSize: '0.95em' }}></i></span>Boost placement results</li>
              <li style={{display:'flex',alignItems:'center',marginBottom:'0.6em'}}><span style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:'1.3em',height:'1.3em',background:'#fffbe7',borderRadius:'50%',marginRight:'0.7em'}}><i className="fa-regular fa-star" style={{ color: '#f7b731', fontSize: '0.95em' }}></i></span>Career-ready reputation</li>
            </ul>
          </motion.div>
          {/* Card 2 */}
          <motion.div
            whileHover={{
              scale: 1.045,
              boxShadow: '0 16px 40px rgba(34,199,182,0.18)',
            }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            style={{
              background: '#fff',
              borderRadius: '2.5rem',
              boxShadow: '0 8px 32px rgba(0,0,0,0.13)',
              padding: '2.8rem 2.2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: '320px',
              maxWidth: '340px',
              border: '1.5px solid #e0f7fa',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.26 }}
              style={{
                background: 'rgba(34,199,182,0.12)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.7rem',
              }}
            >
              <i className="fa-solid fa-building" style={{ color: '#07839a', fontSize: '2.2rem' }}></i>
            </motion.div>
            <h4 style={{
              color: '#07839a',
              fontWeight: 700,
              fontSize: '1.32rem',
              marginBottom: '1.1rem',
              textAlign: 'center',
              letterSpacing: '0.01em',
              fontFamily: 'Segoe UI, Arial, Helvetica Neue, Helvetica, sans-serif',
              lineHeight: 1.2,
            }}>Corporate Partnerships</h4>
            <ul style={{ color: '#222', fontSize: '1.04rem', marginBottom: '1.3rem', textAlign: 'left', listStyle: 'none', padding: 0, width: '100%' }}>
              <li style={{display:'flex',alignItems:'center',marginBottom:'0.7em'}}><span style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:'1.5em',height:'1.5em',background:'#b2ebe7',borderRadius:'50%',marginRight:'0.7em'}}><i className="fa-solid fa-circle-check" style={{ color: '#22c7b6', fontSize: '1em' }}></i></span>Pre-screened talent pool</li>
              <li style={{display:'flex',alignItems:'center',marginBottom:'0.7em'}}><span style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:'1.5em',height:'1.5em',background:'#b2ebe7',borderRadius:'50%',marginRight:'0.7em'}}><i className="fa-solid fa-circle-check" style={{ color: '#22c7b6', fontSize: '1em' }}></i></span>Custom recruitment drives</li>
              <li style={{display:'flex',alignItems:'center',marginBottom:'0.7em'}}><span style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:'1.5em',height:'1.5em',background:'#b2ebe7',borderRadius:'50%',marginRight:'0.7em'}}><i className="fa-solid fa-circle-check" style={{ color: '#22c7b6', fontSize: '1em' }}></i></span>Internship-to-hire support</li>
              <li style={{display:'flex',alignItems:'center',marginBottom:'0.7em'}}><span style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:'1.5em',height:'1.5em',background:'#b2ebe7',borderRadius:'50%',marginRight:'0.7em'}}><i className="fa-solid fa-circle-check" style={{ color: '#22c7b6', fontSize: '1em' }}></i></span>CSR training initiatives</li>
            </ul>
            <div style={{ color: '#07839a', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem', textAlign: 'left', width: '100%' }}>Benefits</div>
            <ul style={{ color: '#555', fontSize: '1.01rem', textAlign: 'left', listStyle: 'none', padding: 0, width: '100%' }}>
              <li style={{display:'flex',alignItems:'center',marginBottom:'0.6em'}}><span style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:'1.3em',height:'1.3em',background:'#fffbe7',borderRadius:'50%',marginRight:'0.7em'}}><i className="fa-regular fa-star" style={{ color: '#f7b731', fontSize: '0.95em' }}></i></span>Faster hiring</li>
              <li style={{display:'flex',alignItems:'center',marginBottom:'0.6em'}}><span style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:'1.3em',height:'1.3em',background:'#fffbe7',borderRadius:'50%',marginRight:'0.7em'}}><i className="fa-regular fa-star" style={{ color: '#f7b731', fontSize: '0.95em' }}></i></span>Job-ready candidates</li>
              <li style={{display:'flex',alignItems:'center',marginBottom:'0.6em'}}><span style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:'1.3em',height:'1.3em',background:'#fffbe7',borderRadius:'50%',marginRight:'0.7em'}}><i className="fa-regular fa-star" style={{ color: '#f7b731', fontSize: '0.95em' }}></i></span>Boost brand & CSR</li>
            </ul>
          </motion.div>
          {/* Card 3: Sponsorship Opportunities */}
          <motion.div
            whileHover={{
              scale: 1.045,
              boxShadow: '0 16px 40px rgba(34,199,182,0.18)',
            }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            style={{
              background: '#fff',
              borderRadius: '2.5rem',
              boxShadow: '0 8px 32px rgba(0,0,0,0.13)',
              padding: '2.8rem 2.2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: '320px',
              maxWidth: '340px',
              border: '1.5px solid #e0f7fa',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.34 }}
              style={{
                background: 'rgba(34,199,182,0.12)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.7rem',
              }}
            >
              <i className="fa-solid fa-hand-holding-heart" style={{ color: '#07839a', fontSize: '2.2rem' }}></i>
            </motion.div>
            <h4 style={{
              color: '#07839a',
              fontWeight: 700,
              fontSize: '1.32rem',
              marginBottom: '1.1rem',
              textAlign: 'center',
              letterSpacing: '0.01em',
              fontFamily: 'Segoe UI, Arial, Helvetica Neue, Helvetica, sans-serif',
              lineHeight: 1.2,
            }}>Sponsorship Opportunities</h4>
            <ul style={{ color: '#222', fontSize: '1.04rem', marginBottom: '1.3rem', textAlign: 'left', listStyle: 'none', padding: 0, width: '100%' }}>
              <li style={{display:'flex',alignItems:'center',marginBottom:'0.7em'}}><span style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:'1.5em',height:'1.5em',background:'#b2ebe7',borderRadius:'50%',marginRight:'0.7em'}}><i className="fa-solid fa-circle-check" style={{ color: '#22c7b6', fontSize: '1em' }}></i></span>Skill development sponsorships</li>
              <li style={{display:'flex',alignItems:'center',marginBottom:'0.7em'}}><span style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:'1.5em',height:'1.5em',background:'#b2ebe7',borderRadius:'50%',marginRight:'0.7em'}}><i className="fa-solid fa-circle-check" style={{ color: '#22c7b6', fontSize: '1em' }}></i></span>Career camps for rural youth</li>
              <li style={{display:'flex',alignItems:'center',marginBottom:'0.7em'}}><span style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:'1.5em',height:'1.5em',background:'#b2ebe7',borderRadius:'50%',marginRight:'0.7em'}}><i className="fa-solid fa-circle-check" style={{ color: '#22c7b6', fontSize: '1em' }}></i></span>Women’s job readiness programs</li>
            </ul>
            <div style={{ color: '#07839a', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem', textAlign: 'left', width: '100%' }}>Benefits</div>
            <ul style={{ color: '#555', fontSize: '1.01rem', textAlign: 'left', listStyle: 'none', padding: 0, width: '100%' }}>
              <li style={{display:'flex',alignItems:'center',marginBottom:'0.6em'}}><span style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:'1.3em',height:'1.3em',background:'#fffbe7',borderRadius:'50%',marginRight:'0.7em'}}><i className="fa-regular fa-star" style={{ color: '#f7b731', fontSize: '0.95em' }}></i></span>Support real impact</li>
              <li style={{display:'flex',alignItems:'center',marginBottom:'0.6em'}}><span style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:'1.3em',height:'1.3em',background:'#fffbe7',borderRadius:'50%',marginRight:'0.7em'}}><i className="fa-regular fa-star" style={{ color: '#f7b731', fontSize: '0.95em' }}></i></span>Promote your brand</li>
              <li style={{display:'flex',alignItems:'center',marginBottom:'0.6em'}}><span style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:'1.3em',height:'1.3em',background:'#fffbe7',borderRadius:'50%',marginRight:'0.7em'}}><i className="fa-regular fa-star" style={{ color: '#f7b731', fontSize: '0.95em' }}></i></span>Drive positive change</li>
            </ul>
          </motion.div>
        </div>
      </section>

         {/* Partner Promise Section */}
      <section
        style={{
          background: '#fefcff',
          borderRadius: '24px',
          boxShadow: '0 4px 24px #b85c3811',
          padding: '2rem 1rem',
          maxWidth: 1100,
          margin: '2rem auto 1.5rem auto',
        }}
      >
        <h3 style={{ color: '#07839a', marginBottom: '1.5rem', fontSize: '2rem', textAlign: 'center', fontWeight: 900, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Our Partner Promise
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.3rem',
          }}
        >
          {/* Card 1 */}
          <div style={{
            background: '#f2ebe2',
              borderRadius: '18px',
            padding: '1.2rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            boxShadow: '0 2px 12px #b85c3811',
            minHeight: 160,
          }}>
            <span style={{
              background: '#b2ebe7',
              borderRadius: '50%',
              width: 44,
              height: 44,
              display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.7rem',
              fontSize: '1.7rem',
              color: '#07839a',
            }}>
              <FaHandshake />
            </span>
            <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.3rem', color: '#222' }}>
              Transparent, goal-oriented collaboration
            </div>
          </div>
          {/* Card 2 */}
          <div style={{
            background: '#e6f7f4',
              borderRadius: '18px',
            padding: '1.2rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            boxShadow: '0 2px 12px #b85c3811',
            minHeight: 160,
          }}>
            <span style={{
              background: '#fbeee6',
              borderRadius: '50%',
              width: 44,
              height: 44,
              display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.7rem',
              fontSize: '1.7rem',
              color: '#b85c38',
            }}>
              <FaGraduationCap />
            </span>
            <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.3rem', color: '#222' }}>
              Quality training & career guidance
            </div>
          </div>
          {/* Card 3 */}
          <div style={{
            background: '#fbeee6',
              borderRadius: '18px',
            padding: '1.2rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            boxShadow: '0 2px 12px #b85c3811',
            minHeight: 160,
          }}>
            <span style={{
              background: '#e6f7f4',
              borderRadius: '50%',
              width: 44,
              height: 44,
              display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.7rem',
              fontSize: '1.7rem',
              color: '#07839a',
            }}>
              <FaBriefcase />
            </span>
            <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.3rem', color: '#222' }}>
              Strategic industry-readiness support
            </div>
          </div>
          {/* Card 4 */}
          <div style={{
            background: '#b2ebe7',
              borderRadius: '18px',
            padding: '1.2rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            boxShadow: '0 2px 12px #b85c3811',
            minHeight: 160,
          }}>
            <span style={{
              background: '#fff',
              borderRadius: '50%',
              width: 44,
              height: 44,
              display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.7rem',
              fontSize: '1.7rem',
              color: '#b85c38',
            }}>
              <FaFileInvoiceDollar />
            </span>
            <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.3rem', color: '#222' }}>
              Complete HR services for hiring success
            </div>
          </div>
        </div>
      </section>

      {/* Join the Movement Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          background: '#FCFBF7',
          padding: '1.5rem 0',
          margin: 0,
          borderRadius: 0,
          maxWidth: '100%',
          boxShadow: 'none',
          position: 'relative',
          overflow: 'visible',
        }}
      >
        <div
          className="join-movement-flex"
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '2.5rem',
            maxWidth: '1100px',
            margin: '0 auto',
            zIndex: 2,
            position: 'relative',
            alignItems: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{ flex: '1 1 400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img
              src="/images/business partner.jpeg"
              alt="Join the Movement"
              style={{
                width: '100%',
                maxWidth: '370px',
                backgroundColor: '#fff',
                borderRadius: '20px',
                boxShadow: '0 6px 32px rgba(7,131,154,0.10)',
                objectFit: 'cover',
                aspectRatio: '1/1',
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{
              flex: '1 1 400px',
              background: '#fff',
              borderRadius: '20px',
              boxShadow: '0 6px 32px rgba(7,131,154,0.10)',
              padding: '2.2rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: 0,
              minHeight: '340px',
              justifyContent: 'center',
            }}
          >
            <h2 style={{ fontSize: '1.7rem', marginBottom: '0.7rem', textAlign: 'center', color: '#07839a', fontWeight: 800, letterSpacing: '-0.5px' }}>
              Join the Movement
            </h2>
            <p style={{ fontSize: '1.04rem', marginBottom: '1.5rem', textAlign: 'center', color: '#444', lineHeight: 1.6 }}>
              Ready to make a lasting impact? Partner with us to build futures and transform careers.
            </p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', width: '100%' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <i className="fa-solid fa-user" style={{ color: '#07839a', fontSize: '1.2rem', alignSelf: 'center' }}></i>
                <input type="text" placeholder="Enter your name" style={{ flex: 1, padding: '0.85rem 1rem', border: '1.5px solid #e0f7fa', borderRadius: '8px', fontSize: '1rem', outline: 'none', background: '#f9fafb', color: '#222', transition: 'border 0.2s' }} />
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <i className="fa-solid fa-envelope" style={{ color: '#07839a', fontSize: '1.2rem', alignSelf: 'center' }}></i>
                <input type="email" placeholder="Enter your email" style={{ flex: 1, padding: '0.85rem 1rem', border: '1.5px solid #e0f7fa', borderRadius: '8px', fontSize: '1rem', outline: 'none', background: '#f9fafb', color: '#222', transition: 'border 0.2s' }} />
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <i className="fa-solid fa-phone" style={{ color: '#07839a', fontSize: '1.2rem', alignSelf: 'center' }}></i>
                <input type="tel" placeholder="Enter your phone number" style={{ flex: 1, padding: '0.85rem 1rem', border: '1.5px solid #e0f7fa', borderRadius: '8px', fontSize: '1rem', outline: 'none', background: '#f9fafb', color: '#222', transition: 'border 0.2s' }} />
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <i className="fa-solid fa-building" style={{ color: '#07839a', fontSize: '1.2rem', alignSelf: 'center' }}></i>
                <input type="text" placeholder="Your college, company, or NGO name" style={{ flex: 1, padding: '0.85rem 1rem', border: '1.5px solid #e0f7fa', borderRadius: '8px', fontSize: '1rem', outline: 'none', background: '#f9fafb', color: '#222', transition: 'border 0.2s' }} />
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <i className="fa-solid fa-comment-dots" style={{ color: '#07839a', fontSize: '1.2rem', alignSelf: 'center' }}></i>
                <textarea
                  placeholder="Tell us how you want to partner"
                  rows="4"
                  style={{ flex: 1, padding: '0.85rem 1rem', border: '1.5px solid #e0f7fa', borderRadius: '8px', fontSize: '1rem', outline: 'none', background: '#f9fafb', color: '#222', resize: 'vertical', transition: 'border 0.2s' }}
                ></textarea>
              </div>
              <button
                type="submit"
                style={{
                  backgroundColor: '#07839a',
                  color: '#fff',
                  padding: '1.05rem 1.2rem',
                  border: 'none',
                  borderRadius: '10px',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  marginTop: '1.1rem',
                  width: '100%',
                  marginBottom: '1.2rem',
                  boxShadow: '0 2px 12px rgba(7,131,154,0.10)',
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#06667a')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#07839a')}
              >
                <i className="fa-solid fa-arrow-right-to-bracket"></i> Become a Partner Today →
              </button>
            </form>
          </motion.div>
        </div>
      </motion.section>
      <style>{`
        @media (max-width: 900px) {
          .our-partner-promise-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .join-movement-flex {
            flex-direction: column !important;
            gap: 2.2rem !important;
          }
          .why-partner-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.2rem !important;
          }
          .partnership-options-row {
            flex-direction: column !important;
            gap: 2rem !important;
            align-items: stretch !important;
          }
        }
        @media (max-width: 600px) {
          .our-partner-promise-grid {
            grid-template-columns: 1fr !important;
          }
          .join-movement-flex {
            flex-direction: column !important;
            gap: 1.5rem !important;
          }
          .why-partner-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          .partnership-options-row {
            flex-direction: column !important;
            gap: 1.2rem !important;
            align-items: stretch !important;
          }
          section, .our-partner-promise-grid, .join-movement-flex, .why-partner-grid, .partnership-options-row {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          .mobile-card, .our-partner-promise-grid > *, .partnership-options-row > * {
            padding: 1.1rem 0.7rem !important;
            font-size: 0.97rem !important;
          }
          input, textarea, button {
            font-size: 1rem !important;
            padding: 0.7rem 0.7rem !important;
          }
          img, .responsive-img {
            max-width: 100% !important;
            height: auto !important;
            border-radius: 14px !important;
          }
          .join-movement-flex > div {
            padding: 1.1rem 0.5rem !important;
          }
          form {
            padding-bottom: 0.5rem !important;
          }
          button[type="submit"] {
            width: calc(100% - 2rem) !important;
            margin-left: 1rem !important;
            margin-right: 1rem !important;
            margin-bottom: 1.5rem !important;
            border-radius: 12px !important;
            font-size: 1.08rem !important;
            padding: 1.1rem 0 !important;
            box-shadow: 0 2px 16px rgba(7,131,154,0.13) !important;
          }
          form > div:last-child {
            margin-bottom: 0.7rem !important;
          }
        }
      `}</style>
    </div>
  );
}

// Reused styles
const labelStyle = {
  display: 'block',
  marginBottom: '6px',
  fontWeight: '500',
  color: '#333',
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '1rem',
  backgroundColor: '#CDF7F3',
  color: '#333',
};

const cardStyle = {
  background: '#eaf3ff',
  padding: '1.5rem',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
};

export default Partnership;
