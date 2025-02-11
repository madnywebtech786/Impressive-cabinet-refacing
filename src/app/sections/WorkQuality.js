import React from 'react';

export default function WorkQuality() {
  return (
    <div className=' flex items-center py-8  p-4 md:p-8 lg:p-12 2xl:p-20 workQuality flex-col lg:flex-row'>
      <div className='w-full lg:w-2/3'>
        <div className='flex flex-col gap-3'>
          <h2 className='text-sm md:text-base lg:text-lg text-bg-white capitalize font-bold'>
          Interested? Let's Work on it.
          </h2>
          <h3 className='text-2xl md:text-3xl lg:text-5xl font-bold text-white !leading-tight'>
            Dreaming of the perfect kitchen? <br /> We bring your vision to life
            with expert craftsmanship and custom design.
          </h3>
        </div>
      </div>
      <div className='w-full lg:w-1/3 flex justify-center mt-5 lg:mt-0'>
        <button className='bg-primaryLight p-4 px-4 lg:px-8 text-base md:text-lg lg:text-2xl text-white font-bold rounded-lg'>
          Get Free Quote
        </button>
      </div>
    </div>
  );
}
