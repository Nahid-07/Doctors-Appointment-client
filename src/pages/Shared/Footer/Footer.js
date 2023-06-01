import React from 'react';

const Footer = () => {
    return (
        <footer className='max-w-7xl mx-auto'>
            <div className='md:flex justify-between p-10' >
                <div>
                    <h4 className='text-[#939393] font-bold mb-3'>SERVICES</h4>
                    <div className='text-[#3A4256]'>
                        <p>Emergency Checkup</p>
                        <p>Monthly Checkup</p>
                        <p>Weekly Checkup</p>
                        <p>Deep Checkup</p>
                    </div>
                </div>
                <div className='my-5 md:my-0'>
                    <h4 className='text-[#939393] font-bold mb-3'>ORAL HEALTH</h4>
                    <div>
                        <p>Fluoride Treatment</p>
                        <p>Cavity Filling</p>
                        <p>Weekly Checkup</p>
                        
                    </div>
                </div>
                <div>
                    <h4 className='text-[#939393] font-bold mb-3'>OUR ADDRESS</h4>
                    <div>
                        <p>New York - 101010 Hudson</p>
                    </div>
                </div>
            </div>
            <div className='py-10 text-center'>
            Copyright 2022 All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;