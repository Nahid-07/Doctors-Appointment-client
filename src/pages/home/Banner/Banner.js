import React from 'react';
import chair from "../../../assets/images/chair.png"

const Banner = () => {
    return (
        <div className='lg:flex items-center lg:my-40 my-10 p-10 lg:p-0'>
            {/* left side content div */}
            <div className='mb-10 lg:mb-0'>
                <h1 className='text-5xl font-bold text-[#3A4256]'>Your New Smile Starts Here</h1>    
                <p className='text-lg my-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                <div>
                    <button className='bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] uppercase text-white p-3 rounded'>
                        get started
                    </button>
                </div>
            </div>
            {/* right side content */}
            <div >
                <img src={chair} alt="" />
            </div>
        </div>
    );
};

export default Banner;