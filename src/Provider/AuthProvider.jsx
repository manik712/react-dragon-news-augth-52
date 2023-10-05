import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);


 export const AuthContext = createContext(null)  

const AuthProvider = ({children}) => {
  const [user,SetUser] =useState(null);

  const createUser=(email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const AuthInfo ={
    user,createUser
  }
  return (
   
    <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;