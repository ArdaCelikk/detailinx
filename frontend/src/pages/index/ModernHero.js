import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import './ModernHero.css';

const ModernHero = () => {
    const { t } = useLanguage();

    return (
        <section className="modern-hero">
            <div className="hero-background">
                <div className="gradient-overlay"></div>
                <div className="pattern-overlay"></div>
            </div>

            <div className="content-container">
                <div className="hero-content">
                    <motion.div 
                        className="text-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="badge">{t('premiumAutoCare')}</div>
                        <h1>{t('heroTitle')}</h1>
                        <p>{t('heroSubtitle')}</p>
                        
                        <div className="stats-row">
                            <div className="stat-item">
                                <span className="stat-number">100%</span>
                                <span className="stat-label items-center">{t('happyClients')}</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item items-center">
                                <span className="stat-number">3+</span>
                                <span className="stat-label">{t('yearsExperience')}</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-number items-center">100%</span>
                                <span className="stat-label">{t('satisfactionRate')}</span>
                            </div>
                        </div>

                        <div className="button-group">
                            <button className="btn-book">
                                {t('bookAppointment')}
                                <span className="btn-shine"></span>
                            </button>
                            <button className="btn-explore">
                                {t('exploreServices')}
                                <svg className="arrow" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </button>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="image-content"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="floating-elements">
                            <div className="achievement-card">
                                <div className="card-icon">★</div>
                                <div className="card-text">
                                    <h3>{t('trustedService')}</h3>
                                    <p>{t('topRatedService')}</p>
                                </div>
                            </div>

                            <div className="service-highlight">
                                <span className="highlight-dot"></span>
                                {t('premiumDetailing')}
                            </div>

                            <div className="service-highlight">
                                <span className="highlight-dot"></span>
                                {t('ceramicCoating')}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ModernHero; 