import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import './OurWorks.css';

const OurWorks = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { t } = useLanguage();

  const filters = [
    { id: 'all', label: 'allWorks' },
    { id: 'mobile', label: 'mobileDetailing' },
    { id: 'detailing', label: 'fullDetailing' },
    { id: 'polish', label: 'paintCorrection' },
    { id: 'ceramic', label: 'ceramicCoating' }
  ];

  const works = [
    {
      id: 1,
      title: "BMW M4 Competition",
      category: "mobile",
      image: "/assets/index/itsnotalwaysintheshop.jpg",
      description: "mobileDetailing",
      date: "2023-12-15",
      size: "large"
    },
    {
      id: 2,
      title: "Mercedes-AMG GT",
      category: "polish",
      image: "/assets/index/brushing.jpg",
      description: "paintCorrection",
      date: "2023-12-10",
      size: "small"
    },
    {
      id: 3,
      title: "Porsche 911 GT3",
      category: "detailing",
      image: "/assets/index/logomockup1.jpg",
      description: "fullDetailing",
      date: "2023-12-05",
      size: "small"
    },
    {
      id: 4,
      title: "Audi RS6",
      category: "ceramic",
      image: "/assets/index/ceramicoating.webp",
      description: "ceramicCoating",
      date: "2023-12-01",
      size: "large"
    },
    {
      id: 5,
      title: "BMW M5 CS",
      category: "detailing",
      image: "/assets/index/cleancar.jpg",
      description: "fullDetailing",
      date: "2023-11-28",
      size: "large"
    },
    {
      id: 6,
      title: "Porsche Cayman GT4",
      category: "polish",
      image: "/assets/index/polishing_2.jpg",
      description: "paintCorrection",
      date: "2023-11-25",
      size: "small"
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
          <div className="badge">{t('works')}</div>
          <h2>{t('worksTitle')}</h2>
          <p>{t('worksSubtitle')}</p>
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
              {t(filter.label)}
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
                    {t(work.description)}
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