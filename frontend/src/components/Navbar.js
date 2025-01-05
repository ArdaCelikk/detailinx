import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

const Navbar = (props) => {
    const [flyout, setFlyout] = useState(false)
    const [mobileFlyout, setMobileFlyout] = useState(false)
    const [placeOfElement, setPlaceOfElement] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)
    
    useEffect(() => {
        if (!flyout) {
            setTimeout(() => {
                setPlaceOfElement(flyout)
            }, 200);
        } else {
            setPlaceOfElement(flyout)
        }
    }, [flyout])
    
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
                    <div className="relative">
                        <button onClick={() => setFlyout(current => !current)} type="button" className="flex items-center gap-x-1 text-sm font-medium text-gray-200 hover:text-white transition-colors duration-300 whitespace-nowrap" aria-expanded="false">
                            Ürünler
                            <svg className={`h-5 w-5 flex-none text-gray-400 transition-transform duration-300 ${flyout ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </button>

                        <div className={`${flyout ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"} ${!placeOfElement && "sr-only"} transition ease-out duration-200 absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-white/10 shadow-2xl shadow-black/40`}>
                            <div className="p-4">
                                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-white/5 transition duration-300">
                                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 group-hover:from-blue-500 group-hover:to-blue-700 transition-all duration-300">
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                                        </svg>
                                    </div>
                                    <div className="flex-auto">
                                        <a className="block font-semibold text-gray-100 group-hover:text-white transition-colors duration-300">
                                            Analytics
                                            <span className="absolute inset-0"></span>
                                        </a>
                                        <p className="mt-1 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Get a better understanding of your traffic</p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-white/5 bg-white/5">
                                <a className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-gray-200 hover:bg-white/10 hover:text-white transition-all duration-300">
                                    <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z" clipRule="evenodd" />
                                    </svg>
                                    Watch demo
                                </a>
                                <a className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-gray-200 hover:bg-white/10 hover:text-white transition-all duration-300">
                                    <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" />
                                    </svg>
                                    Contact sales
                                </a>
                            </div>
                        </div>
                    </div>

                    <Link to="/arabalar" className="text-sm font-medium text-gray-200 hover:text-white transition-colors duration-300 whitespace-nowrap">Arabalar</Link>
                    <Link to="/galeri" className="text-sm font-medium text-gray-200 hover:text-white transition-colors duration-300 whitespace-nowrap">Fotoğraf Galerisi</Link>
                    <Link to="/hizmetler" className="text-sm font-medium text-gray-200 hover:text-white transition-colors duration-300 whitespace-nowrap">Hizmetlerimiz</Link>
                    <Link to="/iletisim" className="text-sm font-medium text-gray-200 hover:text-white transition-colors duration-300 whitespace-nowrap">İletişim</Link>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                </div>
            </nav>

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
                                <div className="-mx-3">
                                    <button type="button" onClick={() => setMobileFlyout(current => !current)} className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-200 hover:bg-white/5 transition-all duration-300" aria-controls="disclosure-1" aria-expanded="false">
                                        Ürünler
                                        <svg className={`${mobileFlyout ? "rotate-180" : ""} h-5 w-5 flex-none text-gray-400 transition-transform duration-300`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    <div className={`mt-2 space-y-2 ${!mobileFlyout && "hidden"}`} id="disclosure-1">
                                        {['Engagement', 'Analytics', 'Security', 'Integrations', 'Automations', 'Watch demo', 'Contact sales'].map((item, index) => (
                                            <Link 
                                                key={index}
                                                to=""
                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium text-gray-300 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-blue-800/20 hover:text-white transition-all duration-300"
                                            >
                                                {item}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                {[
                                    { name: 'Arabalar', path: '/arabalar' },
                                    { name: 'Fotoğraf Galerisi', path: '/galeri' },
                                    { name: 'Hizmetlerimiz', path: '/hizmetler' },
                                    { name: 'İletişim', path: '/iletisim' }
                                ].map((item, index) => (
                                    <Link 
                                        key={index}
                                        to={item.path}
                                        className="block -mx-3 rounded-lg px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-300"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar