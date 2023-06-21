import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, getAuth, signOut, signInWithPopup, updateProfile} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (profile) => {
        updateProfile(auth.currentUser, profile);
    }

    const logout = () => {
        localStorage.removeItem('wild-token');
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => { return unsubscribe()};
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logout,
        providerLogin,
        updateUser

    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;