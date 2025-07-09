import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';


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
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundColor: '#f0f8ff',
          padding: '3rem 1rem',
          textAlign: 'center',
          marginBottom: '3rem',
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
          position: 'relative',
          padding: '2rem 1rem',
          maxWidth: '1200px',
          margin: '0 auto',
          borderRadius: '12px',
          overflow: 'hidden',
          minHeight: '500px',
        }}
      >
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
            borderRadius: '12px',
          }}
        />

        <h3
          style={{
            color: '#07839a',
            marginBottom: '2rem',
            fontSize: '1.8rem',
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
          }}
        >
          Why Partner with Iyanthiran?
        </h3>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          style={{
            position: 'relative',
            zIndex: 1,
            backgroundColor: '#C9F7F6',
            padding: '3rem 2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <ul
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              margin: 0,
              padding: 0,
              listStyleType: 'disc',
              listStylePosition: 'inside',
              maxWidth: '700px',
              lineHeight: '2',
              color: '#003942',
              fontSize: '1rem',
              fontWeight: '500',
              textAlign: 'center',
              marginInline: 'auto',
            }}
          >
            <li>12,000+ students trained and 3,500+ placements</li>
            <li>Career-focused training and practical programs</li>
            <li>Customized HR solutions for colleges and corporates</li>
            <li>Real-time workshops and project-based learning</li>
          </ul>
        </motion.div>

        <h3 style={{ color: '#000000', marginTop: '3rem', marginBottom: '1rem' }}>
          Partnership Options
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          <motion.div {...slideUp} viewport={{ once: true }} style={cardStyle}>
            <h4 style={{ color: '#07839a' }}>1. College Partnerships</h4>
            <ul>
              <li>Career-focused programs</li>
              <li>Internships & final year training</li>
              <li>Workshops on soft skills & aptitude</li>
              <li>Implant training & industry visits</li>
            </ul>
            <strong style={{ fontStyle: 'italic' }}>Benefits:</strong>
            <ul>
              <li>Boost placement results</li>
              <li>Career-ready reputation</li>
            </ul>
          </motion.div>

          <motion.div {...slideUp} viewport={{ once: true }} style={cardStyle}>
            <h4 style={{ color: '#07839a' }}>2. Corporate Partnerships</h4>
            <ul>
              <li>Pre-screened talent pool</li>
              <li>Custom recruitment drives</li>
              <li>Internship-to-hire support</li>
              <li>CSR training initiatives</li>
            </ul>
            <strong style={{ fontStyle: 'italic' }}>Benefits:</strong>
            <ul>
              <li>Faster hiring</li>
              <li>Job-ready candidates</li>
              <li>Boost brand & CSR</li>
            </ul>
          </motion.div>

          <motion.div {...slideUp} viewport={{ once: true }} style={cardStyle}>
            <h4 style={{ color: '#07839a' }}>3. Sponsorship Opportunities</h4>
            <ul>
              <li>Skill development sponsorships</li>
              <li>Career camps for rural youth</li>
              <li>Women’s job readiness programs</li>
            </ul>
            <strong style={{ fontStyle: 'italic' }}>Benefits:</strong>
            <ul>
              <li>Support real impact</li>
              <li>Promote your brand</li>
              <li>Drive positive change</li>
            </ul>
          </motion.div>
        </div>

         {/* Partner Promise Section */}
            <motion.div
              ref={promiseRef}
              initial={{ opacity: 0, y: 50 }}
              animate={promiseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{
                backgroundColor: '#C9F7F6',
                marginTop: '3rem',
                padding: '2.5rem 2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                textAlign: 'center',
                maxWidth: '900px',
                marginInline: 'auto',
              }}
            >
              <h3 style={{ color: '#07839a', marginBottom: '1rem', fontSize: '1.6rem' }}>
                Our Partner Promise
              </h3>
              <ul
                style={{
                  listStyleType: 'disc',
                  listStylePosition: 'inside',
                  lineHeight: '2',
                  color: '#003942',
                  fontSize: '1rem',
                  fontWeight: '500',
                  padding: 0,
                  margin: 0,
                }}
              >
                <li>Transparent, outcome-driven collaboration.</li>
                <li>High-quality training and career guidance.</li>
                <li>Strategic support in developing industry-ready professionals.</li>
                <li>End-to-end HR services to ensure hiring success.</li>
              </ul>
              <p style={{ marginTop: '1.5rem', fontWeight: 'bold', color: '#003942' }}>
                Together, let’s build a better, brighter future.
              </p>
            </motion.div>

      </section>

      {/* Join the Movement Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          backgroundColor: '#E8FCFA',
          padding: '4rem 1rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            gap: '3rem',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{ flex: '1 1 400px' }}
          >
            <img
              src="/images/business partner.jpeg"
              alt="Join the Movement"
              style={{
                width: '100%',
                 backgroundColor: 'white',
                borderRadius: '16px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                objectFit: 'cover',
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
              backgroundColor: '#CDF7F3',
              borderRadius: '16px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
              padding: '2rem',
            }}
          >
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center', color: '#0d3c61' }}>
              Join the Movement
            </h2>
            <p style={{ fontSize: '1rem', marginBottom: '2rem', textAlign: 'center', color: '#444' }}>
              Ready to make a lasting impact? Partner with us to build futures and transform careers.
            </p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <label style={labelStyle}>Full Name</label>
                <input type="text" placeholder="Enter your name" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Email Address</label>
                <input type="email" placeholder="Enter your email" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Organization</label>
                <input type="text" placeholder="Your college, company, or NGO name" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  placeholder="Tell us how you want to partner"
                  rows="4"
                  style={{ ...inputStyle, resize: 'vertical' }}
                ></textarea>
              </div>
              <button
                type="submit"
                style={{
                  backgroundColor: '#07839a',
                  color: '#fff',
                  padding: '0.8rem 1.2rem',
                  border: 'none',
                  borderRadius: '10px',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#06667a')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#07839a')}
              >
                Become a Partner Today →
              </button>
            </form>
          </motion.div>
        </div>
      </motion.section>
    </>
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
