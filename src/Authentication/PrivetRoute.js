import React, { Children } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequireAuth = ({children}) => {
 const location = useLocation();
 const user = true;
if(!user){
    return <Navigate to="/login" state={{from:location}} replace />
}
    return children;
};

export default RequireAuth;