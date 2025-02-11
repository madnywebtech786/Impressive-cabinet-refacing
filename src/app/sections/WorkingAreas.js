'use client';
import React from 'react';
import CityCard from '../components/CityCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function WorkingAreas() {
  const Cities = [
    { name: 'Airdrie', src: '/images/cities/Airdrie.png' },
    { name: 'Calgary', src: '/images/cities/Calgary.png' },
    { name: 'Chesteremere', src: '/images/cities/Chesteremere.png' },
    { name: 'Cochrane', src: '/images/cities/Cochrane.png' },
    { name: 'Strathmore', src: '/images/cities/Strathmore.jpg' },
    { name: 'Highriver', src: '/images/cities/highriver.jpg' },
    { name: 'okotoks', src: '/images/cities/okotoks.jpg' },

  ];
  return (
    <div className='p-4 py-8 md:p-8 lg:p-12 2xl:p-20'>
      <div className='lg:w-max mx-auto text-center flex flex-col gap-3'>
        <h2 className='text-sm md:text-base lg:text-lg text-bg-color mx-auto font-bold'>
          Where We Excel
        </h2>
        <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
          Explore Our Expertise and Impact Zones
        </h3>
      </div>
      <div className='w-full h-full p-5 lg:pl-10'>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          draggable
          loop={true}
          autoplay={{ delay: 3000 }}
          className='!h-full'
          breakpoints={{
            // For screens >= 640px (Tablet)
            720: {
              slidesPerView: 2, // Show 4 slides on tablet
            },
            // For screens >= 1024px (Laptop and above)
            1024: {
              slidesPerView: 4, // Show 7 slides on laptop and above
            },
            1240: {
              slidesPerView: 4, // Show 7 slides on laptop and above
            },
          }}
        >
          {Cities.map((city, index) => (
            <SwiperSlide key={'city'+index}>
              <div
                className='w-full p-5'
                key={index + 'city'}
              >
                <CityCard name={city.name} src={city.src} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

     
    </div>
  );
}
