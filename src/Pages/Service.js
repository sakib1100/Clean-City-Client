// import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Service = () => {
    const [service,setService] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/service';
      fetch(url) 
      .then(res => res.json())
      .then(data => setService(data))
    },[]);
    return (
        <div className='mt-16'>
         <h1>{service.length}</h1>
     {
        service.map(data => <div
        key={data._id}
        data={data}
        ></div>)
     }

        </div>
    );
};

export default Service;