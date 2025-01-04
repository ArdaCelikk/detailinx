import React from 'react';
import { motion } from 'framer-motion';
import './OurServices.css';

const OurServices = () => {
  const services = [
    {
      icon: 'car',
      title: 'Interior Detailing',
      description: 'Complete interior cleaning and restoration, including seats, dashboard, and carpets.',
      features: ['Deep Cleaning', 'Leather Care', 'Odor Removal']
    },
    {
      icon: 'spray-can',
      title: 'Exterior Detailing',
      description: 'Professional washing, waxing, and paint protection for a showroom finish.',
      features: ['Hand Wash', 'Clay Bar', 'Paint Sealant']
    },
    {
      icon: 'magic',
      title: 'Paint Correction',
      description: 'Remove scratches, swirl marks, and imperfections for a flawless finish.',
      features: ['Scratch Removal', 'Swirl Removal', 'Paint Enhancement']
    },
    {
      icon: 'shield-alt',
      title: 'Ceramic Coating',
      description: 'Long-lasting protection with advanced ceramic coating technology.',
      features: ['UV Protection', 'Hydrophobic', '5-Year Warranty']
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="services-section">
      <div className="pattern-overlay"></div>
      <div className="gradient-overlay"></div>
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="services-header"
        >
          <div className="badge">Our Services</div>
          <h2>Professional Auto Detailing</h2>
          <p>Experience the finest car care services with our professional detailing packages</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="services-grid"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              className="service-card"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="service-icon">
                <i className={`fas fa-${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="service-button">
                Learn More
                <i className="fas fa-arrow-right"></i>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;