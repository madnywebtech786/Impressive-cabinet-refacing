'use client';

import { useState, useEffect } from 'react';

const WithLoader = (WrappedComponent) => {
  return function LoaderWrapper(props) {
    const [isLoaded, setIsLoaded] = useState(false);

    // Track when the page content is completely rendered
    useEffect(() => {
      const handleLoadingComplete = () => {
        setIsLoaded(true);
      };

      if (document.readyState === 'complete') {
        handleLoadingComplete(); // If the page is already loaded
      } else {
        window.addEventListener('load', handleLoadingComplete);
      }

      return () => {
        window.removeEventListener('load', handleLoadingComplete);
      };
    }, []);

    if (!isLoaded) {
      return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="relative flex flex-col items-center">
            {/* Spinning circle around the logo */}
            <div className="absolute w-40 h-40 border-4 border-gray-300 border-t-primaryLight rounded-full animate-spin"></div>
            <img
              src="/images/logo.svg"
              alt="Loading Logo"
              className="w-36 h-36 z-10"
            />
          </div>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default WithLoader;
