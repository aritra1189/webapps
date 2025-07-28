import React from "react";

export const MainContentSection = () => {
  const footerCategories = [
    {
      title: "About SOPA",
      links: [
        "About us",
        "Executive Committee",
        "Organisation Structure",
        "SOPA Circular",
      ],
    },
    {
      title: "Knowledge center",
      links: [
        "Major Soybean Varieties in India",
        "Laboratory",
        "SOPA Publication",
        "Library",
      ],
    },
    {
      title: "Member Directory",
      links: [
        "Full Members",
        "Members Login",
        "Associate Members",
        "Soy Product Manufactures",
      ],
    },
    {
      title: "Soybean Cuisine",
      links: [
        "Soy Non-veg Cuisine",
        "Soy Veg Cuisine",
        "Kids Soy Cuisine",
        "Soy Cuisine Links",
      ],
    },
  ];

  const marketUpdates = [
    "Daily Rates",
    "Soyabean",
    "Soyaben oil",
    "Soyaben Meal",
  ];

  const policyLinks = [
    "Disclaimer",
    "Privacy Policy",
    "Terms & Conditions",
    "Refund Policy",
    "Sitemap",
  ];

  return (
    <footer className="relative w-full bg-[#3D3400] pt-10 overflow-hidden">
      
      <div 
        className="absolute top-0 left-0 w-full h-[50px] bg-repeat-x"
        style={{ 
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0,0 Q25,10 50,0 T100,0 V10 H0 Z" fill="%23F8C400"/></svg>')`,
          backgroundSize: '100px 50px', 
          transform: 'translateY(-100%)' 
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-8 py-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {footerCategories.map((category, index) => (
            <div key={`category-${index}`} className="flex flex-col gap-4">
              <h3 className="font-bold text-white text-lg font-['Inter',Helvetica] whitespace-nowrap">
                {category.title}
              </h3>
              <div className="flex flex-col gap-2 mt-2">
                {category.links.map((link, linkIndex) => (
                  <a
                    key={`link-${index}-${linkIndex}`}
                    href="#"
                    className="font-normal text-[#d2d2d2] text-base hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
     <div className="w-full h-px bg-gray-400 my-10"></div>
     <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4 mb-20">
          {/* Market Updates */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 flex-1 md:justify-start min-w-0"> 
            <h3 className="font-bold text-white text-lg whitespace-nowrap">
              Market Updates
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 min-w-0">
              {marketUpdates.map((item, index) => (
                <a
                  key={`market-${index}`}
                  href="#"
                  className="font-normal text-white text-base hover:text-gray-300 transition-colors whitespace-nowrap"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
<div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8 flex-1 md:text-right min-w-0"> 
            {policyLinks.map((link, index) => (
              <a
                key={`policy-${index}`}
                href="#"
                className={`font-normal text-white text-base hover:text-gray-300 transition-colors whitespace-nowrap ${
                  index === 0 ? "font-bold" : ""
                }`}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      
      <div className="absolute bottom-[60px] left-1/2 -translate-x-1/2 w-full max-w-[250px] h-[120px] flex justify-center items-end z-10">
        
        <div 
          className="w-full h-[100px] bg-[#f8c400] absolute bottom-0 border-black border-4" 
          style={{
           borderTopLeftRadius: '100px 100px', 
            borderTopRightRadius: '100px 100px',
            borderBottomLeftRadius: '0',
            borderBottomRightRadius: '0',
            borderBottom: 'none' 
          }}
        ></div>
        
        
        <div 
          className="absolute bottom-[20px] w-[29px] h-[17px] flex justify-center items-center"
          style={{
            width: 0,
            height: 0,
            borderLeft: '14.5px solid transparent', 
            borderRight: '14.5px solid transparent', 
            borderBottom: '17px solid black', 
            transform: 'translateY(-50%)' 
          }}
        ></div>
      </div>

      
      <div className="w-full bg-[#f8c400] py-4 flex items-center justify-center relative z-20"> 
        <p className="font-normal text-black text-base">
          Copyright @2016-2024 All right Reserved.
        </p>
      </div>
    </footer>
  );
};