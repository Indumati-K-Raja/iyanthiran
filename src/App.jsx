import React from 'react';
import './styles.css'; // Custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import AboutUs from './components/AboutUs';
import Courses from './components/Courses';
import Partnership from './components/Partnership';
import Footer from './components/Footer';
import CareerInsightsBlog from './components/CareerInsightsBlog ';
import ContactUs from './components/ContactUs'; 
import Faqs from './components/Faqs'; 
import Events from './components/Events';
const App = () => {
    return (
        <Router>
            <Header />
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/careerinsightsblog" element={<CareerInsightsBlog />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/partnership" element={<Partnership />} />
                <Route path="/contactus" element={<ContactUs />} /> 
                <Route path="/faqs" element={<Faqs />} />
                <Route path="/events" element={<Events />} />
            </Routes>
            
            <Footer />
            
             
        </Router>
        
    );
};

export default App;
