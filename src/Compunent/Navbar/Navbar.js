import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
           <div class="drawer drawer-end">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
  <div class="drawer-content flex flex-col">

    <div class="w-full navbar bg-base-300 fixed top-0 z-50">
    <div class="flex-1 px-2 mx-2 text-2xl bold">Clean City</div>
      <div class="flex-none lg:hidden">
     
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
    
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal gap-x-1">

          <li><NavLink to='/home'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/service'>Services</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          
        </ul>
      </div>
    </div>
  

  </div> 
  <div class="drawer-side z-50">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-80 min-h-full bg-base-200">
 
         <li><NavLink to='/home'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/service'>Services</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
      
    </ul>
    
  </div>
</div>
        </div>
    );
};

export default Navbar;