import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useLanguage } from '../../context/LanguageContext';
import ModernHero from './ModernHero';
import OurServices from './OurServices';
import OurWorks from './OurWorks';
import './IndexPage.css';

const IndexPage = () => {
  const { t } = useLanguage();

  return (
    <div className="index-page">
      <Navbar indexPage={true} />
      <main>
        <ModernHero />
        <OurWorks />
        <OurServices />

        {/* Why Choose Us Section */}
        <motion.section
          className="why-choose-us"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container">
            <h2>{t('whyChooseUs')}</h2>
            <div className="features-grid">
              <div className="feature">
                <i className="fas fa-award"></i>
                <h3>{t('expertTeam')}</h3>
                <p>{t('expertTeamDesc')}</p>
              </div>
              <div className="feature">
                <i className="fas fa-spray-can"></i>
                <h3>{t('premiumProducts')}</h3>
                <p>{t('premiumProductsDesc')}</p>
              </div>
              <div className="feature">
                <i className="fas fa-clock"></i>
                <h3>{t('timelyService')}</h3>
                <p>{t('timelyServiceDesc')}</p>
              </div>
              <div className="feature">
                <i className="fas fa-shield-alt"></i>
                <h3>{t('satisfaction')}</h3>
                <p>{t('satisfactionDesc')}</p>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default IndexPage;


