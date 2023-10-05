import React from 'react';
import Hero from '@/components/Hero'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GamingExperience from '@/components/GamingExperience';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <GamingExperience />
            <Footer />
        </div>
    );
};

export default HomePage;
