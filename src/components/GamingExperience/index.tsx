import React from 'react';

const GamingExperience: React.FC = () => {
    return (
        <div className='flex p-8 md:grid-cols-2 md:pt-12 md:pr-20 gap-24 md:grid flex-col-reverse'>
            <div className='flex justify-center' data-aos="fade-right" data-aos-duration="800">
                <img src='/images/backgrounds/experience.png' alt="" className='z-10 max-w-3xl w-full' />
                <div className='hidden absolute w-96 h-96 rounded-full bg-cyan-500/75 blur-3xl md:block'></div>
            </div>
            <div>
                <h3 className='text-cyan-300 text-6xl' data-aos="fade-up" data-aos-duration="800">A Perfect Gaming Experience</h3>
                <p className='text-lg text-slate-500 mt-4 max-w-sm' data-aos="fade-up" data-aos-duration="800">
                    Are you a fan of role-playing games but tired of the 
                    limitations and complexities of traditional game development? 
                    Look no further than Text to Game. Our AI platform makes RPG 
                    game development easier and more accessible than ever before.
                </p>
            </div>
        </div>
    );
};

export default GamingExperience;