import Image from 'next/image';
import React from 'react';

export default function TestimonialCard() {
  return (
    <div className='bg-white rounded-lg p-4 relative'>
      <Image
        src={'/images/icons/QuotesIcon.svg'}
        alt='quotes'
        width={30}
        height={30}
        className='absolute top-2 left-2'
      />
      <Image
        src={'/images/icons/QuoteInvert.svg'}
        alt='quotes'
        width={30}
        height={30}
        className='absolute bottom-2 right-2'
      />

      <div className='pt-8 px-2 flex flex-col gap-5'>
        <p className='text-primaryLight text-sm md:text-base'>
          I just wanted to say big thanks again for the hard work, you are very
          professional. You absolutely pay attention to every single detail Very
          professional.
        </p>

        <div className='flex w-full xl:w-1/2 items-center gap-5'>
          <div className='flex flex-col gap-1'>
            <h3 className='text-base lg:text-lg font-bold'>Anna</h3>
            <p className='text-sm lg:text-base text-primaryLight'>
              Happy Client
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
