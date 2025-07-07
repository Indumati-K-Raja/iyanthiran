import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const imageStyle = {
    height: '180px',
    objectFit: 'contain',
    marginBottom: '1rem'
  };

    const lightThemeBg = {
    backgroundColor: '#e6f1f3', // Very light version of #003d4d
    padding: '2rem 0'
  };


  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };


  const sectionWrapperStyle = {
    padding: '2rem',
    borderRadius: '12px',
    background: '#ffffff',
    boxShadow: '0 0 0 rgba(0,0,0,0.0)',
    transition: 'box-shadow 0.3s ease',
  };

  const hoverEffect = {
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero text-center" style={{ padding: '4rem 1rem' }}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Spark Your Potential,<br />Mould Your Destiny
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Iyanthiran is a leading HR consulting and skill development firm that helps businesses and individuals achieve their goals.
        </motion.p>

        <motion.div
          className="subscribe-box d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <input
            type="email"
            placeholder="Your Mail Address"
            className="form-control w-auto"
          />
          <button className="btn btn-dark">Subscribe</button>
        </motion.div>
      </section>

      {/* GROWTH & PERFORMANCE Section */}
    <div style={lightThemeBg}>
      <section className="section-growth-performance py-5">
        <div className="container">
          <div className="section-header text-center mb-4">
            <h2>Growth &amp; Performance</h2>
          </div>
          <motion.div
            className="p-3"
            whileHover={hoverEffect}
            style={sectionWrapperStyle}
          >
            <div className="row g-4">
              {[{
                img: 'growth.jpeg',
                title: 'Driving Organization Growth',
                desc: 'Empower your workforce for sustainable growth with strategic HR consulting services tailored to your organization’s unique needs.'
              }, {
                img: 'enhancing employee performance.jpeg',
                title: 'Enhancing Employee Performance',
                desc: 'Elevate your team’s performance through targeted HR consulting solutions. We help optimize workflows and foster a culture of continuous improvement.'
              }, {
                img: 'decision making.jpeg',
                title: 'Metrics-Driven Decision Making',
                desc: 'Revolutionize your decision-making processes with data-driven insights.'
              }, {
                img: 'HighPerformanceCulture.jpeg',
                title: 'Creating a High-Performance Culture',
                desc: 'Foster a culture of excellence with our leadership development and employee engagement strategies.'
              }].map(({ img, title, desc }, index) => (
                <motion.div
                  className="col-md-6 col-lg-3"
                  key={title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="info-box text-center">
                    <img src={`/images/${img}`} alt={title} className="img-fluid" style={imageStyle} />
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>

      {/* WHAT WE OFFER Section */}
     <div style={lightThemeBg}>
      <section className="section-offer py-5">
        <div className="container">
          <div className="section-header text-center mb-4">
            <h2>What We Offer</h2>
          </div>
          <motion.div
            className="p-3"
            whileHover={hoverEffect}
            style={sectionWrapperStyle}
          >
            <div className="row g-4">
              {[{
                img: 'AdvancedTech.jpeg',
                title: 'Advanced Technologies',
                desc: 'Leverage our deep knowledge in AI/ML, IoT, analytics, pharma, FMCG and semiconductor industries to stay ahead of the curve.'
              }, {
                img: 'CustomizedSolution.jpeg',
                title: 'Customized Solutions',
                desc: 'We specialize in creating tailored solutions that meet the unique needs of your business.'
              }, {
                img: 'TrackRecord.jpeg',
                title: 'Proven Track Record',
                desc: 'With years of experience and a portfolio of successful projects, we are a trusted partner in technology innovation.'
              }].map(({ img, title, desc }, index) => (
                <motion.div
                  className="col-md-4"
                  key={title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="info-box text-center">
                    <img src={`/images/${img}`} alt={title} className="img-fluid" style={imageStyle} />
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>

                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
     </div> 

      {/* SERVICES Section */}
    <div style={lightThemeBg}>
      <section className="section-services py-5">
        <div className="container">
          <div className="section-header text-center mb-4">
            <h2>Services</h2>
          </div>
          <motion.div
            className="p-3"
            whileHover={hoverEffect}
            style={sectionWrapperStyle}
          >
            <div className="row g-4">
              {[{
                img: 'Placement.jpeg',
                title: 'Placements',
                desc: 'Discover more relevant content tailored to your interests with our placements feature.'
              }, {
                img: 'TrainingDev.jpg',
                title: 'Training And Skill Development',
                desc: 'Investing in training and skill development enhances employee performance and drives organizational growth.'
              }, {
                img: 'partnership.jpeg',
                title: 'Partnerships',
                desc: 'We build strong partnerships that extend our capabilities and create value-driven solutions for our clients across various industries.'
              }].map(({ img, title, desc }, index) => (
                <motion.div
                  className="col-md-4"
                  key={title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                   <div className="info-box text-center">
                    <img src={`/images/${img}`} alt={title} className="img-fluid" style={imageStyle} />
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>

                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="text-center mt-4">
            <Link to="/aboutus" className="btn" style={{ backgroundColor: '#003d4d', color: 'white' }}>
              Explore More
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
