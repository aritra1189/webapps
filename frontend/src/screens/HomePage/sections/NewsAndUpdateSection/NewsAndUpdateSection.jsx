import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Separator } from "../../../../components/ui/separator";
import { ChevronDown, Menu, X } from "lucide-react";

export const NewsAndUpdatesSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileDropdownState, setMobileDropdownState] = useState({});

  const menuItems = [
    { label: "About SOPA", hasArrow: false },
    { label: "Market Update", hasArrow: true },
    { label: "Statistics", hasArrow: true },
    { label: "What's New", hasArrow: true },
    { label: "Members Directory", hasArrow: true },
    { label: "Arbitration", hasArrow: true },
    { label: "Member Area", hasArrow: true },
    { label: "Soybean Cuisine", hasArrow: true },
    { label: "Knowledge Center", hasArrow: true },
    { label: "Edit Homepage", hasArrow: false, link: "/admin-homepage" }, // Admin link
  ];

  return (
    <div className="relative w-full z-10 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,#5a4f1e,#756a38,#5a4f1e)] h-[70px] md:h-[100px]" />
      <div className="relative z-10 flex items-center h-[70px] md:h-[100px] px-4 md:px-[80px] justify-between md:justify-start border border-white">
        <img
          className="w-[120px] h-[45px] md:w-[160px] md:h-[60px] object-contain"
          src="/image-1-1.png"
          alt="SOPA Logo"
        />
        <Separator
          orientation="vertical"
          className="hidden md:block h-[70px] md:h-[100px] mx-[20px] md:mx-[30px] bg-white opacity-30"
        />

       <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex gap-4 lg:gap-[40px] items-center">
            {menuItems.map((item, index) => (
              <NavigationMenuItem key={index} className="relative flex items-center gap-1">
                <NavigationMenuLink
                  className={`text-white text-xs lg:text-sm ${
                    index === 0 ? "font-bold" : "font-medium"
                  } tracking-wide hover:underline transition-all duration-200`}
                  href={item.link || "#"}
                >
                  {item.label}
                </NavigationMenuLink>
                {item.hasArrow && (
                  <ChevronDown className="text-white w-3 h-3 lg:w-4 lg:h-4" strokeWidth={1.5} />
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
         <button
          className="md:hidden p-2 rounded-md focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="text-white w-7 h-7" />
          ) : (
            <Menu className="text-white w-7 h-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 border-t border-gray-200 shadow-md space-y-2">
          {menuItems.map((item, index) => {
            const isOpen = mobileDropdownState[index];
            return (
              <div key={index}>
                {/* Main Item */}
                <button
                  className="w-full flex justify-between items-center text-left text-gray-800 text-base font-medium hover:text-[#f8c400] transition-colors duration-200"
                  onClick={() => {
                    if (item.hasArrow) {
                      setMobileDropdownState((prev) => ({
                        ...prev,
                        [index]: !prev[index],
                      }));
                    } else if (item.link) {
                      window.location.href = item.link; // Navigate
                    } else {
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  {item.label}
                  {item.hasArrow && (
                    <ChevronDown
                      className={`ml-2 text-gray-600 w-5 h-5 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      strokeWidth={1.5}
                    />
                  )}
                </button>

                {item.hasArrow && isOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2 text-sm text-gray-600">
                    <a href="#" className="hover:text-[#f8c400]">Sub Link 1</a>
                    <a href="#" className="hover:text-[#f8c400]">Sub Link 2</a>
                    <a href="#" className="hover:text-[#f8c400]">Sub Link 3</a>
                  </div>
                )}

                {/* Divider */}
                {index < menuItems.length - 1 && (
                  <Separator className="my-2 bg-gray-200" />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
