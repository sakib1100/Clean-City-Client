import React from 'react';

const Services = ({data,handleDelete}) => {
    const {_id,serviceName,price,image} = data;
    return (
        <div className=''>
          <div class="mx-4 my-4  block  max-w-[18rem] rounded-lg bg-light shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
  <div class="relative overflow-hidden bg-cover bg-no-repeat">
    <img
      class="rounded-t-lg h-40 w-full"
      src={image}
      alt="" />
  </div>
  <div class="p-6">
    <p class="text-base text-neutral-600 dark:text-neutral-700">ServiceName: <span className='font-bold'>{serviceName}</span></p>
    <p class="text-base text-neutral-600 dark:text-neutral-700">Price: {price}</p>
  <button onClick={() => handleDelete(_id)} className='btn btn-sm btn-error mt-2'>Delete</button>
  </div>
</div>
        </div>
    );
};

export default Services;