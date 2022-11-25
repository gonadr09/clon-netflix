import React from "react";
import { useContext } from "react";
import { AuthContext } from "../features/auth/context/AuthContext";
import { Navigate } from "react-router-dom";


const ProtectedRoutes = ({ children, preventUrl }) => {
  const { state } = useContext(AuthContext);
  if (state.isAuth) {
    return children;
  }

  return <Navigate to={preventUrl} />;
};

export default ProtectedRoutes;
