import React, { createContext, useEffect, useState } from 'react';
import {
    GoogleAuthProvider,
    GithubAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
import app from '../firebase/firebase.config';


const googleAuthProvider = new GoogleAuthProvider();
const gitHubAuthProvider = new GithubAuthProvider();

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [ChefInfo, setchefInfo] = useState([]);
    const [recipeData, setRecipeData] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(user);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    };

    const signInWithGitHub = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubAuthProvider);
    },

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect (() => {
        fetch("https://chef-master-auth-server-84mzfwack-barkatzx.vercel.app/")
        .then((res) => res.json())
        .then((data) => setchefInfo(data))
        .catch((err) => console.log(err));
    }, []);

    useEffect (() => {
        fetch("https://chef-master-auth-server-84mzfwack-barkatzx.vercel.app/recipes")
        .then((res) => res.json())
        .then((data) => setRecipeData(data))
        .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
            console.log(loggedUserUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        ChefInfo,
        recipeData,
        loading,
        createUser,
        setUser,
        signIn,
        signInWithGoogle,
        signInWithGitHub,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProviders;