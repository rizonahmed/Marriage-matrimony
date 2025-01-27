import React, { useContext } from 'react';
import useAdmin from './Hooks/useAdmin';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const AdminPrivate = ({children}) => {
    const [isAdmin, isAdminLoading] = useAdmin()
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    
    if (loading || isAdminLoading) {
        return <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
    }
    if (user && isAdmin?.role === 'admin') return children;

    return <Navigate to="/" state={{ from: location }} replace={true} />
};

export default AdminPrivate;