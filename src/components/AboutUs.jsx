import React from 'react';
import { motion } from "framer-motion";


export default function CareerGuidance() {
  const boxStyle = {
    background: '#f9f9f9',
    borderRadius: '12px',
    padding: '1.5rem',
    marginBottom: '2rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
  };
  return (
    <>
      {/* Hero Section */}
      <section className="hero text-center" style={{ padding: '4rem 1rem', backgroundColor: '#f0f8ff' }}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '' }}
        >
          Career Guidance for Every Dream<br />Career Success for Every Future
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', color: '' }}
        >
          At Iyanthiran Edge, we believe that career success should not depend on where you come from,
          but where you are determined to go.
        </motion.p>
      </section>

      {/* Main Content Section */}
 <section
      style={{
        maxWidth: '960px',
        margin: '3rem auto',
        padding: '2rem',
        background: '#58CDC3',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        lineHeight: '1.8',
        fontSize: '1rem',
        color: '#333'
      }}
    >
    
  {/* WHO WE ARE */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
  viewport={{ once: true }}
  style={boxStyle}
>
  <h2 style={{ fontSize: '1.6rem', color: '#003d4d', marginBottom: '1rem' }}>Who We Are</h2>
  <p>
    Born with a mission to empower rural talents, we specialize in career guidance,
    helping students and graduates create a clear career path toward their dreams.
  </p>
  <p>
    We offer expert-led courses that build critical skills and sharpen your skillset
    for today’s competitive world...
  </p>
</motion.div>

{/* WHAT WE DO */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.4, ease: 'easeOut' }}
  viewport={{ once: true }}
  style={boxStyle}
>
  <h2 style={{ fontSize: '1.6rem', color: '#003d4d', marginBottom: '1rem' }}>What We Do</h2>
  <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
    <li>Career Guidance</li>
    <li>Skill Development</li>
    <li>Interview Prep</li>
    <li>Placement Support</li>
  </ul>
</motion.div>

{/* WHY IYANTHIRAN */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
  viewport={{ once: true }}
  style={boxStyle}
>
  <h2 style={{ fontSize: '1.6rem', color: '#003d4d', marginBottom: '1rem' }}>Why Iyanthiran Edge?</h2>
  <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
    <li>12,000+ Trained Candidates</li>
    <li>3,500+ Successful Placements</li>
    <li>Dedicated to Rural Empowerment</li>
  </ul>
</motion.div>

{/* OUR PROMISE */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
  viewport={{ once: true }}
  style={boxStyle}
>
  <h2 style={{ fontSize: '1.6rem', color: '#003d4d', marginBottom: '1rem' }}>Our Promise</h2>
  <p style={{ fontWeight: 'bold', fontSize: '1.05rem' }}>
    “We don’t just teach — we guide, we prepare, and we place.”
  </p>
</motion.div>

{/* OUR PASSION */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
  viewport={{ once: true }}
  style={boxStyle}
>
  <h3 style={{ fontSize: '1.3rem', color: '#003d4d', marginBottom: '1rem' }}>Our Passion Lies in Helping You</h3>
  <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
    <li>Find the right career path based on your strengths.</li>
    <li>Build a strong skillset with industry-relevant training.</li>
    <li>Prepare for interviews with confidence through practical coaching.</li>
    <li>Secure your dream job through focused placement support.</li>
  </ul>
</motion.div>

{/* TRAINING RESULTS */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
  viewport={{ once: true }}
  style={boxStyle}
>
  <h3 style={{ fontSize: '1.3rem', color: '#003d4d', marginBottom: '1rem' }}>
    Career-Focused Training. Real Placement Results.
  </h3>
  <p>
    Through specialized courses, real-time internships, and employer partnerships...
  </p>
</motion.div>

{/* VISION */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
  viewport={{ once: true }}
  style={boxStyle}
>
  <h3 style={{ fontSize: '1.3rem', color: '#003d4d', marginBottom: '1rem' }}>Our Vision</h3>
  <p>To become the trusted platform for career guidance and career success for rural India.</p>
</motion.div>

{/* MISSION */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
  viewport={{ once: true }}
  style={boxStyle}
>
  <h3 style={{ fontSize: '1.3rem', color: '#003d4d', marginBottom: '1rem' }}>Our Mission</h3>
  <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
    <li>Empower students and job seekers with the skills needed for today's industries.</li>
    <li>Provide practical exposure to achieve faster placement outcomes.</li>
    <li>Support every learner in achieving interview clearance and career goals.</li>
    <li>Make quality career-focused education accessible for all.</li>
  </ul>
</motion.div>

{/* FINAL STATEMENT */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
  viewport={{ once: true }}
  style={boxStyle}
>
  <p style={{ fontWeight: 'bold', fontSize: '1.05rem', textAlign: 'center' }}>
    At Iyanthiran Edge, we don’t just teach — we guide, we prepare, and we place.
  </p>
  <p
    style={{
      fontFamily: 'Times New Roman, serif',
      fontSize: '1.1rem',
      fontWeight: '1000',
      color: '#073049',
      marginTop: '1rem',
      textAlign: 'center',
    }}
  >
    Your future is not just a dream. With Iyanthiran, it’s your destination.
  </p>
</motion.div>


    </section>
    </>
  );
}