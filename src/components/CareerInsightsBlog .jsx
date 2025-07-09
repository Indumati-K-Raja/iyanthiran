import React, { useState } from 'react';
import HeroSection from './HeroSection';
import { motion, useAnimation } from "framer-motion";
import "./CareerInsightsBlog.css";  

function CareerInsightsBlog() {
  const blogData = [
    {
      title: 'Career Guidance: Your Roadmap to Success',
      image: '/images/roadmap.png',
      points: [
        'Identify your strengths and interests.',
        'Explore industry trends and future job opportunities.',
        'Choose courses and certifications that boost your market value.',
        'Get mentorship from industry experts.'
      ],
      tip: 'Tip: Before choosing a course, research where the industry is heading.'
    },
    {
      title: 'Skills Development: The Power of a Strong Skillset',
      image: '/images/skilldev.png',
      points: [
        'Soft skills like public speaking and team leadership.',
        'Domain-specific knowledge in IT, Science, Arts, and Business.',
        'Practical learning through workshops and internships.'
      ],
      tip: 'Did you know? 80% of job success depends on soft skills.'
    },
    {
      title: 'Interview Preparation: Clearing the Final Step',
      image: '/images/inter.png',
      points: [
        'Resume building and LinkedIn profile optimization.',
        'Mock interviews with industry experts.',
        'Training on how to answer behavioral and technical questions.',
        'Post-interview feedback and improvement tips.'
      ],
      tip: 'Interview Tip: Always research the company and practice interview questions.'
    },
    {
      title: 'Placement Strategies: Turning Effort Into Offers',
      image: '/images/place.png',
      points: [
        'Aptitude training.',
        'Campus-to-corporate transition sessions.',
        'Employer tie-ups and direct referrals.',
        'Building a winning profile for placements.'
      ],
      tip: 'Strategy Tip: Focus on networking and internships early.'
    },
    {
      title: 'HR Services for Students and Colleges',
      image: '/images/hrser.png',
      points: [
        'Custom training modules for colleges.',
        'Campus recruitment partnerships.',
        'HR consulting for skill development initiatives.'
      ],
      tip: 'Institutions: We help strengthen placement records with job-ready students.'
    },
    {
      title: 'Your Career Journey Starts Here',
      image: '/images/stars.png',
      points: [
        'Customized career guidance.',
        'Proven placement strategies.',
        'Advanced skills development training.'
      ],
      tip: 'Walk a clear, structured path to success with confidence.'
    }
  ];

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
          Find Your Dream Job with Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', color: '#333' }}
        >
          Unlock career opportunities with our expert guidance, tailored training, and direct hiring partners.
        </motion.p>
      </section>

      {/* Blog Section */}
      <motion.section
        className="career-blog-section advanced-blog-section"
        style={{ padding: '2.5rem 0', background: 'linear-gradient(to right,rgb(255, 255, 255),rgb(207, 248, 253))',
 minHeight: '100vh' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        <motion.h2
          className="blog-section-title"
          style={{ marginBottom: '2.5rem', fontFamily: 'Merriweather, serif', fontWeight: 700, fontSize: '2.4rem', color: '#00695c', letterSpacing: '0.03em', textAlign: 'center' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, type: 'spring', stiffness: 120 }}
        >
          Blog & Insights
        </motion.h2>

        <div
          className="blog-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem',
            maxWidth: '1200px',
            margin: '0 auto',
            alignItems: 'stretch',
            position: 'relative',
            padding: '0 1.5rem'
          }}
        >
          {blogData.map((item, idx) => {
            const imgControls = useAnimation();
            return (
              <motion.div
                key={idx}
                className="advanced-blog-card-wrapper"
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.92 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: 'anticipate' } }
                }}
                whileHover={{
                  y: -16,
                  scale: 1.04,
                  boxShadow: '0 12px 36px 0 rgba(0, 105, 92, 0.18)',
                  transition: { type: 'spring', stiffness: 300, damping: 18 }
                }}
                onHoverStart={() => imgControls.start({ scale: 1.13, rotate: 2 })}
                onHoverEnd={() => imgControls.start({ scale: 1, rotate: 0 })}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  zIndex: 1,
                  borderRadius: '28px',
                  overflow: 'visible',
                  background: 'none',
                  boxShadow: 'none',
                  transition: 'box-shadow 0.3s cubic-bezier(.4,2,.6,1)  #00695c;'
                }}
              >
                {/* Floating/Overlapping Image */}
                <motion.div
                  className="blog-float-image"
                  style={{
                    position: 'absolute',
                    top: '-54px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 1,
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    boxShadow: '0 6px 32px rgba(0,105,92,0.13)',
                    background: ' #00695c;',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    border: '4px solid #80cbc4',
                  }}
                  animate={imgControls}
                  transition={{ type: 'spring', stiffness: 350, damping: 16 }}
                >
                  <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }} />
                </motion.div>

                {/* Blog Content Box */}
                <div
                  className="advanced-blog-card glassmorphism"
                  style={{
                    marginTop: '80px',
                     marginBottom: '1rem', // ✅ Add this line
                      background: 'rgba(169, 236, 245, 0.75)',
                    boxShadow: '0 8px 32px 0 rgba(0, 105, 92, 0.13)',
                    backdropFilter: 'blur(14px)',
                    WebkitBackdropFilter: 'blur(14px)',
                    borderRadius: '28px',
                    border: '2px solid #80cbc4',
                    padding: '2.5rem 1.7rem 1.7rem 1.7rem',
                    color: '#004d40',
                    minHeight: '340px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    position: 'relative',
                    overflow: 'hidden',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  <h4 style={{ fontFamily: 'Merriweather, serif', fontWeight: 600, fontSize: '1.22rem', margin: '0 0 0.9rem', textAlign: 'center', color: '#00695c', letterSpacing: '0.01em' }}>{item.title}</h4>
                  <ul style={{ paddingLeft: '1.2rem', margin: 0, textAlign: 'left', fontSize: '1.05rem', lineHeight: 1.8 }}>
                    {item.points.slice(0, 2).map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                  <motion.p
                    style={{ fontStyle: 'italic', fontSize: '1.01rem', marginTop: '1.3rem', color: '#00796b', textAlign: 'center' }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 + idx * 0.1 }}
                  >
                    {item.tip}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </>
  );
}

export default CareerInsightsBlog;
