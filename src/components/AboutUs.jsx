import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FaUserGraduate, FaBullseye, FaLightbulb, FaUsers, FaCheckCircle, FaStar, FaHandshake, FaRocket, FaAward, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

export default function AboutUs() {
  // Stats for the stats bar
  const stats = [
    { icon: <FaUsers />, label: '12,000+', desc: 'Trained Candidates' },
    { icon: <FaCheckCircle />, label: '3,500+', desc: 'Placements' },
    { icon: <FaAward />, label: '10+', desc: 'Years Experience' },
    { icon: <FaHandshake />, label: '50+', desc: 'Employer Partners' },
  ];

  // Why Iyanthiran Edge points
  const whyPoints = [
    { icon: <FaUsers />, title: '12,000+ Trained Candidates', desc: 'Proven track record' },
    { icon: <FaCheckCircle />, title: '3,500+ Successful Placements', desc: 'Real results' },
    { icon: <FaRocket />, title: 'Dedicated to Rural Empowerment', desc: 'Our mission' },
  ];

  // What We Do points
  const whatWeDo = [
    { icon: <FaUserGraduate />, text: 'Career Guidance' },
    { icon: <FaGraduationCap />, text: 'Skill Development' },
    { icon: <FaBullseye />, text: 'Interview Prep' },
    { icon: <FaHandshake />, text: 'Placement Support' },
  ];

  // Hero overlay text
  const heroTitle = "About Us";
  const heroDesc = "Empowering rural talents with career guidance, skill development, and placement support. Your journey to success starts here.";

  return (
    <>
      {/* HERO SECTION */}
      <section style={{ position: 'relative', width: '100%', minHeight: '420px', background: '#222' }}>
        <img
          src="/images/abtus.jpg"
          alt="About Us Hero"
          style={{ width: '100%', height: '420px', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.55)' }}
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '0 6vw',
            color: '#fff',
            zIndex: 2,
          }}
        >
          <h1 style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: '1.1rem', letterSpacing: '-1px', textShadow: '0 4px 24px #0008' }}>{heroTitle}</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: 600, fontWeight: 500, lineHeight: 1.5, textShadow: '0 2px 12px #0007' }}>{heroDesc}</p>
