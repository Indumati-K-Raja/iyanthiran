import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import bgImage from '../assets/img/course.avif'; // adjust path based on your file
import { useAnimation } from 'framer-motion';

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

const courseImages = {
  'Python Programming': '/images/python.jpg',
  'Java Programming': '/images/java.jpg',
  'Full Stack Development': '/images/fullstack.jpg',
  'Business Management Essentials': '/images/strategy.jpg',
  'Digital Marketing & SEO': '/images/seo.jpg',
  'Branding & Marketing Strategy (New)': '/images/neew.jpg',
  'Mastering LinkedIn & Personal Branding (New)': '/images/linkedin.jpg',
  'PCM Core Program': '/images/pcm.jpg',
  'Literature & Scientific Writing with SEO': '/images/lit.jpg',
};

const cardVariant = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } }
};
const imageVariant = {
  hidden: { opacity: 0, y: -30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  hover: { scale: 1.07, boxShadow: '0 8px 24px rgba(52, 152, 219, 0.18)' }
};
const contentVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.18, ease: 'easeOut' } },
  hover: { }
};

const gridCardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.05, duration: 0.28, ease: 'easeOut' }
  })
};
const gridImageVariant = {
  rest: { scale: 1, rotate: 0, y: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.07)' },
  hover: { scale: 1.13, rotate: 6, y: -8, boxShadow: '0 8px 32px #5dd3c655' },
  tap: { scale: 0.97, rotate: -6, y: 2, boxShadow: '0 4px 16px #278da055' }
};

