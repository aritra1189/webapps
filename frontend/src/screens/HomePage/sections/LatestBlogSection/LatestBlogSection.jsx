import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const LatestBlogsSection = () => {
  
  const newsCards = [
    {
      day: "20",
      month: "October 2024",
      title: "District-wise rainfall figures for the week ending on 26.06.2024",
      opacity: "opacity-100",
    },
    {
      day: "20",
      month: "October 2024",
      title: "District-wise rainfall figures for the week ending on 26.06.2024",
      opacity: "opacity-50",
    },
    {
      day: "20",
      month: "October 2024",
      title: "District-wise rainfall figures for the week ending on 26.06.2024",
      opacity: "opacity-40",
    },
    {
      day: "20",
      month: "October 2024",
      title: "District-wise rainfall figures for the week ending on 26.06.2024",
      opacity: "opacity-50",
    },
  ];

  return (
    <section className="w-full max-w-[1583px] mx-auto py-16 relative">
      
      <div className="flex flex-col items-center mb-12">
        <h2 className="font-bold [font-family:'Inter',Helvetica] text-[50px] text-black text-center">
          NEWS &amp; UPDATE
        </h2>
        <img
          className="w-[108px] h-[7px] mt-4"
          alt="Arrow"
          src="/Arrow 5.png"
        />
      </div>

      
      <div className="flex flex-col md:flex-row gap-6">
      
        <Card className="w-full md:w-[864px] h-[550px] bg-[url('/soya.png')] bg-cover bg-center rounded-none border-none relative">

          <CardContent className="p-0">
            <div className="absolute w-[432px] h-[210px] top-[170px] left-0 bg-[#ffffffa6] rounded-[0px_43px_42px_0px]">
              <div className="p-2">
                <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#0e0c0c] text-xl tracking-[0] leading-7 whitespace-nowrap mb-4">
                  Soybean Development Programme
                </h3>
                <p className="[font-family:'Inter',Helvetica] font-normal text-[#0e0c0c] text-base tracking-[0] leading-7 w-[409px]">
                  SOPA is the only trade body in the country which works
                  directly with the farmers for increasing Soybean Productivity.
                  Our farm
                </p>
                <p className="[font-family:'Inter',Helvetica] font-bold text-black text-[10px] tracking-[0] leading-7 whitespace-nowrap mt-6 opacity-90">
                  November 2, 2021
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="flex flex-col space-y-4 w-full md:w-[650px]">
          {newsCards.map((card, index) => (
            <Card
              key={`news-card-${index}`}
              className={`w-full h-[148px] bg-[#fff9e596] rounded-[7px] border border-solid border-[#ffbf0f] ${card.opacity}`}
            >
              <CardContent className="p-0 flex">
                <div className="w-[142px] h-[148px] bg-[#ffbf0f] rounded-[7px_0px_0px_7px] relative flex flex-col items-center justify-center">
                  <div className="[font-family:'Inter',Helvetica] font-bold text-black text-[40px] text-center w-[70px]">
                    {card.day}
                  </div>
                  <img
                    className="w-full h-px absolute top-[103px]"
                    alt="Line"
                    src="/line-9.svg"
                  />
                  <div className="absolute top-[108px] left-4 [font-family:'Inter',Helvetica] font-bold text-black text-base">
                    {card.month}
                  </div>
                </div>
                <div className="p-10">
                  <p className="[font-family:'Inter',Helvetica] font-normal text-black text-xl tracking-[0] leading-7 w-[433px]">
                    {card.title}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10 relative">
        <div className="bg-white h-[41px] flex items-center space-x-4 px-6 py-2 rounded">
          <div className="w-2.5 h-[41px] bg-[#ffc900] rounded-[10px] rotate-[90.13deg]"></div>
          <div className="w-2.5 h-[22px] bg-[#020202] rounded-[10px] rotate-[90.13deg]"></div>
          <div className="w-2.5 h-[22px] bg-black rounded-[10px] rotate-[90.13deg]"></div>
        </div>
      </div>
    </section>
  );
};
