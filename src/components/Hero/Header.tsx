import React from 'react';

const Header = () => {
    return (
        <div className='mb-32'>
            <h1 className='text-cyan-300 text-6xl md:text-8xl'>Text to Game</h1>
            <p className='text-lg'>The Ultimate AI Platform for Game Development</p>
            <p className='text-lg text-slate-400 mb-8'>With our cutting-edge technology, you can turn your creative vision into a fully-realized game with ease.</p>
            <button className='rounded-full px-12 py-3 bg-cyan-300 text-slate-900 border-2 border-cyan-300 hover:bg-transparent hover:text-white'>
                Explore
            </button>
        </div>
    );
};

export default Header;