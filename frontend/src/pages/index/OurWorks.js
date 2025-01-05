import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './OurWorks.css';

const OurWorks = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Works' },
    { id: 'mobile', label: 'Mobile Detailing' },
    { id: 'detailing', label: 'Detailing' },
    { id: 'polish', label: 'Paint Correction' },
    { id: 'ceramic', label: 'Ceramic Coating' }
  ];

  const works = [
    {
      id: 1,
      title: 'Premium Mobile Detailing',
      category: 'mobile',
      image: '/assets/index/itsnotalwaysintheshop.jpg',
      size: 'large'
    },
    {
      id: 2,
      title: 'Professional Paint Correction',
      category: 'polish',
      image: '/assets/index/brushing.jpg',
      size: 'small'
    },
    {
      id: 3,
      title: 'Interior Detailing',
      category: 'detailing',
      image: '/assets/index/logomockup1.jpg',
      size: 'small'
    },
    {
      id: 4,
      title: 'Ceramic Protection',
      category: 'ceramic',
      image: '/assets/index/ceramicoating.webp',
      size: 'large'
    },
    {
      id: 5,
      title: 'Full Vehicle Detail',
      category: 'detailing',
      image: '/assets/index/cleancar.jpg',
      size: 'large'
    },
    {
      id: 6,
      title: 'Paint Enhancement',
      category: 'polish',
      image: '/assets/index/polishing_2.jpg',
      size: 'small'
    }
  ];

  const filteredWorks = activeFilter === 'all' 
    ? works 
    : works.filter(work => work.category === activeFilter);

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
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="works-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="works-header"
        >
          <div className="badge">Our Portfolio</div>
          <h2>Featured Works</h2>
          <p>Discover our commitment to excellence through our showcase of premium detailing services</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="filter-buttons"
        >
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-button ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="works-grid"
        >
          <AnimatePresence mode="wait">
            {filteredWorks.map(work => (
              <motion.div
                key={work.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className={`work-item ${work.size}`}
              >
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="work-image"
                />
                <div className="work-overlay">
                  <h3 className="work-title">{work.title}</h3>
                  <span className="work-category">
                    {filters.find(f => f.id === work.category)?.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default OurWorks;