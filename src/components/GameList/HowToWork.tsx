import React from 'react';

const HowToWork = () => {
    return (
        <div className='container px-4 md:px-8 lg:px-20 xl:px-32 mx-auto mb-32'>
            <div data-aos="fade-up" data-aos-duration="600" className='max-w-lg'>
                <h4 className='text-cyan-300 text-5xl' data-aos="fade-up" data-aos-duration="600" data-aos-delay="50">How it works?</h4>            
                <p className='text-lg text-slate-400 mt-4 mb-8 font-medium' data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                    Simply write out your scenario and let our text-to-image AI 
                    bring your vision to life. Create and customize characters, 
                    design engaging levels, and test your game in both 2D and 3D 
                    environments. Our platform also allows you to easily edit 
                    variations and bring your characters to life with unique behaviors.
                </p>
                <button
                    className='text-slate-900 transition rounded-full bg-cyan-300 z-10 py-3 px-16 hover:text-white hover:bg-slate-900'
                    data-aos="fade-up" 
                    data-aos-duration="600" 
                    data-aos-delay="150"
                >
                    Join Discord
                </button>
            </div>
        </div>
    );
};

export default HowToWork;