import React from 'react';
import image1 from './../../Images/clenar.png';
const Landing = () => {
    return (
        <div className='mb-4'>
           <div class="hero h-screen lg:h-[60vh] bg-accent mt-16">
  <div class="hero-content flex-col lg:flex-row">
 
    <div>
      <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-offset="300"
     data-aos-easing="ease-in-sine" class="text-5xl font-bold text-white">Good Cleaning Service</h1>
      <p data-aos="fade-right" data-aos-duration="1000" data-aos-offset="300"
     data-aos-easing="ease-in-sine" class="py-6 max-w-xl text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button data-aos="fade-right" data-aos-duration="1000" data-aos-offset="300"
     data-aos-easing="ease-in-sine" class="btn btn-primary">Get Started</button>
    </div>
   <div data-aos="fade-left" data-aos-duration="1000" data-aos-offset="300"
     data-aos-easing="ease-in-sine"  className='h-[60vh] shrink-0' >
   <img src={image1} class="h-full" />
   </div>
  </div>
</div>

<div className='rounded-2xl mt-[-50px] border-accent border mx-auto relative z-20 bg-base-100 shadow-lg p-10 w-5/6'>
    <h1 className='text-2xl mb-4 text-accent'>Get Free Estimate</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
    <input type="text" placeholder="Type here" class="input border-accent input-bordered w-full max-w-xs" />
    <input type="text" placeholder="Type here" class="input border-accent input-bordered w-full max-w-xs" />
    <input type="text" placeholder="Type here" class="input border-accent input-bordered w-full max-w-xs" />
    <input type="text" placeholder="Type here" class="input border-accent input-bordered w-full max-w-xs" />
    <input type="text" placeholder="Type here" class="input border-accent input-bordered w-full max-w-xs" />
    <input type="text" placeholder="Type here" class="input border-accent input-bordered w-full max-w-xs" />
    <input type="text" placeholder="Type here" class="input border-accent input-bordered w-full max-w-xs" />
    <input type="text" placeholder="Type here" class="input border-accent input-bordered w-full max-w-xs" />


    </div>
</div>

        </div>
    );
};

export default Landing;