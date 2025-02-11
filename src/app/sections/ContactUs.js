'use client';
import Image from 'next/image';
import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email) => {
    const regex = /^[\w-.]+@[\w-]+\.[a-z]{2,}$/i;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^\+?\d{10,15}$/;
    return regex.test(phone);
  };

  // Regex to detect potential malicious code
  const isMaliciousInput = (input) => {
    const maliciousPattern = /<script.*?>.*?<\/script>|<.*?on\w+=".*?".*?>|javascript:|<.*?<\/.*?>/gi;
    return maliciousPattern.test(input);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    const { firstName, lastName, email, phone, message } = formData;

    let formErrors = {};

    // Validation checks for malicious input and required fields
    if (!firstName.trim()) formErrors.firstName = 'First name is required.';
    if (isMaliciousInput(firstName)) formErrors.firstName = 'First name contains malicious content.';
    
    if (!lastName.trim()) formErrors.lastName = 'Last name is required.';
    if (isMaliciousInput(lastName)) formErrors.lastName = 'Last name contains malicious content.';
    
    if (!email.trim()) {
      formErrors.email = 'Email is required.';
    } else if (!validateEmail(email)) {
      formErrors.email = 'Invalid email format.';
    } else if (isMaliciousInput(email)) {
      formErrors.email = 'Email contains malicious content.';
    }
    
    if (!phone.trim()) {
      formErrors.phone = 'Phone number is required.';
    } else if (!validatePhone(phone)) {
      formErrors.phone = 'Invalid phone number. Must be 10-15 digits.';
    } else if (isMaliciousInput(phone)) {
      formErrors.phone = 'Phone number contains malicious content.';
    }
    
    if (!message.trim()) formErrors.message = 'Message is required.';
    if (isMaliciousInput(message)) formErrors.message = 'Your message contains potentially harmful content.';

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Failed to submit the form.');
        }

        setSuccessMessage('Form submitted successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
      } catch (error) {
        alert('Error submitting the form. Please try again later.');
        console.error(error);
      }
    }
    setIsSubmitting(false);
  };

  return (
    <div className='flex my-20 px-4 md:px-8 lg:px-12 2xl:px-20 gap-10 flex-col lg:flex-row' id='contact'>
      <div className='w-full lg:w-1/2 serviceSide'>
        <Image
          src={'/images/Basement.webp'}
          alt='contact img'
          width={800}
          height={800}
          className='w-full h-full rounded-lg'
        />
      </div>
      <div className='w-full lg:w-1/2 flex flex-col gap-4 py-10 relative'>
        <Image
          src={'/images/map.png'}
          alt='contact img'
          width={500}
          height={500}
          className='absolute top-0 right-0 z-10'
        />
        <div className='flex flex-col gap-4 z-20'>
          <h2 className='text-sm md:text-base lg:text-lg text-bg-color font-bold'>
            Get Free Quote
          </h2>
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold text-primary'>
            Design Your Vision with a Free Consultation
          </h3>
        </div>

        <form className='flex flex-col gap-4 z-20' onSubmit={handleSubmit}>
          <div className='flex gap-3'>
            <div className='w-full'>
              <input
                type='text'
                id='firstName'
                value={formData.firstName}
                onChange={handleInputChange}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-4'
                placeholder='First Name'
              />
              {errors.firstName && (
                <p className='text-red-500 text-sm mt-1'>{errors.firstName}</p>
              )}
            </div>
            <div className='w-full'>
              <input
                type='text'
                id='lastName'
                value={formData.lastName}
                onChange={handleInputChange}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-4'
                placeholder='Last Name'
              />
              {errors.lastName && (
                <p className='text-red-500 text-sm mt-1'>{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className='flex gap-3'>
            <div className='w-full'>
              <input
                type='email'
                id='email'
                value={formData.email}
                onChange={handleInputChange}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-4'
                placeholder='Email'
              />
              {errors.email && (
                <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
              )}
            </div>
            <div className='w-full'>
              <input
                type='text'
                id='phone'
                value={formData.phone}
                onChange={handleInputChange}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-4'
                placeholder='Phone'
              />
              {errors.phone && (
                <p className='text-red-500 text-sm mt-1'>{errors.phone}</p>
              )}
            </div>
          </div>

          <textarea
            id='message'
            rows='6'
            value={formData.message}
            onChange={handleInputChange}
            className='block p-4 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300'
            placeholder='Write your thoughts here...'
          ></textarea>
          {errors.message && (
            <p className='text-red-500 text-sm mt-1'>{errors.message}</p>
          )}

          <button
            type='submit'
            disabled={isSubmitting}
            className={`w-max p-3 px-4 md:px-6 lg:px-8 text-sm md:text-base lg:text-lg text-white font-bold rounded-lg ${isSubmitting ? 'bg-gray-400' : 'bg-primaryLight'}`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>

          {successMessage && (
            <p className='text-green-500 text-sm mt-4'>{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}
