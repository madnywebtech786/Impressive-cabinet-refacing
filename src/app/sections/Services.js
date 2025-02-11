'use client';

import React from 'react';
import ServiceCard from '../components/ServiceCard';
export default function Services() {
  return (
    <div className='flex p-4 md:p-8 lg:p-12 2xl:p-20 bg-grayBg servicesBg flex-col'>
      <div className='flex flex-col gap-4 items-center'>
        <h2 className='text-sm md:text-base xl:text-lg text-bg-white font-bold'>
          Our Services
        </h2>
        <h3 className='text-3xl md:text-4xl xl:text-5xl font-bold text-primary'>
          Expertly Designed Cabinets,Tailored to Your Style
        </h3>
      </div>
      <div className='w-full mt-10 flex flex-wrap'>
        <div className='w-full md:w-1/2 lg:w-1/3 p-3'>
          <ServiceCard
            name='custom cabinet modifications'
            link='custom-cabinet-modifications'
            desc='Add pantries, islands, and roll-out trays to create a functional and uniquely personalized kitchen space.'
          />
        </div>
        <div className='w-full md:w-1/2 lg:w-1/3 p-3'>
          <ServiceCard
            name='professional cabinet refinishing'
            link='professional-cabinet-refinishing'
            desc="Repaint and refinish cabinets with vibrant colors or classic finishes to transform your kitchen's style effortlessly."
          />
        </div>
        <div className='w-full md:w-1/2 lg:w-1/3 p-3'>
          <ServiceCard
            name='new kitchen design & installation'
            link='new-kitchen-design-&-installation'
            desc='Bring your dream kitchen to life with customized designs and expert installation tailored to your needs.'
          />
        </div>
        <div className='w-full md:w-1/2 lg:w-1/3 p-3'>
          <ServiceCard
            name='elegant countertops & storage solutions'
            link='elegant-countertops-&-storage-solutions'
            desc='Upgrade with durable laminate countertops and smart storage additions like soft-close drawers and crown molding.'
          />
        </div>
        <div className='w-full md:w-1/2 lg:w-1/3 p-3'>
          <ServiceCard
            name='modern cabinet door upgrades'
            link='modern-cabinet-door-upgrades'
            desc='Replace outdated cabinet doors with sleek thermofoil or timeless solid wood designs for a fresh, modern appeal.'
          />
        </div>
        <div className='w-full md:w-1/2 lg:w-1/3 p-3'>
          <ServiceCard
            name='bathroom renovations'
            link='bathroom-renovations'
            desc='Modernize your bathroom with stylish vanities and elegant designs for a fresh new look.'
          />
        </div>
      </div>
    </div>
  );
}
