import React, { useRef, useEffect, useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const WhatWeCareForSection = () => {
  const blogContainerRef = useRef(null);
  const farmingContainerRef = useRef(null); 
  const [blogCardWidth, setBlogCardWidth] = useState(0);
  const [farmingCardWidth, setFarmingCardWidth] = useState(0); 

 
  const getGap = () => {
    if (window.innerWidth >= 1024) return 32; 
    if (window.innerWidth >= 768) return 16; 
    return 16;
  };

  const blogGap = 32;
  const farmingGap = 16; 

  const blogPosts = [
    {
      id: 1,
      image: "/image-5.png",
      category: "Uncategorized",
      excerpt:
        "SOFA is the only trade body in the country which works directly with the farmers for increasing Soybean Productivity. Our farm",
      date: "November 2, 2021",
      comments: "No Comments",
    },
    {
      id: 2,
      image: "/image-4.png",
      category: "Uncategorized",
      excerpt:
        "SOFA is the only trade body in the country which works directly with the farmers for increasing Soybean Productivity. Our farm",
      date: "November 2, 2021",
      comments: "No Comments",
      featured: true,
    },
    {
      id: 3,
      image: "/image-6.png",
      category: "Uncategorized",
      excerpt:
        "SOFA is the only trade body in the country which works directly with the farmers for increasing Soybean Productivity. Our farm",
      date: "November 2, 2021",
      comments: "No Comments",
    },
    {
      id: 4,
      image: "/image-5.png",
      category: "Uncategorized",
      excerpt:
        "Another SOFA post about increasing Soybean Productivity and their farm initiatives.",
      date: "November 5, 2021",
      comments: "2 Comments",
    },
    {
      id: 5,
      image: "/image-4.png",
      category: "Uncategorized",
      excerpt:
        "Latest news from SOFA on market trends and farmer support programs.",
      date: "November 10, 2021",
      comments: "5 Comments",
    },
    {
      id: 6,
      image: "/image-6.png",
      category: "Uncategorized",
      excerpt:
        "A follow-up on SOFA's efforts in promoting sustainable farming practices.",
      date: "November 15, 2021",
      comments: "1 Comment",
    },
    {
      id: 7,
      image: "/image-5.png",
      category: "Uncategorized",
      excerpt:
        "Insights into the latest research and development in soybean processing.",
      date: "November 20, 2021",
      comments: "No Comments",
    },
  ];

  const farmingCards = [
    {
      id: 1,
      image: "/group-26.png",
      title: "Soy-Based Farming",
      position: "left",
    },
    {
      id: 2,
      image: "/10.png",
      title: "Soy-Based Farming",
      position: "center",
    },
    {
      id: 3,
      image: "/6-1.png",
      title: "Soy-Based Farming",
      position: "right",
    },
    {
      id: 4,
      image: "/image-4.png",
      title: "Modern Techniques",
      position: "center",
    },
    {
      id: 5,
      image: "/group-26.png",
      title: "Crop Rotation",
      position: "left",
    },
  ];

  
  useEffect(() => {
    const calculateCardWidths = () => {
      if (blogContainerRef.current) {
        
        const firstBlogCard = blogContainerRef.current.querySelector('.relative.border');
        if (firstBlogCard) {
          setBlogCardWidth(firstBlogCard.offsetWidth);
        }
      }
      if (farmingContainerRef.current) {
        
        const firstFarmingCard = farmingContainerRef.current.querySelector('.relative.flex-shrink-0.rounded-2xl');
        if (firstFarmingCard) {
          setFarmingCardWidth(firstFarmingCard.offsetWidth);
        }
      }
    };

    
    const timeoutId = setTimeout(calculateCardWidths, 100);
    window.addEventListener('resize', calculateCardWidths);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', calculateCardWidths);
    };
  }, []); 

  const scrollBlogAmount = blogCardWidth + blogGap;
  const scrollFarmingAmount = farmingCardWidth + farmingGap;

  const scrollBlogLeft = () => {
    if (blogContainerRef.current) {
      blogContainerRef.current.scrollBy({
        left: -scrollBlogAmount,
        behavior: 'smooth',
      });
    }
  };

  const scrollBlogRight = () => {
    if (blogContainerRef.current) {
      blogContainerRef.current.scrollBy({
        left: scrollBlogAmount,
        behavior: 'smooth',
      });
    }
  };

  const scrollFarmingLeft = () => {
    if (farmingContainerRef.current) {
      farmingContainerRef.current.scrollBy({
        left: -scrollFarmingAmount,
        behavior: 'smooth',
      });
    }
  };

  const scrollFarmingRight = () => {
    if (farmingContainerRef.current) {
      farmingContainerRef.current.scrollBy({
        left: scrollFarmingAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative w-full py-8 md:py-16 px-4 md:px-8 lg:px-12 mx-auto">
       <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between items-start">
       <div className="flex flex-col space-y-2 md:space-y-4 max-w-full lg:max-w-lg mb-8 lg:mb-16 lg:w-2/5 text-center lg:text-left">
          <h3 className="font-normal text-2xl md:text-3xl text-black font-['Inter',Helvetica]">
            Experience
          </h3>
          <img
            className="w-[100px] h-[2px] md:w-[166px] md:h-[3px] mb-6 md:mb-10 mx-auto lg:mx-0"
            alt="Decorative line"
            src="/Arrow 5.png"
          />

          <h2 className="font-bold text-3xl md:text-[40px] leading-tight font-['Inter',Helvetica]">
            <span className="text-black">The Soybean Processors </span>
            <span className="text-[#f8c400]">Association </span>
            <span className="text-black">of India</span>
          </h2>
          <div className="max-w-full md:max-w-[596px] text-[#4e4e4e] text-base md:text-xl leading-[28px] md:leading-[38px] font-normal font-inter">
            The Soybean Processors Association of India, popularly known as SOFA, is the only national food body representing the soybean processors, farmers, suppliers and boilers in India working towards the aim to strengthen soybeans as a viable crop. The main objective of SOFA is to encourage the development and promotion of Soy-Brand products in the interest of the farmers as well as the processors.
          </div>
        </div>

       
        <div
          className="relative w-full lg:w-3/5 h-[600px] sm:h-[450px] flex justify-center items-center rounded-md p-2 sm:p-4 overflow-hidden"
        >
         
          <button
            onClick={scrollFarmingLeft}
            className="absolute left-0 z-10 p-2 bg-[#f8c400] rounded-full shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Scroll farming cards left"
          >
            <ChevronLeft className="text-black w-6 h-6" />
          </button>

          <div
            ref={farmingContainerRef}
            className="flex gap-4 overflow-x-hidden pb-4 no-scrollbar w-full h-full"
          >
            {farmingCards.map((card) => (
              <div
                key={card.id}
                className="relative flex-shrink-0 rounded-2xl h-[180px] sm:h-[400px] overflow-hidden shadow-lg border border-gray-300 bg-white
                           w-[calc(100%-32px)] // Mobile: show 1 card, account for 16px gap on both sides, and space for arrows
                           sm:w-[calc(50%-8px)] // Tablet: show 2 cards, accounting for gap-4 (16px) -> 8px per card
                           lg:w-[calc(33.33%-10.67px)] // Desktop: show 3 cards, accounting for gap-4 (16px) -> ~10.67px per card
                          "
              >
                
                <img
                  className="w-full h-full object-cover absolute top-0 left-0"
                  alt="Soy farming"
                  src={card.image}
                />

                
                {card.position === "left" && (
                  <div
                    className="absolute bottom-0 left-0 w-full h-[80px] sm:w-[250px] sm:h-[150px] bg-[#f8c400] flex items-center justify-center px-4 text-black text-base sm:text-xl font-bold"
                    style={{
                      borderTopRightRadius: '250px 250px',
                      borderBottomLeftRadius: '20px',
                      borderBottomRightRadius: '20px',
                      borderTopLeftRadius: '0',
                    }}
                  >
                    {card.title}
                  </div>
                )}

                {card.position === "center" && (
                  <div
                    className="absolute bottom-0 left-0 w-full h-[80px] sm:h-[150px] bg-[#f8c400] flex items-center justify-center px-4 text-black text-base sm:text-xl font-bold"
                    style={{
                      borderTopLeftRadius: '150px 150px',
                      borderTopRightRadius: '150px 150px',
                      borderBottomLeftRadius: '20px',
                      borderBottomRightRadius: '20px',
                    }}
                  >
                    {card.title}
                  </div>
                )}

                {card.position === "right" && (
                  <div
                    className="absolute bottom-0 right-0 w-full h-[80px] sm:w-[250px] sm:h-[150px] bg-[#f8c400] flex items-center justify-center px-4 text-black text-base sm:text-xl font-bold"
                    style={{
                      borderTopLeftRadius: '250px 250px',
                      borderBottomRightRadius: '20px',
                      borderBottomLeftRadius: '20px',
                      borderTopRightRadius: '0',
                    }}
                  >
                    {card.title}
                  </div>
                )}
              </div>
            ))}
          </div>

          
          <button
            onClick={scrollFarmingRight}
            className="absolute right-0 z-10 p-2 bg-[#f8c400] rounded-full shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Scroll farming cards right"
          >
            <ChevronRight className="text-black w-6 h-6" />
          </button>
        </div>
      </div>
     <div className="flex flex-col items-center mb-8 md:mb-16 mt-16 md:mt-24">
        <h2 className="font-inter font-bold text-3xl md:text-[50px] text-center mb-4 md:mb-8">
          OUR LATEST BLOGS
        </h2>
        <img
          className="w-[80px] h-[5px] md:w-[108px] md:h-[7px] mb-8 md:mb-12"
          alt="Decorative underline"
          src="/Arrow 5.png"
        />
      </div>

      <div className="relative flex items-center max-w-screen-xl mx-auto">
        <button
          onClick={scrollBlogLeft}
          className="absolute left-0 z-10 p-2 bg-[#f8c400] rounded-full shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Scroll blog left"
        >
          <ChevronLeft className="text-black w-6 h-6" />
        </button>

        <div
          ref={blogContainerRef}
          className="flex gap-4 md:gap-8 px-2 overflow-x-hidden pb-4 no-scrollbar w-full"
        >
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className={`relative border border-[#cccccc] rounded-[10px] bg-neutral-50 flex-shrink-0 overflow-hidden
                w-[calc(100%-32px)] // Mobile: show 1 card, accounting for 32px gap on both sides (from parent padding or arrows)
                sm:w-[calc(50%-16px)] // Tablet: show 2 cards, accounting for md:gap-8 (32px) -> 16px per card
                lg:w-[calc(33.33%-21.33px)] // Desktop: show 3 cards, accounting for md:gap-8 (32px) -> ~21.33px per card
              `}
            >
              <div className="relative">
                <img
                  className="w-full h-[200px] md:h-[307px] object-cover"
                  alt="Blog post"
                  src={post.image}
                />
                <Badge className="absolute top-3 right-3 sm:top-[21px] sm:right-[20px] bg-[#f8c400b0] text-black rounded-full px-4 py-1 sm:px-6 sm:py-1.5 font-normal text-[11px] sm:text-[13px] font-inter">
                  {post.category}
                </Badge>
              </div>

              <CardContent className="p-4 md:p-5">
                <p className="font-inter font-normal text-base md:text-xl leading-6 md:leading-7 mb-4 md:mb-8">
                  {post.excerpt}
                </p>

                <Separator className="mb-2 md:mb-4 bg-gray-200" />

                <p className="opacity-30 font-inter font-normal text-sm md:text-xl leading-6 md:leading-7 whitespace-nowrap">
                  {post.date} {post.comments}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <button
          onClick={scrollBlogRight}
          className="absolute right-0 z-10 p-2 bg-[#f8c400] rounded-full shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Scroll blog right"
        >
          <ChevronRight className="text-black w-6 h-6" />
        </button>
      </div>
    </section>
  );
};