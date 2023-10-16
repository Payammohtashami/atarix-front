import React from 'react';

const Subscribe = () => {
    return (
        <div className='container px-4 md:px-8 lg:px-20 xl:px-32 mx-auto mb-32'>
            <div className='flex justify-center items-center flex-col'>
                <div className='text-center' data-aos="fade-up" data-aos-duration="800">
                    <h5 className='text-cyan-300 text-3xl' data-aos="fade-up" data-aos-duration="800">Subscribe</h5>
                    <p className='text-slate-300' data-aos="fade-up" data-aos-duration="800">Note you will need to be whitelisted to be able to sign in.</p>
                </div>
                <div className='flex flex-col items-center w-full mt-8'>
                    <input className='bg-transparent px-8 w-full mb-8 text-center rounded-full max-w-sm h-14 font-semibold border-2 border-cyan-300' placeholder='Email Address' data-aos="fade-up" data-aos-duration="800" />
                    <button
                        className='rounded-full transition text-black bg-cyan-300 py-4 px-6 hover:bg-white'
                        data-aos="fade-up" 
                        data-aos-duration="800"
                    >
                        Count me in!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;