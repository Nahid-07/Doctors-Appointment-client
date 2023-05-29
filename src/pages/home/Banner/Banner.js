import React from 'react';
import chair from "../../../assets/images/chair.png"

const Banner = () => {
    return (
        <div className='md:flex items-center md:my-40 px-5 md:px-0'>
            {/* left side content div */}
            <div>
                <h1 className='text-5xl font-bold text-[#3A4256]'>Your New Smile Starts Here</h1>    
                <p className='text-lg my-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                <div>
                    <button className='bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] uppercase text-white p-3 rounded'>
                        get started
                    </button>
                </div>
            </div>
            {/* right side content */}
            <div>
                <img src={chair} alt="" />
            </div>
        </div>
    );
};

export default Banner;