'use client';
import React from 'react';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TestimonialCard from '../components/TestimonialCard';
export default function Testimonials() {
  return (
    <div className='flex my-20 p-4 lg:p-10 testimonials relative flex-col-reverse lg:flex-row'>
      <div className='w-full lg:w-1/2 lg:p-5 xl:p-10 mt-10 lg:mt-0'>
        <div className='flex flex-col gap-3'>
          <h2 className='text-sm md:text-base lg:text-lg text-bg-white font-bold'>
            Voices of Trust
          </h2>
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
            The Difference We Make for Our Clients
          </h3>
        </div>
        <div className='flex justify-end'>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            draggable
            autoHeight
            autoplay={{ delay: 5000 }}
            loop={true}
            className='!h-auto mt-5 w-full lg:w-4/5'
          >
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
      <div className='w-full lg:w-1/2 mt-5 lg:mt-0'>
        <Image

          
          src={'/images/modern-cabinets2.webp'}
          alt='testimonial side img'
          width={1000}
          height={1000}
          className='h-full w-full rounded-lg'
        />
      </div>
    </div>
  );
}