</motion.div>
        {/* Wavy divider */}
        <svg viewBox="0 0 1440 80" style={{ position: 'absolute', bottom: -1, left: 0, width: '100%', height: 80, zIndex: 3 }}><path fill="#fff" d="M0,64L60,58.7C120,53,240,43,360,42.7C480,43,600,53,720,69.3C840,85,960,107,1080,101.3C1200,96,1320,64,1380,48L1440,32V80H1380C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80H0V64Z"></path></svg>
      </section>

      {/* WHY WE ARE BEST SECTION */}
      <section style={{ background: '#fff', padding: '3.5rem 0 2.5rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '2.5rem', alignItems: 'center', justifyContent: 'space-between', padding: '0 2vw' }}>
          {/* Left: Why We Are Best */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ flex: '1 1 350px', minWidth: 320 }}
          >
            <h2 style={{ color: '#b85c38', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '0.1em', marginBottom: '0.7rem', textTransform: 'uppercase' }}></h2>
            <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1.2rem', color: '#222' }}>Why Iyanthiran Edge?</h3>
            <p style={{ color: '#444', fontSize: '1.08rem', marginBottom: '1.5rem', maxWidth: 500 }}>
              Born with a mission to empower rural talents, we specialize in career guidance, helping students and graduates create a clear career path toward their dreams. We offer expert-led courses that build critical skills and sharpen your skillset for today's competitive world.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {whyPoints.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                  style={{ display: 'flex', alignItems: 'center', gap: '1.1rem' }}
                >
                  <span style={{ background: '#f5e6e0', color: '#b85c38', borderRadius: '50%', width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', boxShadow: '0 2px 8px #b85c3822' }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1.08rem', color: '#222' }}>{item.title}</div>
                    <div style={{ fontSize: '0.98rem', color: '#666' }}>{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
</motion.div>
          {/* Right: Image collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ flex: '1 1 340px', minWidth: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem' }}
          >
            <img src="/images/ab1.jpg" alt="Partner With Us" style={{ width: '100%', maxWidth: 340, borderRadius: '18px', boxShadow: '0 8px 32px #b85c3822', objectFit: 'cover', marginBottom: '1.2rem' }} />
            <img src="/images/ab2.jpg" alt="Advanced Tech" style={{ width: '70%', maxWidth: 220, borderRadius: '14px', boxShadow: '0 4px 16px #b85c3811', objectFit: 'cover', marginLeft: 'auto' }} />
          </motion.div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: '#f8f6f3', padding: '2.2rem 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2vw' }}>
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '2.5rem' }}
          >
            <h2 style={{ color: '#b85c38', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '0.1em', marginBottom: '0.7rem', textTransform: 'uppercase' }}>Why We Are Best?</h2>
            <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#222', margin: 0 }}>Our Achievements</h3>
          </motion.div>
          
          {/* Stats Grid */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                style={{ flex: '1 1 180px', minWidth: 160, background: '#fff', borderRadius: '14px', boxShadow: '0 2px 12px #b85c3811', padding: '1.3rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
              >
                <span style={{ color: '#b85c38', fontSize: '2rem', marginBottom: '0.2rem' }}>{stat.icon}</span>
                <div style={{ fontWeight: 900, fontSize: '1.5rem', color: '#222' }}>{stat.label}</div>
                <div style={{ fontSize: '1.01rem', color: '#666', fontWeight: 500 }}>{stat.desc}</div>
</motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE & WHAT WE DO SECTION */}
      <section style={{ background: '#fff', padding: '3.5rem 0 2.5rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '2.5rem', alignItems: 'center', justifyContent: 'space-between', padding: '0 2vw' }}>
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{ flex: '1 1 340px', minWidth: 300 }}
          >
            <img src="/images/ab3.jpg" alt="Who We Are" style={{ width: '100%', maxWidth: 340, borderRadius: '18px', boxShadow: '0 8px 32px #1976d222', objectFit: 'cover' }} />
          </motion.div>
          {/* Right: Who We Are and What We Do */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{ flex: '1 1 350px', minWidth: 320, display: 'flex', flexDirection: 'column', gap: '2.2rem' }}
          >
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1.2rem', color: '#1976d2', letterSpacing: '-0.5px' }}>Who We Are</h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                background: 'linear-gradient(135deg, #fffbe6 60%, #f7f6f2 100%)',
                borderRadius: '20px',
                boxShadow: '0 4px 24px #e6c77e22',
                padding: '2.2rem 1.7rem 2rem 2.7rem',
                maxWidth: 540,
              marginBottom: 0, 
                border: '1.5px solid #f3e6c2',
                position: 'relative',
                fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
              }}>
                {/* Golden ratio split: Mission (larger), Vision (smaller) */}
                <div style={{ flex: 1.618, marginBottom: '0.7rem' }}>
                  <div style={{ fontWeight: 800, color: '#bfa14a', fontSize: '1.13rem', marginBottom: '0.3rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Mission</div>
                  <p style={{ color: '#444', fontSize: '1.13rem', fontWeight: 500, lineHeight: 1.7, margin: 0 }}>
                    To become the trusted platform for career guidance and career success for rural India. We envision a future where every student, regardless of background, has access to the resources and support needed to achieve their dreams.
                  </p>
                </div>
                <div style={{ flex: 1, marginTop: '0.2rem' }}>
                  <div style={{ fontWeight: 800, color: '#bfa14a', fontSize: '1.13rem', marginBottom: '0.3rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Vision</div>
                  <ul style={{ color: '#444', fontSize: '1.09rem', fontWeight: 500, margin: 0, paddingLeft: '1.3rem', lineHeight: 1.8, listStyle: 'disc inside' }}>
                    <li>Empower students and job seekers with the skills needed for today's industries.</li>
                    <li>Provide practical exposure to achieve faster placement outcomes.</li>
                    <li>Support every learner in achieving interview clearance and career goals.</li>
                    <li>Make quality career-focused education accessible for all.</li>
                  </ul>
                </div>
                {/* Golden spiral accent */}
                <svg width="60" height="60" viewBox="0 0 60 60" style={{ position: 'absolute', bottom: 18, right: 18, opacity: 0.13 }}><path d="M30,30 m0,-24 a24,24 0 1,1 0,48 a24,24 0 1,1 0,-48" fill="none" stroke="#bfa14a" strokeWidth="2.5"/><path d="M30,30 m0,-15.5 a15.5,15.5 0 1,1 0,31 a15.5,15.5 0 1,1 0,-31" fill="none" stroke="#bfa14a" strokeWidth="1.2"/></svg>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '0.7rem', color: '#1976d2' }}>What We Do</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '0.5rem' }}>
                {whatWeDo.map((item, idx) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.13 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
                    style={{ background: '#f0f2f5', borderRadius: '12px', padding: '1.2rem', border: '1px solid #e1e5e9', textAlign: 'center', cursor: 'pointer', boxShadow: '0 2px 8px #1976d211', transition: 'box-shadow 0.3s ease' }}
                  >
                    <div style={{ marginBottom: '0.5rem', color: '#1976d2', fontSize: '1.5rem' }}>{item.icon}</div>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: '#333' }}>{item.text}</div>
</motion.div>
                ))}
              </div>
          </div>
        </motion.div>
        </div>
      </section>

      {/* PROMISE / CALL TO ACTION SECTION */}
      <section style={{ background: '#f2ebe2', padding: '3.5rem 0 3rem 0' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ maxWidth: 700, margin: '0 auto', background: '#fff', borderRadius: '22px', boxShadow: '0 8px 32px #b85c3811', padding: '2.5rem 2rem', textAlign: 'center' }}
        >
          <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#b85c38', marginBottom: '1.2rem' }}>Our Promise</h3>
          <p style={{ fontWeight: 600, fontSize: '1.13rem', color: '#2e7d32', marginBottom: '1.2rem' }}>
            "We don't just teach — we guide, we prepare, and we place."
          </p>
          <p style={{ fontFamily: 'Times New Roman, serif', fontSize: '1.18rem', fontWeight: '1000', color: '#073049', marginTop: '1rem', marginBottom: 0 }}>
            Your future is not just a dream. With Iyanthiran, it's your destination.
          </p>
        </motion.div>
      </section>
    </>
  );
}