'use client';

import Breadcrumb from '@/app/components/Breadcrumb';
import Loader from '@/app/components/Loader';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { services } from '@/app/constants/servicesData';

export default function Page() {
  const pathname = usePathname(); // Get the current pathname
  const [formattedServiceName, setFormattedServiceName] = useState('');
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    if (pathname) {
      // Extract the serviceName from the pathname
      const serviceName = pathname.split('/').pop(); // Get the last segment of the URL

      if (serviceName) {
        // Replace "-" with spaces and capitalize the words
        const formattedName = serviceName.replaceAll('-', ' ');
        setFormattedServiceName(formattedName);
        setServiceData(services[formattedName]);
      }
    }
  }, [pathname]);

  if (!pathname) {
    return <Loader />;
  }


  return (
    <div>
      <Breadcrumb name={formattedServiceName} />

      <div className='flex p-4 py-8 md:p-8 lg:p-12 2xl:p-10 flex-col lg:flex-row items-center'>
        {/* Left: Image */}
        <div className='flex-shrink-0 w-full lg:w-1/2'>
          <img
            src={`/images/${formattedServiceName}.webp`}
            alt={formattedServiceName}
            className='w-full h-auto rounded-lg shadow-md max-h-[500px] object-cover'
          />
        </div>

        {/* Right: Service Details */}
        <div className='flex-grow lg:pl-8 mt-6 lg:mt-0'>
          <h3 className='text-4xl text-primary font-bold my-5 uppercase'>
            {formattedServiceName}
          </h3>
          <p className='text-base leading-relaxed text-gray-600'>
            {serviceData?.desc}
          </p>
          <div className='flex flex-col gap-3 mt-3'>
            <h4 className='text-2xl font-bold'>{serviceData?.smallHeading}</h4>
            {serviceData?.attributes?.length > 0 && (
              <ul className='list-disc pl-5'>
                {serviceData.attributes.map((attribute, index) => (
                  <li key={index} className='text-sm text-gray-700 mb-2'>
                    {attribute}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
