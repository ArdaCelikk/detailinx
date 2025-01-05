import React, { createContext, useContext, useState } from 'react';

const translations = {
    tr: {
        // Navigation
        cars: 'Arabalar',
        works: 'Fotoğraf Galerisi',
        services: 'Hizmetlerimiz',
        contact: 'İletişim',

        // Hero Section
        heroTitle: 'Premium Araç Bakım ve Detaylama',
        heroSubtitle: 'Aracınıza profesyonel dokunuş',
        bookAppointment: 'Randevu Al',
        exploreServices: 'Hizmetleri Keşfet',
        happyClients: 'Mutlu Müşteri',
        yearsExperience: 'Yıllık Deneyim',
        satisfactionRate: 'Memnuniyet',
        trustedService: 'Güvenilir Hizmet',
        topRatedService: 'En çok tercih edilen detaylama servisi',
        premiumDetailing: 'Premium Detaylama',
        premiumAutoCare: 'Premium Araç Bakımı',

        // Services Section
        servicesTitle: 'Hizmetlerimiz',
        servicesSubtitle: 'Profesyonel detaylama hizmetlerimizle tanışın',
        serviceDetail: 'Detaylı Bilgi',
        experienceFinest: 'En iyi araç bakım hizmetlerini deneyimleyin',
        
        // Service Features
        deepCleaning: 'Derinlemesine Temizlik',
        leatherCare: 'Deri Bakımı',
        odorRemoval: 'Koku Giderme',
        handWash: 'Elle Yıkama',
        clayBar: 'Kil Uygulaması',
        paintSealant: 'Boya Koruma',
        scratchRemoval: 'Çizik Giderme',
        swirlRemoval: 'Swirl Giderme',
        paintEnhancement: 'Boya İyileştirme',
        uvProtection: 'UV Koruması',
        hydrophobic: 'Su İticilik',
        warranty: '5 Yıl Garanti',
        
        // Service Types
        ceramicCoating: 'Seramik Kaplama',
        ceramicDesc: 'Uzun süreli koruma ve parlaklık için profesyonel seramik kaplama',
        paintProtection: 'Boya Koruma',
        paintDesc: 'Aracınızın boyasını dış etkenlere karşı koruyun',
        interiorDetail: 'İç Detay',
        interiorDesc: 'Aracınızın içi için kapsamlı temizlik ve bakım',
        exteriorDetail: 'Dış Detay',
        exteriorDesc: 'Aracınızın dışı için profesyonel temizlik ve bakım',

        // Why Choose Us
        whyChooseUs: 'Neden Bizi Seçmelisiniz',
        whyChooseUsSubtitle: 'Her detayda mükemmelliği deneyimleyin',
        expertTeam: 'Uzman Ekip',
        expertTeamDesc: 'Yılların deneyimine sahip sertifikalı profesyoneller',
        premiumProducts: 'Premium Ürünler',
        premiumProductsDesc: 'Sadece en kaliteli detaylama ürünlerini kullanıyoruz',
        timelyService: 'Zamanında Hizmet',
        timelyServiceDesc: 'Kaliteden ödün vermeden verimli hizmet',
        satisfaction: 'Memnuniyet Garantisi',
        satisfactionDesc: 'Müşteri memnuniyeti önceliğimizdir',

        // Footer
        footerAbout: 'Hakkımızda',
        footerAboutText: 'Premium araç bakım ve detaylama hizmetleri sunuyoruz. Profesyonel ekibimiz ve en kaliteli ürünlerle aracınıza özel çözümler.',
        footerAddress: 'Adres',
        footerAddressText: 'İstanbul, Türkiye',
        footerWorkingHours: 'Çalışma Saatleri',
        footerWorkingDays: 'Pazartesi - Cumartesi',
        footerWorkingTime: '09:00 - 18:00',
        footerSunday: 'Pazar: Kapalı',
        footerContact: 'İletişim',
        footerPhone: 'Telefon',
        footerEmail: 'E-posta',
        footerSocial: 'Sosyal Medya',
        footerFollow: 'Bizi Takip Edin',
        footerRights: 'Tüm hakları saklıdır',
        footerPrivacy: 'Gizlilik Politikası',
        footerTerms: 'Kullanım Şartları',
        footerQuickLinks: 'Hızlı Bağlantılar',
        home: 'Ana Sayfa',
        footerNewsletter: 'Bültenimize Abone Olun',
        footerNewsletterText: 'En son hizmetlerimiz ve özel tekliflerimizden haberdar olun',
        footerEmailPlaceholder: 'E-posta adresinizi girin',
        footerSubscribe: 'Abone Ol',

        // Car Gallery
        carsTitle: 'Araç Bilgi Sistemi',
        carsSubtitle: 'Aracınızın detaylarını görüntülemek için ID numarasını girin veya galeriden seçim yapın',
        searchPlaceholder: 'Araç ID ile arama yapın...',
        
        // Car Services
        ceramicCoating: 'Seramik Kaplama',
        paintProtection: 'Boya Koruma',
        paintCorrection: 'Boya Düzeltme',
        interiorDetail: 'İç Detaylama',

        // Works Page
        works: 'Fotoğraf Galerisi',
        worksSubtitle: 'Detaylı araç bakım ve koruma çalışmalarımızdan örnekler',
        allWorks: 'Tümü',
        filterByCategory: 'Kategoriye Göre Filtrele',
        noWorksFound: 'Seçili kategoride çalışma bulunamadı.',
        viewDetails: 'Detayları Görüntüle',
        
        // Categories
        ceramicCoating: 'Seramik Kaplama',
        paintProtection: 'Boya Koruma',
        paintCorrection: 'Boya Düzeltme',
        interiorDetail: 'İç Detaylama',
        
        // Descriptions
        ceramicDesc: 'Profesyonel seramik kaplama ve uzun süreli koruma',
        paintDesc: 'Boya koruma ve iyileştirme uygulaması',
        interiorDesc: 'Kapsamlı iç detaylama ve bakım işlemi',

        // Contact Page
        contactTitle: 'İletişime Geçin',
        contactSubtitle: 'Premium detaylama hizmetlerimiz için bizimle iletişime geçin',
        sendMessage: 'Mesaj Gönderin',
        formSubtitle: 'Formu doldurun, en kısa sürede size dönüş yapalım',
        yourName: 'Adınız',
        yourEmail: 'E-posta Adresiniz',
        yourPhone: 'Telefon Numaranız',
        selectService: 'Hizmet Seçin',
        mobileDetailing: 'Mobil Detaylama',
        fullDetailing: 'Tam Detaylama',
        paintCorrection: 'Boya Düzeltme',
        ceramicCoating: 'Seramik Kaplama',
        yourMessage: 'Mesajınız',
        contactInfo: 'İletişim Bilgileri',
        contactInfoSubtitle: 'Premium detaylama hizmetleri için bizimle iletişime geçin',
        visitUs: 'Adresimiz',
        callUs: 'Bizi Arayın',
        emailUs: 'E-posta Gönderin',
        followUs: 'Bizi Takip Edin'
    },
    en: {
        // Navigation
        cars: 'Cars',
        works: 'Gallery',
        services: 'Services',
        contact: 'Contact',

        // Hero Section
        heroTitle: 'Premium Vehicle Care and Detailing',
        heroSubtitle: 'Professional touch for your vehicle',
        bookAppointment: 'Book Appointment',
        exploreServices: 'Explore Services',
        happyClients: 'Happy Clients',
        yearsExperience: 'Years Experience',
        satisfactionRate: 'Satisfaction',
        trustedService: 'Trusted Service',
        topRatedService: 'Top-rated detailing service',
        premiumDetailing: 'Premium Detailing',
        premiumAutoCare: 'Premium Auto Care',

        // Services Section
        servicesTitle: 'Our Services',
        servicesSubtitle: 'Discover our professional detailing services',
        serviceDetail: 'View Details',
        experienceFinest: 'Experience the finest car care services',
        
        // Service Features
        deepCleaning: 'Deep Cleaning',
        leatherCare: 'Leather Care',
        odorRemoval: 'Odor Removal',
        handWash: 'Hand Wash',
        clayBar: 'Clay Bar',
        paintSealant: 'Paint Sealant',
        scratchRemoval: 'Scratch Removal',
        swirlRemoval: 'Swirl Removal',
        paintEnhancement: 'Paint Enhancement',
        uvProtection: 'UV Protection',
        hydrophobic: 'Hydrophobic',
        warranty: '5-Year Warranty',
        
        // Service Types
        ceramicCoating: 'Ceramic Coating',
        ceramicDesc: 'Professional ceramic coating for long-lasting protection and shine',
        paintProtection: 'Paint Protection',
        paintDesc: 'Protect your vehicle\'s paint from external factors',
        interiorDetail: 'Interior Detailing',
        interiorDesc: 'Comprehensive cleaning and care for your vehicle\'s interior',
        exteriorDetail: 'Exterior Detailing',
        exteriorDesc: 'Professional cleaning and care for your vehicle\'s exterior',

        // Why Choose Us
        whyChooseUs: 'Why Choose Us',
        whyChooseUsSubtitle: 'Experience excellence in every detail',
        expertTeam: 'Expert Team',
        expertTeamDesc: 'Certified professionals with years of experience',
        premiumProducts: 'Premium Products',
        premiumProductsDesc: 'Using only the highest quality detailing products',
        timelyService: 'Timely Service',
        timelyServiceDesc: 'Efficient service without compromising quality',
        satisfaction: 'Satisfaction Guaranteed',
        satisfactionDesc: 'Your satisfaction is our top priority',

        // Footer
        footerAbout: 'About Us',
        footerAboutText: 'We provide premium vehicle care and detailing services. Our professional team and high-quality products offer tailored solutions for your vehicle.',
        footerAddress: 'Address',
        footerAddressText: 'Istanbul, Turkey',
        footerWorkingHours: 'Working Hours',
        footerWorkingDays: 'Monday - Saturday',
        footerWorkingTime: '09:00 AM - 06:00 PM',
        footerSunday: 'Sunday: Closed',
        footerContact: 'Contact',
        footerPhone: 'Phone',
        footerEmail: 'Email',
        footerSocial: 'Social Media',
        footerFollow: 'Follow Us',
        footerRights: 'All rights reserved',
        footerPrivacy: 'Privacy Policy',
        footerTerms: 'Terms of Use',
        footerQuickLinks: 'Quick Links',
        home: 'Home',
        footerNewsletter: 'Subscribe to Our Newsletter',
        footerNewsletterText: 'Stay updated with our latest services and special offers',
        footerEmailPlaceholder: 'Enter your email',
        footerSubscribe: 'Subscribe',

        // Car Gallery
        carsTitle: 'Vehicle Information System',
        carsSubtitle: 'Enter the vehicle ID or select from the gallery to view details',
        searchPlaceholder: 'Search by vehicle ID...',
        
        // Car Services
        ceramicCoating: 'Ceramic Coating',
        paintProtection: 'Paint Protection',
        paintCorrection: 'Paint Correction',
        interiorDetail: 'Interior Detailing',

        // Works Page
        works: 'Photo Gallery',
        worksSubtitle: 'Examples from our detailed vehicle care and protection works',
        allWorks: 'All',
        filterByCategory: 'Filter by Category',
        noWorksFound: 'No works found in selected category.',
        viewDetails: 'View Details',
        
        // Categories
        ceramicCoating: 'Ceramic Coating',
        paintProtection: 'Paint Protection',
        paintCorrection: 'Paint Correction',
        interiorDetail: 'Interior Detailing',
        
        // Descriptions
        ceramicDesc: 'Professional ceramic coating and long-term protection',
        paintDesc: 'Paint protection and enhancement application',
        interiorDesc: 'Comprehensive interior detailing and maintenance',

        // Contact Page
        contactTitle: 'Get In Touch',
        contactSubtitle: 'Contact us for premium detailing services',
        sendMessage: 'Send Message',
        formSubtitle: 'Fill out the form and we\'ll get back to you shortly',
        yourName: 'Your Name',
        yourEmail: 'Your Email',
        yourPhone: 'Your Phone',
        selectService: 'Select Service',
        mobileDetailing: 'Mobile Detailing',
        fullDetailing: 'Full Detailing',
        paintCorrection: 'Paint Correction',
        ceramicCoating: 'Ceramic Coating',
        yourMessage: 'Your Message',
        contactInfo: 'Contact Information',
        contactInfoSubtitle: 'Get in touch with us for premium detailing services',
        visitUs: 'Visit Us',
        callUs: 'Call Us',
        emailUs: 'Email Us',
        followUs: 'Follow Us'
    }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('tr'); // Default to Turkish

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'tr' ? 'en' : 'tr');
    };

    const t = (key) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
} 