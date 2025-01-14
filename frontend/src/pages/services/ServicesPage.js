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
      image: '/assets/services/care_pic.jpg',
      icon: 'shield',
      benefits: [
        {
          icon: 'clock',
          title: t('warranty'),
          description: t('ceramicDesc'),
          image: '/assets/services/brandnew.jpg'
        },
        {
          icon: 'sun',
          title: t('uvProtection'),
          description: t('paintDesc'),
          image: '/assets/services/supra.jpg'
        },
        {
          icon: 'tint',
          title: t('hydrophobic'),
          description: t('paintDesc'),
          image: '/assets/services/black_bmw.jpg'
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
      image: '/assets/services/paintfix.jpg',
      icon: 'car',
      benefits: [
        {
          icon: 'shield-alt',
          title: t('scratchRemoval'),
          description: t('paintCorrectionDesc'),
          image: '/assets/services/swirls.jpg'
        },
        {
          icon: 'magic',
          title: t('paintEnhancement'),
          description: t('ceramicDesc'),
          image: '/assets/services/ceramic_coated.webp'
        },
        {
          icon: 'flask',
          title: t('paintSealant'),
          description: t('paintDesc'),
          image: '/assets/services/paint_protection.webp'
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
      image: '/assets/services/interiorbig.avif',
      icon: 'couch',
      benefits: [
        {
          icon: 'broom',
          title: t('deepCleaning'),
          description: t('interiorDesc'),
          image: '/assets/services/interior2.jpg'
        },
        {
          icon: 'pump-soap',
          title: t('leatherCare'),
          description: t('leatherCareDesc'),
          image: '/assets/services/interior1.webp'
        },
        {
          icon: 'wind',
          title: t('odorRemoval'),
          description: t('odorRemovalDesc'),
          image: '/assets/services/interior3.jpg'
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
      image: '/assets/services/astonmartin.jpg',
      icon: 'car-side',
      benefits: [
        {
          icon: 'shower',
          title: t('handWash'),
          description: t('handWashDesc'),
          image: '/assets/services/gtr.jpg'
        },
        {
          icon: 'magic',
          title: t('detailedWheelCleaning'),
          description: t('detailedWheelCleaningDesc'),
          image: '/assets/services/porshe.jpg'
        },
        {
          icon: 'spray-can',
          title: t('quickWaxing'),
          description: t('quickWaxingDesc'),
          image: '/assets/services/white_bmw.jpg'
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