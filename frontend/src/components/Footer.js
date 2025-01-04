import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const footerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

    return (
    <footer className="footer">
      <div className="footer-pattern-overlay"></div>
      <div className="footer-gradient-overlay"></div>

      <div className="container">
        <motion.div 
          className="footer-content"
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div className="footer-section" variants={itemVariants}>
            <div className="company-info">
              <h3>DetailinX</h3>
              <p>Elevating automotive aesthetics with premium detailing services. Your car deserves the best care.</p>
              <div className="social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h4>Our Services</h4>
            <ul className="footer-links">
              <li>Interior Detailing</li>
              <li>Exterior Detailing</li>
              <li>Paint Correction</li>
              <li>Ceramic Coating</li>
              <li>Paint Protection Film</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h4>Contact Us</h4>
            <ul className="contact-info">
              <li>
                <i className="fas fa-phone"></i>
                <div>
                  <span>Call Us</span>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </div>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <div>
                  <span>Email Us</span>
                  <a href="mailto:info@detailinx.com">info@detailinx.com</a>
                </div>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <span>Visit Us</span>
                  <p>123 Detailing Street<br />City, State 12345</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Newsletter */}
        <motion.div 
          className="newsletter-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="newsletter-content">
            <h4>Subscribe to Our Newsletter</h4>
            <p>Stay updated with our latest services and special offers</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">
                Subscribe
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} DetailinX. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
                </div>
            </div>
        </footer>
  );
};

export default Footer;