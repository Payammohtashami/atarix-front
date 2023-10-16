import React from 'react';
import Feature from './Feature';
import Header from './Header';
import Mobile from './Mobile';

const Hero: React.FC = () => {
    return (
        <div className='mt-16'>
            <div className='top-0 h-screen bg-cover bg-no-repeat bg-center bg-[url("/images/backgrounds/hero.webp")] xl:sticky'></div>
            <div className="container px-4 md:px-8 lg:px-20 xl:px-32 mx-auto">
                <div className='flex flex-col-reverse gap-8 pb-8 h-auto lg:grid lg:grid-cols-5' style={{marginTop: '-70hv'}}>
                    <div className='flex items-end col-span-3'>
                        <Mobile />
                    </div>
                    <div className='z-10 relative col-span-2'>
                        <Header />
                        <Feature />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;