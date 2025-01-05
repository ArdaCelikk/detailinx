import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import './NotFoundPage.css';

function NotFoundPage() {
    return (
        <div className="not-found-page">
            <Navbar />
            
            <main className="pt-[72px]">
                <div className="min-h-[80vh] flex items-center justify-center relative pattern-grid pattern-grid-blue">
                    <div className="container mx-auto px-4 py-16 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-2xl mx-auto"
                        >
                            <motion.h1 
                                className="text-8xl font-bold mb-4 glowing-text"
                                initial={{ scale: 0.5 }}
                                animate={{ scale: 1 }}
                                transition={{ 
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20 
                                }}
                            >
                                404
                            </motion.h1>
                            
                            <motion.h2 
                                className="text-3xl sm:text-4xl font-semibold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                Sayfa Bulunamadı
                            </motion.h2>
                            
                            <motion.p 
                                className="text-gray-400 text-lg mb-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
                            </motion.p>
                            
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Link 
                                    to="/" 
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 hover:gap-3 hover:shadow-lg hover:shadow-blue-500/25"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                                    Ana Sayfaya Dön
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="glowing-orb"></div>
                        <div className="glowing-orb secondary"></div>
                    </div>
                </div>
            </main>

            <Footer />
            </div>
    );
}

export default NotFoundPage;