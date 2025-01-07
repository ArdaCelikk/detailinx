import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useLanguage } from '../../context/LanguageContext';
import './CarDetails.css';

// Temporary data for demonstration
const carDetails = {
    id: "DX2023001",
    brand: "BMW",
    model: "M4 Competition",
    year: 2023,
    color: "Sao Paulo Yellow",
    services: [
        {
            type: "Ceramic Coating",
            date: "2023-12-15",
            description: "Full ceramic coating application with 5-year warranty",
            products: ["Ceramic Pro 9H", "Ceramic Pro Light", "Ceramic Pro Top Coat"],
            duration: "3 days"
        },
        {
            type: "Paint Protection Film",
            date: "2023-12-13",
            description: "Full front PPF installation",
            products: ["XPEL Ultimate Plus"],
            duration: "2 days"
        }
    ],
    images: [
        {
            url: "/images/cars/bmw-m4-1.jpg",
            caption: "Before ceramic coating"
        },
        {
            url: "/images/cars/bmw-m4-2.jpg",
            caption: "During paint correction"
        },
        {
            url: "/images/cars/bmw-m4-3.jpg",
            caption: "After ceramic coating"
        }
    ],
    nextService: "2024-12-15",
    notes: "Annual inspection and maintenance recommended"
};

const carImages = [
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000",
    "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?q=80&w=1000",
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1000"
];

function CarDetails() {
    const { id } = useParams();
    const { t, language } = useLanguage();

    return (
        <div className="car-details-page">
            <Navbar />
            
            <main>
                <div className="pt-20 lg:pt-24">
                    <div className="car-header pattern-grid pattern-grid-blue">
                        <div className="container mx-auto px-4 py-16">
                            <div className="flex flex-col lg:flex-row items-start gap-8">
                                <motion.div 
                                    className="lg:flex-1"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Link 
                                        to="/arabalar" 
                                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6 transition-colors duration-300"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                        </svg>
                                        {t('backToGallery')}
                                    </Link>
                                    <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                                        {carDetails.brand} {carDetails.model}
                                    </h1>
                                    <div className="flex items-center gap-4 text-gray-400 mb-6">
                                        <span className="text-blue-400 font-medium">{carDetails.id}</span>
                                        <span>•</span>
                                        <span>{carDetails.year}</span>
                                        <span>•</span>
                                        <span>{carDetails.color}</span>
                                    </div>
                                    <div className="bg-gray-800/50 rounded-xl p-6 mb-6">
                                        <h2 className="text-lg font-semibold mb-4">{t('nextService')}</h2>
                                        <div className="flex items-center gap-3 text-blue-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                            </svg>
                                            {new Date(carDetails.nextService).toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US')}
                                        </div>
                                    </div>
                                    <p className="text-gray-400">{carDetails.notes}</p>
                                </motion.div>

                                <motion.div 
                                    className="lg:flex-1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
                                        <img 
                                            src={carImages[0]} 
                                            alt="Car"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <section className="py-16">
                        <div className="container mx-auto px-4">
                            <motion.div 
                                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div>
                                    <h2 className="text-2xl font-bold mb-6">{t('serviceHistory')}</h2>
                                    <div className="space-y-6">
                                        {carDetails.services.map((service, index) => (
                                            <div 
                                                key={index}
                                                className="bg-gray-800/50 rounded-xl p-6"
                                            >
                                                <div className="flex items-center justify-between mb-4">
                                                    <h3 className="text-lg font-semibold">{t(service.type)}</h3>
                                                    <span className="text-sm text-gray-400">
                                                        {new Date(service.date).toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US')}
                                                    </span>
                                                </div>
                                                <p className="text-gray-300 mb-4">{service.description}</p>
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                                        <span className="font-medium text-gray-300">{t('duration')}:</span>
                                                        {service.duration}
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                                        <span className="font-medium text-gray-300">{t('usedProducts')}:</span>
                                                        {service.products.join(", ")}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold mb-6">{t('photoGallery')}</h2>
                                    <div className="grid grid-cols-2 gap-4">
                                        {carDetails.images.map((image, index) => (
                                            <div 
                                                key={index}
                                                className="relative aspect-[4/3] rounded-xl overflow-hidden group"
                                            >
                                                <img 
                                                    src={image.url} 
                                                    alt={image.caption}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                                        <p className="text-sm text-gray-200">{image.caption}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default CarDetails;