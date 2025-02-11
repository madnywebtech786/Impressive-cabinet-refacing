'use client';
import React, { useState, useEffect } from 'react';
import { useModal } from '../Contexts/ModalContext';
const images = [1, 2, 3];
const colors = [1, 2, 3, 4];
export default function ProductModal() {
  const { isModalOpen, closeModal, productData } = useModal();
  const [selectedImageIndex, setSelectedImageIndex] = useState(1);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'; // Disable background scrolling
    } else {
      document.body.style.overflow = ''; // Enable background scrolling
    }

    // Clean up on component unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!isModalOpen || !productData) return null;

  const { name, category } = productData;

  return (
    <div
      className='fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50'
      onClick={handleOverlayClick}
    >
      <div
        className={`bg-white rounded-lg shadow-lg w-11/12 p-3 lg:p-5 md:p-8 product-card fade-up max-h-[600px] lg:!max-h-[2000px] `}
      >
        {/* Modal Header */}
        <div className='flex justify-between items-center border-b pb-4 mb-4'>
          <h3 className='text-xl font-semibold'>{name}</h3>
          <button
            onClick={closeModal}
            className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center'
          >
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              ></path>
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className='flex flex-col lg:flex-row gap-6 overflow-scroll productModal pb-6 lg:pb-0'>
          {/* Images */}
          <div className='flex flex-col items-center lg:w-1/2'>
            <img
              src={
                `/images/products/${category}/${name}/Image${selectedImageIndex}.webp` ||
                `/images/products/${category}/${name}/Image1.webp`
              }
              alt={name}
              className='w-full h-[250px] lg:h-[400px] rounded-lg object-contain mb-4'
            />
            <div className='flex w-full '>
              {images.map((index) => (
                <img
                  key={index}
                  src={`/images/products/${category}/${name}/Image${index}.webp`}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-1/3 h-20 md:h-28 lg:h-28 rounded-lg object-contain cursor-pointer px-1 lg:px-2 ${
                    selectedImageIndex === index
                      ? 'border-blue-500'
                      : 'border-gray-300'
                  }`}
                  onClick={() => setSelectedImageIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* colors */}
          <div className='lg:w-1/2'>
            <h2 className='text-2xl font-semibold mb-2'>
              Recommended 3DL Finishes:
            </h2>
            <div className='flex flex-wrap'>
              {colors.map((index) => (
                <img
                  key={index}
                  src={`/images/products/${category}/${name}/Colour${index}.webp`}
                  alt={`product color img ${index + 1}`}
                  className={`w-1/2 md:w-1/4 h-20 md:h-28 lg:h-28 rounded-lg object-cover p-1`}
                />
              ))}

              {(name === 'Geneva' || name === 'Santa Fe') && (
                <img
                  key={5}
                  src={`/images/products/${category}/${name}/Colour5.webp`}
                  alt={`product color img 5`}
                  className={`w-1/2 md:w-1/4 h-20 md:h-28 lg:h-28 rounded-lg object-cover p-1`}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
