import React from 'react';
import Image from 'next/image';

const Feature = () => {
    return (
        <div>
            <h6 className='text-2xl mb-6 text-cyan-300'>Featured</h6>
            <div className='rounded-2xl p- border-2 border-slate-500 bg-slate-900'>
                <h2 className='text-2xl mt-8 mb-2 font-semibold md:max-w-5xl'>Chat with AI to Create Your Game</h2>
                <p className='text-slate-400 mb-6 text-xl md:max-w-5xl'>Say goodbye to the difficulties and limitations of traditional game development and join us on the cutting edge of AI technology. Start creating your dream game today with Text to Game.</p>
            </div>
        </div>
    );
};

export default Feature;