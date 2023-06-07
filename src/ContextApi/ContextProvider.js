import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import app from "../firebase/firebase.config";
export const ContextAuth = createContext();
const AuthProvider = getAuth(app);

const ContextProvider = ({children}) => {
    const signUpWithEmailPass = (email,password)=>{
        return createUserWithEmailAndPassword(AuthProvider,email,password)
    }
    // login method
    const loginWithEmailPass = (email, password) => {
        return signInWithEmailAndPassword(AuthProvider,email,password)
    }
    const authInfo = {
        signUpWithEmailPass,
        loginWithEmailPass
    }
    return (

        <ContextAuth.Provider value={authInfo} >
            {children}
        </ContextAuth.Provider >
    );
};

export default ContextProvider;