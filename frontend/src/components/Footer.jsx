import React from "react";
import { ChevronUp } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "About SOPA": [
      "About us",
      "Executive Committee",
      "Organisation Structure",
      "SOPA Circular"
    ],
    "Knowledge center": [
      "Major Soybean Varieties In India",
      "Laboratory",
      "SOPA Publication",
      "Library"
    ],
    "Member Directory": [
      "Full Members",
      "Members Login",
      "Associate Members",
      "Soy Product Manufacturers"
    ],
    "Soybean Cuisine": [
      "Soy Nonveg Cuisine",
      "Soy Veg Cuisine",
      "Kids Soy Cuisine",
      "Soy Cuisine Links"
    ]
  };

  const bottomLinks = {
    left: ["Market Updates", "Daily Rates", "Soybean", "Soybean Oil", "Soybean Meal"],
    right: ["Disclaimer Privacy Policy", "Terms & Conditions", "Refund Policy", "Sitemap"]
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1f1a17] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-bold mb-4 text-[#f8c400]">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#f8c400] transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Left Links */}
            <div className="flex flex-wrap justify-center md:justify-start space-x-6">
              {bottomLinks.left.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-300 hover:text-[#f8c400] transition-colors duration-200 text-sm"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Center - Scroll to Top Button */}
            <div className="flex items-center space-x-4">
              <button
                onClick={scrollToTop}
                className="bg-[#f8c400] text-black p-2 rounded-full hover:bg-[#e6b800] transition-colors duration-200"
              >
                <ChevronUp className="w-5 h-5" />
              </button>
            </div>

            {/* Right Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {bottomLinks.right.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-300 hover:text-[#f8c400] transition-colors duration-200 text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#1f1a17] border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Copyright © 2016-2024 All right Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 