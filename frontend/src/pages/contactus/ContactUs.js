import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useLanguage } from '../../context/LanguageContext';
import './ContactUs.css';

const ContactUs = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: 'map-marker-alt',
      title: 'visitUs',
      details: ['123 Detailing Street', 'Istanbul, Turkey']
    },
    {
      icon: 'phone',
      title: 'callUs',
      details: ['+90 (555) 123-4567', 'Mon-Sun: 9am - 6pm']
    },
    {
      icon: 'envelope',
      title: 'emailUs',
      details: ['info@detailinx.com', 'support@detailinx.com']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="contact-page">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="hero-background">
            <div className="gradient-overlay"></div>
            <div className="pattern-overlay"></div>
          </div>
          <div className="container">
            <motion.div 
              className="hero-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1>{t('contactTitle')}</h1>
              <p>{t('contactSubtitle')}</p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="container">
            <div className="contact-grid">
              {/* Contact Form */}
              <motion.div 
                className="contact-form-wrapper"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="form-header">
                  <h2>{t('sendMessage')}</h2>
                  <p>{t('formSubtitle')}</p>
                </div>

                <form className="contact-form">
                  <div className="form-group">
                    <input 
                      type="text" 
                      placeholder={t('yourName')} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="email" 
                      placeholder={t('yourEmail')} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="tel" 
                      placeholder={t('yourPhone')} 
                    />
                  </div>
                  <div className="form-group">
                    <select required>
                      <option value="">{t('selectService')}</option>
                      <option value="mobile">{t('mobileDetailing')}</option>
                      <option value="detailing">{t('fullDetailing')}</option>
                      <option value="polish">{t('paintCorrection')}</option>
                      <option value="ceramic">{t('ceramicCoating')}</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea 
                      placeholder={t('yourMessage')} 
                      rows="5" 
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="submit-button">
                    {t('sendMessage')}
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div 
                className="contact-info-wrapper"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="info-header">
                  <h2>{t('contactInfo')}</h2>
                  <p>{t('contactInfoSubtitle')}</p>
                </div>

                <motion.div 
                  className="info-cards"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {contactInfo.map((info, index) => (
                    <motion.div 
                      key={index} 
                      className="info-card"
                      variants={itemVariants}
                    >
                      <div className="icon">
                        <i className={`fas fa-${info.icon}`}></i>
                      </div>
                      <div className="details">
                        <h3>{t(info.title)}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx}>{detail}</p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="social-links">
                  <h3>{t('followUs')}</h3>
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

        {/* Map Section */}
        <section className="map-section">
          <div className="container">
            <motion.div 
              className="map-wrapper"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.443832610288!2d28.97206231541454!3d41.02557897929921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e7a7777c43%3A0x4c76cf3dcc8b330b!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2s!4v1620147382772!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="location"
              ></iframe>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;