import React from 'react';

const LandingPage = () => {
  return (
    <div>
      <section id="home" className="min-h-screen bg-gray-100 flex items-center justify-center ">
        <div className="text-center text-gray-900 mx-auto ">
          <h1 className="text-5xl font-bold animate-fadeIn hover:text-blue-500">Welcome to Our Website</h1>
          <p className="mt-4 text-lg animate-fadeIn">Providing the best services for you</p>
        </div>
      </section>
      <section id="about" className="py-20 bg-gray-50 ">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8  ">
          <h2 className="text-3xl font-bold text-gray-900 hover:text-blue-500 ">About Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            We are a company dedicated to providing the best services to our clients.
          </p>
        </div>
      </section>
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 hover:text-blue-500 ">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            We offer a wide range of services to meet your needs.
          </p>
        </div>
      </section>
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 hover:text-blue-500 ">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            Get in touch with us for more information about our services.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
