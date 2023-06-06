import React, { createContext } from 'react';
import {getAuth} from 'firebase/auth';
import app from "../firebase/firebase.config";
const ContextAuth = createContext();
const AuthProvider = getAuth(app);

const ContextProvider = ({children}) => {
    const authInfo = {

    }
    return (

        <ContextAuth.Provider value={authInfo} >
            {children}
        </ContextAuth.Provider >
    );
};

export default ContextProvider;