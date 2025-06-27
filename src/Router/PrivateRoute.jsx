import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Loading from '../assets/loading.json';

;

const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext)
    // console.log(user);

    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (user && user?.email) {
        return children
    }

    return <Navigate state={location.pathname} to='/signin'></Navigate>

};

export default PrivateRoute;