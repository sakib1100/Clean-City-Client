import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
       
             <div className="h-screen  flex justify-center items-center sm:mt-7 max-sm:mt-7 lg:mt-16">
        
        <div className="card flex-shrink-0  lg:w-full sm:w-9/9 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
          <h1 className='text-3xl bolder text-center text-accent'>Sign In</h1>
          <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input type="text" placeholder="text"  className="input border-accent border input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="email"  className="input border-accent border input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" placeholder="password" className="input  border-accent border input-bordered" />
           
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent text-white">Sign In</button>
              <p className='mt-2'> Already have an account pls<Link className='text-accent' to="/login"> Login</Link></p>

            </div>
            <div className='divider'>OR</div>
            <button className='btn btn-glass hover:btn-primary' >Login With Google</button>
          </div>
        </div>
      </div>

    );
};

export default SignIn;