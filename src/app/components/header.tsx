"use client";
import React, { useState } from "react";
import { BsTruck } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TiArrowSync } from "react-icons/ti";

export default function Header() {
  const [headerOptionIndex, setHeaderOptionIndex] = useState(0);
  const headerOptions = [
    {
      name: "30-day satisfaction guarantee",
      icon: <HiOutlineCheckBadge size={20} />,
    },
    {
      name: "free delivery on orders over $40.00",
      icon: <BsTruck size={20} />,
    },
    {
      name: "50.000+ happy customers",
      icon: <FaRegHeart size={20} />,
    },
    {
      name: "100% money back guarantee",
      icon: <TiArrowSync size={20} />,
    },
  ];

 const showPrevOption = () => {
   setHeaderOptionIndex((prevIndex) =>
     prevIndex === 0 ? headerOptions.length - 1 : prevIndex - 1
   );
 };

 const showNextOption = () => {
   setHeaderOptionIndex((prevIndex) =>
     prevIndex === headerOptions.length - 1 ? 0 : prevIndex + 1
   );
 };

  return (
    <header className="w-full h-[50px] bg-[#252F3D] uppercase text-white text-[12px]">
      <div className="mx-auto relative flex items-center justify-center sm:justify-between px-[20px] py-[10px] xl:p-0 h-full max-w-[1245px]">
        {/* Mobile */}
        <div className="flex items-center sm:hidden">
          <div className="relative flex items-center overflow-hidden gap-[8px]">
            {headerOptions[headerOptionIndex].icon}
            {headerOptions[headerOptionIndex].name}
          </div>
        </div>
        <button
          className="absolute sm:hidden top-1/2 left-[20px] -translate-y-1/2"
          onClick={showPrevOption}
        >
          <IoIosArrowBack size={20} />
        </button>
        <button
          className="absolute sm:hidden top-1/2 right-[20px] -translate-y-1/2"
          onClick={showNextOption}
        >
          <IoIosArrowForward size={20} />
        </button>
        {/* PC */}
        <div className="items-center hidden gap-2 sm:flex">
          <HiOutlineCheckBadge size={20} /> 30-day satisfaction guarantee
        </div>
        <div className="items-center hidden gap-2 sm:flex">
          <BsTruck size={20} /> free delivery on orders over $40.00
        </div>
        <div className="items-center hidden gap-2 sm:flex">
          <FaRegHeart size={20} /> 50.000+ happy customers
        </div>
        <div className="items-center hidden gap-2 sm:flex">
          <TiArrowSync size={20} /> 100% money back guarantee
        </div>
      </div>
    </header>
  );
}
