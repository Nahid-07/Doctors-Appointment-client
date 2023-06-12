import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from "../firebase/firebase.config";
export const ContextAuth = createContext();
const AuthProvider = getAuth(app);

const ContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user with email and password
    const signUpWithEmailPass = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(AuthProvider,email,password)
    }
    // login method
    const loginWithEmailPass = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(AuthProvider,email,password)
    }

    // logout method 

    const logOut = ()=>{
        return signOut(AuthProvider)
    }

    // update profile

    const updateUser = (userInfo)=>{
        return updateProfile(AuthProvider.currentUser, userInfo)
    }
    
    // state observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(AuthProvider, currentUser=>{
            setUser(currentUser)
            setLoading(false);
        });
        
        return ()=> unsubscribe()
    },[])

    const authInfo = {
        signUpWithEmailPass,
        loginWithEmailPass,
        user,
        loading,
        setLoading,
        setUser,
        logOut,
        updateUser
    }
    return (

        <ContextAuth.Provider value={authInfo} >
            {children}
        </ContextAuth.Provider >
    );
};

export default ContextProvider;