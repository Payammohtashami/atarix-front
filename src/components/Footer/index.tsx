import Image from 'next/image';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className='bg-slate-900 border-t-2 border-slate-600'>
            <div className="container mx-auto py-10">
                <div className='flex items-center flex-col gap-2'>
                    <Image src='/images/atarix.png' alt="" height={72} width={72} />
                    <h3 className='text-3xl font-bold'>ATARIX</h3>
                </div>
            </div>
        </footer>
    );
};

export default Footer;