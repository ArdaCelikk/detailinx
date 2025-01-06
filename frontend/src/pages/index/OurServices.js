import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import './OurServices.css';
import { Link } from 'react-router-dom';

const OurServices = () => {
    const { t } = useLanguage();

    const services = [
        {
            icon: 'car',
            title: t('interiorDetail'),
            description: t('interiorDesc'),
            features: [t('deepCleaning'), t('leatherCare'), t('odorRemoval')]
        },
        {
            icon: 'spray-can',
            title: t('exteriorDetail'),
            description: t('exteriorDesc'),
            features: [t('handWash'), t('clayBar'), t('paintSealant')]
        },
        {
            icon: 'magic',
            title: t('paintProtection'),
            description: t('paintDesc'),
            features: [t('scratchRemoval'), t('swirlRemoval'), t('paintEnhancement')]
        },
        {
            icon: 'shield-alt',
            title: t('ceramicCoating'),
            description: t('ceramicDesc'),
            features: [t('uvProtection'), t('hydrophobic'), t('warranty')]
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
                    <div className="badge">{t('servicesTitle')}</div>
                    <h2>{t('servicesSubtitle')}</h2>
                    <p>{t('experienceFinest')}</p>
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
                            <Link to="/hizmetler">
                                <button className="service-button">
                                    {t('serviceDetail')}
                                    <i className="fas fa-arrow-right"></i>
                                </button>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default OurServices;