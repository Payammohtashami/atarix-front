import React from 'react';

const BuyToken = () => {
    return (
        <div className='container px-4 md:px-8 lg:px-20 xl:px-32 mx-auto mb-16'>
            <div className='flex overflow-hidden rounded-2xl relative mt-32'>
                <div className='absolute bg-slate-50'>
                    <img src='/images/backgrounds/buyToken.webp' className='w-full' alt="" />
                </div>
                <div className='px-8 max-w-xl text-center md:text-start py-16 md:px-16 md:py-24'>
                    <h4 className='text-cyan-300 text-3xl md:text-5xl' data-aos="fade-up" data-aos-duration="800">ATARIX TOKEN</h4>
                    <p className='text-slate-400 text-lg mb-8 mt-2' data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                        By purchasing and holding Atarix tokens, you not only have the potential 
                        to see a return on investment, but you are also helping to support 
                        the growth and sustainability of the Text to Game platform.
                    </p>
                    <button
                        className='text-slate-900 rounded-full py-4 px-12 border-none transition bg-orange-400 hover:bg-orange-400/10 hover:text-white'                   
                        data-aos="fade-up" 
                        data-aos-duration="800" 
                        data-aos-delay="150"
                    >
                        Buy from Pancake Swap
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BuyToken;