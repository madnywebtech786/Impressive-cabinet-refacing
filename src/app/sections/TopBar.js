import Image from 'next/image';
import React from 'react';
export default function TopBar() {
  return (
    <div className='w-full py-2 px-4 md:px-8 lg:px-12 2xl:px-20 flex bg-primaryDark text-white '>
      <div className='w-full lg:w-2/3 flex justify-between md:justify-start md:gap-5 items-center'>
        <div className='flex gap-1 items-center'>
          <Image
            src={'/images/icons/SendWhite.svg'}
            alt='relaxing-Food-email'
            width={20}
            height={20}
            className='w-3 h-3 md:w-4 md:h-4  xl:w-5 xl:h-5'
          />
          <p className='text-xxs md:text-xs lg:text-sm'>info@impressiveKitchen.com</p>
        </div>
        <div className='flex gap-1 items-center'>
          <Image
            src={'/images/icons/PhoneWhite.svg'}
            alt='relaxing-Food-phone'
            width={24}
            height={24}
            className='w-3 h-3 md:w-4 md:h-4  xl:w-5 xl:h-5'
          />
          <p className='text-xxs md:text-xs lg:text-sm'>403-361-4968</p>
        </div>
        <div className='flex gap-1 items-center'>
          <Image
            src={'/images/icons/MobileWhite.svg'}
            alt='relaxing-Food-phone'
            width={20}
            height={20}
            className='w-3 h-3 md:w-4 md:h-4  xl:w-5 xl:h-5'
          />
          <p className='text-xxs md:text-xs lg:text-sm'>(778) 861-8906 Vancouver (Lower mainland)</p>
        </div>
      </div>
      <div className='w-1/3 hidden md:flex justify-end'>
        <div className='flex items-center space-x-4'>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='/images/icons/FacebookWhite.svg'
              alt='Facebook'
              className='h-6 w-6'
            />
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='/images/icons/Xwhite.svg'
              alt='Twitter'
              className='h-6 w-6'
            />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='/images/icons/InstaWhite.svg'
              alt='Instagram'
              className='h-6 w-6'
            />
          </a>
        </div>
      </div>
    </div>
  );
}
