import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Adjust the path based on your directory structure

const ProtectedRoute = ({ element, ...rest }) => {
    const { user, loading } = useAuth();
    console.log('sddsasffkkkk');
    
    console.log(user);
    

    // Show a loading indicator while checking authentication status
    if (loading) {
        return <div>Loading...</div>;
    }

    return user ? element : <Navigate to="/auth" />;
};

export default ProtectedRoute;
