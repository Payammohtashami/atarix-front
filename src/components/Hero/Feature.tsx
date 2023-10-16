import React from 'react';

const Feature = () => {
    return (
        <div>
            <h6 className='text-cyan-300 text-3xl mb-6'>Featured</h6>
            <div className='bg-slate-700/50 rounded-2xl border-2 border-slate-400/50 p-6'>
                <div>
                    <img src='/images/file.gif' className='w-full rounded-2xl' alt="" />
                </div>
                <h2 className='font-semibold text-3xl mt-8 mb-2'>Chat with AI to Create Your Game!</h2>
                <p className='text-lg text-slate-400 mb-6'>Say goodbye to the difficulties and limitations of traditional game development and join us on the cutting edge of AI technology. Start creating your dream game today with Text to Game.</p>
                <button className='px-12 py-3 rounded-full border-2 border-slate-400 hover:bg-cyan-300 hover:border-cyan-300 hover:text-slate-900'>
                    Join me!
                </button>
            </div>
        </div>
    );
};

export default Feature;