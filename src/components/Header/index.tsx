import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <header className='fixed z-50 w-full h-16 bg-slate-800/10 backdrop-blur-lg top-0'>
            <div className="container px-4 md:px-8 lg:px-20 xl:px-32 mx-auto">
                <div className='flex justify-between items-center relative h-16'>
                    <div className='flex items-center gap-6'>
                        <Image src='/images/atarix.png' alt="" width={40} height={40} />
                        <p className='font-medium text-2xl md:text-3xl'>ATARIX</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;