function Courses() {
  useEffect(() => {
    const prev = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#fefcff';
    return () => { document.body.style.backgroundColor = prev; };
  }, []);
  return (
    <div style={{ background: '#fefcff', minHeight: '100vh', width: '100vw' }}>
      {/* Hero Section Animation */}
      <section className="hero text-center" style={{ padding: '4rem 1rem', backgroundColor: '#f2ebe2' }}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2.5rem' }}
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

      <section id="courses-section" style={{ position: 'relative', padding: '1.5rem 1rem', background: '#fefcff', borderRadius: '0', boxShadow: 'none', maxWidth: '100vw', margin: '0', minHeight: '100vh' }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1.2rem', color: '#003d4d', fontWeight: 'bold', fontSize: '2.2rem', letterSpacing: '0.01em', lineHeight: 1.1, position: 'relative' }}>
            Top Career Courses
            <span style={{
              display: 'block',
              width: '60px',
              height: '4px',
              background: 'linear-gradient(90deg, #5dd3c6 0%, #278da0 100%)',
              margin: '12px auto 0 auto',
              borderRadius: '2px',
              opacity: 0.18
            }}></span>
          </h2>
          {courses.map((block, blockIdx) => (
            <div key={block.category} style={{
              marginBottom: '1.5rem',
              padding: '1.5rem 1rem',
              maxWidth: '100%',
              width: '100%',
              transition: 'box-shadow 0.3s, background 0.3s',
            }}>
              <h3 style={{ color: '#339da9', marginBottom: '0.8rem', fontWeight: 700, fontSize: '1.13rem', letterSpacing: '0.01em', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{block.category}</h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
                  gap: '1.2rem',
                  justifyItems: 'center',
                  alignItems: 'stretch',
                  background: 'none',
                  borderRadius: '0',
                  boxShadow: 'none',
                  padding: '0',
                  marginBottom: '0.5rem',
                }}
              >
                {block.items.map((course, i) => {
                  const imgControls = useAnimation();
                  useEffect(() => { imgControls.start('rest'); }, [imgControls]);
                  const idx = blockIdx * 10 + i;
                  return (
                  <motion.div
                      key={course.title}
                      custom={idx}
                      variants={gridCardVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                      whileHover={{
                        boxShadow: '0 12px 36px rgba(52, 152, 219, 0.13)',
                        y: -8,
                        zIndex: 2,
                        scale: 1.035,
                        border: '1.5px solid #5dd3c6',
                        background: '#fff',
                      }}
                      whileTap={{
                        boxShadow: '0 4px 16px #278da055',
                        y: 2,
                        zIndex: 3,
                        scale: 0.98,
                        border: '1.5px solid #278da0',
                        background: '#fff',
                      }}
                      onHoverStart={() => imgControls.start('hover')}
                      onHoverEnd={() => imgControls.start('rest')}
                      onTapStart={() => imgControls.start('tap')}
                      onTapCancel={() => imgControls.start('rest')}
                      onTap={() => imgControls.start('rest')}
                    style={{
                      background: '#fff',
                        borderRadius: '18px',
                        padding: '2.1rem 1.2rem 1.5rem 1.2rem',
                        boxShadow: '0 2px 12px rgba(93,211,198,0.07)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        border: '1.5px solid #e6faf8',
                        minHeight: '340px',
                        transition: 'box-shadow 0.3s, border 0.3s, background 0.3s, scale 0.2s',
                    }}
                  >
                      {courseImages[course.title] && !['Python Programming', 'Java Programming', 'Full Stack Development', 'Business Management Essentials', 'Digital Marketing & SEO', 'Branding & Marketing Strategy (New)', 'Mastering LinkedIn & Personal Branding (New)', 'PCM Core Program', 'Literature & Scientific Writing with SEO'].includes(course.title) && (
                        <motion.img
                          src={courseImages[course.title]}
                          alt={course.title}
                          variants={gridImageVariant}
                          initial="rest"
                          animate={imgControls}
                          style={{
                            width: '90px',
                            height: '90px',
                            objectFit: 'cover',
                            borderRadius: '50%',
                            marginBottom: '1.1rem',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                            transition: 'box-shadow 0.3s, transform 0.3s',
                            zIndex: 1,
                            background: '#f8f8f8',
                            border: '3px solid #e6faf8',
                          }}
                        />
                      )}
                      {['Python Programming', 'Java Programming', 'Full Stack Development', 'Business Management Essentials', 'Digital Marketing & SEO', 'Branding & Marketing Strategy (New)', 'Mastering LinkedIn & Personal Branding (New)', 'PCM Core Program', 'Literature & Scientific Writing with SEO'].includes(course.title) && (
                        <motion.div
                          variants={gridImageVariant}
                          initial="rest"
                          animate={imgControls}
                          style={{
                            width: '90px',
                            height: '90px',
                            borderRadius: '50%',
                            background: '#f8f8f8',
                            border: '3px solid #e6faf8',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.1rem',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                            fontSize: '2.7rem',
                            color: '#278da0',
                            zIndex: 1,
                            transition: 'box-shadow 0.3s, transform 0.3s',
                          }}
                        >
                          {course.title === 'Python Programming' && <i className="fa-brands fa-python"></i>}
                          {course.title === 'Java Programming' && <i className="fa-brands fa-java"></i>}
                          {course.title === 'Full Stack Development' && <i className="fa-solid fa-laptop-code"></i>}
                          {course.title === 'Business Management Essentials' && <i className="fa-solid fa-briefcase"></i>}
                          {course.title === 'Digital Marketing & SEO' && <i className="fa-solid fa-chart-line"></i>}
                          {course.title === 'Branding & Marketing Strategy (New)' && <i className="fa-solid fa-bullhorn"></i>}
                          {course.title === 'Mastering LinkedIn & Personal Branding (New)' && <i className="fa-brands fa-linkedin"></i>}
                          {course.title === 'PCM Core Program' && <i className="fa-solid fa-atom"></i>}
                          {course.title === 'Literature & Scientific Writing with SEO' && <i className="fa-solid fa-pen-nib"></i>}
                        </motion.div>
                      )}
                      <motion.div
                        style={{ width: '100%', textAlign: 'center', zIndex: 2 }}
                  >
                        <h4 style={{ color: '#003d4d', marginBottom: '1rem', textAlign: 'center', fontWeight: 700, fontSize: '1.13rem', letterSpacing: '0.01em' }}>{course.title}</h4>
                        <ul style={{ paddingLeft: 0, textAlign: 'left', margin: 0, color: '#444', fontSize: '1rem', lineHeight: 1.6 }}>
                      {course.description.map((point, pIdx) => (
                            <li key={pIdx} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.7em', lineHeight: '1.6' }}>
                              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '1.5em', height: '1.5em', color: '#32bdac' }}>
                                <i className="fa-solid fa-circle-check" style={{ color: '#32bdac', fontSize: '1em', lineHeight: '1.6' }}></i>
                              </span>
                              <span style={{ lineHeight: '1.6' }}>{point}</span>
                            </li>
                      ))}
                    </ul>
                  </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Section - Modern Reference Inspired */}
        <section style={{
          background: '#1bb6a3',
          padding: '1.1rem 0',
          margin: '0',
          width: '100vw',
            position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1rem' }}>
            <h2 style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0.3rem', letterSpacing: '0.01em' }}>
              Why Choose Iyanthiran Edge?
            </h2>
            <p style={{ color: '#444', textAlign: 'center', fontSize: '1rem', marginBottom: '1rem', fontWeight: 400 }}>
              Empowering Your Career Journey
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              gap: '1.2rem',
              margin: '0 auto 1rem auto',
              width: '100%',
            }}>
              {/* Feature 1 */}
              <motion.div
                whileHover={{
                  scale: 1.045,
                  boxShadow: '0 8px 32px rgba(34,199,182,0.18)',
                  backgroundColor: '#22c7b6',
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                style={{
                  background: 'rgba(255,255,255,0.10)',
                  borderRadius: '24px',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                  padding: '0.7rem 1.2rem 0.7rem 1.2rem',
                  minWidth: '260px',
                  flex: '1 1 340px',
                  maxWidth: '420px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  cursor: 'pointer',
                }}
              >
                <i className="fa-solid fa-chalkboard-teacher" style={{ color: '#fff', fontSize: '2.1rem', marginBottom: '0.3rem' }}></i>
                <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.08rem' }}>Domain-Expert Trainers</div>
              </motion.div>
              {/* Feature 2 */}
              <motion.div
                whileHover={{
                  scale: 1.045,
                  boxShadow: '0 8px 32px rgba(34,199,182,0.18)',
                  backgroundColor: '#22c7b6',
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                style={{
                  background: 'rgba(255,255,255,0.10)',
                  borderRadius: '24px',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                  padding: '0.7rem 1.2rem 0.7rem 1.2rem',
                  minWidth: '260px',
                  flex: '1 1 340px',
                  maxWidth: '420px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  cursor: 'pointer',
                }}
              >
                <i className="fa-solid fa-briefcase" style={{ color: '#fff', fontSize: '2.1rem', marginBottom: '0.3rem' }}></i>
                <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.08rem' }}>Real-Time Internships</div>
              </motion.div>
              {/* Feature 3 */}
              <motion.div
                whileHover={{
                  scale: 1.045,
                  boxShadow: '0 8px 32px rgba(34,199,182,0.18)',
                  backgroundColor: '#22c7b6',
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                style={{
                  background: 'rgba(255,255,255,0.10)',
                  borderRadius: '24px',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                  padding: '0.7rem 1.2rem 0.7rem 1.2rem',
                  minWidth: '260px',
                  flex: '1 1 340px',
                  maxWidth: '420px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  cursor: 'pointer',
                }}
              >
                <i className="fa-solid fa-user-check" style={{ color: '#fff', fontSize: '2.1rem', marginBottom: '0.3rem' }}></i>
                <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.08rem' }}>100% Placement Support</div>
        </motion.div>
            </div>
            {/* CTA Box */}
            <div style={{
              background: '#fff',
              borderRadius: '18px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              padding: '1.2rem 1rem',
              margin: '1.5rem auto 0 auto',
              maxWidth: '480px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <div style={{ fontWeight: 700, color: '#169b8d', fontSize: '1.45rem', marginBottom: '0.7rem' }}>Ready to Build Your Career?</div>
              <div style={{ color: '#444', fontSize: '1.08rem', marginBottom: '1.2rem' }}>Admissions Open – Enroll Today</div>
          <a
            href="https://iyanthiran.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
                  padding: '0.9rem 2.2rem',
                  background: 'linear-gradient(90deg, #169b8d 0%, #5dd3c6 100%)',
                  color: '#fff',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
                  fontSize: '1.08rem',
                  boxShadow: '0 2px 8px rgba(93,211,198,0.13)',
                  transition: 'background 0.2s',
            }}
          >
            Visit www.iyanthiran.com
          </a>
        </div>
          </div>
        </section>
      </section>

      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
    </div>
  );
}

export default Courses;
