import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className='mt-20  '>
      <div className='w-4/5 flex bg-primaryLight rounded-lg mx-auto relative z-20 -mb-10 flex-col lg:flex-row'>
        <div className='w-full lg:w-1/3 p-4 shadow-xl'>
          <div className='flex flex-col gap-3 text-white items-center w-full'>
            <Image
              src={'/images/icons/ClockWhite.svg'}
              alt='clock'
              width={35}
              height={35}
            />
            <h2 className='text-lg font-bold'>Monday - Friday</h2>
            <p className='text-sm'>09:00am - 06:00pm</p>
          </div>
        </div>
   
        <div className='w-full lg:w-1/3 p-4 shadow-xl'>
          <div className='flex flex-col gap-3 text-white items-center w-full'>
            <Image
              src={'/images/icons/MobileWhite.svg'}
              alt='clock'
              width={35}
              height={35}
            />
            <h2 className='text-lg font-bold'>Phone</h2>
            <p className='text-sm'>403-361-4968 </p>
            <p className='text-sm'>(778) 861-8906 Vancouver (Lower mainland) </p>
          </div>
        </div>
        <div className='w-full lg:w-1/3 p-4 shadow-xl'>
          <div className='flex flex-col gap-3 text-white items-center w-full'>
            <Image
              src={'/images/icons/MailWhite.svg'}
              alt='clock'
              width={35}
              height={35}
            />
            <h2 className='text-lg font-bold'>Email</h2>
            <p className='text-sm'>info@impressiveKitchen.com</p>
          </div>
        </div>
      </div>

      <div className='bg-primary rounded-tl-lg rounded-tr-lg pt-20 pb-10 flex px-4 md:px-8 lg:px-12 2xl:px-20 text-white z-10 flex-col lg:flex-row gap-8 lg:gap-0'>
        <div className='w-full lg:w-1/4 flex flex-col gap-5 items-center lg:items-start'>
          <div className='flex justify-center w-3/4'>
            <Image
              src={'/images/logoWhite.jpg'}
              alt='Impressive Kitchen Cabinets logo'
              width={160}
              height={150}
              className='rounded-xl'
            />
          </div>
          <p className='text-white text-sm font-bold text-center w-3/4'>Licensed and Insured</p>
        </div>
        <div className='w-full lg:w-1/4 flex flex-col gap-3 items-center lg:items-start'>
          <h2 className='text-xl font-bold uppercase '>Useful Link</h2>
          <Link href='/about-us' className='underline-animation-white w-max'>
            About Us
          </Link>
          <Link href='/products' className='underline-animation-white w-max'>
            3D Laminates
          </Link>

          <Link href='/projects' className='underline-animation-white w-max'>
            Our Projects
          </Link>
          <Link href='/contact-us' className='underline-animation-white w-max'>
            Contact Us
          </Link>
        </div>

        <div className='w-full lg:w-1/4 flex flex-col gap-3 items-center lg:items-start'>
          <h2 className='text-xl font-bold uppercase '>Contact Us</h2>
          <div className='flex flex-col gap-3'>
            <div className='flex gap-5 items-center flex-col lg:flex-row text-center lg:text-start'>
              <div className='bg-white rounded-full p-2'>
                <Image
                  src={'/images/icons/PhoneBlack.svg'}
                  alt='modern design'
                  width={20}
                  height={20}
                />
              </div>
              <div className='flex flex-col gap-1'>
                <h3 className='text-base font-bold '>Hotline</h3>
                <p className='text-xs'>403-361-4968</p>
              </div>
            </div>
            <div className='flex gap-5 items-center flex-col lg:flex-row text-center lg:text-start'>
              <div className='bg-white rounded-full p-2'>
                <Image
                  src={'/images/icons/MobileBlack.svg'}
                  alt='modern design'
                  width={21}
                  height={21}
                />
              </div>
              <div className='flex flex-col gap-1'>
                <h3 className='text-base font-bold '>Vancouver</h3>
                <p className='text-xs'>(778) 861-8906 Vancouver (Lower mainland)</p>
              </div>
            </div>
            <div className='flex gap-5 items-center flex-col lg:flex-row text-center lg:text-start'>
              <div className='bg-white rounded-full p-2'>
                <Image
                  src={'/images/icons/MailBlack.svg'}
                  alt='modern design'
                  width={21}
                  height={21}
                />
              </div>
              <div className='flex flex-col gap-1'>
                <h3 className='text-base font-bold '>Official Email</h3>
                <p className='text-xs'>info@impressiveKitchen.com</p>
              </div>
            </div>

        
          </div>
        </div>
        <div className='w-full lg:w-1/4 flex flex-col gap-3 items-center lg:items-start'>
          <h2 className='text-xl font-bold uppercase '>Social Links</h2>
          <div className='flex gap-3'>
            <Link href='#' className='w-max'>
              <Image
                src={'/images/icons/FacebookWhite.svg'}
                alt='facebook'
                width={40}
                height={40}
              />
            </Link>
            <Link href='#' className='w-max'>
              <Image
                src={'/images/icons/InstaWhite.svg'}
                alt='facebook'
                width={40}
                height={40}
              />
            </Link>

            <Link href='#' className='w-max'>
              <Image
                src={'/images/icons/Xwhite.svg'}
                alt='facebook'
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className='bg-white py-3 text-center text-primary text-base'>
        Copyright &copy; 2025. All rights reserved.
      </div>
    </div>
  );
}
