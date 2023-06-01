import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';

const AvailableServices = ({selectedDate}) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    },[])
    return (
        <section className='p-10 lg:p-0'>
            <p className='text-[#19D3AE] text-2xl text-center'>Available Appointments on {format(selectedDate, "PPP")}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(option => <AppointmentOption key={option.id} option={option}></AppointmentOption>)
                }
            </div>
        </section>
    );
};

export default AvailableServices;