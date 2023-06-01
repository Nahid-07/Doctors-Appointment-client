import { format } from 'date-fns';
import React from 'react';

const AvailableServices = ({selectedDate}) => {
    return (
        <section className='p-10 lg:p-0'>
            <p className='text-[#19D3AE] text-2xl text-center'>Available Appointments on {format(selectedDate, "PPP")}</p>
        </section>
    );
};

export default AvailableServices;