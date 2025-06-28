import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Loading from '../components/Loading/Loading';


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

    return <Navigate state={location.pathname} to='/login'></Navigate>

};

export default PrivateRoute;