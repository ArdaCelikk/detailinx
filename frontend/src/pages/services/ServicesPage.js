import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './ServicesPage.css';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Mobile Detailing",
      description: "Professional car detailing services at your location. We bring our expertise to your doorstep.",
      features: [
        "Exterior wash and wax",
        "Interior deep cleaning",
        "Wheel and tire detailing",
        "Engine bay cleaning"
      ],
      image: "/assets/services/mobile-detailing.jpg",
      icon: "fa-car"
    },
    {
      id: 2,
      title: "Paint Correction",
      description: "Restore your vehicle's paint to its original glory. Remove scratches, swirls, and imperfections.",
      features: [
        "Single stage correction",
        "Multi-stage correction",
        "Swirl removal",
        "Paint enhancement"
      ],
      image: "/assets/services/paint-correction.jpg",
      icon: "fa-paint-roller"
    },
    {
      id: 3,
      title: "Ceramic Coating",
      description: "Long-lasting protection for your vehicle's paint with advanced ceramic coating technology.",
      features: [
        "Paint protection",
        "Hydrophobic effect",
        "UV protection",
        "Chemical resistance"
      ],
      image: "/assets/services/ceramic-coating.jpg",
      icon: "fa-shield-alt"
    },
    {
      id: 4,
      title: "Interior Detailing",
      description: "Deep cleaning and restoration of your vehicle's interior for a fresh, like-new feel.",
      features: [
        "Leather treatment",
        "Carpet extraction",
        "Stain removal",
        "Sanitization"
      ],
      image: "/assets/services/interior-detailing.jpg",
      icon: "fa-couch"
    }
  ];

  return (
    <div className="services-page">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="services-hero">
          <div className="container">
            <motion.div 
              className="hero-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1>Our Services</h1>
              <p>Professional auto detailing services tailored to your needs</p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-grid-section">
          <div className="container">
            <div className="services-grid">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="service-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="service-image">
                    <img src={service.image} alt={service.title} />
                    <div className="service-icon">
                      <i className={`fas ${service.icon}`}></i>
                    </div>
                  </div>
                  <div className="service-content">
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
                    <button className="learn-more-btn">
                      Learn More
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
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
              <h2>Why Choose Us</h2>
              <p>Experience the difference with our premium detailing services</p>
            </motion.div>

            <div className="features-grid">
              {[
                {
                  icon: "fa-medal",
                  title: "Expert Team",
                  description: "Highly trained professionals with years of experience"
                },
                {
                  icon: "fa-tools",
                  title: "Premium Equipment",
                  description: "Using the latest and best detailing tools and products"
                },
                {
                  icon: "fa-clock",
                  title: "Time Efficient",
                  description: "Quick turnaround without compromising quality"
                },
                {
                  icon: "fa-heart",
                  title: "Customer Satisfaction",
                  description: "Committed to exceeding your expectations"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="feature-icon">
                    <i className={`fas ${feature.icon}`}></i>
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage; 