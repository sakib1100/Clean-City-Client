import React, { Children } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import UseAdmin from '../hooks/UseAdmin';

const AdminRoute = ({children}) => {

const [admin] = UseAdmin();

if(!admin){
    return <Navigate to="/"  replace />;
}

    return children;
};

export default AdminRoute;