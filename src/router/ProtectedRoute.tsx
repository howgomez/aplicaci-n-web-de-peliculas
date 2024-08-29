import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isLoading } = useAuth();
  console.log('ProtectedRoute user:', user);

  if(isLoading) {
    return <div>Loading...</div>
  }


  
  return user ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
