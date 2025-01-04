import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './ContactUs.css';

const ContactUs = () => {
  const contactInfo = [
    {
      icon: 'map-marker-alt',
      title: 'Visit Us',
      details: ['123 Detailing Street', 'Istanbul, Turkey']
    },
    {
      icon: 'phone',
      title: 'Call Us',
      details: ['+90 (555) 123-4567', 'Mon-Sun: 9am - 6pm']
    },
    {
      icon: 'envelope',
      title: 'Email Us',
      details: ['info@detailinx.com', 'support@detailinx.com']
    }
  ];

  return (
    <div className="contact-page">
      <Navbar />
      
      <main>
        <section className="contact-hero">
          <div className="container">
            <motion.div 
              className="hero-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1>Get In Touch</h1>
              <p>Transform your vehicle with our premium detailing services</p>
            </motion.div>
          </div>
        </section>

        <section className="contact-section">
          <div className="container">
            <div className="contact-grid">
              <motion.div 
                className="contact-form-wrapper"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="form-header">
                  <h2>Send Us a Message</h2>
                  <p>Fill out the form below and we'll get back to you shortly</p>
                </div>

                <form className="contact-form">
                  <div className="form-group">
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Your Email" required />
                  </div>
                  <div className="form-group">
                    <input type="tel" placeholder="Your Phone" />
                  </div>
                  <div className="form-group">
                    <select required>
                      <option value="">Select Service</option>
                      <option value="mobile">Mobile Detailing</option>
                      <option value="detailing">Full Detailing</option>
                      <option value="polish">Paint Correction</option>
                      <option value="ceramic">Ceramic Coating</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                  </div>
                  <button type="submit" className="submit-button">
                    Send Message
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </form>
              </motion.div>

              <motion.div 
                className="contact-info"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="info-header">
                  <h2>Contact Information</h2>
                  <p>Get in touch with us for premium auto detailing services</p>
                </div>

                <div className="info-cards">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="info-card">
                      <div className="icon">
                        <i className={`fas fa-${info.icon}`}></i>
                      </div>
                      <div className="details">
                        <h3>{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx}>{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="social-links">
                  <h3>Follow Us</h3>
                  <div className="social-icons">
                    <a href="#" className="social-icon">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="map-section">
          <div className="container">
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.443832610288!2d28.97206231541454!3d41.02557897929921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e7a7777c43%3A0x4c76cf3dcc8b330b!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2s!4v1620147382772!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="location"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;