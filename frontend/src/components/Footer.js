import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
    const { t } = useLanguage();

    const footerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <footer className="footer">
            <div className="footer-pattern-overlay"></div>
            <div className="footer-gradient-overlay"></div>
            
            <div className="container">
                <motion.div 
                    className="footer-content"
                    variants={footerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Company Info */}
                    <motion.div className="footer-section" variants={itemVariants}>
                        <div className="company-info">
                            <h3>DetailinX</h3>
                            <p>{t('footerAboutText')}</p>
                            <div className="social-links">
                                <a href="https://www.instagram.com/detailin.x?igsh=MW9qb3ZxcnlrbmJi" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://www.youtube.com/channel/UCMzaiISatkPncHj9wCBQFFQ" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div className="footer-section" variants={itemVariants}>
                        <h4>{t('footerQuickLinks')}</h4>
                        <ul className="footer-links">
                            <li><Link to="/">{t('home')}</Link></li>
                            <li><Link to="/arabalar">{t('cars')}</Link></li>
                            <li><Link to="/galeri">{t('works')}</Link></li>
                            <li><Link to="/hizmetler">{t('services')}</Link></li>
                            <li><Link to="/iletisim">{t('contact')}</Link></li>
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div className="footer-section" variants={itemVariants}>
                        <h4>{t('servicesTitle')}</h4>
                        <ul className="footer-links">
                            <li>{t('interiorDetail')}</li>
                            <li>{t('exteriorDetail')}</li>
                            <li>{t('paintProtection')}</li>
                            <li>{t('ceramicCoating')}</li>
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div className="footer-section" variants={itemVariants}>
                        <h4>{t('footerContact')}</h4>
                        <ul className="contact-info">
                            <li>
                                <i className="fas fa-phone"></i>
                                <div>
                                    <span>{t('footerPhone')}</span>
                                    <a href="tel:+905338310301">+90 (533) 831-0301</a>
                                </div>
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                <div>
                                    <span>{t('footerEmail')}</span>
                                    <a href="mailto:info@detailinx.com">info@detailinx.com</a> <br />
                                    <a href="mailto:detailinx@hotmail.com">detailinx@hotmail.com</a>
                                </div>
                            </li>
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <div>
                                    <span>{t('footerAddress')}</span>
                                    <p>Gazimağusa-Alaniçi, KKTC</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Newsletter */}
                <motion.div 
                    className="newsletter-section"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="newsletter-content">
                        <h4>{t('footerNewsletter')}</h4>
                        <p>{t('footerNewsletterText')}</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder={t('footerEmailPlaceholder')} />
                            <button type="submit">
                                {t('footerSubscribe')}
                                <i className="fas fa-arrow-right"></i>
                            </button>
                        </form>
                    </div>
                </motion.div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p>&copy; {new Date().getFullYear()} DetailinX. {t('footerRights')}</p>
                        {/* <div className="footer-bottom-links">
                            <a href="/privacy">{t('footerPrivacy')}</a>
                            <a href="/terms">{t('footerTerms')}</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;