import Image from 'next/image';
import React from 'react';

export default function AboutUs({ page = 'landing' }) {
  return (
    <div className='flex p-4 md:p-8 lg:p-12 2xl:p-20 flex-col lg:flex-row'>
      <div className='w-full lg:w-1/2 '>
        <div className='w-full overflow-hidden h-full'>
          <Image
            src='/images/aboutus-side.webp'
            width={600}
            height={600}
            alt='about us img'
            className='transform transition-transform duration-300 hover:scale-110 h-full lg:w-11/12 mx-auto lg:mx-0'
          />
        </div>
      </div>
      <div className='w-full lg:w-1/2'>
        <div className='flex flex-col gap-4 py-10'>
          <h2 className='text-bg-color text-sm md:text-base lg:text-lg font-bold'>
            About Us
          </h2>
          <h3 className='text-4xl md:text-5xl xl:text-6xl font-bold'>
            We offer you
          </h3>
          <p>
            {page === 'landing' ? (
              <>
                We bring over 25 years of experience in cabinet refacing and
                craftsmanship. Experience the difference that precision,
                quality, and dedication can make.
              </>
            ) : (
              <>
                At Impressive Cabinet Refacing LTD, we’ve been crafting stunning
                kitchens for over 25 years. Our expertise in cabinet refacing
                and custom upgrades ensures you get a refreshed, functional
                space without the cost or hassle of a full renovation. From
                modern cabinet finishes and soft-close hardware to roll-out
                trays and extended cabinets, we offer tailored solutions to suit
                your style and budget. Our commitment to quality,
                sustainability, and customer satisfaction makes us a trusted
                name in the industry.
              </>
            )}
          </p>
          <button className='bg-primary text-white rounded-full p-3 lg:p-3 px-4 lg:px-6 w-max text-xs font-semibold uppercase'>
            Contact us Now
          </button>
        </div>
      </div>
    </div>
  );
}
