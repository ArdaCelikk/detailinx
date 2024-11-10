import React, { useEffect, useState } from 'react'

const Navbar = (props) => {
    const [flyout, setFlyout] = useState(false)
    const [mobileFlyout, setMobileFlyout] = useState(true)
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
        <header class={`${!props.indexPage && "bg-gray-700"} absolute top-0 left-0 z-20 w-full`}>
            <nav class="mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div class="flex lg:flex-1">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">DetalinX</span>
                        <img class="h-8 w-auto" src="/logo.png" alt="" />
                    </a>
                </div>
                <div class={`flex lg:hidden ${mobileMenu && "opacity-0"}`}>
                    <button type="button" onClick={() => setMobileMenu(current => !current)} class={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200`}>
                        <span class="sr-only">Open main menu</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div class="hidden lg:flex lg:gap-x-12">
                    <div class="relative">
                        <button onClick={() => setFlyout(current => !current)} type="button" class="flex items-center gap-x-1 text-sm/6 font-semibold text-white" aria-expanded="false">
                            Ürünler
                            <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                            </svg>
                        </button>


                        <div class={`${flyout ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"} ${!placeOfElement && "sr-only"} transition ease-out duration-200 absolute -left-8 top-full mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5`}>
                            <div class="p-4" >
                                <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                                    <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                                        </svg>
                                    </div>
                                    <div class="flex-auto">
                                        <a href="#" class="block font-semibold text-gray-900">
                                            Analytics
                                            <span class="absolute inset-0"></span>
                                        </a>
                                        <p class="mt-1 text-gray-600">Get a better understanding of your traffic</p>
                                    </div>
                                </div>
                                <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                                    <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                                        </svg>
                                    </div>
                                    <div class="flex-auto">
                                        <a href="#" class="block font-semibold text-gray-900">
                                            Engagement
                                            <span class="absolute inset-0"></span>
                                        </a>
                                        <p class="mt-1 text-gray-600">Speak directly to your customers</p>
                                    </div>
                                </div>
                                <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                                    <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" />
                                        </svg>
                                    </div>
                                    <div class="flex-auto">
                                        <a href="#" class="block font-semibold text-gray-900">
                                            Security
                                            <span class="absolute inset-0"></span>
                                        </a>
                                        <p class="mt-1 text-gray-600">Your customers’ data will be safe and secure</p>
                                    </div>
                                </div>
                                <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                                    <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                                        </svg>
                                    </div>
                                    <div class="flex-auto">
                                        <a href="#" class="block font-semibold text-gray-900">
                                            Integrations
                                            <span class="absolute inset-0"></span>
                                        </a>
                                        <p class="mt-1 text-gray-600">Connect with third-party tools</p>
                                    </div>
                                </div>
                                <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                                    <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                        </svg>
                                    </div>
                                    <div class="flex-auto">
                                        <a href="#" class="block font-semibold text-gray-900">
                                            Automations
                                            <span class="absolute inset-0"></span>
                                        </a>
                                        <p class="mt-1 text-gray-600">Build strategic funnels that will convert</p>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                <a href="#" class="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100">
                                    <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fill-rule="evenodd" d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z" clip-rule="evenodd" />
                                    </svg>
                                    Watch demo
                                </a>
                                <a href="#" class="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100">
                                    <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clip-rule="evenodd" />
                                    </svg>
                                    Contact sales
                                </a>
                            </div>
                        </div>
                    </div>

                    <a href="#" class="text-sm/6 font-semibold text-white">Hizmetlerimiz</a>
                    <a href="#" class="text-sm/6 font-semibold text-white">İşlerimiz</a>
                    <a href="#" class="text-sm/6 font-semibold text-white">İletişim</a>
                </div>
                <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                    {/* <a href="#" class="text-sm/6 font-semibold text-white">Log in <span aria-hidden="true">&rarr;</span></a> */}
                </div>
            </nav>



            <div class={`lg:hidden ${!mobileMenu && "hidden"}`} role="dialog" aria-modal="true">
                <div class="fixed inset-0 z-10"></div>
                <div class="fixed bg-black bg-opacity-50 inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div class="flex items-center justify-between">
                        <a href="#" class="-m-1.5 p-1.5">
                            <span class="sr-only">DetailinX</span>
                            <img class="h-8 w-auto" src="/assets/logo.png" alt="" />
                        </a>
                        <button onClick={() => setMobileMenu(current => !current)} type="button" class="-m-2.5 rounded-md p-2.5 text-gray-300">
                            <span class="sr-only">Close menu</span>
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div class="mt-6 flow-root">
                        <div class="-my-6 divide-y divide-gray-500/10">
                            <div class="space-y-2 py-6">
                                <div class="-mx-3">
                                    <button type="button" onClick={() => setMobileFlyout(current => !current)} class={` flex w-full items-center justify-between transition rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-white hover:bg-gray-50 bg-white bg-opacity-30 hover:text-gray-900`} aria-controls="disclosure-1" aria-expanded="false">
                                        Ürünlerimiz
                                        <svg class={`${mobileFlyout && "rotate-180"} h-5 w-5 flex-none`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                            <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                    <div class={`mt-2 space-y-2 ${!mobileFlyout && "hidden"}`} id="disclosure-1">
                                        <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-white bg-blue-400 transition hover:bg-blue-500 bg-opacity-60">Engagement</a>
                                        <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-white bg-blue-400 transition hover:bg-blue-500 bg-opacity-60">Analytics</a>
                                        <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-white bg-blue-400 transition hover:bg-blue-500 bg-opacity-60">Security</a>
                                        <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-white bg-blue-400 transition hover:bg-blue-500 bg-opacity-60">Integrations</a>
                                        <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-white bg-blue-400 transition hover:bg-blue-500 bg-opacity-60">Automations</a>
                                        <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-white bg-blue-400 transition hover:bg-blue-500 bg-opacity-60">Watch demo</a>
                                        <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-white bg-blue-400 transition hover:bg-blue-500 bg-opacity-60">Contact sales</a>
                                    </div>
                                </div>
                                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:text-gray-900 bg-white bg-opacity-30 transition hover:bg-gray-50">Hizmetlerimiz</a>
                                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:text-gray-900 bg-white bg-opacity-30 transition hover:bg-gray-50">İşlerimiz</a>
                                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:text-gray-900 bg-white bg-opacity-30 transition hover:bg-gray-50">İletişim</a>
                            </div>
                            {/* <div class="py-6">
                                <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log in</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar