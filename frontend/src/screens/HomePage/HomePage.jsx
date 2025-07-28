import React from "react";
import { useState, useEffect } from "react";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "../../components/ui/badge"; 
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator"; 

// Import your section components
import { NewsAndUpdatesSection } from "./sections/NewsAndUpdateSection"; 
import { HeroSection } from "./sections/HeroSection";
import { LatestBlogsSection } from "./sections/LatestBlogSection"; 
import { MainContentSection } from "./sections/MainContentSection"; 
import { WhatWeCareForSection } from "./sections/WhatWeCareForSection"; 

export const HomePage = () => {
  const marketUpdate =
    "18/10/2024 | Soy Solvent Oil (Indore Market) Rs. 1170 - 1175 per 10 Kg. | 18/10/2024 - Soy Refined Oil (Indore Market) Rs. 1235 per";
  const [mainContent, setMainContent] = useState({
    mainImage: "/main.png",
    mainDescription: "Rich Source Of Protein."
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://webapps-6edm.onrender.com/api/homepage");
        const data = await response.json();
        if (data) {
          setMainContent({
            mainImage: data.mainImage || "/image-2.png",
            mainDescription: data.mainDescription || mainContent.mainDescription
          });
        }
      } catch (error) {
        console.error("Error fetching homepage content:", error);
      }
    };

    fetchData();
  }, []);
  const soybeanFeatures = [
    { title: "Soybean Seeds", description: "In Publishing And Graphic Design, Lorem Ipsum Is A Placeholder Text Commonly", imageSrc: "/group-19.png" },
    { title: "Dry Soybeans", description: "In Publishing And Graphic Design, Lorem Ipsum Is A Placeholder Text Commonly", imageSrc: "/group-19-1.png" },
    { title: "Deals In Soybeans", description: "In Publishing And Graphic Design, Lorem Ipsum Is A Placeholder Text Commonly", imageSrc: "/group-19-2.png" },
    { title: "Dry Soybeans", description: "In Publishing And Graphic Design, Lorem Ipsum Is A Placeholder Text Commonly", imageSrc: "/group-19-4.png" },
    { title: "Dry Soybeans", description: "In Publishing And Graphic Design, Lorem Ipsum Is A Placeholder Text Commonly", imageSrc: "/group-19-5.png" },
    { title: "Diets And Recipes.", description: "In Publishing And Graphic Design, Lorem Ipsum Is A Placeholder Text Commonly", imageSrc: "/group-19-3.png" }
  ];

  return (
    <div className="bg-white flex justify-center w-full overflow-x-hidden">
      <div className="bg-white w-full max-w-[1728px] min-w-0 pb-20">
        <NewsAndUpdatesSection />

        
        <div
          className="relative w-full h-[600px] md:h-[800px] lg:h-[991px] bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${mainContent.mainImage})` }} 
        >
         <div className="absolute bottom-10 left-4 sm:left-10 md:bottom-[100px] md:left-[105px] flex items-center gap-2 md:gap-4">
            <div className="w-[40px] h-[40px] md:w-[58px] md:h-[58px] flex items-center justify-center bg-[#ffbf0f] rounded-[15px] md:rounded-[22px] border-2 border-white">
              <Download className="text-white w-4 h-4 md:w-6 md:h-6" />
            </div>
            
            <h2 className="font-bold text-white text-lg sm:text-2xl md:text-3xl lg:text-[50px]">{mainContent.mainDescription}</h2>
          </div>

          
          <div className="absolute bottom-20 right-4 sm:right-16 md:bottom-[150px] md:right-[105px] flex items-center gap-2 sm:gap-4 md:gap-8 text-white text-xs sm:text-sm md:text-base lg:text-xl font-semibold">
            <div className="flex items-center gap-1 md:gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
              <span>Prev Slide</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <span>Next Slide</span>
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
            </div>
          </div>
         <div className="absolute w-full h-[50px] md:h-[75px] bottom-0 bg-[#1f1a17] flex items-center px-4 md:px-10 gap-4 md:gap-6">
            <div className="bg-[#f8c400] h-full px-3 md:px-6 flex items-center justify-center flex-shrink-0">
              <span className="font-bold text-black text-sm md:text-base">Latest Update</span>
            </div>
            <div className="flex-grow overflow-x-auto">
              <p className="font-bold text-[#f8c400] text-sm md:text-base whitespace-nowrap">{marketUpdate}</p>
            </div>
          </div>
           <Badge className="absolute w-[120px] h-8 top-[-16px] left-1/2 -translate-x-1/2 md:w-[166px] md:h-10 md:top-[-24px] md:left-[287px] bg-[#f8c400b0] rounded-[31px] flex items-center justify-center">
            <span className="font-normal text-black text-[11px] leading-7 md:text-[13px]">Uncategorized</span>
          </Badge>
        </div>
       <section className="relative w-full mt-8 md:mt-16 px-4 md:px-[89px] flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="relative w-full md:w-[597px] h-[300px] md:h-[514px] flex-shrink-0">
            <div className="absolute w-[150px] h-[150px] top-0 left-0 bg-[#f8c400] rounded-[10px] md:w-[261px] md:h-[261px] md:rounded-[14px]" />
            <div className="absolute w-[150px] h-[150px] top-[150px] left-[150px] md:top-[300px] md:left-[336px] bg-[#f8c400] rounded-[10px] md:w-[261px] md:h-[261px] md:rounded-[14px]" />
            <img className="absolute w-[280px] h-[250px] top-[20px] left-[15px] object-cover max-w-full rounded-md md:w-[537px] md:h-[490px] md:top-[43px] md:left-[29px] md:rounded-xl" alt="SOPA Image" src="/image-2.png" />
          </div>
          <div className="flex flex-col md:w-[833px] min-w-0 flex-grow text-center md:text-left">
            <p className="font-normal text-black text-xl md:text-3xl">About SOPA</p>
            <Separator className="w-[100px] md:w-[166px] h-[2px] md:h-[3px] my-2 md:my-4 bg-black mx-auto md:mx-0" />
            <h2 className="font-bold text-black text-3xl sm:text-4xl md:text-[50px] mb-4 md:mb-6">The Story of SOPA</h2>
            <p className="opacity-[0.88] font-normal text-[#1c1a15] text-base md:text-2xl leading-[24px] md:leading-[38px]">
              The Soybean Processors Association of India, popularly known as SOPA, is the only national level body representing the soybean processors, farmers, exporters and brokers in India working towards the aim to strengthen soybeans as a viable crop. The main objective of SOPA is to encourage the development and promotion of Soy-Based products in the interest of the farmers as well as the processors.
            </p>
          </div>
        </section>
        <section className="text-center my-8 md:my-16 px-4">
          <a className="font-bold text-black text-3xl md:text-[50px] underline" href="https://vinova-canabuzz.myshopify.com/" target="_blank" rel="noopener noreferrer">WHAT WE CARE FOR</a>
          <div className="flex justify-center mt-2 md:mt-4">
            <img className="w-[70px] h-[5px] md:w-[108px] md:h-[7px]" alt="Arrow" src="/Arrow 5.png" />
          </div>
          <div className="max-w-[1404px] mx-auto mt-4 md:mt-8 min-w-0">
            <p className="font-normal text-black text-base md:text-2xl text-center leading-[28px] md:leading-[48px]">The Soybean Processors Association of India, popularly known as SOPA, is the only national level body representing the soybean processors, farmers, exporters and brokers in India working towards the aim to strengthen soybeans as a viable crop. The main objective of SOPA is to encourage the development and promotion of Soy-Based products in the interest of the farmers as well as the processors.ccessible</p>
          </div>
        </section>

      
        <section className="relative px-4 md:px-20 my-8 md:my-16 flex justify-center items-center h-[900px] sm:h-[1000px] md:h-[800px] overflow-hidden">
          <div className="relative w-full max-w-[1419px] h-full flex justify-center items-center">
            
            <img
              className="absolute w-[300px] h-[350px] md:w-[600px] md:h-[703px] object-cover z-0 max-w-full rounded-xl"
              alt="Soybean Image"
              src="/image-1.png"
            />

           
            {soybeanFeatures.map((feature, index) => (
              <Card
                key={index}
                className={`bg-transparent border-none shadow-none absolute
                  ${index === 0 && 'top-[5%] left-[5%] md:top-[5%] md:left-[15%] lg:top-[5%] lg:left-[20%]'} {/* Top-Left */}
                  ${index === 1 && 'top-[5%] right-[5%] md:top-[5%] md:right-[15%] lg:top-[5%] lg:right-[20%]'} {/* Top-Right */}
                  ${index === 2 && 'top-[35%] left-[0%] md:top-[35%] md:left-[5%] lg:top-[35%] lg:left-[8%]'} {/* Mid-Left */}
                  ${index === 3 && 'top-[35%] right-[0%] md:top-[35%] md:right-[5%] lg:top-[35%] lg:right-[8%]'} {/* Mid-Right */}
                  ${index === 4 && 'bottom-[5%] left-[5%] md:bottom-[5%] md:left-[15%] lg:bottom-[5%] lg:left-[10%]'} {/* Bottom-Left */}
                  ${index === 5 && 'bottom-[5%] right-[5%] md:bottom-[5%] md:right-[15%] lg:bottom-[5%] lg:right-[10%]'} {/* Bottom-Right */}
                  w-[45%] sm:w-[40%] md:w-[30%] lg:w-[25%] xl:w-[20%]
                `}
              >
                <CardContent className="p-0 flex items-start gap-2 md:gap-4 min-w-0">
                  {/* Wrapped image in a div for the yellow circular background */}
                  <div className="w-[60px] h-[60px] md:w-[101px] md:h-[101px] bg-[#FFD475] rounded-full flex items-center justify-center flex-shrink-0">
                    <img className="w-[30px] h-[30px] md:w-[60px] md:h-[60px] object-contain" alt={`${feature.title} icon`} src={feature.imageSrc} />
                  </div>
                  <div className="flex flex-col gap-1 md:gap-2 min-w-0">
                    <h3 className="font-bold text-black text-lg md:text-3xl">
                      {feature.title}
                    </h3>
                    <p className="font-normal text-black text-sm md:text-l">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <WhatWeCareForSection />
        
        <HeroSection /> 
        <LatestBlogsSection />
        <div className="relative mt-16 md:mt-32 overflow-x-hidden">
          <MainContentSection />
        </div>
      </div>
    </div>
  );
};
