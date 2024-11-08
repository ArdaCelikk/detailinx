import React from 'react'

const HeroSection = () => {
    return (
        <div  class="relative bg-cover bg-center" style={{height: "calc(100vh - 150px)", backgroundImage: "url(/assets/mainpic.jpg)" }}>
            <div class="absolute inset-0 bg-black bg-opacity-50"></div>

            <div class="relative flex items-center justify-center h-full text-white text-center">
                <div class="flex flex-col items-center mx-auto text-center">
                    <h1 class="text-4xl font-semibold text-white uppercase md:text-6xl">DetailinX</h1>

                    <p class="mt-6 text-lg leading-5 text-white">Shine Shine and SHINE.</p>

                    <a href="#about" class="mt-8 cursor-pointer animate-bounce">
                        <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="27" cy="26" r="18" stroke="white" stroke-width="2" />
                            <path
                                d="M22.41 23.2875L27 27.8675L31.59 23.2875L33 24.6975L27 30.6975L21 24.6975L22.41 23.2875Z"
                                fill="white" />
                        </svg>
                    </a>
                </div>
            </div>

            <div class="absolute bottom-0 w-full overflow-hidden leading-none">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" class="w-full h-20">
                    <path d="M0,100 C150,200 350,0 500,100 L500,150 L0,150 Z" class="fill-current text-white"></path>
                </svg>
            </div>
        </div>
    )
}

export default HeroSection