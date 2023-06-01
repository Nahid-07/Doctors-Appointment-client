import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableServices from '../AvailableServices/AvailableServices';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div className='max-w-7xl mx-auto my-10 lg:my-40'>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableServices
                selectedDate={selectedDate}
            ></AvailableServices>
        </div>
    );
};

export default Appointment;