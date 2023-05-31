import React from 'react';
import Banner from '../Banner/Banner';
import ReachUs from '../reachUs/ReachUs';
import Services from '../services/Services';
import DentalCareBanner from '../dentalCareBanner/DentalCareBanner';
import Banner2 from '../banner2/Banner2';

const Home = () => {
    return (
        <>
        <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <ReachUs></ReachUs>
            <Services></Services>
            <DentalCareBanner></DentalCareBanner>
        </div>
        <Banner2></Banner2>
        </>
    );
};

export default Home;