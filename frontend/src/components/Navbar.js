import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useLanguage } from '../context/LanguageContext'

const Navbar = (props) => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [mobileFlyout, setMobileFlyout] = useState(false)
    const { language, toggleLanguage, t } = useLanguage();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMobileMenu(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <header className={`${!props.indexPage ? "bg-gradient-to-r from-black/80 via-slate-900/80 to-black/80 shadow-2xl shadow-black/20" : ""} fixed top-0 left-0 z-[100] w-full backdrop-blur-xl border-b border-white/5`}>
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Global">
                <div className="flex flex-1">
                    <Link to="/" className="-m-1.5 p-1.5 group">
                        <span className="sr-only">DetalinX</span>
                        <img className="h-8 w-auto transition-transform duration-300 group-hover:scale-110" src="/logo.png" alt="" />
                    </Link>
                </div>

                <div className={`flex lg:hidden ${mobileMenu && "opacity-0"}`}>
                    <button type="button" onClick={() => setMobileMenu(current => !current)} className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-gray-300 hover:bg-white/5 transition-all duration-300">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>

                <div className="hidden lg:flex lg:gap-x-4 xl:gap-x-8">
                    <Link to="/arabalar" className="text-sm font-medium text-gray-200 hover:text-white transition-colors duration-300 whitespace-nowrap">{t('cars')}</Link>
                    <Link to="/galeri" className="text-sm font-medium text-gray-200 hover:text-white transition-colors duration-300 whitespace-nowrap">{t('works')}</Link>
                    <Link to="/hizmetler" className="text-sm font-medium text-gray-200 hover:text-white transition-colors duration-300 whitespace-nowrap">{t('services')}</Link>
                    <Link to="/iletisim" className="text-sm font-medium text-gray-200 hover:text-white transition-colors duration-300 whitespace-nowrap">{t('contact')}</Link>
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <button 
                        onClick={toggleLanguage}
                        className="text-sm font-medium text-gray-200 hover:text-white transition-colors duration-300 whitespace-nowrap"
                    >
                        {language === 'tr' ? 'EN' : 'TR'}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div className={`fixed inset-0 z-[200] ${!mobileMenu && "hidden"}`} role="dialog" aria-modal="true">
                <div onClick={() => setMobileMenu(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm"></div>
                <div className="fixed inset-y-0 right-0 z-[201] w-full overflow-y-auto bg-[#0f1115] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10 transform transition-all duration-300 ease-in-out">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">DetailinX</span>
                            <img className="h-8 w-auto" src="/logo.png" alt="" />
                        </Link>
                        <button onClick={() => setMobileMenu(false)} type="button" className="-m-2.5 rounded-lg p-2.5 text-gray-400 hover:text-gray-200 hover:bg-white/5 transition-all duration-300">
                            <span className="sr-only">Close menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-white/5">
                            <div className="space-y-2 py-6">
                                {[
                                    { name: t('cars'), path: '/arabalar' },
                                    { name: t('works'), path: '/galeri' },
                                    { name: t('services'), path: '/hizmetler' },
                                    { name: t('contact'), path: '/iletisim' }
                                ].map((item, index) => (
                                    <Link 
                                        key={index}
                                        to={item.path}
                                        className="block -mx-3 rounded-lg px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-300"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <button 
                                    onClick={toggleLanguage}
                                    className="block -mx-3 rounded-lg px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-300 w-full text-left"
                                >
                                    {language === 'tr' ? 'English' : 'Türkçe'}
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar