import Image from 'next/image';
import React from 'react';

export default function WhyChooseUs() {
  return (
    <div class='bg-white py-16 px-6 lg:px-20'>
      <div className='lg:w-max mx-auto text-center flex flex-col gap-3 px-4 md:px-8 lg:px-12 2xl:px-20'>
        <h2 className='text-sm md:text-base lg:text-lg font-bold text-bg-color mx-auto'>
          {' '}
          Why Choose Us
        </h2>
        <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
          What Makes Us Stand Out?
        </h3>
      </div>

      <div class='grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 pt-10'>
        <div class='flex flex-col gap-3 items-center text-center border-2 border-gray-100  p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
          <div className='rounded-full p-6 bg-primary'>
            <Image
              src={'/images/icons/custom-design.svg'}
              alt='custom design icon'
              width={80}
              height={80}
            />
          </div>

          <h3 class='text-xl font-semibold text-gray-900 '>
            Tailored Kitchen Elegance
          </h3>
          <p class='text-gray-500 '>
            We craft premium-quality, handcrafted, and meticulously designed
            custom kitchen cabinets tailored to your unique style, functional
            needs, and aesthetic preferences.{' '}
          </p>
        </div>
        <div class='flex flex-col gap-3 items-center text-center border-2 border-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
          <div className='rounded-full p-6 bg-primary'>
            <Image
              src={'/images/icons/best-service.svg'}
              alt='custom design icon'
              width={80}
              height={80}
            />
          </div>
          <h3 class='text-xl font-semibold text-gray-900'>
            Exceptional Customer Care
          </h3>
          <p class='text-gray-500'>
            Committed to delivering quality work and customer satisfaction.
          </p>
        </div>

        <div class='flex flex-col gap-3 items-center text-center border-2 border-gray-100  p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
          <div className='rounded-full p-6 bg-primary'>
            <Image
              src={'/images/icons/team.svg'}
              alt='custom design icon'
              width={80}
              height={80}
            />
          </div>
          <h3 class='text-xl font-semibold text-gray-900 '>
            Experience
          </h3>
          <p class='text-gray-500 '>
            Reliable craftsmanship built on decades of industry experience.
          </p>
        </div>
      </div>
    </div>
  );
}
