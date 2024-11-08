import React from 'react'

const OurServices = () => {
    return (
        <section class="container px-6 py-8 mx-auto lg:py-16">
            <div class="grid grid-cols-1 gap-8 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                <div class="p-8 space-y-3 border-2 border-blue-400 rounded-xl">
                    <span class="inline-block text-indigo-500">
                        <svg className='w-7 text-blue-700' viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path className='fill-blue-700' d="M25.378 19.75c1.507 6.027-3.162 11.25-9.375 11.25s-10.9-5.149-9.375-11.25c0.937-3.75 5.625-9.375 9.375-18.75 3.75 9.374 8.438 15 9.375 18.75z"></path>
                        </svg>
                    </span>

                    <h1 class="text-2xl font-semibold text-gray-700 capitalize">Detaylı Temizlik</h1>

                    <p class="text-gray-500 indent-2 text-justify">
                        Detaylı temizlik hizmetimizle aracınızı en ince ayrıntısına kadar temizliyoruz. İç ve dış yüzeylerdeki kir, toz ve lekeleri özenle temizleyerek aracınıza yeni bir görünüm kazandırıyoruz. Her detayda fark yaratan bu hizmetle aracınız ilk günkü gibi tertemiz ve göz alıcı hale geliyor.
                    </p>
                </div>

                <div class="p-8 space-y-3 border-2 border-blue-400 rounded-xl">
                    <span class="inline-block text-indigo-500">
                        <svg className='w-7' version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" space="preserve">
                            <g>
                                <path class="st0 fill-blue-700" d="M438.024,210.133c0,7.488,6.08,13.551,13.551,13.551c7.488,0,13.569-6.063,13.569-13.551 c0-7.479-6.081-13.552-13.569-13.552C444.104,196.581,438.024,202.654,438.024,210.133z" />
                                <path class="st0 fill-blue-700" d="M400.097,376.503c-5.994,0-10.842,4.856-10.842,10.85c0,5.986,4.848,10.832,10.842,10.832 c5.994,0,10.841-4.847,10.841-10.832C410.938,381.359,406.091,376.503,400.097,376.503z" />
                                <path class="st0 fill-blue-700" d="M382.758,415.376c-12.284,0-22.238,9.956-22.238,22.238c0,12.274,9.955,22.229,22.238,22.229 c12.283,0,22.238-9.955,22.238-22.229C404.997,425.332,395.041,415.376,382.758,415.376z" />
                                <circle class="st0 fill-blue-700" cx="137.251" cy="426.904" r="16.8" />
                                <path class="st0 fill-blue-700" d="M94.425,359.164c-4.778,0-8.669,3.874-8.669,8.678c0,4.778,3.892,8.66,8.669,8.66 c4.796,0,8.67-3.883,8.67-8.66C103.094,363.038,99.22,359.164,94.425,359.164z" />
                                <path class="st0 fill-blue-700" d="M54.865,151.063c6.29,0,11.38-5.1,11.38-11.389c0-6.281-5.09-11.38-11.38-11.38 c-6.289,0-11.38,5.099-11.38,11.38C43.485,145.963,48.576,151.063,54.865,151.063z" />
                                <path class="st0 fill-blue-700" d="M165.97,97.952c8.374,0,15.166-6.793,15.166-15.185c0-8.365-6.792-15.158-15.166-15.158 s-15.168,6.794-15.168,15.158C150.802,91.158,157.596,97.952,165.97,97.952z" />
                                <path class="st0 fill-blue-700" d="M450.775,300.632c-47.586-16.887-56.968-10.485-80.214-32.515c-5.56-5.255-5.438-22.49,25.47-18.425 c15.497,2.042,26.008-6.506,26.008-18.702c0-8.131-9.799-19.433-24.393-13.821c-21.126,8.131-34.834-1.094-37.388-11.38 c-3.25-13.004,0.434-27.832,54.814-54.996c66.646-33.332,28.423-93.983-23.924-36.859c-23.194,25.296-34.14,35.764-49.584,43.895 c-13.864,7.288-30.49-0.27-17.895-17.069c4.882-6.507,13.17-11.527,15.445-19.511c3.249-11.38-6.324-21.952-14.628-21.952 c-8.304,0-18.694,4.874-21.943,17.07c-4.882,22.359-17.322,21.24-23.194,14.785c-11.241-12.318-7.193-26.686-5.264-48.924 c2.276-26.121,17.738-86.443-29.709-81.995c-22.88,2.146-29.639,23.715-22.238,62.267c9.208,47.856-4.725,81.257-19.597,88.007 c-17.878,8.13-26.946,5.046-65.029-21.126c-20.24-13.926-42.584-1.703-47.152,14.628c-4.031,14.385,7.332,31.768,24.393,37.396 c26.286,8.678,37.944,10.693,50.14,17.33c11.918,6.507,13.412,22.282,1.511,36.554c-11.918,14.282-42.705,2.468-88.224-0.782 c-78.685-5.611-60.999,81.43,12.996,55.831c42.27-14.637,60.147-11.389,67.479-2.441c10.112,12.344,3.162,29.031-16.54,40.915 c-62.858,37.944,7.61,85.078,33.618,32.515c10.876-21.961,23.385-28.71,35.756-23.846c10.094,3.979,23.02,39.204,8.409,86.72 C206.885,466.473,207.771,512,238.33,512c28.563,0,33.028-42.539,28.164-88.875c-1.808-17.339-0.47-44.207,13.012-50.948 c10.842-5.421,27.781-11.458,39.283,12.457c10.58,21.951,33.34,18.693,42.287,6.506c6.532-8.921,9.851-28.71-16.157-38.969 c-30.995-12.249-19.615-45.58,3.961-42.323c26.026,3.588,43.868,13.17,74.794,39.569 C466.829,386.233,522.234,325.989,450.775,300.632z" />
                            </g>
                        </svg>
                    </span>

                    <h1 class="text-2xl font-semibold text-gray-700 capitalize">Boya Koruma & Düzeltme</h1>

                    <p class="text-gray-500 text-justify indent-2">
                        Boya Koruma & Düzeltme hizmetimizle aracınızın dış yüzeyine uzun süreli parlaklık ve dayanıklılık kazandırıyoruz. Çizik giderme, renk yenileme ve özel koruyucu uygulamalarla, aracınızın boyasını dış etkenlere karşı koruyor ve ilk günkü canlı görünümüne kavuşturuyoruz.
                    </p>
                </div>

                <div class="p-8 space-y-3 border-2 border-blue-400 rounded-xl">
                    <span class="inline-block text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                    </span>

                    <h1 class="text-2xl font-semibold text-gray-700 capitalize">Seramik Kaplama</h1>

                    <p class="text-gray-500 text-justify indent-2">
                        Seramik Kaplama hizmetimizle aracınızın boyasını çevresel etkenlere karşı üstün bir koruma altına alıyoruz. Uygulanan özel kaplama, aracınıza uzun süreli parlaklık ve su itici özellik kazandırarak çizilmelere, UV ışınlarına ve kimyasal etkilere karşı güçlü bir direnç sağlar. Aracınızın her daim yeni gibi görünmesini garanti altına alıyoruz.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default OurServices