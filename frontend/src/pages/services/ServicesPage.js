import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useLanguage } from '../../context/LanguageContext';
import './ServicesPage.css';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'ceramicCoating',
      title: t('ceramicCoating'),
      subtitle: t('ceramicDesc'),
      description: t('ceramicDesc'),
      image: 'https://images.unsplash.com/photo-1573950940509-d924ee3fd345?q=80&w=1000',
      icon: 'shield',
      benefits: [
        {
          icon: 'clock',
          title: t('warranty'),
          description: t('ceramicDesc'),
          image: 'https://images.unsplash.com/photo-1596636478939-6c22e85a3ccc?q=80&w=1000'
        },
        {
          icon: 'sun',
          title: t('uvProtection'),
          description: t('paintDesc'),
          image: 'https://images.unsplash.com/photo-1607603750909-408e193868c7?q=80&w=1000'
        },
        {
          icon: 'tint',
          title: t('hydrophobic'),
          description: t('paintDesc'),
          image: 'https://images.unsplash.com/photo-1594051673969-172a6f721d3c?q=80&w=1000'
        }
      ],
      details: {
        preparation: [
          t('interiorDetail'),
          t('exteriorDetail'),
          t('clayBar'),

        ],
        application: [
          t('ceramicCoating'),
          t('warranty'),
          t('trueProducts'),
        ],
        maintenance: [
          t('timelyService'),
          t('satisfaction')
        ]
      }
    },
    {
      id: 'paintProtection',
      title: t('paintProtection'),
      subtitle: t('paintDesc'),
      description: t('paintDesc'),
      image: 'https://images.unsplash.com/photo-1558486012-817176f84c6d?q=80&w=1000',
      icon: 'car',
      benefits: [
        {
          icon: 'shield-alt',
          title: t('scratchRemoval'),
          description: t('paintCorrectionDesc'),
          image: 'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1000'
        },
        {
          icon: 'magic',
          title: t('paintEnhancement'),
          description: t('ceramicDesc'),
          image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000'
        },
        {
          icon: 'flask',
          title: t('paintSealant'),
          description: t('paintDesc'),
          image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000'
        }
      ],
      details: {
        preparation: [
          t('deepCleaning'),
          t('clayBar'),
          t('clayBarUse')
        ],
        application: [
          t('swirlRemovall'),
          t('paintShining'),
          t('ceramicCoating')
        ],
        maintenance: [
          t('timelyService'),
          t('satisfaction')
        ]
      }
    },
    {
      id: 'interiorDetail',
      title: t('interiorDetail'),
      subtitle: t('interiorDesc'),
      description: t('interiorDesc'),
      image: 'https://images.unsplash.com/photo-1570303345338-e1f1500c4f5a?q=80&w=1000',
      icon: 'couch',
      benefits: [
        {
          icon: 'broom',
          title: t('deepCleaning'),
          description: t('interiorDesc'),
          image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1000'
        },
        {
          icon: 'pump-soap',
          title: t('leatherCare'),
          description: t('leatherCareDesc'),
          image: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=1000'
        },
        {
          icon: 'wind',
          title: t('odorRemoval'),
          description: t('odorRemovalDesc'),
          image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000'
        }
      ],
      details: {
        preparation: [
          t('odorCauseFinding'),
          t('letherPartsCleaning'),
        ],
        application: [
          t('deepCleaning'),
          t('leatherCare'),
          t('odorRemoval')
        ],
        maintenance: [
          t('timelyService'),
          t('satisfaction'),
          t('warranty')
        ]
      }
    },
    {
      id: 'exteriorDetail',
      title: t('exteriorDetail'),
      subtitle: t('exteriorDesc'),
      description: t('exteriorDesc'),
      image: 'https://images.unsplash.com/photo-1535732820275-9ffd998cac22?q=80&w=1000',
      icon: 'car-side',
      benefits: [
        {
          icon: 'shower',
          title: t('handWash'),
          description: t('handWashDesc'),
          image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1000'
        },
        {
          icon: 'magic',
          title: t('detailedWheelCleaning'),
          description: t('detailedWheelCleaningDesc'),
          image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1000'
        },
        {
          icon: 'spray-can',
          title: t('quickWaxing'),
          description: t('quickWaxingDesc'),
          image: 'https://images.unsplash.com/photo-1605515298946-d062f2e9da53?q=80&w=1000'
        }
      ],
      details: {
        preparation: [
          t('deepCleaning'),
          t('clayBar'),
        ],
        application: [
          t('handWash'),
          t('warranty'),
          t('quickWaxing')
        ],
        maintenance: [
          t('timelyService'),
          t('satisfaction'),
        ]
      }
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
              <h1>{t('servicesTitle')}</h1>
              <p>{t('servicesSubtitle')}</p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        {services.map((service) => (
          <motion.section
            key={service.id}
            className="service-detail-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="container">
              <div className="service-detail-grid">
                <div className="service-detail-content">
                  <motion.div
                    className="service-header"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="service-icon">
                      <i className={`fas fa-${service.icon}`}></i>
                    </div>
                    <div>
                      <h2>{service.title}</h2>
                      <p>{service.subtitle}</p>
                    </div>
                  </motion.div>

                  <motion.p
                    className="service-description"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    {service.description}
                  </motion.p>

                  <motion.div
                    className="service-benefits"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {service.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="benefit-card"
                        variants={itemVariants}
                      >
                        <div className="benefit-image">
                          <img src={benefit.image} alt={benefit.title} />
                        </div>
                        <div className="benefit-content">
                          <i className={`fas fa-${benefit.icon}`}></i>
                          <h3>{benefit.title}</h3>
                          <p>{benefit.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

{/* 
                  <motion.button
                    className="book-service-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                      {t('bookAppointment')}
                      <i className="fas fa-arrow-right"></i>
                  </motion.button> */}

                </div>

                <motion.div
                  className="service-detail-image"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <img src={service.image} alt={service.title} />
                </motion.div>
              </div>

              <motion.div
                className="service-process"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="process-section">
                  <h3>
                    <i className="fas fa-tools"></i>
                    {t('preparation')}
                  </h3>
                  <ul>
                    {service.details.preparation.map((step, index) => (
                      <li key={index}>
                        <i className="fas fa-check"></i>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="process-section">
                  <h3>
                    <i className="fas fa-spray-can"></i>
                    {t('application')}
                  </h3>
                  <ul>
                    {service.details.application.map((step, index) => (
                      <li key={index}>
                        <i className="fas fa-check"></i>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="process-section">
                  <h3>
                    <i className="fas fa-clipboard-list"></i>
                    {t('maintenance')}
                  </h3>
                  <ul>
                    {service.details.maintenance.map((step, index) => (
                      <li key={index}>
                        <i className="fas fa-check"></i>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.section>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage; 