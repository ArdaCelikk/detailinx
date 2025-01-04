import React from 'react';
import Navbar from '../../components/Navbar';
import HeroSection from './ModernHero';
import OurServices from './OurServices';
import OurWorks from './OurWorks';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import './IndexPage.css';

const IndexPage = () => {
  return (
    <div className="index-page">
      <Navbar indexPage={true} />
      
      <main>
        <HeroSection />
        <OurWorks />
        
        

        <OurServices />

        {/* Why Choose Us Section */}
        <motion.section 
          className="why-choose-us"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container">
            <h2>Why Choose Us</h2>
            <div className="features-grid">
              <div className="feature">
                <i className="fas fa-award"></i>
                <h3>Expert Team</h3>
                <p>Certified professionals with years of experience</p>
              </div>
              <div className="feature">
                <i className="fas fa-spray-can"></i>
                <h3>Premium Products</h3>
                <p>Using only the highest quality detailing products</p>
              </div>
              <div className="feature">
                <i className="fas fa-clock"></i>
                <h3>Timely Service</h3>
                <p>Efficient service without compromising quality</p>
              </div>
              <div className="feature">
                <i className="fas fa-shield-alt"></i>
                <h3>Satisfaction Guaranteed</h3>
                <p>Your satisfaction is our top priority</p>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      
      <Footer />
    </div>
  );
};

export default IndexPage;