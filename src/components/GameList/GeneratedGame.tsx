import React from 'react';

const GeneratedGame = () => {
    const cardData = [
        {
            id: 1,
            title: "RPG",
            description: "Our AI platform makes RPG game development easier and more accessible than ever before.",
            icon: '/images/cards/img1-icon.webp',
            bgImage: '/images/cards/img1-bg.webp',
        },
        {
            id: 2,
            title: "Adventure",
            description: "Simply write out your scenario and let our text-to-image AI bring your vision to life. Create and customize characters, design engaging levels, and test your game in both 2D and 3D environments. ",
            icon: '/images/cards/img2-icon.webp',
            bgImage: '/images/cards/img2-bg.webp',
        },
        {
            id: 3,
            title: "Strategy",
            description: "And with our advanced rendering capabilities, you can export high-quality RPG games in pixel, 2D, and 3D formats, ready to be played on PC, mobile devices, and even consoles.",
            icon: '/images/cards/img3-icon.webp',
            bgImage: '/images/cards/img3-bg.webp',
        },
    ];
    return (
        <div className='container px-4 md:px-8 lg:px-20 xl:px-32 mx-auto'>
            <div className='py-8'>
                <h3 className='text-cyan-300 text-center mb-10 text-3xl'>Games you can generate</h3>
                <div className='grid gap-2 mb-48 grid-cols-1 md:gap-4 lg:gap-12 md:grid-cols-3'>
                    {
                        cardData?.map((item) => (
                            <div
                                key={item?.id}
                                className='rounded-2xl p-2 lg:p-6 bg-slate-800/50'
                                data-aos="fade-up"
                                data-aos-duration="600"
                                data-aos-delay={`${150 * item?.id}`}
                            >
                                <div className='flex flex-col items-center p-4 lg:p-8 bg-center rounded-2xl mb-8' style={{backgroundImage: `url(${item?.bgImage})`}}>
                                    <div className='overflow-hidden w-28 h-28 rounded-3xl border-2 border-white'>
                                        <img src={item?.icon} alt="" className='object-cover w-full h-full' />
                                    </div>
                                    <p className='text-center text-lg mt-10'>{item?.title}</p>
                                </div>
                                <div className='px-6'>
                                    <p className='text-center text-lg text-slate-400'>{item?.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default GeneratedGame;