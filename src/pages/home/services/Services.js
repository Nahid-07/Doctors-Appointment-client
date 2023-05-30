import React from 'react';
import floride from "../../../assets/images/fluoride.png"
import cavity from "../../../assets/images/cavity.png"
import whitning from  "../../../assets/images/whitening.png"

const Services = () => {
    return (
        <div className='md:flex justify-between gap-10 my-10 lg:my-40 p-10 lg:p-0'>
           <div className='flex flex-col items-center'>
           <div className='mb-5'>
                <img src={floride} alt="" />
            </div>
            <div className='text-center'> 
                <h4>Fluoride Treatment</h4>
                <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
            </div>
           </div>
           <div className='flex flex-col items-center my-8 md:my-0' >
           <div className='mb-5'> 
                <img src={cavity} alt="" />
            </div>
            <div className='text-center'> 
                <h4>Cavity Filling</h4>
                <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
            </div>
           </div>
           <div className='flex flex-col items-center'>
           <div className='mb-5'>
                <img src={whitning} alt="" />
            </div>
            <div className='text-center'> 
                <h4>Teeth Whitening</h4>
                <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
            </div>
           </div>
        </div>
    );
};

export default Services;