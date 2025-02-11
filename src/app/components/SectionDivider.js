import Image from 'next/image';
import React from 'react';

export default function SectionDivider() {
  return (
    <div>
      <Image

        
        src={'/images/5.png'}
        width={150}
        height={50}
        alt='section divider'
        className='w-[135px] rounded-xl h-[50px]'
      />
    </div>
  );
}
