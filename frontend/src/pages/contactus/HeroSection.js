import React from 'react'

const HeroSection = () => {
    return (
        <section class="py-24">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="md:flex gap-x-24 clear-left md:mb-16 mb-10">
                    <div class=" md:mb-0 mb-4">
                        <h2 class="text-black font-manrope text-4xl font-semibold leading-10 mb-5 md:text-left text-center">Bize Ulaşın</h2>
                        <p class="text-gray-600 text-lg font-normal leading-7 mb-7 md:text-left text-center">
                            Bizimle iletişime geçmek çok kolay! Her türlü soru, talepleriniz veya aracınızla ilgili bakım hizmetleri için
                            aşağıdaki iletişim bilgilerini kullanarak bizimle ulaşabilirsiniz.
                            Size en hızlı ve en kaliteli hizmeti sunmak için buradayız!
                        </p>
                        <div class="flex md:items-center md:justify-start justify-center">
                            <button class="w-36 h-12 rounded-full bg-indigo-600 transition-all duration-700 hover:bg-indigo-800 shadow text-white text-center text-base font-semibold leading-6">Ulaş</button>
                        </div>
                    </div>
                    <div class="border-l-2 md:border-indigo-600 border-white px-10 py-6">
                        <div class="mb-8">
                            <h6 class="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center">Email Adresimiz</h6>
                            <h3 class="text-black text-xl font-semibold leading-8 md:text-start text-center">detailx@hotmail.com</h3>
                        </div>
                        <div>
                            <h6 class="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center">Telefon Numarası</h6>
                            <h3 class="text-black text-xl font-semibold leading-8 md:text-start text-center">05338310301</h3>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
                    <div class="h-96 relative flex justify-center">
                        <div class="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"></div>
                        <img src="/assets/contactus/mobile_detailing.jpg" alt="United Kingdom image" class="w-full h-full object-cover" />
                        <div class="absolute bottom-0 mb-6 text-center px-6">
                            <h5 class="text-white text-lg font-semibold leading-7 mb-2">Mobil Temizlik</h5>
                            <p class="text-white text-base font-small leading-6">Elektrik ve suyunuzu kullanmamıza izin verin aracınızı istediğiniz yerde yıkayalım</p>
                        </div>
                    </div>
                    <div class="h-96 relative flex justify-center">
                        <div class="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"></div>
                        <img src="/assets/contactus/detailing.avif" alt="Germany image" class="w-full h-full  object-cover" />
                        <div class="absolute bottom-0 mb-6 text-center px-6">
                            <h5 class="text-white text-lg font-semibold leading-7 mb-2">Detaylı Temizlik</h5>
                            <p class="text-white text-base font-small leading-6">Aracınızı en ince detaylarına kadar temizleyip aracınızı ilk günki haline getirelim</p>
                        </div>
                    </div>
                    <div class="h-96 relative flex justify-center">
                        <div class="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"></div>
                        <img src="/assets/contactus/polish.jpg" alt="France image" class="w-full h-full  object-cover" />
                        <div class="absolute bottom-0 mb-6 text-center px-6">
                            <h5 class="text-white text-lg font-semibold leading-7 mb-2">Boya Koruma & Parlatma</h5>
                            <p class="text-white text-base font-small leading-6">Aracınınzdaki çizikleri minimum seviyeye indirelim</p>
                        </div>
                    </div>
                    <div class="h-96 relative flex justify-center">
                        <div class="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"></div>
                        <img src="/assets/contactus/ceramicoating.webp" alt="Switzerland image" class="w-full h-full object-cover" />
                        <div class="absolute bottom-0 mb-6 text-center px-6">
                            <h5 class="text-white text-lg font-semibold leading-7 mb-2">Seramik Kaplama</h5>
                            <p class="text-white text-base font-small leading-6">Seramik kaplama ile aracnınızın boyasını güneş ışınlarından ve kılcal çiziklerden koruyalım</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection