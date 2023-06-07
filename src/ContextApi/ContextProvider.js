import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import app from "../firebase/firebase.config";
export const ContextAuth = createContext();
const AuthProvider = getAuth(app);

const ContextProvider = ({children}) => {
    const signUpWithEmailPass = (email,password)=>{
        return createUserWithEmailAndPassword(AuthProvider,email,password)
    }
    const authInfo = {
        signUpWithEmailPass
    }
    return (
// provider
        <ContextAuth.Provider value={authInfo} >
            {children}
        </ContextAuth.Provider >
    );
};

export default ContextProvider;