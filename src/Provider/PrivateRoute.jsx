/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { FallingLines } from "react-loader-spinner";


const PrivateRoute = ({children}) => {
  const {user,loading} = useContext(AuthContext)
  const location = useLocation()
  console.log(location.pathname);
  if(loading){
    return<FallingLines
    color="#4fa94d"
    width="100"
    visible={true}
    ariaLabel='falling-lines-loading'
  />
  }
  if(user){
    return children
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>
  
};

export default PrivateRoute;