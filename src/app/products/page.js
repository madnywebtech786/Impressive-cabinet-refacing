'use client';
import React, { useState, useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import ProductCard from '../components/ProductCard';
import Accordion from '../components/Accordion';
import { productData } from '../constants/productsData'; // Assume it has the list of products
import Loader from '../components/Loader';


export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(productData); // For search and category filtering
  const [searchValue, setSearchValue] = useState('');
  const productsPerPage = 8;

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  useEffect(() => {
    setLoading(true);

    // Simulate a 1.5-second loading delay
    const timer = setTimeout(() => {
      const startIndex = (currentPage - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      setVisibleProducts(filteredProducts.slice(startIndex, endIndex));
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [currentPage, filteredProducts]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value === '') {
      // If search is cleared, show all products
      setFilteredProducts(productData);
    }
  };

  const handleSearchClick = () => {
    if (searchValue.trim() !== '') {
      const searchedProducts = productData.filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredProducts(searchedProducts);
      setCurrentPage(1); // Reset to the first page after filtering
    }
  };

  const handleCategoryClick = (category) => {
    if (category === 'All Products') {
      setFilteredProducts(productData);
    } else {
      const filtered = productData.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
    setCurrentPage(1);
  };

  return (
    <div>
      <Breadcrumb name='3D Laminates' />

      <div className='flex p-4 py-8 md:p-8 lg:p-12 2xl:p-10 flex-col lg:flex-row'>
        {/* Sidebar for larger screens */}
        <div className='w-full lg:w-1/4 rounded-lg bg-primaryLight max-h-screen h-max p-4 py-8 mt-5 hidden lg:block'>
          <div className='flex justify-between'>
            <input
              type='text'
              id='search'
              className='bg-white border border-gray-200 text-gray-900 text-base rounded-lg rounded-tr-none rounded-br-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3'
              placeholder='Search...'
              value={searchValue}
              onChange={handleSearchChange}
              required
            />
            <button
              className='p-2 bg-primary text-sm text-white font-semibold px-4 rounded-lg rounded-tl-none rounded-bl-none'
              onClick={handleSearchClick}
            >
              Search
            </button>
          </div>

          <h2 className='text-white text-2xl font-bold my-4'>Categories</h2>
          <div className='flex flex-col gap-4'>
          <p
              className='text-white text-base cursor-pointer underline-animation-white w-max'
              onClick={() => handleCategoryClick('All Products')}
            >
              All Products
            </p>
            <p
              className='text-white text-base cursor-pointer underline-animation-white w-max'
              onClick={() => handleCategoryClick('Shaker')}
            >
              Shaker
            </p>
            <p
              className='text-white text-base cursor-pointer underline-animation-white w-max'
              onClick={() => handleCategoryClick('Slab')}
            >
              Slab
            </p>
            <p
              className='text-white text-base cursor-pointer underline-animation-white w-max'
              onClick={() => handleCategoryClick('Raised Panel')}
            >
              Raised Panel
            </p>
          </div>
        </div>

        {/* Sidebar for mobile screens */}
        <div className='w-full block lg:hidden'>
          <Accordion
            title={'Categories'}
            className='bg-primaryLight rounded-lg p-4'
          >
            <div className='w-full rounded-lg max-h-screen h-max py-2'>
              <div className='flex justify-between'>
                <input
                  type='text'
                  id='search'
                  className='bg-white border border-gray-200 text-gray-900 text-base rounded-lg rounded-tr-none rounded-br-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3'
                  placeholder='Search...'
                  value={searchValue}
                  onChange={handleSearchChange}
                  required
                />
                <button
                  className='p-2 bg-primary text-sm text-white font-semibold px-4 rounded-lg rounded-tl-none rounded-bl-none'
                  onClick={handleSearchClick}
                >
                  Search
                </button>
              </div>

              <h2 className='text-primary bg-white rounded-lg p-2 w-max text-base font-bold my-4'>
                Available Categories
              </h2>

              <div className='flex flex-col gap-4'>
              <p
                  className='text-white text-sm cursor-pointer'
                  onClick={() => handleCategoryClick('All Products')}
                >
                  All Products
                </p>
                <p
                  className='text-white text-sm cursor-pointer'
                  onClick={() => handleCategoryClick('Shaker')}
                >
                  Shaker
                </p>
                <p
                  className='text-white text-sm cursor-pointer'
                  onClick={() => handleCategoryClick('Slab')}
                >
                  Slab
                </p>
                <p
                  className='text-white text-sm cursor-pointer'
                  onClick={() => handleCategoryClick('Raised Panel')}
                >
                  Raised Panel
                </p>
              </div>
            </div>
          </Accordion>
        </div>

        {/* Main Content */}
        <div className='w-full lg:w-3/4 flex flex-col'>
          {loading ? (
            <Loader />
          ) : (
            <div className='w-full flex flex-wrap'>
              {visibleProducts.map((product, index) => (
                <div key={index} className='w-full md:w-1/2 lg:w-1/4 p-4'>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {!loading && (
            <div className='flex justify-center items-center mt-8 space-x-4'>
              <button
                className={`px-4 py-2 rounded-lg ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-primary text-white'
                }`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>

              <span className='text-gray-700 font-medium'>
                Page {currentPage} of {totalPages}
              </span>

              <button
                className={`px-4 py-2 rounded-lg ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-primary text-white'
                }`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
