import React from "react";


export const NewsAndUpdateSection = () => {
  const news = [
    {
      date: "20",
      monthYear: "October 2024",
      title: "District-wise rainfall figures for the week ending on 26.06.2024",
      active: true,
    },
    {
      date: "20",
      monthYear: "October 2024",
      title: "District-wise rainfall figures for the week ending on 26.06.2024",
      active: false,
    },
    {
      date: "20",
      monthYear: "October 2024",
      title: "District-wise rainfall figures for the week ending on 26.06.2024",
      active: false,
    },
  ];

  return (
    <section className="py-12 px-4 md:px-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">
        NEWS & UPDATE
        <div className="w-12 h-1 bg-yellow-500 mx-auto mt-2"></div>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left - Image with overlay text */}
        <div className="relative rounded-xl overflow-hidden shadow-md">
          <img src="/soya.png" alt="Soybeans" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full bg-white/60 backdrop-blur-md p-6 rounded-t-xl">
            <h3 className="font-semibold text-lg">Soybean Development Programme</h3>
            <p className="text-sm mt-1">
              SOPA is the only trade body in the country which works directly with the
              farmers for increasing Soybean Productivity. Our farm
            </p>
            <p className="text-xs mt-2 font-medium">November 2, 2021</p>
          </div>
        </div>

        {/* Right - News list */}
        <div className="space-y-4">
          {news.map((item, index) => (
            <div
              key={index}
              className={`flex border rounded-md ${
                item.active
                  ? "bg-yellow-50 border-yellow-400"
                  : "bg-white border-yellow-200"
              }`}
            >
              <div
                className={`flex flex-col items-center justify-center w-20 p-2 ${
                  item.active ? "bg-yellow-400 text-black" : "bg-yellow-100 text-gray-700"
                }`}
              >
                <span className="text-2xl font-bold">{item.date}</span>
                <span className="text-xs mt-1">{item.monthYear}</span>
              </div>
              <div
                className={`flex-1 p-4 ${
                  item.active ? "text-black" : "text-gray-400"
                }`}
              >
                <p>{item.title}</p>
              </div>
            </div>
          ))}

          {/* Dots below */}
          <div className="flex justify-center mt-4 space-x-2">
            <span className="w-3 h-3 rounded-full bg-black"></span>
            <span className="w-3 h-3 rounded-full bg-gray-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          </div>
        </div>
      </div>
    </section>
  );
};
