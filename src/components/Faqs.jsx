import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

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
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
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
              marginBottom: '1rem',
              borderRadius: '8px',
              overflow: 'hidden',
              border: 'none',
              backgroundColor: '#fff',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              textAlign: 'justify'
            }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '1rem',
                background: '#c9f7f6',
                color: '#003d4d',
                border: 'none',
                fontWeight: 'bold',
                fontSize: '1rem',
                cursor: 'pointer',
                height: '5rem'
              }}
            >
              {faq.question}
              <span style={{ float: 'right' }}>⮟</span>
            </button>
            <div
              style={{
                maxHeight: activeIndices.includes(index) ? '500px' : '0px',
                opacity: activeIndices.includes(index) ? 1 : 0,
                padding: activeIndices.includes(index) ? '1rem' : '0 1rem',
                overflow: 'hidden',
                transition: 'all 0.4s ease'
              }}
            >
              <ul style={{ paddingLeft: '1.25rem', margin: 0, }}>
                {activeIndices.includes(index) && showAnswer[index] && (
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                              `<ul style="padding-left: 1.2rem;  margin: 0; list-style: none;">
                                ${faq.answer.map(point => `<li>➤ ${point}</li>`).join('')}
                              </ul>`
                            )

                           .start();
                          }}
                          options={{
                            delay: 1,
                            autoStart: true,
                            loop: false,
                            html: true,
                            cursor: '',
                          }}
                        />

                )}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>
    </>
  );
}

export default FAQSection;
