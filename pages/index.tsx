import React from 'react';
import Home from '@/container/Home';


const HomePage = () => {
    return <Home />
};

export default HomePage;

export async function getStaticProps() {
    return {
        props: {}
    };
};