import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../firebase.init';

const Login = () => {
  // const navigate = useNavigate(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle,gUser] = useSignInWithGoogle(auth);

  const navigates = useNavigate();
  const location = useLocation();
  const from  = location.state?.from?.pathname || '/';
  if (user || gUser) {
    navigates(from, {replace: true });
  
  }
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email,password)
  }

  // if(user || gUser){
  //   // navigate('/home')
  // }

    return (
        <div className="h-screen flex justify-center items-center sm:mt-7 max-sm:mt-7 lg:mt-16">
        
          <div className="card flex-shrink-0  lg:w-full sm:w-9/9 max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className='text-3xl bolder text-center text-accent'>Login</h1>
            <form onSubmit={handleOnSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="text" placeholder="email"  className="input border-accent border input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type="text" placeholder="password" className="input  border-accent border input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent text-white">Login</button>
               <p className='mt-2'> Create an account pls<Link className='text-accent' to="/signin"> Sign in</Link></p>
              </div>
              <div className='divider'>OR</div>
             <div className='form-control'>
             <button onClick={() => signInWithGoogle()} className='btn btn-glass hover:btn-primary' >Login With Google</button>
             </div>
              </form>
            </div>
          </div>
        </div>
   
    );
};

export default Login;