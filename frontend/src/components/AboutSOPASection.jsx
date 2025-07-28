import React from "react";

const AboutSOPASection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative w-full h-[500px]">
              {/* Yellow border squares */}
              <div className="absolute w-64 h-64 top-0 left-0 bg-[#f8c400] rounded-xl z-0"></div>
              <div className="absolute w-64 h-64 bottom-0 right-0 bg-[#f8c400] rounded-xl z-0"></div>
              
              {/* SOPA Building Image */}
              <div className="absolute inset-4 z-10">
                <img
                  src="/image-2.png"
                  alt="SOPA Building"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-normal text-black mb-2">About SOPA</h3>
              <div className="w-40 h-1 bg-[#f8c400] mb-6"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              The Story of SOPA
            </h2>
            
            <p className="text-lg md:text-xl text-[#1c1a15] leading-relaxed opacity-90">
              The Soybean Processors Association of India, popularly known as SOPA, 
              is the only national level body representing the soybean processors, 
              farmers, exporters and brokers in India working towards the aim to 
              strengthen soybeans as a viable crop. The main objective of SOPA is to 
              encourage the development and promotion of Soy-Based products in the 
              interest of the farmers as well as the processors.
            </p>
            
            <div className="pt-4">
              <button className="bg-[#f8c400] text-black px-8 py-3 rounded-md font-semibold hover:bg-[#e6b800] transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSOPASection; 