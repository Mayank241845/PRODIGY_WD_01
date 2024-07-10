import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`  fixed top-0 w-full z-50 transition-all   text-center duration-300 ${scrolled ? 'bg-gray-800 shadow-lg' : 'bg-blue-500'}`}>
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center  h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              
            </div>
            <div className="mx-auto md:block hidden ">
              <div className=" flex   space-x-4">
                <a href="#" className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm  font-medium">Home</a>
                <a href="#about" className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#services" className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="#contact" className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
