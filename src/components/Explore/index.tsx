import React from 'react';

const Explore = () => {
    const exploreData = [
        {
            id: 1,
            image: '/images/explore/1.webp',
        },
        {
            id: 2,
            image: '/images/explore/2.webp',
        },
        {
            id: 3,
            image: '/images/explore/3.webp',
        },
        {
            id: 4,
            image: '/images/explore/4.webp',
        },
        {
            id: 5,
            image: '/images/explore/5.webp',
        },
        {
            id: 6,
            image: '/images/explore/6.webp',
        },
        {
            id: 7,
            image: '/images/explore/7.webp',
        },
        {
            id: 8,
            image: '/images/explore/8.webp',
        },
        {
            id: 12,
            image: '/images/explore/12.webp',
        },
        {
            id: 9,
            image: '/images/explore/9.webp',
        },
        {
            id: 10,
            image: '/images/explore/10.webp',
        },
        {
            id: 11,
            image: '/images/explore/11.webp',
        },

    ]
    return (
        <div className="container md:px-8 lg:px-20 xl:px-32 mx-auto">
            <div className='mb-24'>
                <h4 className='text-3xl font-semibold text-center'>Explore <span className='text-cyan-300'>The Possible</span> </h4>
            </div>
            {/* <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 750: 3, 900: 4}}>
                <Masonry>
                    {exploreData?.map((item) => (
                        <div 
                            key={item.id} 
                            className='mb-3 overflow-hidden'
                            data-aos="fade-up"
                            data-aos-duration="600"
                            data-aos-delay="200"
                        >
                            <img src={item.image} alt="" className='rounded-2xl cursor-pointer transition w-full hover:scale-110' />
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry> */}
        </div>
    );
};

export default Explore;