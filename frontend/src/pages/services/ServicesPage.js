import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useLanguage } from '../../context/LanguageContext';
import './ServicesPage.css';

const ServicesPage = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'ceramicCoating',
      title: 'ceramicCoating',
      description: 'ceramicDesc',
      image: 'https://images.unsplash.com/photo-1573950940509-d924ee3fd345?q=80&w=1000',
      features: ['durability', 'shine', 'protection']
    },
    {
      id: 'paintProtection',
      title: 'paintProtection',
      description: 'paintDesc',
      image: 'https://images.unsplash.com/photo-1558486012-817176f84c6d?q=80&w=1000',
      features: ['scratch', 'uv', 'chemical']
    },
    {
      id: 'interiorDetail',
      title: 'interiorDetail',
      description: 'interiorDesc',
      image: 'https://images.unsplash.com/photo-1570303345338-e1f1500c4f5a?q=80&w=1000',
      features: ['deepClean', 'sanitize', 'protect']
    },
    {
      id: 'exteriorDetail',
      title: 'exteriorDetail',
      description: 'exteriorDesc',
      image: 'https://images.unsplash.com/photo-1535732820275-9ffd998cac22?q=80&w=1000',
      features: ['wash', 'polish', 'wax']
    }
  ];

  const features = [
    {
      icon: 'medal',
      title: 'expertTeam',
      description: 'expertTeamDesc'
    },
    {
      icon: 'tools',
      title: 'premiumProducts',
      description: 'premiumProductsDesc'
    },
    {
      icon: 'clock',
      title: 'timelyService',
      description: 'timelyServiceDesc'
    },
    {
      icon: 'heart',
      title: 'satisfaction',
      description: 'satisfactionDesc'
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
    <div className="services-page">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="services-hero">
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
              <h1>{t('servicesTitle')}</h1>
              <p>{t('servicesSubtitle')}</p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="services-grid-section">
          <div className="container">
            <motion.div 
              className="services-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  className="service-card"
                  variants={itemVariants}
                >
                  <div className="service-image">
                    <img src={service.image} alt={t(service.title)} />
                    <div className="service-icon">
                      <i className={`fas fa-${service.icon}`}></i>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>{t(service.title)}</h3>
                    <p>{t(service.description)}</p>
                    <ul className="service-features">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>
                          <i className={`fas fa-${feature.icon}`}></i>
                          {t(feature.name)}
                        </li>
                      ))}
                    </ul>
                    <button className="learn-more-btn">
                      {t('serviceDetail')}
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-section">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>{t('whyChooseUs')}</h2>
              <p>{t('whyChooseUsSubtitle')}</p>
            </motion.div>

            <motion.div 
              className="features-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card"
                  variants={itemVariants}
                >
                  <div className="feature-icon">
                    <i className={`fas fa-${feature.icon}`}></i>
                  </div>
                  <h3>{t(feature.title)}</h3>
                  <p>{t(feature.description)}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage; 