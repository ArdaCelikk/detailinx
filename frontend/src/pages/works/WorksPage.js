import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useLanguage } from '../../context/LanguageContext';
import './WorksPage.css';

const works = [
    {
        id: 1,
        title: "BMW M4 Competition",
        category: "ceramicCoating",
        image: "/images/works/bmw-m4.jpg",
        description: "ceramicDesc",
        date: "2023-12-15"
    },
    {
        id: 2,
        title: "Mercedes-AMG GT",
        category: "paintProtection",
        image: "/images/works/mercedes-amg.jpg",
        description: "paintDesc",
        date: "2023-12-10"
    },
    {
        id: 3,
        title: "Porsche 911 GT3",
        category: "paintCorrection",
        image: "/images/works/porsche-gt3.jpg",
        description: "paintDesc",
        date: "2023-12-05"
    },
    {
        id: 4,
        title: "Audi RS6",
        category: "interiorDetail",
        image: "/images/works/audi-rs6.jpg",
        description: "interiorDesc",
        date: "2023-12-01"
    }
];

const categories = [
    { id: 'all', name: 'allWorks' },
    { id: 'ceramicCoating', name: 'ceramicCoating' },
    { id: 'paintProtection', name: 'paintProtection' },
    { id: 'paintCorrection', name: 'paintCorrection' },
    { id: 'interiorDetail', name: 'interiorDetail' }
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
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3
        }
    }
};

function WorksPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const { t, language } = useLanguage();

    const filteredWorks = works.filter(work => 
        selectedCategory === 'all' ? true : work.category === selectedCategory
    );

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

                <section className="works-content py-16 sm:py-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {categories.map((category, index) => (
                                <motion.button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                                        ${selectedCategory === category.id 
                                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
                                            : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    {t(category.name)}
                                </motion.button>
                            ))}
                        </div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <AnimatePresence mode="wait">
                                {filteredWorks.map(work => (
                                    <motion.div
                                        key={work.id}
                                        className="work-card group"
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        layout
                                    >
                                        <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                                            <img
                                                src={work.image}
                                                alt={work.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 mb-3">
                                                        {t(work.category)}
                                                    </span>
                                                    <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                                                    <p className="text-gray-300 text-sm">{t(work.description)}</p>
                                                    <span className="block text-sm text-gray-400 mt-2">
                                                        {new Date(work.date).toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US')}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default WorksPage; 