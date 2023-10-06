import React from 'react';
import HowToWork from './HowToWork';
import GeneratedGame from './GeneratedGame';

const GameList = () => {
    return (
        <div className='mb-32 relative md:mb-64 pt-32'>
            <GeneratedGame />
            <div className='hidden md:block'>
                <img src='/images/backgrounds/game.webp' className='absolute w-full top-0 -z-10' alt="" />
            </div>
            <HowToWork />
        </div>
    );
};

export default GameList;