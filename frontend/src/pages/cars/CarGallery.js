import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useLanguage } from '../../context/LanguageContext';
import './CarGallery.css';

// Temporary data for demonstration
const cars = [
    {
        id: "DX2023001",
        image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000",
        brand: "BMW",
        model: "M4",
        year: "2023",
        services: ["ceramicCoating", "paintProtection"],
        date: "2023-12-15"
    },
    {
        id: "DX2023002",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000",
        brand: "Mercedes",
        model: "AMG GT",
        year: "2023",
        services: ["paintCorrection", "interiorDetail"],
        date: "2023-12-10"
    },
    {
        id: "DX2023003",
        image: "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?q=80&w=1000",
        brand: "Porsche",
        model: "911",
        year: "2023",
        services: ["ceramicCoating", "exteriorDetail"],
        date: "2023-12-05"
    },
    {
        id: "DX2023004",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1000",
        brand: "Audi",
        model: "RS6",
        year: "2023",
        services: ["paintProtection", "interiorDetail"],
        date: "2023-12-01"
    }
];

function CarGallery() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('all');
    const [selectedService, setSelectedService] = useState('all');
    const { t, language } = useLanguage();

    const filteredCars = cars.filter(car => {
        const matchesSearch =
            car.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            car.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
            car.model.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesBrand = selectedBrand === 'all' || car.brand === selectedBrand;
        const matchesService = selectedService === 'all' || car.services.includes(selectedService);

        return matchesSearch && matchesBrand && matchesService;
    });

    return (
        <div className="car-gallery-page">
            <Navbar />

            <main className="relative z-10">
                <section className="gallery-hero">
                    <div className="hero-background">
                        <div className="gradient-overlay"></div>
                        <div className="pattern-overlay"></div>
                    </div>
                    <div className="container">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6"
                        >
                            {t('carsTitle')}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg sm:text-xl text-gray-300 text-center max-w-3xl mx-auto"
                        >
                            {t('carsSubtitle')}
                        </motion.p>
                    </div>
                </section>

                <section className="search-section py-12 bg-gray-900/50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder={t('searchPlaceholder')}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cars-grid py-16 sm:py-24">
                    <div className="container mx-auto px-4">
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <AnimatePresence mode="wait">
                                {filteredCars.map(car => (
                                    <motion.div
                                        key={car.id}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="car-card group"
                                    >
                                        <Link to={`/araba/${car.id}`} className="block">
                                            <div className="relative overflow-hidden rounded-xl aspect-[16/10]">
                                                <img
                                                    src={car.image}
                                                    alt={`${car.brand} ${car.model}`}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                                        <div className="flex items-center justify-between mb-3">
                                                            <span className="text-sm font-medium text-blue-400">
                                                                {car.id}
                                                            </span>
                                                            <span className="text-sm text-gray-400">
                                                                {new Date(car.date).toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US')}
                                                            </span>
                                                        </div>
                                                        <h3 className="text-xl font-semibold mb-2">
                                                            {car.brand} {car.model}
                                                        </h3>
                                                        <div className="flex flex-wrap gap-2">
                                                            {car.services.map((service, index) => (
                                                                <span
                                                                    key={index}
                                                                    className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400"
                                                                >
                                                                    {t(service)}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
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

export default CarGallery;