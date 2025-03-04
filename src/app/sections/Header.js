'use client';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import './styles/Header.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
export default function Header() {
  return (
    <div className='w-full'>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        draggable
        // autoplay={{ delay: 5000 }}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className='h-[400px] lg:!h-[700px]'
      >
        <SwiperSlide>
          <div className='w-full h-full relative  flex items-center'>
            <div className='w-1/2 bg-gray-700 h-full  slideContentBg'>
              <div className='flex flex-col gap-3 md:gap-4 lg:gap-6 z-20 absolute top-1/3 lg:top-1/4 left-10 md:left-[10%] lg:left-[20%] w-10/12  lg:w-8/12'>
                <div className='flex flex-col gap-2 '>
                  <h3 className='text-2xl md:text-2xl  lg:text-6xl font-bold text-white !leading-tight capitalize '>
                    Fall in Love with your Kitchen again
                  </h3>
                  <p className='text-white text-xs lg:text-lg w-full md:w-2/3'>
                  Call today for your quote in Calgary and nearby areas
                  </p>
                </div>
                <Link href={'tel:+14033614968'}> 
                  <button className='bg-white rounded-full p-1 lg:p-3 px-4 lg:px-12 w-max text-xxs lg:text-xs font-semibold uppercase'>
                    Call Today 403-361-4968
                  </button>
                </Link>
              </div>
            </div>
            <div className='w-1/2 flex z-10 slide1Bg h-full'></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full relative flex items-center'>
            <div className='w-1/2 bg-gray-700 h-full  slideContentBg'>
              <div className='flex flex-col gap-3 md:gap-4 lg:gap-6 z-20 absolute top-1/3 lg:top-1/4 left-10 md:left-[10%] lg:left-[20%]  w-10/12  lg:w-8/12'>
                <div className='flex flex-col gap-2 '>
                  <h3 className='text-2xl md:text-2xl  lg:text-6xl font-bold text-white !leading-tight capitalize'>
                    Fast, Affordable and Eco-Friendly solutions for updating
                    your Kitchen/Bath
                  </h3>
                  <p className='text-white text-xs lg:text-lg w-full md:w-2/3'>
                    Our cabinet refacing services offer a quick and
                    cost-effective way to refresh your Kitchen
                  </p>
                </div>
                <Link href={'/projects'}>
                  <button className='bg-white rounded-full p-1 lg:p-3 px-4 lg:px-12 w-max text-xxs lg:text-xs font-semibold uppercase'>
                    Explore Our Projects
                  </button>
                </Link>
              </div>
            </div>
            <div className='w-1/2 flex z-10 slide2Bg h-full'></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full relative flex items-center'>
            <div className='w-1/2 bg-gray-700 h-full  slideContentBg'>
              <div className='flex flex-col gap-3 md:gap-4 lg:gap-6 z-20 absolute top-1/3 lg:top-1/4 left-10 md:left-[10%] lg:left-[20%]  w-10/12  lg:w-8/12'>
                <div className='flex flex-col gap-2 '>
                  <h3 className='text-2xl md:text-2xl  lg:text-6xl font-bold text-white !leading-tight capitalize'>
                    We offer many material options – Thermofoil, Wood and
                    Painting{' '}
                  </h3>
                  <p className='text-white text-xs lg:text-lg w-full md:w-2/3'>
                    We take existing Doors/Draw fronts and replace those with
                    New Thermofoil or Wood Stained. With painting we use the
                    existing Wood Doors/Draw fronts – Paint colors are endless
                  </p>
                </div>
                <Link href={'tel:+14033614968'}>
                  <button className='bg-white rounded-full p-1 lg:p-3 px-4 lg:px-12 w-max text-xxs lg:text-xs font-semibold uppercase'>
                    Call Us Now
                  </button>
                </Link>
              </div>
            </div>
            <div className='w-1/2 flex z-10 slide3Bg h-full'></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='w-full h-full relative flex items-center'>
            <div className='w-1/2 bg-gray-700 h-full  slideContentBg'>
              <div className='flex flex-col gap-3 md:gap-4 lg:gap-6 z-20 absolute top-1/3 lg:top-1/4 left-10 md:left-[10%] lg:left-[20%]  w-10/12  lg:w-8/12'>
                <div className='flex flex-col gap-2 '>
                  <h3 className='text-2xl md:text-2xl  lg:text-6xl font-bold text-white !leading-tight capitalize'>
                    Let your Kitchen reflect your style
                  </h3>
                  <p className='text-white text-xs lg:text-lg w-full md:w-4/5'>
                    By adding Crown Moulding, Light Rail, Soft Close Hinges and
                    Soft Close Drawer Slides and go even further to add Glass
                    Inserts or Wine Racks. We can add extensions to the ceiling.
                    Add pull-out Pan Drawers and Garbage/Recycling centers We
                    also provide Laminate Countertops – There are a world of
                    colors and textures to choose from
                  </p>
                </div>
                <Link href={'tel:+14033614968'}>
                  <button className='bg-white rounded-full p-1 lg:p-3 px-4 lg:px-12 w-max text-xxs lg:text-xs font-semibold uppercase'>
                    Start Your Design Journey
                  </button>
                </Link>
              </div>
            </div>
            <div className='w-1/2 flex z-10 slide4Bg h-full'></div>
          </div>
        </SwiperSlide>
        <div className='swiper-button-next !hidden md:!block'></div>
        <div className='swiper-button-prev !hidden md:!block'></div>
      </Swiper>
    </div>
  );
}
