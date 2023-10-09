import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import axios, {formData} from 'axios';
import {auth} from '../../firebase.init';

const AddService = () => {
  const navigate = useNavigate(auth);
  const [loading,setLoading] = useState('');
  const [imageUrl,setImageUrl] = useState("");
  const handleOnSubmit = (event) => {
    event.preventDefault();
   const serviceName = event.target.cName.value;
   const price = event.target.charge.value;
   const datas = {serviceName,price};
   const FullData = {
    ...datas,image:imageUrl,
   }
   fetch('https://clean-city-server.vercel.app//post-data', {
    method: 'POST',
    body: JSON.stringify(
      FullData
    ),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
    setImageUrl('');

navigate('/service')


}

const handleImage = (event) => {
  setLoading(true);
const image =  event.target.files[0];

const formData = new FormData();
formData.set('image',image);
axios.post('https://api.imgbb.com/1/upload?key=29a23a67a9f901005094a2aa57ce7805',formData)
.then((res) => {
  setImageUrl(res.data.data.display_url);
  setLoading(false);
})
.catch((error) => {
  console.log(error)
})

};
    return (
      <div className="lg:h-screen w-full flex justify-center items-center lg:mt-0 sm:mt-20 max-sm:mt-20 ">
        
      <div className="card flex-shrink-0  lg:w-full max-sm:w-9/12 max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
        <h1 className='text-3xl bolder text-center text-accent'>Add Service</h1>
        
          <form onSubmit={handleOnSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service Name</span>
            </label>
            <input name="cName" type="text" placeholder="Service Name"  className="input border-accent border input-bordered"  required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service Charge</span>
            </label>
            <input name="charge" type="text" placeholder="Service Charge" className="input  border-accent border input-bordered" required />
           
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input  onChange={handleImage} type="file"  className="input  border-accent border input-bordered" required />
           
          </div>
          <div className="form-control mt-6">
            <button type='submit' className="btn btn-accent text-white">Add Service</button>
          </div>
    
          </form>
        </div>
      </div>
    </div>

    );
};

export default AddService;