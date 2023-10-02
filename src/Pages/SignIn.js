import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {auth} from '../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';


const SignIn = () => {
  // const navigate = useNavigate(auth);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle,gUser] = useSignInWithGoogle(auth);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email,password)
   
  }
// if(user || gUser){
//   navigate('/home')
// }
    return (
       
             <div className="h-screen  flex justify-center items-center sm:mt-7 max-sm:mt-7 lg:mt-16">
        
        <div className="card flex-shrink-0  lg:w-full sm:w-9/9 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
          <h1 className='text-3xl bolder text-center text-accent'>Sign In</h1>

        <form onSubmit={handleOnSubmit}>
        <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input name='name' type="text" placeholder="Name"  className="input border-accent border input-bordered" />
            </div>
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
              <input  name='password' type="text" placeholder="password" className="input  border-accent border input-bordered" />
           
            </div>
            <div className="form-control mt-6">
              <button  type='submit' className="btn btn-accent text-white">Sign In</button>
              <p className='mt-2'> Already have an account pls<Link className='text-accent' to="/login"> Login</Link></p>

            </div>
            <div className='divider'>OR</div>

            <div className="form-control">
            <button onClick={() => signInWithGoogle()} className='btn btn-glass hover:btn-primary' >Login With Google</button>
            </div>
            </form>
      

          </div>
        </div>
      </div>

    );
};

export default SignIn;