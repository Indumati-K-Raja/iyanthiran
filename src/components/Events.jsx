import { useState, useEffect, useRef } from 'react';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import aiEventImage from "../assets/img/img2.avif";
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaRegLightbulb, FaRegTimesCircle, FaRegUser, FaChalkboardTeacher } from 'react-icons/fa';
import { MdEventAvailable } from 'react-icons/md';
import { HiOutlineExternalLink } from 'react-icons/hi';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Events() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [galleryScrollPosition, setGalleryScrollPosition] = useState(0);
  const eventsContainerRef = useRef(null);
  const galleryContainerRef = useRef(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);

  // Event data
  const upcomingEvents = [
    {
      id: 1,
      title: 'AI in Talent Acquisition - Webinar',
      date: 'July 12, 2025',
      time: '3:00 PM - 4:30 PM IST',
      location: 'Online',
      image: aiEventImage,
      description: 'Join us for a deep dive into how AI is transforming hiring processes in modern industries.',
      icon: FaRegUser,
      color: '#169bb0'
    },
    {
      id: 2,
      title: 'Digital Marketing Masterclass',
      date: 'July 18, 2025',
      time: '2:00 PM - 4:00 PM IST',
      location: 'Chennai',
      image: '/images/strategy.jpg',
      description: 'Learn advanced digital marketing strategies and tools for business growth.',
      icon: FaChalkboardTeacher,
      color: '#26a69a'
    },
    {
      id: 3,
      title: 'Leadership Development Workshop',
      date: 'July 25, 2025',
      time: '10:00 AM - 5:00 PM IST',
      location: 'Bangalore',
      image: '/images/growth.jpeg',
      description: 'Develop essential leadership skills for the modern workplace.',
      icon: FaRegLightbulb,
      color: '#5dd3c6'
    }
  ];

  const pastEvents = [
    {
      id: 1,
      title: 'BRAINS / Innovate for Impact',
      date: '14 February 2024',
      time: '11:00 AM IST',
      location: 'DoMS – MSU, Tirunelveli',
      image: '/images/iyanthiran-img.jpg',
      description: 'A successful innovation event that brought together industry leaders and students.',
      icon: FaRegLightbulb,
      color: '#169bb0'
    },
    {
      id: 2,
      title: 'Tech Career Fair 2024',
      date: 'March 15, 2024',
      time: '9:00 AM - 6:00 PM IST',
      location: 'Mumbai',
      image: '/images/Placement.jpeg',
      description: 'Connecting top tech talent with leading companies in the industry.',
      icon: FaRegUser,
      color: '#26a69a'
    }
  ];

  const galleryItems = [
    {
      id: 1,
      type: 'instagram',
      src: 'https://www.instagram.com/reel/DLr5RylTQBg/embed',
      caption: 'Instagram Reel',
      description: 'A highlight reel from our Instagram, capturing the energy of our events.',
      bg: '#2d1e4a',
    },
    {
      id: 2,
      type: 'instagram',
      src: 'https://www.instagram.com/reel/DLM-Rxbz1jO/embed',
      caption: 'Latest Instagram Reel',
      description: 'Our latest Instagram reel showcasing the latest events and activities.',
      bg: '#3e206e',
    },
    {
      id: 3,
      type: 'image',
      src: '/images/place.png',
      alt: 'Event Location Map',
      caption: 'Event Location',
      description: 'A look at the location where our events take place, shown on Google Maps.',
      bg: '#4a148c',
    },
    {
      id: 4,
      type: 'image',
      src: '/images/PartWidUs.png',
      alt: 'Partnership Event',
      caption: 'Partnership Event',
      description: 'Celebrating successful partnerships and collaborations.',
      bg: '#6a1b9a',
    },
    {
      id: 5,
      type: 'image',
      src: '/images/TrainingDev.jpg',
      alt: 'Training Session',
      caption: 'Training Session',
      description: 'Interactive training sessions that empower participants.',
      bg: '#8e24aa',
    }
  ];

  // Render 3 sets of gallery items for seamless coverage
  const seamlessGalleryItems = [...galleryItems, ...galleryItems, ...galleryItems];

  // Theme colors
  const themeGradient = 'linear-gradient(135deg, #e6faf8 0%, #5dd3c6 40%, #26a69a 100%)';
  const themeAccent = '#07839a';

  // Marquee state and effect
  const [galleryTrackX, setGalleryTrackX] = useState(0);
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const galleryTrackRef = useRef(null);
  useEffect(() => {
    const cardWidth = 350 + 32;
    const loopWidth = galleryItems.length * cardWidth;
    let x = 0;
    let animationFrame;
    const scrollSpeed = 1.2; // px per frame
    function animate() {
      if (!isMarqueePaused) {
        x -= scrollSpeed;
        if (Math.abs(x) >= loopWidth) {
          x = 0;
        }
        setGalleryTrackX(x);
      }
      animationFrame = requestAnimationFrame(animate);
    }
    animationFrame = requestAnimationFrame(animate);
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [galleryItems.length, isMarqueePaused]);

  // Handlers for pausing/resuming marquee
  const handlePauseMarquee = () => setIsMarqueePaused(true);
  const handleResumeMarquee = () => setIsMarqueePaused(false);

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };

  const heroVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 60, scale: 0.95 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        delay: i * 0.2,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.02,
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const galleryCardVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5, 
        delay: i * 0.1,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const tabVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      style={{ background: '#f7fafc', minHeight: '100vh', paddingBottom: '1rem' }}
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
    >
      {/* Hero Section */}
      <motion.section 
        className="hero text-center" 
        style={{ padding: '4rem 1rem', backgroundColor: '#f0f8ff' }}
        variants={heroVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h2
          style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#003d4d' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Upcoming Events & Workshops
        </motion.h2>
        <motion.p
          style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', color: '#555' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Join our expert-led sessions to boost your career or workforce.
        </motion.p>
      </motion.section>

      {/* Events Section */}
      <motion.section
        className="section-events"
        style={{
          maxWidth: '100vw',
          margin: '0 auto',
          padding: '3.5rem 0',
          background: 'none',
          overflow: 'hidden',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {/* Tabs */}
        <motion.div
          className="event-tabs advanced-event-tabs"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3.5rem',
            padding: '0 2rem',
          }}
          variants={tabVariants}
          initial="initial"
          animate="animate"
        >
          <motion.button
            className={`advanced-tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Upcoming Events
          </motion.button>
          <motion.button
            className={`advanced-tab-btn ${activeTab === 'past' ? 'active' : ''}`}
            onClick={() => setActiveTab('past')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Past Events
          </motion.button>
        </motion.div>

        {/* Event Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
          className="event-cards"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2.5rem',
            background: 'none',
            marginTop: '1.5rem',
          }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            {activeTab === 'upcoming' && upcomingEvents.map((event, index) => {
              const IconComponent = event.icon;
              return (
            <motion.div
                  key={event.id}
                  className="event-card eael-cf-upcoming-events modern-animated-card vibrant-event-card"
              style={{
                width: '100%',
                    maxWidth: 1040,
                    minHeight: 420,
                    background: 'linear-gradient(120deg, #f8fafc 60%, #e8f7ff 100%)',
                    boxShadow: '0 12px 48px rgba(22,155,176,0.13), 0 4px 18px rgba(0,0,0,0.13)',
                borderRadius: '38px',
                overflow: 'hidden',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                marginBottom: '0',
                padding: '0',
                border: 'none',
                position: 'relative',
              }}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  custom={index}
                >
                  <div className="event-card-accent-bar event-card-accent-bar-upcoming"></div>
                  <motion.img
                    src={event.image}
                    alt={event.title}
                style={{
                  width: '400px',
                  height: '100%',
                  minHeight: '340px',
                  objectFit: 'cover',
                  borderRadius: '32px 0 0 32px',
                  transition: 'box-shadow 0.2s',
                      boxShadow: '0 4px 18px rgba(144,202,249,0.10)',
                  opacity: 1,
                  display: 'block',
                  flexShrink: 0,
                  cursor: 'pointer',
                }}
                draggable={false}
                    onClick={() => openLightbox(event.image)}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
              />
              <div style={{ flex: 1, padding: '56px 64px 56px 48px', background: 'transparent', borderRadius: '0 32px 32px 0', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '340px' }}>
                <div style={{ fontWeight: 700, fontSize: '1.18rem', color: '#004d4d', marginBottom: '0.7rem', letterSpacing: '-0.5px', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <IconComponent style={{ color: '#169bb0', fontSize: '1.3em' }} /> {event.title}
                </div>
                <div style={{ marginBottom: '0.7rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: '#222' }}><FaCalendarAlt style={{ color: '#169bb0' }} /> Date: <span style={{ color: '#444', fontWeight: 500 }}>{event.date}</span></span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: '#222' }}><FaClock style={{ color: '#169bb0' }} /> Time: <span style={{ color: '#444', fontWeight: 500 }}>{event.time}</span></span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: '#222' }}><FaMapMarkerAlt style={{ color: '#169bb0' }} /> Location: <span style={{ color: '#444', fontWeight: 500 }}>{event.location}</span></span>
                    </div>
                    <div style={{ color: '#555', fontSize: '1.04rem', marginBottom: '1.1rem', fontWeight: 500 }}>
                      {event.description}
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.2rem' }}>
                      <motion.a
                    href="#"
                    className="btn btn-primary"
                    style={{
                      background: '#1ec6b6',
                      color: '#fff',
                      padding: '0.7rem 1.6rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontSize: '1.08rem',
                      fontWeight: 600,
                      border: 'none',
                      transition: 'background 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                    }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                  >
                    <MdEventAvailable style={{ fontSize: '1.2em' }} /> Register Now
                      </motion.a>
                </div>
              </div>
            </motion.div>
              );
            })}

            {activeTab === 'past' && pastEvents.map((event, index) => {
              const IconComponent = event.icon;
              return (
            <motion.div
                  key={event.id}
                  className="event-card eael-cf-past-events modern-animated-card vibrant-event-card"
              style={{
                width: '100%',
                    maxWidth: 1040,
                    minHeight: 420,
                    background: 'linear-gradient(120deg, #f8fafc 60%, #f7e8ff 100%)',
                    boxShadow: '0 12px 48px rgba(191,161,74,0.13), 0 4px 18px rgba(0,0,0,0.13)',
                borderRadius: '38px',
                overflow: 'hidden',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                marginBottom: '0',
                padding: '0',
                border: 'none',
                position: 'relative',
              }}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  custom={index}
                >
                  <div className="event-card-accent-bar"></div>
                  <motion.img
                    src={event.image}
                    alt={event.title}
                style={{
                  width: '400px',
                  height: '100%',
                  minHeight: '340px',
                  objectFit: 'cover',
                  borderRadius: '32px 0 0 32px',
                  transition: 'box-shadow 0.2s',
                      boxShadow: '0 4px 18px rgba(176,190,197,0.10)',
                  opacity: 1,
                  display: 'block',
                  flexShrink: 0,
                  cursor: 'pointer',
                }}
                draggable={false}
                    onClick={() => openLightbox(event.image)}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
              />
              <div style={{ flex: 1, padding: '56px 64px 56px 48px', background: 'transparent', borderRadius: '0 32px 32px 0', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '340px' }}>
                <div style={{ fontWeight: 700, fontSize: '1.18rem', color: '#004d4d', marginBottom: '0.7rem', letterSpacing: '-0.5px', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <IconComponent style={{ color: '#169bb0', fontSize: '1.3em' }} /> {event.title}
                </div>
                <div style={{ marginBottom: '0.7rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: '#222' }}><FaCalendarAlt style={{ color: '#169bb0' }} /> Date: <span style={{ color: '#444', fontWeight: 500 }}>{event.date}</span></span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: '#222' }}><FaClock style={{ color: '#169bb0' }} /> Time: <span style={{ color: '#444', fontWeight: 500 }}>{event.time}</span></span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: '#222' }}><FaMapMarkerAlt style={{ color: '#169bb0' }} /> Location: <span style={{ color: '#444', fontWeight: 500 }}>{event.location}</span></span>
                </div>
                <div style={{ color: '#555', fontSize: '1.04rem', marginBottom: '1.1rem', fontWeight: 500 }}>
                      {event.description}
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.2rem' }}>
                      <motion.a
                  href="#"
                  className="btn btn-primary"
                  style={{
                      background: '#1ec6b6',
                      color: '#fff',
                      padding: '0.7rem 1.6rem',
                      borderRadius: '8px',
                    textDecoration: 'none',
                      fontSize: '1.08rem',
                      fontWeight: 600,
                      border: 'none',
                      transition: 'background 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                  }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <HiOutlineExternalLink style={{ fontSize: '1.2em' }} /> View Details
                      </motion.a>
                      <motion.a
                        href="#"
                        className="btn btn-danger"
                        style={{
                          background: '#fff',
                          color: '#dc3545',
                          padding: '0.7rem 1.6rem',
                          borderRadius: '8px',
                          textDecoration: 'none',
                          fontSize: '1.08rem',
                          fontWeight: 600,
                          border: '2px solid #dc3545',
                          transition: 'background 0.2s, color 0.2s',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.6rem',
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <HiOutlineExternalLink style={{ fontSize: '1.2em' }} /> Learn More
                      </motion.a>
                </div>
              </div>
            </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </motion.section>

      {/* Gallery Section with Horizontal Scroll */}
      <motion.section
        className="gallery-section"
      style={{
          maxWidth: '100vw',
          margin: '1rem 0',
          padding: '2rem 0',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '32px',
          overflow: 'hidden',
    position: 'relative',
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.div 
          style={{ textAlign: 'center', marginBottom: '3rem', padding: '0 2rem' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '800', 
            color: '#fff', 
            letterSpacing: '-1px', 
            marginBottom: '0.5rem',
            textShadow: '0 2px 12px rgba(0,0,0,0.2)'
          }}>
            Event Highlights Gallery
          </h2>
          <p style={{ 
            color: '#e0e0e0', 
            fontSize: '1.1rem', 
            fontWeight: '500', 
            margin: 0,
            textShadow: '0 1px 4px rgba(0,0,0,0.1)'
          }}>
      A quick look at our best moments and insights
    </p>
        </motion.div>

        {/* Gallery Controls */}
        <motion.div 
          style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
            gap: '1rem',
            marginBottom: '2rem',
            padding: '0 2rem'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {/* No controls for gallery */}
        </motion.div>

        {/* Gallery Indicators */}
        <motion.div 
          style={{
      display: 'flex',
      justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '2rem',
            padding: '0 2rem'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          {/* No indicators for seamless marquee */}
        </motion.div>

        {/* Horizontal Scroll Container for Gallery */}
        <motion.div
          ref={galleryContainerRef}
          onScroll={() => {}} // No scroll handler for marquee
          style={{
            display: 'flex',
            overflowX: 'hidden', // hide scrollbars for marquee
            overflowY: 'hidden',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            padding: '0 2rem',
            gap: '2rem',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <motion.div
            ref={galleryTrackRef}
            style={{
              display: 'flex',
              transform: `translateX(${galleryTrackX}px)`,
              transition: 'none',
              width: `${seamlessGalleryItems.length * (350 + 32)}px`,
            }}
          >
            {seamlessGalleryItems.map((item, index) => {
              const cardWidth = 350;
              const cardHeight = 400;
              const scale = 1 + (galleryScrollPosition / (cardWidth + 32)) * 0.1;
              
              return (
                <motion.div
                  key={index + '-' + item.id}
                  className="gallery-card horizontal-scroll-card"
                  style={{
                    minWidth: cardWidth,
                    height: cardHeight,
                    background: item.bg,
                    borderRadius: '20px',
                    overflow: 'hidden',
                    position: 'relative',
                    scrollSnapAlign: 'start',
                    transform: `scale(${Math.min(scale, 1.05)})`,
                    transition: 'transform 0.3s ease-out',
                    cursor: 'pointer',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  }}
                  variants={galleryCardVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  onMouseEnter={handlePauseMarquee}
                  onMouseLeave={handleResumeMarquee}
                  onTouchStart={handlePauseMarquee}
                  onTouchEnd={handleResumeMarquee}
                  custom={index}
                >
                  {item.type === 'image' && (
                    <motion.img 
                      src={item.src} 
                      alt={item.alt} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        opacity: 0.9,
                        transition: 'opacity 0.3s ease'
                      }}
                      onClick={() => openLightbox(item.src)}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  {item.type === 'instagram' && (
                    <div style={{ 
                      width: '100%', 
                      height: '100%', 
                      display: 'flex', 
      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#fff',
                      borderRadius: '20px',
                      overflow: 'hidden',
      position: 'relative',
                    }}>
                      <div style={{
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                      }}>
                  <iframe
                    title="Instagram Reel"
                          src={item.src}
                    width="100%"
                          height="140%"
                    frameBorder="0"
                    allowFullScreen
                          style={{ 
                            border: 0, 
                            borderRadius: '20px',
                            background: '#fff',
                            transform: 'translateY(-48px)', // Crop the top bar
                            pointerEvents: 'auto',
                            width: '100%',
                            height: '100%',
                          }}
                />
                      </div>
                      </div>
              )}
                  {/* Card Overlay */}
                  <motion.div 
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                      color: 'white',
                      padding: '1.5rem',
                      textAlign: 'center',
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 2.0 }}
                  >
                    <h3 style={{ 
                      fontSize: '1.2rem', 
                      fontWeight: '700', 
                      margin: '0 0 0.5rem 0',
                      textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                    }}>
                      {item.caption}
                    </h3>
                    <p style={{ 
                      fontSize: '0.9rem', 
                      margin: 0,
                      opacity: 0.9,
                      textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                    }}>
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
        );
      })}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Custom Scrollbar Styles */}
    <style>{`
        .horizontal-scroll-card::-webkit-scrollbar {
          display: none;
        }
        
      .advanced-tab-btn {
        padding: 0.7rem 2.1rem;
        border-radius: 10px;
        background: #fff;
        color: #169bb0;
        border: 2px solid #169bb0;
        font-size: 1.08rem;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.18s, color 0.18s, border 0.18s;
        outline: none;
        margin-bottom: 0;
        box-shadow: none;
      }
      .advanced-tab-btn.active {
        background: #169bb0;
        color: #fff;
        border: 2px solid #169bb0;
        box-shadow: none;
      }
      .advanced-tab-btn:not(.active):hover {
        background: #f3fbfd;
        color: #169bb0;
        border: 2px solid #169bb0;
      }
        
        @media (max-width: 768px) {
          .horizontal-scroll-card {
            min-width: 300px !important;
            height: 450px !important;
          }
          .gallery-card {
            min-width: 280px !important;
            height: 350px !important;
          }
        }
        
        @media (max-width: 480px) {
          .horizontal-scroll-card {
            min-width: 280px !important;
            height: 400px !important;
          }
          .gallery-card {
            min-width: 260px !important;
            height: 320px !important;
          }
        }
        
      .event-lightbox-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.75);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        animation: fadeIn 0.2s;
      }
      .event-lightbox-content {
        position: relative;
        background: #fff;
        border-radius: 18px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.18);
        padding: 1.2rem;
        max-width: 96vw;
        max-height: 90vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        animation: popIn 0.2s;
      }
      .event-lightbox-content img {
        max-width: 80vw;
        max-height: 70vh;
        border-radius: 12px;
        box-shadow: 0 4px 18px rgba(0,0,0,0.13);
        background: #e6faf8;
        display: block;
      }
      .event-lightbox-close {
        position: absolute;
        top: 0.5rem;
        right: 0.7rem;
        background: none;
        border: none;
        cursor: pointer;
        z-index: 2;
        line-height: 1;
        padding: 0;
        display: flex;
        align-items: center;
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes popIn {
        from { transform: scale(0.95); opacity: 0.7; }
        to { transform: scale(1); opacity: 1; }
      }
    `}</style>

    {/* Lightbox Modal */}
      <AnimatePresence>
    {lightboxOpen && (
          <motion.div 
            className="event-lightbox-modal" 
            onClick={closeLightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="event-lightbox-content" 
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button 
                className="event-lightbox-close" 
                onClick={closeLightbox}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
            <FaRegTimesCircle style={{ fontSize: '2.2rem', color: '#169bb0' }} />
              </motion.button>
          <img src={lightboxImg} alt="Event" />
            </motion.div>
          </motion.div>
    )}
      </AnimatePresence>
    </motion.div>
  );
}
