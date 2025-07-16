import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaUserShield, FaRegSmile, FaRegClock, FaRegQuestionCircle, FaRegEdit, FaExchangeAlt, FaChalkboardTeacher, FaUniversity, FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpenText } from 'react-icons/fa';
import { FaCircle } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';

function FAQSection() {
  const [activeIndices, setActiveIndices] = useState([]);
  const [showAnswer, setShowAnswer] = useState({});
  const faqRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index]
    );
    setShowAnswer((prev) => ({ ...prev, [index]: true }));
  };

  const faqData = [
    {
      question: 'What is Iyanthiran Edge and how can it help my career?',
      answer: [
        'Iyanthiran is a career development organization.',
        'Offers specialized career guidance, training, internships, and placement support.',
        'Helps students and professionals identify the right career path, build skills, and succeed in the corporate world.'
      ]
    },
    {
      question: 'What types of courses do you offer?',
      answer: [
        'Soft Skills & Communication Training',
        'Interview Preparation Programs',
        'Final-Year Placement Training',
        'Domain-Specific Programs (IT, Science, Arts, Business)',
        'Skill Development Workshops'
      ]
    },
    {
      question: 'Who can enroll in your programs?',
      answer: [
        'College students',
        'Fresh graduates',
        'Job seekers',
        'Working professionals seeking a career change',
        'Institutions seeking bulk training and HR services'
      ]
    },
    {
      question: 'How do your internship programs work?',
      answer: [
        'Real-time projects with hands-on experience',
        'Free and sponsored internships',
        'Industry exposure through implant training',
        'Certificates provided after successful completion'
      ]
    },
    {
      question: 'What is the fee structure for your courses and services?',
      answer: [
        'Fees vary by program selected',
        'Free internships available for selected students',
        'Affordable career training programs',
        'Customized corporate packages for colleges/businesses'
      ]
    },
    {
      question: 'How do you assist with interview preparation?',
      answer: [
        'Resume and LinkedIn profile optimization',
        'Mock interviews with industry experts',
        'Coaching for behavioral and technical interviews',
        'Post-interview feedback for improvement'
      ]
    },
    {
      question: 'What kind of placement support does Iyanthiran offer?',
      answer: [
        'Employer tie-ups and referrals',
        'Aptitude and technical training',
        'Campus-to-corporate transition programs',
        'Placement readiness workshops'
      ]
    },
    {
      question: 'How can colleges and corporates collaborate with Iyanthiran?',
      answer: [
        'Placement training packages',
        'Recruitment drives and talent support',
        'Sponsored skill development events',
        'Custom learning and skilling initiatives'
      ]
    },
    {
      question: 'Where is Iyanthiran located?',
      answer: [
        'Headquartered in Rajapalayam, Tamil Nadu',
        'Workshops and events across various regions',
        'Google Map available on Contact Us page'
      ]
    },
    {
      question: 'How can I get started?',
      answer: [
        'Call us at +91 93639 23506',
        'Email info@iyanthiran.com',
        'Fill the quick form on Contact Us page',
        'Visit our office directly'
      ]
    }
  ];

  // Unique, relevant icon mapping for each FAQ
  const faqIcons = [
    <FaUserShield size={24} color="#32bdac" />, // Trust & Security
    <FaRegSmile size={24} color="#32bdac" />,   // Free trial
    <FaRegClock size={24} color="#32bdac" />,   // Trial duration
    <FaExchangeAlt size={24} color="#32bdac" />, // Export/stop using
    <FaRegEdit size={24} color="#32bdac" />,    // Change plan
    <FaChalkboardTeacher size={24} color="#32bdac" />, // Interview prep
    <FaUniversity size={24} color="#32bdac" />, // Placement support
    <FaEnvelopeOpenText size={24} color="#32bdac" />, // Collaboration
    <FaMapMarkerAlt size={24} color="#32bdac" />, // Location
    <FaPhoneAlt size={24} color="#32bdac" />     // Contact
  ];

  // Multi-expand: allow multiple open
  const [openIndices, setOpenIndices] = useState([]);
  const handleAccordion = (index) => {
    setOpenIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      {/* Hero Section */}
      <motion.section
          className="hero text-center"
          style={{
            backgroundColor: '#f0f8ff',
            padding: '4rem 1rem',
            marginBottom: '3rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
          }}
         
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#003d4d'
            }}
          >
            Frequently Asked Questions (FAQ)
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontSize: '1.1rem',
              maxWidth: '800px',
              margin: '0 auto',
              color: '#333'
            }}
          >
            At Iyanthiran Edge, we know that choosing the right partner for your career journey is important.
            Find quick answers to help you decide with confidence.
          </motion.p>
        </motion.section>


      {/* FAQ Accordion Section */}
      <section
        ref={faqRef}
        className="faq-section"
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '1rem',
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          background: '#f7fafc',
        }}
      >
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            style={{
              marginBottom: '2rem',
              borderRadius: '14px',
              overflow: 'hidden',
              border: '1px solid #e6e6e6',
              backgroundColor: '#fcfcfd',
              boxShadow: openIndices.includes(index)
                ? '0 8px 32px rgba(0,0,0,0.18)'
                : '0 2px 8px rgba(0,0,0,0.10)',
              textAlign: 'justify',
              transition: 'box-shadow 0.2s, border 0.2s',
              position: 'relative',
            }}
            whileHover={{ boxShadow: '0 8px 32px rgba(0,0,0,0.22)', borderColor: '#b2f0e9' }}
          >
            <button
              onClick={() => handleAccordion(index)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: 'left',
                padding: '1.25rem 1.5rem',
                background: openIndices.includes(index) ? '#f6fffd' : 'none',
                color: '#003d4d',
                border: 'none',
                fontWeight: 600,
                fontSize: '1.08rem',
                cursor: 'pointer',
                outline: 'none',
                transition: 'background 0.2s',
                gap: '1rem',
                borderBottom: openIndices.includes(index) ? '1px solid #32bdac' : '1px solid #f2f2f2',
              }}
              aria-expanded={openIndices.includes(index)}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ minWidth: 32, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {faqIcons[index % faqIcons.length]}
                </span>
                {faq.question}
              </span>
              <span style={{
                transform: openIndices.includes(index) ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s',
                fontSize: '1.5rem',
                color: '#32bdac',
                marginLeft: '1rem',
                display: 'flex',
                alignItems: 'center',
              }}>
                ▼
              </span>
            </button>
            <AnimatePresence initial={false}>
              {openIndices.includes(index) && (
                <motion.div
                  key="answer"
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ opacity: { duration: 0.25 } }}
                  style={{
                    overflow: 'hidden',
                    background: '#fcfcfc',
                    fontSize: '1rem',
                    color: '#222',
                  }}
                >
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.08, duration: 0.3 }}
                    style={{ padding: '1rem 2.5rem 1.5rem 4.5rem', margin: 0, listStyle: 'none' }}
                  >
                    {faq.answer.map((point, i) => (
                      <li key={i} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <FaCircle size={8} color="#32bdac" style={{ marginTop: '0.4em', flexShrink: 0 }} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </motion.ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </section>
    </>
  );
}

export default FAQSection;
