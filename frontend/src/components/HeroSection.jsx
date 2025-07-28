// import React, { useState, useEffect } from "react";
// import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isUpdateExpanded, setIsUpdateExpanded] = useState(false);

//   const slides = [
//     {
//       image: "/main.png",
//       title: "Rich source of Protein",
//       subtitle: "Discover the power of soybeans"
//     },
//     {
//       image: "/image-1.png",
//       title: "Soybean Development",
//       subtitle: "Supporting farmers and processors"
//     },
//     {
//       image: "/image-2.png",
//       title: "Quality Products",
//       subtitle: "From farm to table"
//     }
//   ];

//   const marketUpdates = [
//     "16/10/2024 | Soy Refined Oil (Indore Market) Rs. 1170 - 1171 per 10 Kg",
//     "16/10/2024 - Soy Refined Oil (Indore Market) Rs. 1250 per 10 Kg",
//     "15/10/2024 | Soybean Meal (Indore Market) Rs. 45000 - 46000 per MT"
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [slides.length]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <section className="relative h-screen">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img
//           src={slides[currentSlide].image}
//           alt="Hero Background"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//       </div>

//       {/* Content Overlay */}
//       <div className="relative z-10 h-full flex flex-col justify-center px-8 lg:px-16">
//         <div className="max-w-4xl">
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
//             {slides[currentSlide].title}
//           </h1>
//           <p className="text-xl md:text-2xl text-white opacity-90">
//             {slides[currentSlide].subtitle}
//           </p>
//         </div>
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200"
//       >
//         <ChevronLeft className="w-6 h-6" />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200"
//       >
//         <ChevronRight className="w-6 h-6" />
//       </button>

//       {/* Live Update Bar */}
//       <div className="absolute bottom-0 left-0 right-0 bg-[#1f1a17]">
//         <div className="flex items-center justify-between px-8 py-4">
//           <div className="flex items-center space-x-4">
//             <button
//               onClick={() => setIsUpdateExpanded(!isUpdateExpanded)}
//               className="bg-[#f8c400] text-black px-6 py-2 rounded-md font-semibold flex items-center space-x-2 hover:bg-[#e6b800] transition-colors duration-200"
//             >
//               <span>Latest Update</span>
//               <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isUpdateExpanded ? 'rotate-180' : ''}`} />
//             </button>
//           </div>
//           <div className="flex-1 ml-8">
//             <div className="text-[#f8c400] font-semibold text-sm md:text-base overflow-hidden">
//               <div className="animate-scroll whitespace-nowrap">
//                 {marketUpdates.join(" | ")}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Expanded Updates */}
//         {isUpdateExpanded && (
//           <div className="bg-[#1f1a17] border-t border-gray-700 px-8 py-4">
//             <div className="space-y-2">
//               {marketUpdates.map((update, index) => (
//                 <div key={index} className="text-[#f8c400] text-sm">
//                   {update}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-200 ${
//               index === currentSlide ? 'bg-[#f8c400]' : 'bg-white bg-opacity-50'
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroSection; 