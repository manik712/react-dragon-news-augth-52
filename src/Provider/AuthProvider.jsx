/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);


 export const AuthContext = createContext(null)  

const AuthProvider = ({children}) => {
  const [user,SetUser] =useState(null);

  const createUser=(email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const signIn=(email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)

  }
  const logOut = () =>{
    return   signOut(auth);
  }

  useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth,currentUser =>{
      console.log("user in the auth changed state",currentUser);
      SetUser(currentUser)
    });
    return()=> {unSubscribe();}

  },[])

  const AuthInfo ={
    user,createUser,logOut,signIn
  }
  return (
   
    <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
