import React from 'react';
import HeroSection from './HeroSection';
import { motion } from "framer-motion";

function CareerInsightsBlog() {
  const blogData = [
    {
      title: 'Career Guidance: Your Roadmap to Success',
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
      points: [
        'Soft skills like public speaking and team leadership.',
        'Domain-specific knowledge in IT, Science, Arts, and Business.',
        'Practical learning through workshops and internships.'
      ],
      tip: 'Did you know? 80% of job success depends on soft skills.'
    },
    {
      title: 'Interview Preparation: Clearing the Final Step',
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
      points: [
        'Custom training modules for colleges.',
        'Campus recruitment partnerships.',
        'HR consulting for skill development initiatives.'
      ],
      tip: 'Institutions: We help strengthen placement records with job-ready students.'
    },
    {
      title: 'Your Career Journey Starts Here',
      points: [
        'Customized career guidance.',
        'Proven placement strategies.',
        'Advanced skills development training.'
      ],
      tip: ' Walk a clear, structured path to success with confidence.'
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
        className="career-blog-section"
        style={{ padding: '2rem 1rem', backgroundColor: '#f9f9f9' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Blog & Insights</h2>
        <p
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            marginBottom: '3rem'
          }}
        >
          Your Guide to Career Success: Tips, Strategies, and Real Stories. At Iyanthiran Edge, we
          are not just passionate about career guidance — we are committed to shaping complete
          career journeys. Our mission is to empower you with the right skills, map your career
          path, and help you reach your professional goals with confidence.
        </p>

        {/* Grid Layout */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            justifyItems: 'center',
            maxWidth: '1100px',
            margin: '0 auto'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {blogData.map((item, idx) => (
            <div
              key={idx}
              style={{
                width: '100%',
                maxWidth: '300px',
                backgroundColor: 'rgb(143, 225, 223)',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 0 10px rgba(0,0,0,0.05)'
              }}
            >
              <h3 style={{ marginBottom: '1rem', color: '#003d4d' }}>{item.title}</h3>
              <ul style={{ paddingLeft: '1.2rem', marginBottom: '1rem' }}>
                {item.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
              <p style={{ fontStyle: 'italic', color: '#666' }}>{item.tip}</p>
            </div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
}

export default CareerInsightsBlog;
