import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashbordsitebar = ({children}) => {
    return (
        <div>
            <div className="drawer drawer-mobile lg:drawer-open  mt-16 max-:mt-16">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
{children}
  
  </div> 
  <div className="drawer-side ">
    <label for="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu gap-1 p-4 w-80 min-h-full bg-accent text-base-content">
      <li><NavLink to="/dashboard/addService">Add Service</NavLink></li>
      <li><NavLink to='/dashboard/makeAdmin'>Add Admin</NavLink></li>
     
     
    </ul>
  
  </div>
</div>     



        </div>
    );
};

export default Dashbordsitebar;