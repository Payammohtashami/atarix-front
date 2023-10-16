"use client"; // This is a client component 👈🏽
import React, { useState } from 'react';

type CardItemsType = {
    id: number,
    title: string,
    description: string,
    image: string,
}
const ArtistFriendly: React.FC = () => {
    const [activeCard, setActiveCard] = useState<Number>(1);
    const data: CardItemsType[] = [
        {
            id: 1,
            title: "Use an Existing Model",
            description: "Use a general or fine-tuned model to generate all sorts of production-ready art assets.",
            image: '/images/artist/1.webp',
        },
        {
            id: 2,
            title: "Train Your Own AI Models",
            description: "In just a few clicks, you can train your own AI model and generate thousands of variations and deviations from your training data. Iterate to your heart's content.",
            image: '/images/artist/2.webp',
        },
        {
            id: 3,
            title: "Discover Unlimited Potential",
            description: "Create a universe with infinite possibilities in minutes. Rapidly iterate with ease while keeping a consistent look or style. This is a real Game Changer.",
            image: '/images/artist/3.webp',
        },
    ];
    return (
        <div className='container px-4 md:px-8 lg:px-20 xl:px-32 mx-auto'>
            <div className='my-32'>
                <h4 className='text-center font-semibold text-4xl'>Fast, Easy and <span className='text-cyan-300'>Artist Friendly</span></h4>
                <div className='items-center grid grid-cols-1 md:grid-cols-12'>
                    <div className='flex flex-col mt-12 gap-x-4 gap-y-16 col-span-7'>
                        {data?.map((item) =>
                            <div 
                                key={item.id} 
                                onClick={() => setActiveCard(item?.id)} 
                                className={`p-6 flex gap-4 items-center transition rounded-3xl flex-col cursor-pointer md:flex-row ${activeCard === item?.id ? 'bg-slate-200/10' : 'hover:bg-slate-200/10'}`}
                            >
                                <div style={{minWidth: 48}} className={`h-12 flex items-center w-12 justify-center rounded-full text-2xl ${activeCard === item?.id ? 'text-slate-900 bg-orange-400' : 'bg-slate-200/10'}`}>
                                    {item.id}
                                </div>
                                <div>
                                    <p className='text-2xl'>{item?.title}</p>
                                    <p className='text-slate-400'>{item?.description}</p>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='flex transition justify-center md:justify-end items-center mt-8 col-span-5' data-aos="fade-up" data-aos-duration="800">
                        <img src={data?.find((item) => item?.id === activeCard)?.image} className='w-full max-w-sm md:max-w-md' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtistFriendly;