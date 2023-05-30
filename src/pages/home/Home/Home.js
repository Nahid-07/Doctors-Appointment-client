import React from 'react';
import Banner from '../Banner/Banner';
import ReachUs from '../reachUs/ReachUs';
import Services from '../services/Services';
import DentalCareBanner from '../dentalCareBanner/DentalCareBanner';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <ReachUs></ReachUs>
            <Services></Services>
            <DentalCareBanner></DentalCareBanner>
        </div>
    );
};

export default Home;