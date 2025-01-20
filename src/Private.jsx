import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';

const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
    }

    if (user) {
        return children
    }


    return (
        <div>
            <Navigate to="/login"> </Navigate>
        </div>
    );
};

export default Private;