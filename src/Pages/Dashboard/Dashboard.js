import React from 'react';
import Dashbordsitebar from '../../Compunent/Dashbordsitebar/Dashbordsitebar';
import { Outlet } from 'react-router-dom';
const Dashboard = () => {
    return (
   <Dashbordsitebar >

<Outlet />
   </Dashbordsitebar>
    );
};

export default Dashboard;