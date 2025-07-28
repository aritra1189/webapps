import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = () => {
  // Blog data for mapping
  const blogCategories = [
    {
      id: 1,
      image: "/image-8.png",
      title: "Soybean Development Programme",
      description:
        "SOPA is the only trade body in the country which works directly with the farmers for increasing Soybean Productivity. Our farm",
      
      hasReadMore: true,
    },
    {
      id: 2,
      image: "/image-9.png",
      label: "MEMBERS LOGIN",
    },
    {
      id: 3,
      image: "/image-11.png",
      label: "MEMBERS LOGIN",
    },
    {
      id: 4,
      image: "/image-10.png",
      label: "MEMBERSHIP",
    },
  ];

  return (
    <section className="w-full py-16 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="font-bold text-black text-[50px] tracking-[0] leading-[normal]">
            OUR LATEST BLOGS
          </h2>
          <img
            className="w-[108px] h-[7px] mt-4"
            alt="Arrow"
            src="/Arrow 5.png"
          />
        </div>

        {/* Blog Cards Container */}
        <div className="flex w-full gap-1">
          {/* Main Featured Blog */}
          <Card className="w-full max-w-[733px] h-[771px] rounded-[10px] border-0 overflow-hidden relative">
            <CardContent className="p-0 h-full">
              <img
                className="w-full h-full object-cover"
                alt="Soybean Development"
                src={blogCategories[0].image}
              />
              <div className="absolute inset-0 rounded-[10px] bg-[linear-gradient(180deg,rgba(251,251,251,0)_0%,rgba(248,196,0,0.69)_100%)]" />

              <div className="absolute bottom-0 left-0 p-10 w-full">
                <div className="relative">
                  <h3 className="font-bold text-[#0e0c0c] text-[27px] leading-7 mb-4">
                    {blogCategories[0].title}
                  </h3>
                  <p className="text-[#0e0c0c] text-xl font-normal leading-7 mb-6 max-w-[537px]">
                    {blogCategories[0].description}
                  </p>
                  <div className="font-bold text-[#0e0c0c] text-xl leading-7">
                    Read More...
                  </div>
                </div>
              </div>

              <div className="absolute top-[154px] right-[187px] -rotate-90">
                <span className="font-semibold text-[50px] leading-7 text-transparent [-webkit-text-stroke:1px_#000000]">
                  {blogCategories[0].label}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Secondary Blog Cards */}
          {blogCategories.slice(1).map((blog, index) => (
            <Card
              key={blog.id}
              className="w-[257px] h-[771px] rounded-[10px] border border-solid border-[#cccccc] overflow-hidden relative"
            >
              <CardContent className="p-0 h-full">
                <img
                  className="w-full h-full object-cover"
                  alt={`Blog category ${index + 2}`}
                  src={blog.image}
                />
                <div className="absolute inset-0 rounded-[10px] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,212,117,1)_100%)]" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -rotate-90">
                  <span className="font-semibold text-[50px] leading-7 text-transparent [-webkit-text-stroke:1px_#000000] whitespace-nowrap">
                    {blog.label}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
