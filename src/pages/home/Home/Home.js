import React from 'react';
import Banner from '../Banner/Banner';
import ReachUs from '../reachUs/ReachUs';
import Services from '../services/Services';
import DentalCareBanner from '../dentalCareBanner/DentalCareBanner';
import Banner2 from '../banner2/Banner2';
import Testimonial from '../testimonial/Testimonial';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    return (
        <>
        <div>
            <Banner></Banner>
            <section className='max-w-7xl mx-auto'>
            <ReachUs></ReachUs>
            <Services></Services>
            <DentalCareBanner></DentalCareBanner>
            </section>
        </div>
        <Banner2></Banner2>
        <div className='max-w-7xl mx-auto'>
            <Testimonial></Testimonial>
        </div>
            <ContactUs></ContactUs>
        </>
    );
};

export default Home;