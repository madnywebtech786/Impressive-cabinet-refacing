'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

const projects = [
  { img: '/images/projects/Impressive2.1.jpg' },
  { img: '/images/projects/Impressive4.1.jpg' },
  { img: '/images/projects/Impressive6.1.jpeg' },
  { img: '/images/projects/Impressive7.1.jpeg' },
  { img: '/images/projects/Impressive8.1.jpg' },
];

export default function Projects() {
  return (
    <div className='flex py-4 md:py-8 lg:py-12 2xl:py-20 projects flex-col'>
      <div className='lg:w-max mx-auto text-white text-center flex flex-col gap-3 px-4 md:px-8 lg:px-12 2xl:px-20'>
        <h2 className='text-sm md:text-base lg:text-lg font-bold text-bg-white mx-auto'>
          Our Projects
        </h2>
        <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
          Browse Our Kitchen Creations
        </h3>
      </div>

      <div className='pt-12 md:pt-16 lg:pt-20 px-3 md:px-3 lg:px-6 2xl:px-5'>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          draggable
          autoplay={{ delay: 5000 }}
          loop={true}
          className='h-[400px] lg:!h-[450px]'
          breakpoints={{
            // For screens >= 640px (Tablet)
            640: {
              slidesPerView: 1, // Show 4 slides on tablet
            },
            // For screens >= 1024px (Laptop and above)
            1024: {
              slidesPerView: 2, // Show 7 slides on laptop and above
            },
            1240: {
              slidesPerView: 2, // Show 7 slides on laptop and above
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide>
              <div className='w-full h-full flex items-center relative group cursor-pointer'>
                {/* Full-Width and Full-Height Image */}
                <Image
                  src={project.img}
                  alt='Project Image'
                  width={800}
                  height={800}
                  className='w-full h-full object-cover rounded-lg'
                />

                {/* Sliding Overlay */}
                <div className='absolute inset-0 bg-black bg-opacity-80 rounded-lg flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500'>
                  <div className='text-center'>
                    <h2 className='text-white text-4xl font-semibold'>
                      Kitchen Project {index + 1}
                    </h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
