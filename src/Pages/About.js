import React from 'react';
import image from '../Images/cleanerBoy.jpg'
const About = () => {
    return (
        <div>
    
<div class="mt-36 bg-white ">  
  <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div class="md:5/12 lg:w-5/12">
          <img src={image} alt="image" className='rounded' loading="lazy" width="" height="" />
        </div>
        <div class="md:7/12 lg:w-6/12">
          <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">We are making efforts to de-pollute the dirty city.</h2>
          <p class="mt-6 text-gray-600">In order to reduce environmental pollution, MATI has been running a campaign named “Clean City Campaign”. Mati was now able to resume the operation of the district waste collection system in Sankipara, which 100 households have joined. For a small monthly fee, the household waste is picked up daily by a bicycle rickshaw converted into a garbage truck and taken to the landfill. We had to suspend work in 2008 because the garbage rickshaw had rusted through and there was no money for a new one.</p>
        </div>
      </div>
  </div>
</div>
        </div>
    );
};

export default About;