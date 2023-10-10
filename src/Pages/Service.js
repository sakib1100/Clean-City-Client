// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Services from './Services';

const Service = () => {
    const [service,setService] = useState([]);
    useEffect(() => {
        const url = 'https://clean-city-server.vercel.app/get-service';
      fetch(url) 
      .then(res => res.json())
      .then(data => setService(data))
    },[]);


    const handleDelete = id => {
        const proced = window.confirm('Are you sure you want to delete?');
        if(proced){
            console.log('data delete successfully',id)
         const url = `https://clean-city-server.vercel.app/get-service/${id}`;
         fetch(url,{
            method: 'DELETE'
         })
         .then(res => res.json())
         .then(data => {
            if(data.deletedCount > 0){
                const remain = service.filter(user => user._id !== id);
               setService(remain);
                
            }
         }
        )
        }
        }
    return (
        <div className='container mt-16 lg:mt-18 mx-auto'>
         {/* <h1>{service.length}</h1> */}
     <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  justify-center content-center'>
     {
        service.map(data => < Services
        key={data._id}
        data={data}
        handleDelete={handleDelete}
        ></Services>)
     }
     </div>

        </div>
    );
};

export default Service;