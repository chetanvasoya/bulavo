import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to the login page, but save the current location
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;