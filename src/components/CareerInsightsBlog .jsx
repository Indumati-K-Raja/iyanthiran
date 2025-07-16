import React, { useState } from 'react';
import { FaCheckCircle, FaMapSigns, FaUserGraduate, FaComments, FaRocket, FaUserTie, FaStar, FaNetworkWired, FaUserTie as FaPersonalBrand, FaBriefcase } from 'react-icons/fa';
import HeroSection from './HeroSection';
import { motion, useAnimation } from "framer-motion";
import "./CareerInsightsBlog.css";  

function CareerInsightsBlog() {
  const blogData = [
    {
      title: 'Career Guidance: Your Roadmap to Success',
      image: '/images/roadmap.png',
      icon: <FaMapSigns style={{ color: '#1976d2', fontSize: '1.3em', marginRight: '0.5rem' }} />, 
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
      icon: <FaUserGraduate style={{ color: '#43a047', fontSize: '1.3em', marginRight: '0.5rem' }} />, 
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
      icon: <FaComments style={{ color: '#0288d1', fontSize: '1.3em', marginRight: '0.5rem' }} />, 
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
      icon: <FaRocket style={{ color: '#fbc02d', fontSize: '1.3em', marginRight: '0.5rem' }} />, 
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
      icon: <FaUserTie style={{ color: '#8e24aa', fontSize: '1.3em', marginRight: '0.5rem' }} />, 
      points: [
        'Custom training modules for colleges.',
        'Campus recruitment partnerships.',
        'HR consulting for skill development initiatives.'
      ],
      tip: 'Institutions: We help strengthen placement records with job-ready students.'
    },
    {
      title: 'Networking Essentials: Building Connections That Count',
      image: '/images/network.png',
      icon: <FaNetworkWired style={{ color: '#ff6b35', fontSize: '1.3em', marginRight: '0.5rem' }} />, 
      points: [
        'Learn how to grow a professional network both online and offline.',
        'Attend webinars, career fairs, and industry-specific events.',
        'Engage meaningfully on platforms like LinkedIn and GitHub.',
        'Collaborate on open-source or community-driven projects.'
      ],
      tip: 'Pro Tip: A strong network can open doors that qualifications alone can\'t.'
    },
    {
      title: 'Personal Branding: Stand Out in a Competitive Market',
      image: '/images/branding.png',
      icon: <FaPersonalBrand style={{ color: '#6a4c93', fontSize: '1.3em', marginRight: '0.5rem' }} />, 
      points: [
        'Craft a compelling personal story and elevator pitch.',
        'Build a consistent online presence across platforms.',
        'Create a personal portfolio or blog to showcase your expertise.',
        'Stay active with thought leadership posts and community contributions.'
      ],
      tip: 'Tip: Your personal brand should reflect your values, strengths, and potential.'
    },
    {
      title: 'Workplace Readiness: Succeeding Beyond the Offer Letter',
      image: '/images/workplace.png',
      icon: <FaBriefcase style={{ color: '#19857b', fontSize: '1.3em', marginRight: '0.5rem' }} />, 
      points: [
        'Develop emotional intelligence and time management skills.',
        'Learn workplace etiquette and professional communication.',
        'Understand goal-setting and performance tracking methods.',
        'Embrace feedback and cultivate a growth mindset.'
      ],
      tip: 'Fact: Adapting quickly to work culture increases early career success.'
    },
    {
      title: 'Your Career Journey Starts Here',
      image: '/images/stars.png',
      icon: <FaStar style={{ color: '#ffb300', fontSize: '1.3em', marginRight: '0.5rem' }} />, 
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
        className="deck-blog-section"
        style={{ padding: '1rem 0', background: '#fefcff', minHeight: '100vh' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.13
            }
          }
        }}
      >
        <motion.h2
          className="blog-section-title"
          style={{ marginBottom: '0.5rem', fontFamily: 'Merriweather, serif', fontWeight: 700, fontSize: '2.4rem', color: '#222', letterSpacing: '0.03em', textAlign: 'center' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, type: 'spring', stiffness: 120 }}
        >
          Blog & Insights
        </motion.h2>
        <motion.p
          style={{ 
            fontSize: '1.1rem', 
            maxWidth: '800px', 
            margin: '0 auto 2.5rem auto', 
            color: '#666', 
            textAlign: 'center',
            lineHeight: 1.6,
            fontFamily: 'Inter, Lato, sans-serif'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Your career journey is unique — and we're here to guide you through it. Whether you're choosing your first path, switching gears, or leveling up, this space brings you practical advice, real stories, and expert insights to help you grow with clarity and confidence. Let's navigate the world of work, together.
        </motion.p>

        {/* Custom 3x3 grid using blogData content */}
        <motion.div
          className="deck-blog-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(320px, 1fr))',
            gap: '2.2rem',
            maxWidth: '1400px', // wider grid
            margin: '0 auto',
            alignItems: 'stretch',
            position: 'relative',
            padding: '0 1.5rem', // more horizontal padding
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
              }
            }
          }}
        >
          {[...Array(9)].map((_, idx) => {
            const item = blogData[idx % blogData.length];
            // Color palette from the reference image
            const bgColors = [
              '#4a2c2a', // deep red
              '#e6e7e2', // muted green/gray
              '#4a425e', // purple
              '#f5f3ef', // off-white
              '#23231a', // dark brown
              '#e6e7e2', // muted green/gray
              '#2d2e32', // dark blue/gray
              '#f5f3ef', // off-white
              '#232f34', // dark blue
            ];
            const color = bgColors[idx % bgColors.length];
            const isDark = ['#4a2c2a', '#4a425e', '#23231a', '#2d2e32', '#232f34'].includes(color);
            const titleColor = isDark ? '#fff' : '#222';
            const textColor = isDark ? '#e6e7e2' : '#444';
            
            // Determine if this is in the top row (first 3 cards)
            const isTopRow = idx < 3;
            
            return (
            <motion.div
              key={idx}
                className="deck-blog-card"
                initial={isTopRow ? { opacity: 0, y: 100, scale: 0.8 } : { opacity: 0, y: 60, scale: 0.9, rotateX: -15 }}
                whileInView={isTopRow ? "visible" : "visible"}
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: { 
                    opacity: 0, 
                    y: 60, 
                    scale: 0.9,
                    rotateX: -15
                  },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    rotateX: 0,
                    transition: { 
                      duration: 0.8, 
                      ease: [0.25, 0.46, 0.45, 0.94],
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      delay: isTopRow ? idx * 0.2 : 0
                    } 
                  }
                }}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  transition: { 
                    type: 'spring', 
                    stiffness: 400, 
                    damping: 25,
                    duration: 0.3
                  }
                }}
                whileTap={{
                  scale: 0.98,
                  transition: { duration: 0.1 }
                }}
              style={{
                  background: color,
                  borderRadius: 0,
                  boxShadow: 'none',
                  padding: '2.2rem 2.5rem', // more horizontal padding
                  minHeight: '220px', // less tall
                  minWidth: '320px', // ensure not too narrow
                  width: '100%',
                  display: 'flex',
                    flexDirection: 'column',
                  alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                  position: 'relative',
                  overflow: 'visible', // allow content to grow
                  flexGrow: 1,
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <motion.h4 
                  style={{ fontFamily: 'Playfair Display, Merriweather, serif', fontWeight: 700, fontSize: '2.2rem', color: titleColor, margin: 0, marginBottom: '1.1rem', letterSpacing: '0.01em', wordBreak: 'break-word' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                >
                  {item.title}
                </motion.h4>
                <motion.ul 
                  style={{ paddingLeft: 0, margin: 0, color: textColor, fontSize: '1.08rem', lineHeight: 1.7, fontFamily: 'Inter, Lato, sans-serif', wordBreak: 'break-word' }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                >
                  {item.points.map((pt, i) => (
                    <motion.li 
                      key={i} 
                      style={{ marginBottom: '0.18rem', listStyle: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 + i * 0.1 }}
                    >
                      <FaCheckCircle style={{ color: isDark ? '#fff' : '#4a2c2a', fontSize: '1.05em' }} />
                      <span>{pt}</span>
                    </motion.li>
                    ))}
                </motion.ul>
                  <motion.p
                  style={{ fontStyle: 'italic', fontSize: '1.08rem', marginTop: 'auto', color: isDark ? '#e6e7e2' : '#4a2c2a', textAlign: 'left', opacity: 0.88, letterSpacing: '0.01em', marginBottom: 0, wordBreak: 'break-word' }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 + idx * 0.1 }}
                  >
                    {item.tip}
                  </motion.p>
            </motion.div>
            );
          })}
        </motion.div>
      </motion.section>
      <style>{`
        @media (max-width: 1400px) {
          .deck-blog-grid {
            max-width: 99vw;
          }
        }
        @media (max-width: 1200px) {
          .deck-blog-grid {
            max-width: 98vw;
          }
        }
        @media (max-width: 900px) {
          .deck-blog-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 600px) {
          .deck-blog-grid {
            grid-template-columns: 1fr;
            padding: 0 0.5rem;
          }
        }
        .deck-blog-card { z-index: 0; overflow: visible; }
        .deck-blog-card:hover { z-index: 3; }
      `}</style>
    </>
  );
}

export default CareerInsightsBlog;