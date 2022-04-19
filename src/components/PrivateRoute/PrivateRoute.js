import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children }) => {

    const location = useLocation();
    const { user } = useAuth();
    
    return (
            !user.email ? <Navigate to="/login" state={{ from: location }} replace /> : children
    );
};

export default PrivateRoute;