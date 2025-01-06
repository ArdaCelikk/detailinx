import React from 'react'

const SocialMediaPosts = () => {
    const posts = [
        {
            image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1000",
            profileImage: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1000",
            title: "Ceramic Coating",
            description: "Professional ceramic coating application"
        },
        {
            image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1000",
            profileImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000",
            title: "Interior Detailing",
            description: "Luxury car interior detailing"
        },
        {
            image: "https://images.unsplash.com/photo-1573950940509-d924ee3fd345?q=80&w=1000",
            profileImage: "https://images.unsplash.com/photo-1535732820275-9ffd998cac22?q=80&w=1000",
            title: "Paint Protection",
            description: "Premium paint protection service"
        }
    ];

    return (
        <section class="container px-6 py-8 mx-auto lg:py-16">
            <h3 class="text-xl font-medium text-gray-800 md:text-2xl lg:text-3xl ">Recent Blog Posts</h3>

            <div class="grid grid-cols-1 gap-8 mt-8 md:mt-10 md:grid-cols-2 xl:grid-cols-3">
                <div>
                    <div class="relative">
                        <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                            src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="" />

                        <div class="absolute bottom-0 flex p-3 bg-white ">
                            <img class="object-cover object-center w-10 h-10 rounded-full"
                                src="https://cdn.dribbble.com/users/1436669/screenshots/15006128/media/5f91264b3b56cc452cb2bba2535bccdd.png?compress=1&resize=1000x750&vertical=top"
                                alt="" />

                            <div class="mx-4">
                                <h1 class="text-sm text-gray-700">Tom Hank</h1>
                                <p class="text-sm text-gray-500">Creative Director</p>
                            </div>
                        </div>
                    </div>

                    <h1 class="mt-6 text-xl font-semibold text-gray-800">What do you want to know about UI
                    </h1>

                    <hr class="w-32 my-6 text-indigo-500" />

                    <p class="text-sm text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores
                        praesentium, alias nam? Tempore
                    </p>

                    <a href="#" class="inline-block mt-4 text-indigo-500 underline hover:text-indigo-400">Read more</a>
                </div>

                <div>
                    <div class="relative">
                        <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                            src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="" />

                        <div class="absolute bottom-0 flex p-3 bg-white ">
                            <img class="object-cover object-center w-10 h-10 rounded-full"
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                alt="" />

                            <div class="mx-4">
                                <h1 class="text-sm text-gray-700">arthur melo</h1>
                                <p class="text-sm text-gray-500">Creative Director</p>
                            </div>
                        </div>
                    </div>

                    <h1 class="mt-6 text-xl font-semibold text-gray-800">All the features you want to know
                    </h1>

                    <hr class="w-32 my-6 text-indigo-500" />

                    <p class="text-sm text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores
                        praesentium, alias nam? Tempore
                    </p>

                    <a href="#" class="inline-block mt-4 text-indigo-500 underline hover:text-indigo-400">Read more</a>
                </div>

                <div>
                    <div class="relative">
                        <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                            src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                            alt="" />

                        <div class="absolute bottom-0 flex p-3 bg-white ">
                            <img class="object-cover object-center w-10 h-10 rounded-full"
                                src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                                alt="" />

                            <div class="mx-4">
                                <h1 class="text-sm text-gray-700">Amelia. Anderson</h1>
                                <p class="text-sm text-gray-500">Lead Developer</p>
                            </div>
                        </div>
                    </div>

                    <h1 class="mt-6 text-xl font-semibold text-gray-800">Which services you get from Meraki
                        UI</h1>

                    <hr class="w-32 my-6 text-indigo-500" />

                    <p class="text-sm text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores
                        praesentium, alias nam? Tempore
                    </p>

                    <a href="#" class="inline-block mt-4 text-indigo-500 underline hover:text-indigo-400">Read more</a>
                </div>
            </div>
        </section>
    )
}

export default SocialMediaPosts