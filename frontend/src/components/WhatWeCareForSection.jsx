import React from "react";

const WhatWeCareForSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              WHAT WE CARE FOR
            </h2>
            <div className="w-40 h-1 bg-[#f8c400] mx-auto"></div>
          </div>
          
          <p className="text-lg md:text-xl text-[#1c1a15] leading-relaxed max-w-3xl mx-auto">
            The Soybean Processors Association of India is the national body for soybean 
            stakeholders, focusing on strengthening soybeans as a viable crop and encouraging 
            the development and promotion of soy-based products for the benefit of farmers 
            and processors.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#f8c400] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Farmers Support</h3>
              <p className="text-gray-600">Supporting soybean farmers with knowledge and resources</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#f8c400] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Quality Products</h3>
              <p className="text-gray-600">Promoting high-quality soy-based products</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#f8c400] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Industry Growth</h3>
              <p className="text-gray-600">Driving sustainable growth in the soybean industry</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeCareForSection; 