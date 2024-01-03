import React  from 'react';
 
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Privetroute = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation();
    if (loading) {
        return <span className="loading loading-spinner text-success"></span>
    }
    if (user) {
        return children;
        
    }
    return <Navigate state={location.pathname} to='/login' replace></Navigate>
};

export default Privetroute;