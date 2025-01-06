import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useLanguage } from '../../context/LanguageContext';
import './WorksPage.css';

const photos = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000",
        size: "large"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000",
        size: "medium"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?q=80&w=1000",
        size: "small"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1000",
        size: "large"
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1000",
        size: "medium"
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1000",
        size: "small"
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000",
        size: "large"
    },
    {
        id: 8,
        image: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1000",
        size: "medium"
    }
];

function WorksPage() {
    const { t, language } = useLanguage();

    return (
        <div className="works-page">
            <Navbar />
            
            <main className="relative z-10 pt-[60px]">
                <section className="works-hero pattern-grid pattern-grid-blue">
                    <div className="container mx-auto px-4 py-16 sm:py-24">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6"
                        >
                            {t('works')}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg sm:text-xl text-gray-300 text-center max-w-3xl mx-auto"
                        >
                            {t('worksSubtitle')}
                        </motion.p>
                    </div>
                </section>

                <section className="photo-gallery">
                    <div className="masonry-grid">
                        {photos.map((photo) => (
                            <motion.div
                                key={photo.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className={`masonry-item ${photo.size}`}
                            >
                                <div className="photo-card">
                                    <img
                                        src={photo.image}
                                        alt=""
                                        className="photo"
                                        loading="lazy"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default WorksPage; 