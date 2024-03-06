import React from 'react';
import chair from "../../../assets/images/chair.png"


const Banner = () => {
    return (
        <div className='py-40 px-10 bg-[#265073]'>
            <div className='max-w-7xl mx-auto lg:flex items-center'>
                {/* left side content div */}
            <div className='mb-10 lg:mb-0 text-[#F1FADA]'>
                <h1 className='text-5xl font-bold '>Your New Smile Starts Here</h1>    
                <p className='text-lg my-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                <div>
                    <button className='bg-gradient-to-r from-[#2D9596] to-[#9AD0C2] uppercase text-white p-3 rounded'>
                        get started
                    </button>
                </div>
            </div>
            {/* right side content */}
            <div >
                <img src={chair} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Banner;