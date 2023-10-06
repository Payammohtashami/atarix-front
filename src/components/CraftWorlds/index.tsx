import Image from 'next/image';
import React from 'react';

const CraftWorlds = () => {
    const data = [
        {
            id: 1,
            title: "Artist Tooling",
            description: "We’re building market-leading features that will give you greater control over your generations.",
            icon: '/images/artist/icon_1.svg',
        },
        {
            id: 2,
            title: "Rapidly Ideate",
            description: "Create unique production-ready assets from pre-trained AI models or train your own.",
            icon: '/images/artist/icon_2.svg',
        },
        {
            id: 3,
            title: "Creative Studio",
            description: "We’re building an entire generative content production platform, visual assets are just the start.",
            icon: '/images/artist/icon_3.svg',
        },
    ]
    return (
        <div className='container md:px-8 lg:px-20 xl:px-32 mx-auto mb-32'>
            <div className='flex justify-center items-center' data-aos="fade-up" data-aos-duration="800"> 
                <h3 className='font-semibold text-center text-3xl max-w-md'>Craft Worlds <span className='text-cyan-300'>in Minutes</span> Not Months</h3>
            </div>
            <div className='grid mt-12 grid-cols-1 md:grid-cols-3 gap-12'>
                {data?.map((item) => (
                    <div key={item?.id} className='flex justify-center items-center flex-col' data-aos="fade-up" data-aos-duration="800" data-aos-delay={item?.id * 250}>
                        <div className='relative'>
                            <Image src={item?.icon} width={72} height={80}  alt="" />
                        </div>
                        <div>
                            <p className='text-center text-2xl mt-6'>{item?.title}</p>
                            <p className='text-center text-lg text-slate-300 mt-2 max-w-xs'>{item?.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CraftWorlds;