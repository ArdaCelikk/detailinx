import React, { createContext, useContext, useState } from 'react';

const translations = {
    tr: {

        trueProducts: 'Premium Ürünler',
        paintCorrectionDesc: 'Boya üzerindeki çiziklerin düzeltilmesi',
        ceramicDesc: 'Uzun süreli koruma ve parlaklık için profesyonel bakım',
        clayBarUse: 'Kil Uygulaması',
        swirlRemovall: 'Çizik Düzeltme',
        paintShining: 'Boya parlatma',
        leatherCareDesc: 'Aracınızın derileri için bakım',
        odorRemovalDesc: 'Araç içerisindeki koku sorununu giderme',
        odorCauseFinding: 'Koku Nedenini Bulma',
        letherPartsCleaning: 'Deri Parçalarının Temizliği',
        handWashDesc: 'Aracınızın dışı için profesyonel teknikler ile temizlik ve bakım',
        detailedWheelCleaning: 'Detaylı Jant Temizliği',
        detailedWheelCleaningDesc: 'Detaylı jant temizliği için demir tozu uygulaması',
        quickWaxing: 'Hızlı Cila',
        quickWaxingDesc: 'Hızlı cila ile aracınızın parlaklığını korumak ve arttırmak',
        // Navigation
        cars: 'Arabalar',
        works: 'Fotoğraf Galerisi',
        services: 'Hizmetlerimiz',
        contact: 'İletişim',

        // Hero Section
        heroTitle: 'Premium Araç Bakım ve Detaylı Temizlik',
        heroSubtitle: 'Aracınıza profesyonel dokunuşlar',
        bookAppointment: 'Randevu Al',
        exploreServices: 'Hizmetleri Keşfet',
        happyClients: 'Temizlik',
        yearsExperience: 'Yıllık Deneyim',
        satisfactionRate: 'Memnuniyet',
        trustedService: 'Güvenilir Hizmet',
        topRatedService: 'En çok tercih edilen detaylı temizlik servisi',
        premiumDetailing: 'Premium Detaylı Temizlik',
        premiumAutoCare: 'Profesyonel Araç Bakımı',

        // Services Section
        servicesTitle: 'Hizmetlerimiz',
        servicesSubtitle: 'Profesyonel araç bakım hizmetlerimizle tanışın',
        serviceDetail: 'Detaylı Bilgi',
        experienceFinest: 'En iyi araç bakım hizmetlerini deneyimleyin',

        // Service Features
        deepCleaning: 'Derinlemesine Temizlik',
        leatherCare: 'Deri Bakımı',
        odorRemoval: 'Koku Giderme',
        handWash: 'Elle Yıkama',
        clayBar: 'Demir Tozu Temizliği',
        paintSealant: 'Boya Koruma',
        scratchRemoval: 'Çizik Giderme',
        swirlRemoval: 'Kil Uygulaması',
        paintEnhancement: 'Seramik Kaplama',
        uvProtection: 'UV Koruması',
        hydrophobic: 'Su İticilik',
        warranty: 'Yeni Görünüm',

        // Service Types and Descriptions
        ceramicCoating: 'Profesyonel Bakım',
        ceramicDesc: 'Uzun süreli koruma ve parlaklık için profesyonel bakım',
        paintProtection: 'Boya Koruma',
        paintDesc: 'Aracınızın boyasını dış etkenlere karşı koruyun',
        paintCorrection: 'Boya Düzeltme',
        interiorDetail: 'Detaylı İç Temizlik',
        detailedCleaning: 'Detaylı Temizlik',
        interiorDesc: 'Aracınızın içi için kapsamlı temizlik ve bakım',
        exteriorDetail: 'Detaylı Dış Temizlik',
        exteriorDesc: 'Aracınızın dışı için profesyonel temizlik ve bakım',
        mobileDetailing: 'Detaylı Dış Temizlik',
        fullDetailing: 'Detaylı İç Temizlik',

        // Why Choose Us
        whyChooseUs: 'Neden Bizi Seçmelisiniz',
        whyChooseUsSubtitle: 'Her detayda mükemmelliği deneyimleyin',
        expertTeam: 'Uzman Ekip',
        expertTeamDesc: 'Yılların deneyimine sahip sertifikalı profesyoneller',
        premiumProducts: 'Premium Ürünler',
        premiumProductsDesc: 'Sadece en kaliteli detaylı temizlik ürünlerini kullanıyoruz',
        timelyService: 'Zamanında Hizmet',
        timelyServiceDesc: 'Kaliteden ödün vermeden verimli hizmet',
        satisfaction: 'Memnuniyet Garantisi',
        satisfactionDesc: 'Müşteri memnuniyeti önceliğimizdir',

        // Works Section
        worksTitle: 'Çalışmalarımız',
        worksSubtitle: 'Premium detaylı bakım hizmetlerimizden örnekler',
        allWorks: 'Tüm Çalışmalar',
        filterByCategory: 'Kategoriye Göre Filtrele',
        noWorksFound: 'Seçili kategoride çalışma bulunamadı.',
        viewDetails: 'Detayları Görüntüle',

        // Contact Page
        contactTitle: 'İletişime Geçin',
        contactSubtitle: 'Premium detailing hizmetlerimiz için bizimle iletişime geçin',
        sendMessage: 'Mesaj Gönderin',
        formSubtitle: 'Formu doldurun, en kısa sürede size dönüş yapalım',
        yourName: 'Adınız',
        yourEmail: 'E-posta Adresiniz',
        yourPhone: 'Telefon Numaranız',
        selectService: 'Hizmet Seçin',
        yourMessage: 'Mesajınız',
        contactInfo: 'İletişim Bilgileri',
        contactInfoSubtitle: 'Premium detailing hizmetleri için bizimle iletişime geçin',
        visitUs: 'Adresimiz',
        callUs: 'Bizi Arayın',
        emailUs: 'E-posta Gönderin',
        followUs: 'Bizi Takip Edin',

        // Footer
        footerAbout: 'Hakkımızda',
        footerAboutText: 'Premium araç bakım ve detaylı temizlik hizmetleri sunuyoruz. Profesyonel ekibimiz ve en kaliteli ürünlerle aracınıza özel çözümler.',
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

        // Cars Gallery Page
        carsTitle: 'Araç Bilgi Sistemi',
        carsSubtitle: 'Aracınızın detaylarını görüntülemek için ID numarasını girin veya galeriden seçim yapın',
        searchPlaceholder: 'Araç ID ile arama yapın...',
        backToGallery: 'Galeri\'ye Dön',
        nextService: 'Sonraki Bakım Tarihi',
        serviceHistory: 'Yapılan İşlemler',
        photoGallery: 'Fotoğraf Galerisi',
        duration: 'Süre',
        usedProducts: 'Kullanılan Ürünler',

        // Process Steps
        preparation: 'Hazırlık Aşaması',
        application: 'Uygulama Süreci',
        maintenance: 'Bakım Önerileri'
    },
    en: {
        trueProducts: 'Premium Products',
        paintCorrectionDesc: 'Correction of scratches on the paint',
        ceramicDesc: 'Professional care for long-lasting protection and shine',
        clayBarUse: 'Clay Bar Application',
        swirlRemovall: 'Swirl Removal',
        paintShining: 'Paint Polishing',
        leatherCareDesc: 'Care for your vehicle\'s leather surfaces',
        odorRemovalDesc: 'Eliminating odor problems inside the vehicle',
        odorCauseFinding: 'Identifying Odor Source',
        letherPartsCleaning: 'Leather Parts Cleaning',
        handWashDesc: 'Professional cleaning and care for your vehicle\'s exterior using expert techniques',
        detailedWheelCleaning: 'Detailed Wheel Cleaning',
        detailedWheelCleaningDesc: 'Iron dust removal application for detailed wheel cleaning',
        quickWaxing: 'Quick Waxing',
        quickWaxingDesc: 'Maintain and enhance your vehicle\'s shine with quick waxing',

        // Navigation
        cars: 'Cars',
        works: 'Photo Gallery',
        services: 'Our Services',
        contact: 'Contact Us',

        // Hero Section
        heroTitle: 'Premium Vehicle Care and Detailed Cleaning',
        heroSubtitle: 'Professional touches for your vehicle',
        bookAppointment: 'Book Appointment',
        exploreServices: 'Explore Services',
        happyClients: 'Cleaning',
        yearsExperience: 'Years Experience',
        satisfactionRate: 'Satisfaction',
        trustedService: 'Trusted Service',
        topRatedService: 'Most preferred detailed cleaning service',
        premiumDetailing: 'Premium Detailed Cleaning',
        premiumAutoCare: 'Professional Vehicle Care',

        // Services Section
        servicesTitle: 'Our Services',
        servicesSubtitle: 'Meet our professional vehicle care services',
        serviceDetail: 'View Details',
        experienceFinest: 'Experience the best vehicle care services',

        // Service Features
        deepCleaning: 'Deep Cleaning',
        leatherCare: 'Leather Care',
        odorRemoval: 'Odor Removal',
        handWash: 'Hand Wash',
        clayBar: 'Iron Dust Cleaning',
        paintSealant: 'Paint Protection',
        scratchRemoval: 'Scratch Removal',
        swirlRemoval: 'Clay Application',
        paintEnhancement: 'Ceramic Coating',
        uvProtection: 'UV Protection',
        hydrophobic: 'Water Repellent',
        warranty: 'New Look',

        // Service Types and Descriptions
        ceramicCoating: 'Professional Care',
        ceramicDesc: 'Professional ceramic coating for long-lasting protection and shine',
        paintProtection: 'Paint Protection',
        paintDesc: 'Protect your vehicle\'s paint from external factors',
        paintCorrection: 'Paint Correction',
        interiorDetail: 'Detailed Interior Cleaning',
        detailedCleaning: 'Detailed Cleaning',
        interiorDesc: 'Comprehensive cleaning and care for your vehicle\'s interior',
        exteriorDetail: 'Detailed Exterior Cleaning',
        exteriorDesc: 'Professional cleaning and care for your vehicle\'s exterior',
        mobileDetailing: 'Detailed Exterior Cleaning',
        fullDetailing: 'Detailed Interior Cleaning',

        // Why Choose Us
        whyChooseUs: 'Why Choose Us',
        whyChooseUsSubtitle: 'Experience excellence in every detail',
        expertTeam: 'Expert Team',
        expertTeamDesc: 'Certified professionals with years of experience',
        premiumProducts: 'Premium Products',
        premiumProductsDesc: 'Using only the highest quality detailed cleaning products',
        timelyService: 'Timely Service',
        timelyServiceDesc: 'Efficient service without compromising quality',
        satisfaction: 'Satisfaction Guarantee',
        satisfactionDesc: 'Customer satisfaction is our priority',

        // Works Section
        worksTitle: 'Our Works',
        worksSubtitle: 'Examples from our premium detailing services',
        allWorks: 'All Works',
        filterByCategory: 'Filter by Category',
        noWorksFound: 'No works found in selected category.',
        viewDetails: 'View Details',

        // Contact Page
        contactTitle: 'Contact Us',
        contactSubtitle: 'Contact us for premium detailing services',
        sendMessage: 'Send Message',
        formSubtitle: 'Fill out the form and we\'ll get back to you shortly',
        yourName: 'Your Name',
        yourEmail: 'Your Email',
        yourPhone: 'Your Phone',
        selectService: 'Select Service',
        yourMessage: 'Your Message',
        contactInfo: 'Contact Information',
        contactInfoSubtitle: 'Get in touch with us for premium detailing services',
        visitUs: 'Visit Us',
        callUs: 'Call Us',
        emailUs: 'Email Us',
        followUs: 'Follow Us',

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

        // Cars Gallery Page
        carsTitle: 'Vehicle Information System',
        carsSubtitle: 'Enter the ID number or select from the gallery to view your vehicle details',
        searchPlaceholder: 'Search by vehicle ID...',
        backToGallery: 'Back to Gallery',
        nextService: 'Next Service Date',
        serviceHistory: 'Service History',
        photoGallery: 'Photo Gallery',
        duration: 'Duration',
        usedProducts: 'Products Used',

        // Process Steps
        preparation: 'Preparation Phase',
        application: 'Application Process',
        maintenance: 'Maintenance Tips'
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