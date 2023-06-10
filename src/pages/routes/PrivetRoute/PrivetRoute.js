import React, { useContext } from 'react';
import { ContextAuth } from '../../../ContextApi/ContextProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Speener from '../../../Speener/Speener';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(ContextAuth);
    const location = useLocation();
    if(loading){
        return <Speener></Speener>
    }

    if(!user){
        return <Navigate to="/login" state={{from : location}} replace></Navigate>
    }
    return children
};

export default PrivetRoute;