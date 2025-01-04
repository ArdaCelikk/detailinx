import React from 'react';
import { motion } from 'framer-motion';
import './ModernHero.css';

const ModernHero = () => {
  return (
    <section className="modern-hero">
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="pattern-overlay"></div>
      </div>

      <div className="content-container">
        <div className="hero-content">
          <motion.div 
            className="text-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="badge">Premium Auto Care</div>
            <h1>Experience Luxury<br />Car Detailing</h1>
            <p>Transform your vehicle with our professional detailing services. 
               We bring out the best in your car with meticulous attention to detail.</p>
            
            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-number">5K+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
            </div>

            <div className="button-group">
              <button className="btn-book">
                Book Appointment
                <span className="btn-shine"></span>
              </button>
              <button className="btn-explore">
                Explore Services
                <svg className="arrow" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="image-content"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="floating-elements">
              <div className="achievement-card">
                <div className="card-icon">★</div>
                <div className="card-text">
                  <h3>Trusted Service</h3>
                  <p>Top-rated detailing service</p>
                </div>
              </div>

              <div className="service-highlight">
                <span className="highlight-dot"></span>
                Premium Detailing
              </div>

              <div className="service-highlight">
                <span className="highlight-dot"></span>
                Ceramic Coating
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero; 