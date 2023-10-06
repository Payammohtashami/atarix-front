import React from 'react';
import Hero from '@/components/Hero'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GamingExperience from '@/components/GamingExperience';
import ArtistFriendly from '@/components/ArtistFriendly';
import Explore from '@/components/Explore';
import BuyToken from '@/components/BuyToken';
import CraftWorlds from '@/components/CraftWorlds';
import Subscribe from '@/components/Subscribe';
import GameList from '@/components/GameList';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <GameList />
            <GamingExperience />
            <CraftWorlds />
            <ArtistFriendly />
            {/* <Explore /> */}
            <BuyToken />
            <Subscribe />
            <Footer />
        </div>
    );
};

export default HomePage;
