import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ServiceCard({ name, desc, link }) {
  return (
    <div className='bg-gray-100  rounded-lg shadow-md h-full service group relative pb-16 overflow-hidden'>
      {/* Content */}
      <div className='flex flex-col gap-2 z-20 relative'>
        <div className='relative'>
          <Image

            
            src={`/images/${name}.webp`}
            alt='service 1 img'
            width={400}
            height={300}
            className='max-h-[300px] w-full rounded-tr-lg rounded-tl-lg object-cover'
          />

          <Image

            
            src={`/images/icons/${name}.svg`}
            alt={`${name}-icon`}
            width={55}
            height={55}
            className='absolute -bottom-3 left-2 bg-primary p-2 rounded-lg'
          />
        </div>
        <div className='flex flex-col gap-2 z-20 relative p-3 py-6'>
          <h3 className='text-2xl font-bold text-gray-900 capitalize'>{name}</h3>
          <p className='text-gray-600'>{desc}</p>
        </div>
      </div>
      <Link href={`/services/${link}`} className='w-max'>
        <h3 className='absolute bottom-4 left-3 bg-primary text-white text-xs w-max p-2 px-4  rounded-lg '>
          Read More
        </h3>
      </Link>
    </div>
  );
}
