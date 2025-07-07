import React from 'react';
import { motion } from 'framer-motion';
import bgImage from '../assets/img/course.avif'; // adjust path based on your file

const courses = [
  {
    category: 'IT & Computer Science',
    items: [
      {
        title: 'Python Programming',
        description: [
          'Master Python for software development, AI, data analysis, and automation.',
          'Hands-on coding practice and real-world projects.',
          'Interview preparation and placement support.'
        ]
      },
      {
        title: 'Java Programming',
        description: [
          'Build strong foundations in Core and Advanced Java.',
          'Work on industry-grade projects, app development, and backend systems.',
          'Resume building, mock interviews, and hiring support.'
        ]
      },
      {
        title: 'Full Stack Development',
        description: [
          'Frontend: HTML, CSS, JavaScript, React.',
          'Backend: Node.js, Express, MongoDB.',
          'Complete web app projects and deployment training.',
          '100% Placement assistance for software development roles.'
        ]
      }
    ]
  },
  {
    category: 'Business & Marketing',
    items: [
      {
        title: 'Business Management Essentials',
        description: [
          'Business Strategy, CRM, Financial Basics.',
          'Entrepreneurial Skills and Business Planning.',
          'Corporate readiness training.'
        ]
      },
      {
        title: 'Digital Marketing & SEO',
        description: [
          'SEO, SEM, Google Ads, Social Media Marketing.',
          'Content Strategy and Analytics.',
          'Live digital campaigns and certification support.'
        ]
      },
      {
        title: 'Branding & Marketing Strategy (New)',
        description: [
          'Learn branding principles, positioning, and storytelling.',
          'Execute result-driven marketing strategies across platforms.',
          'Build and sustain brand identity in real-world campaigns.'
        ]
      },
      {
        title: 'Mastering LinkedIn & Personal Branding (New)',
        description: [
          'Optimize LinkedIn profiles for career growth and visibility.',
          'Build a consistent personal brand with content, networking, and positioning.',
          'SEO strategies and weekly milestone plan for 100 days.'
        ]
      }
    ]
  },
  {
    category: 'Science & Literature',
    items: [
      {
        title: 'PCM Core Program',
        description: [
          'Concept mastery for academic and research excellence.',
          'Skill development for scientific communication roles.'
        ]
      },
      {
        title: 'Literature & Scientific Writing with SEO',
        description: [
          'Content writing, research articles, editing.',
          'SEO for educational and digital publishing sectors.',
          'Real-time writing projects and portfolio building.'
        ]
      }
    ]
  }
];

const highlights = [
  '100% Placement Support',
  'Domain-Expert Trainers',
  'Internships & Real-time Projects'
];

const cardVariant = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } }
};

function Courses() {
  return (
    <>
      {/* Hero Section Animation */}
      <section className="hero text-center" style={{ padding: '4rem 1rem', backgroundColor: '#f0f8ff' }}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}
        >
          Your Future Begins with Skill
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}
        >
          Explore top career-focused courses in IT, Business, Marketing, Science & Literature — guided by domain experts and backed by 100% placement support.
        </motion.p>
      </section>

      <section id="courses-section" style={{ position: 'relative', padding: '4rem 1rem', overflow: 'hidden', borderRadius: '12px' }}>
        {/* Background image */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            opacity: 0.15,
            zIndex: 0,
            pointerEvents: 'none'
          }}
        ></div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#339da9', fontWeight: 'bold' }}>Top Career Courses</h2>
          {courses.map((block, idx) => (
            <div key={idx} style={{ marginBottom: '3rem' }}>
              <h3 style={{ color: '#003d4d', marginBottom: '1rem' }}>{block.category}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                {block.items.map((course, i) => (
                  <motion.div
                    key={i}
                    variants={cardVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(0,0,0,0.15)' }}
                    style={{
                      flex: '1 1 300px',
                      background: '#c9f7f6',
                      borderRadius: '12px',
                      padding: '1.5rem',
                      boxShadow: '0 0 10px rgba(0,0,0,0.05)'
                    }}
                  >
                    <h4 style={{ color: '#222', marginBottom: '1rem' }}>{course.title}</h4>
                    <ul style={{ paddingLeft: '1.2rem' }}>
                      {course.description.map((point, pIdx) => (
                        <li key={pIdx} style={{ marginBottom: '0.5rem' }}>{point}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          style={{
            backgroundColor: '#8FE1DF',
            padding: '2rem',
            borderRadius: '12px',
            marginTop: '2rem',
            textAlign: 'center',
            boxShadow: '0 0 10px rgba(0,0,0,0.05)',
            position: 'relative',
            zIndex: 2
          }}
        >
          <h3 style={{ color: '#003d4d', marginBottom: '1rem' }}>Why Choose Iyanthiran Edge?</h3>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.5rem'
            }}
          >
            {highlights.map((hl, i) => (
              <li key={i} style={{ paddingRight: '3rem', fontWeight: 'bold', color: '#333', fontStyle: 'italic', marginTop: '2rem' }}>
                {hl}
              </li>
            ))}
          </ul>
        </motion.div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <h3>Ready to Build Your Career?</h3>
          <p style={{ fontSize: '1.1rem', color: 'rgb(3, 85, 94)', fontWeight: 'bold', fontStyle: 'italic', marginTop: '1rem' }}>
            Admissions Open – Enroll Today
          </p>
          <a
            href="https://iyanthiran.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '1rem',
              padding: '0.8rem 1.8rem',
              backgroundColor: '#003d4d',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              width: 'fit-content',
              maxWidth: '100%',
              border: 'none',
              position: 'relative',
              zIndex: 2
            }}
            onTouchStart={(e) => e.target.style.backgroundColor = '#005f6b'}
            onTouchEnd={(e) => e.target.style.backgroundColor = '#003d4d'}
          >
            Visit www.iyanthiran.com
          </a>
        </div>
      </section>

      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
    </>
  );
}

export default Courses;
