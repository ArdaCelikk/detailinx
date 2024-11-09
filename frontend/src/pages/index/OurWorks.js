import React from 'react'

const OurWorks = () => {
    return (
        <section class="container px-6 py-8 mx-auto lg:py-16">
            <h3 class="text-xl font-medium text-gray-800 md:text-2xl lg:text-3xl ">Hizmetlerimiz</h3>

            <div class="flex items-center py-6 mt-4 -mx-2 overflow-x-auto whitespace-nowrap">
                <button
                    class=" inline-flex px-4 mx-2 focus:outline-none  items-center py-0.5 text-white bg-indigo-500 hover:bg-indigo-400 duration-300 transition-colors rounded-2xl">Mobil Araç Yıkama</button>
                <button
                    class=" inline-flex px-4 mx-2 duration-300 transition-colors hover:bg-indigo-500/70 hover:text-white text-gray-500 focus:outline-none py-0.5 cursor-pointer rounded-2xl">Detaylı Temizlik</button>
                <button
                    class=" inline-flex px-4 mx-2 duration-300 transition-colors hover:bg-indigo-500/70 hover:text-white text-gray-500 focus:outline-none py-0.5 cursor-pointer rounded-2xl">Boya Parlatma & Düzeltme</button>
                <button
                    class=" inline-flex px-4 mx-2 duration-300 transition-colors hover:bg-indigo-500/70 hover:text-white text-gray-500 focus:outline-none py-0.5 cursor-pointer rounded-2xl">Sermik Kaplama</button>
            </div>

            <div class="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3 ">
                <a href="#" class="transition-all duration-500 lg:col-span-2 hover:scale-105">
                    <img class="object-cover object-middle w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96"
                        src="/assets/index/itsnotalwaysintheshop.jpg"
                        alt="" />
                </a>

                <a href="#" class="transition-all duration-500 hover:scale-105">
                    <img class="object-cover object-top w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96 "
                        src="/assets/index/brushing.jpg"
                        alt="" />
                </a>

                <a href="#" class="transition-all duration-500 hover:scale-105">
                    <img class="object-cover w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96"
                        src="/assets/index/logomockup1.jpg"
                        alt="" />
                </a>

                <a href="#" class="transition-all duration-500 lg:col-span-2 hover:scale-105">
                    <img class="object-cover object-top w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96"
                        src="/assets/index/ceramicoating.webp"
                        alt="" />
                </a>

                <a href="#" class="transition-all duration-500 lg:col-span-2 hover:scale-105">
                    <img class="object-cover object-top w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96"
                        src="/assets/index/cleancar.jpg"
                        alt="" />
                </a>

                <a href="#" class="transition-all duration-500 hover:scale-105">
                    <img class="object-cover object-top w-full rounded-lg shadow-md shadow-gray-200 h-80 xl:h-96"
                        src="/assets/index/polishing_2.jpg"
                        alt="" />
                </a>
            </div>
        </section>
    )
}

export default OurWorks